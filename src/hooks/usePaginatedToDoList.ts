import { useCallback, useMemo, useState } from "react";
import { getToDoList } from "../API/requests/getToDoList";
import { useFetchHook } from "./useFetchHook";
import { ToDo, ToDoList } from "../models";
import { useThrottleState } from "./useThrottleState";

interface Props {
  limit: number;
}
export type SortingKey = "id" | "completed" | "title";
export type SortingDirection = "asc" | "desc";

export interface Sorting {
  key: SortingKey;
  direction: SortingDirection;
}

interface ReturnType {
  toDoList: ToDoList;
  isLoading: boolean;
  error: unknown;
  goNextPage: () => void;
  goPrevPage: () => void;
  changeSearchFilter: (value: string) => void;
  canGoNextPage: boolean;
  canGoPrevPage: boolean;
  sortingState: Sorting;
  changeSorting: (sortingKey: SortingKey, direction: SortingDirection) => void;
  searchFilter: string
  totalNumberOfFilterElements: number
  offset: number
  limit: number
}

function usePaginatedToDoList(props: Props): ReturnType {
  const { data, error, isLoading } = useFetchHook({
    params: [],
    promise: getToDoList,
  });
  const [offset, setOffset] = useState<number>(0);
  const [searchFilter, setSearchFilter, state] = useThrottleState<string>({ initialState: '', throttleTime: 1000 });
  const [sortingState, setSorting] = useState<Sorting>({
    direction: "asc",
    key: "id",
  });

  const canGoPrevPage = useMemo(() => {
    if (offset - props.limit >= 0) {
      return true;
    }
    return false;
  }, [props.limit, data, offset]);

  const canGoNextPage = useMemo(() => {
    if (data && data.length > offset + props.limit) {
      return true;
    }
    return false;
  }, [props.limit, data, offset]);

  const goNextPage = useCallback(() => {
    if (canGoNextPage) {
      setOffset((prev) => prev + props.limit);
    }
  }, [props.limit, data, offset, canGoNextPage]);

  const goPrevPage = useCallback(() => {
    if (canGoPrevPage) {
      setOffset((prev) => prev - props.limit);
    }
  }, [props.limit, data, offset, canGoPrevPage]);

  function handleChangeSearchFiler(value: string) {
    setSearchFilter(value);
  }

  function handleChangeSorting(
    sortKey: SortingKey,
    sortDirection: SortingDirection
  ) {
    setSorting({ direction: sortDirection, key: sortKey });
  }

  const paginateResultData = useCallback(
    (data: ToDoList) => {
      return data.slice(offset, offset + props.limit);
    },
    [offset, props.limit]
  );

  const filterFunction = useCallback((d: ToDo, f: string) => {
    return (
      String(d.id).toLowerCase().includes(f.toLowerCase()) ||
      String(d.title).toLowerCase().includes(f.toLowerCase())
    );
  }, []);

  const sortFunction = useCallback(
    (a: ToDo, b: ToDo) => {
      const sortDirection = <A1, B1>(a1: A1, b1: B1) => {
        if (sortingState.direction === "desc") {
          return [b1, a1];
        }
        return [a1, b1];
      };

      switch (sortingState.key) {
        case "id": {
          const [a1, b1] = sortDirection(a.id, b.id);
          return a1 < b1 ? -1 : 1;
        }
        case "completed": {
          const [a1, b1] = sortDirection(a.completed, b.completed);
          return a1 < b1 ? -1 : 1;
        }
        case "title": {
          const [a1, b1] = sortDirection(a.title, b.title);
          return a1 < b1 ? -1 : 1;
        }
        default: {
          return 0;
        }
      }
    },
    [sortingState.direction, sortingState.key]
  );

  const getDataFiltered: () => ToDoList = useCallback(() => {
    return (data ?? [])
      .filter((d) => filterFunction(d, searchFilter ?? ''))
      .sort(sortFunction);
  }, [searchFilter, data, filterFunction,sortingState]);


  return {
    toDoList: paginateResultData(getDataFiltered()),
    isLoading,
    error,
    goNextPage,
    goPrevPage,
    canGoNextPage,
    canGoPrevPage,
    changeSorting: handleChangeSorting,
    changeSearchFilter: handleChangeSearchFiler,
    sortingState,
    searchFilter: state ?? '',
    limit: props.limit,
    offset,
    totalNumberOfFilterElements: getDataFiltered().length
  };
}

export { usePaginatedToDoList };
