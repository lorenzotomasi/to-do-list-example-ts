import React, { useCallback, useMemo } from "react";
import { baseClasses } from "../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { translation } from "../../../constants/translations";

interface Props {
  onlyIcon?: boolean 
  isCompleted: boolean;
  onAction?: () => void;
}

const StatusButton = (props: Props) => {
  const buttonClassName: string = useMemo(() => {
    const statusClass = props.isCompleted ? `${baseClasses.statusButton.completed}` : `${baseClasses.statusButton.toDo}`
    const onlyIcon = props.onlyIcon ? `${baseClasses.statusButton.onlyIcon}` : ''
    return `${baseClasses.statusButton.base} ${statusClass} ${onlyIcon}`
  }, [props.isCompleted, props.onlyIcon])

  const renderCompletedContent = useMemo(() => {
    if(props.onlyIcon) {
      return <FontAwesomeIcon icon={['far','circle-check']} />
    }
    return <React.Fragment>{translation.t.completed}</React.Fragment>
  }, [props.onlyIcon])

  const renderToDoContent = useMemo(() => {
    if(props.onlyIcon) {
      return <FontAwesomeIcon icon={['far','circle-xmark']} />
    }
    return <React.Fragment>{translation.t.inProgress}</React.Fragment>
  }, [props.onlyIcon])
  function renderButtonContent() {
    if (props.isCompleted) {
      return renderCompletedContent
    }
    return renderToDoContent
  }

  const handleOnClick = useCallback((e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    props.onAction?.()
  },[props.onAction])

  return <button onClick={handleOnClick} className={buttonClassName}>
    {renderButtonContent()}
  </button>;
};

export default StatusButton;
