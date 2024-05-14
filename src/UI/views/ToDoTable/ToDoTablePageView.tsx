import { baseClasses } from "../../../constants";
import { usePaginatedToDoList } from "../../../hooks/usePaginatedToDoList";
import _Filter from "./_Filter";
import _Pagination from "./_Pagination";
import _ToDoTable from "./_ToDoTable";

const ToDoTablePageView = () => {
  const {
    toDoList,
    goNextPage,
    changeSorting,
    sortingState,
    changeSearchFilter,
    searchFilter,
    canGoNextPage,
    canGoPrevPage,
    goPrevPage,
    limit,
    offset,
    totalNumberOfFilterElements
  } = usePaginatedToDoList({ limit: 10 });

  return (
    <div className={baseClasses.table.container}>
      <_Filter filterValue={searchFilter} onFilterChange={changeSearchFilter} />
      <_ToDoTable
        sortingState={sortingState}
        toDos={toDoList}
        setSorting={changeSorting}
      />
      <_Pagination
        limit={limit}
        offset={offset}
        total={totalNumberOfFilterElements}
        goNext={goNextPage}
        canGoNext={canGoNextPage}
        goPrev={goPrevPage}
        canGoPrev={canGoPrevPage}
      />
    </div>
  );
};

export default ToDoTablePageView;
