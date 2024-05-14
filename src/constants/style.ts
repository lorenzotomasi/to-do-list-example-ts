const baseClasses = {
  mainContent: "main-content",
  content: "main-content__display",
  button: {
    base: "button",
  },
  topBar: {
    base: "top-bar",
    topBarLeadingContent: "top-bar__leading-content",
    topBarCenterContent: "top-bar__center-content",
    topBarTrailingContent: "top-bar__trailing-content",
    isLinkNotSelected: "is-not-selected",
  },
  userInfo: {
    base: "user-info",
    img: "user-info__image",
    dropdown: "user-info__dropdown",
    dropdownItems: "user-info__dropdown__item",
  },
  statusButton: {
    base: "status-button",
    completed: "status-button--completed",
    toDo: "status-button--to-do",
    onlyIcon: "status-button--only-icon",
  },
  card: {
    base: "to-do-card",
    id: "to-do-card__id",
    displayName: "to-do-card__display-name",
    button: "to-do-card__button",
    listContainer: "to-do-card-container",
    listWrapper: "to-do-card-wrapper",
  },
  table: {
    base: "to-do-table",
    container: "to-do-table-container",
    sortingButton: "to-do-table--sorting-button",
    filter: "to-do-table-filter",
    pagination: "to-do-table-pagination",
    paginationTrailing: "to-do-table-pagination__trailing",
    paginationLeading: "to-do-table-pagination__leading",
    minWithLarge: "min-width--large",
    minWithSmall: "min-width--small",
  },
} as const;

const cssVariable = {
  dayBackgroundColor: "--light-background-color",
  midDayBackgroundColor: "--light-background-color--mid",
  lightDayBackgroundColor: "--light-background-color--dark",
  nightBackgroundColor: "--night-background-color",
  midNightBackgroundColor: "--night-background-color-mid",
  lightNightBackgroundColor: "--night-background-color-light",
  backgroundColorTheme: "--background-color",
  midBackgroundColorTheme: "--background-color-mid",
  lightBackgroundColorTheme: "--background-color-light",
  textColor: "--text-color",
  lightTextColor: "--light-text-color",
  nightTextColorLight: '--night-light-text-color',
  nightTextColor: '--night-text-color',
  dayTextColor: '--light-text-color',
  dayTextColorDark: '--light-dark-text-color',
  filterBackgroundColorNight: '--filter-table-background-color-night',
  filterBackgroundColorDay: '--filter-table-background-color-day',
  filterBackgroundColor: '--filter-table-background-color',
} as const;

export { baseClasses, cssVariable };
