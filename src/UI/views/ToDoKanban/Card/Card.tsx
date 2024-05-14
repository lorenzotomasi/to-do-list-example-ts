import { useCallback } from "react";
import { baseClasses } from "../../../../constants";
import { ToDo } from "../../../../models";
import StatusButton from "../../../widgets/StatusButton/StatusButton";

interface Props {
  toDoTask: ToDo;
  onStatusToggle: (toDoId: number) => void
}

const Card = (props: Props) => {
  const handleOnAction = useCallback(() => {
    props.onStatusToggle(props.toDoTask.id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.onStatusToggle, props.toDoTask.id])
  function renderDisplayName() {
    return <p className={baseClasses.card.displayName}> {props.toDoTask.title} </p>;
  }

  function renderId() {
    return <p className={baseClasses.card.id}>{props.toDoTask.id}</p>;
  }

  function renderButton() {
    return <div className={baseClasses.card.button}>
      <StatusButton onAction={handleOnAction} onlyIcon={true} isCompleted={props.toDoTask.completed} />
    </div> 
  }

  return (
    <div className={baseClasses.card.base}>
      {renderId()}
      {renderDisplayName()}
      {renderButton()}
    </div>
  );
};

export default Card;
