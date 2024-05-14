import { useLocation } from "react-router-dom";
import { baseClasses, routesPath } from "../../../constants";
import Text from "../Text/Text";
import UserInfo from "./UserInfo/UserInfo";
import { translation } from "../../../constants/translations";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  checkIfDayTheme,
  getComputedRootStyle,
  toggleTheme,
} from "../../../functions/rootStyleHelpers";

const topBarClass = baseClasses.topBar;

const TopBar = () => {
  const routeLocation = useLocation();
  const isInRouteLocation = useCallback(
    (valueToCheck: string[]) => {
      return valueToCheck.some((v) => routeLocation.pathname.includes(v));
    },
    [routeLocation.pathname]
  );
  function renderTitle() {
    return (
      <div className={topBarClass.topBarLeadingContent}>
        <Text text={translation.t.todoTitle.toUpperCase()} />
      </div>
    );
  }

  function renderCenterContent() {
    const isKanbanPage = isInRouteLocation([routesPath.kanban]);
    return (
      <div className={topBarClass.topBarCenterContent}>
        <Text
          className={isKanbanPage ? topBarClass.isLinkNotSelected : ""}
          linkable={{ url: routesPath.table }}
          text={translation.t.table}
        />
        <Text
          className={!isKanbanPage ? topBarClass.isLinkNotSelected : ""}
          linkable={{ url: routesPath.kanban }}
          text={translation.t.kanban}
        />
      </div>
    );
  }

  function renderSwitchTheme() {
    return (
      <FontAwesomeIcon
        icon={checkIfDayTheme() ? "sun" : "moon"}
        onClick={(e) => {
          e.preventDefault();
          toggleTheme()
        }}
      />
    );
  }

  function renderTrailingContent() {
    return (
      <div className={topBarClass.topBarTrailingContent}>
        {renderSwitchTheme()}
        <UserInfo />
      </div>
    );
  }

  return (
    <div className={topBarClass.base}>
      {renderTitle()}
      {renderCenterContent()}
      {renderTrailingContent()}
    </div>
  );
};

export default TopBar;
