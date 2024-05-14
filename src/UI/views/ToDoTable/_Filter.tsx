import { baseClasses, translation } from "../../../constants";

interface Props {
  onFilterChange: (value: string) => void;
  filterValue: string;
}

const _Filter = (props: Props) => {
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    props.onFilterChange(e.target.value ?? "");
  }

  return (
    <input
      className={baseClasses.table.filter}
      onChange={handleOnChange}
      value={props.filterValue}
      placeholder={translation.t.filterTitle}
    />
  );
};

export default _Filter;
