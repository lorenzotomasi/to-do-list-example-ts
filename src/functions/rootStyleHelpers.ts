import { cssVariable } from "../constants";

function getComputedRootStyle() {
  const rootStyle = document.querySelector(":root");
  if (rootStyle) {
    const computedStyle = getComputedStyle(rootStyle);
    return computedStyle;
  }
  return;
}

function checkIfDayTheme() {
  const computedStyle = getComputedRootStyle();

  if (!computedStyle) {
    throw new Error(`No rootStyle found`);
  }
  const currentTheme = computedStyle.getPropertyValue(
    cssVariable.backgroundColorTheme
  );
  const dayTheme = computedStyle.getPropertyValue(
    cssVariable.dayBackgroundColor
  );
  return currentTheme === dayTheme;
}

function toggleTheme() {
  const isDayTheme = checkIfDayTheme();
  const rootStyle = document.querySelector(":root");
  if (!rootStyle) {
    throw new Error(`No rootStyle found`);
  }
  let newBackgroundColor: string = cssVariable.nightBackgroundColor;
  let newMidBackgroundColor: string = cssVariable.midNightBackgroundColor;
  let newLightBackgroundColor: string = cssVariable.lightNightBackgroundColor;
  let textColor: string = cssVariable.nightTextColor;
  let varianTextColor: string = cssVariable.nightTextColorLight;
  let filterBackgroundColor: string = cssVariable.filterBackgroundColorNight
  if (!isDayTheme) {
    newBackgroundColor = cssVariable.dayBackgroundColor;
    newMidBackgroundColor = cssVariable.midDayBackgroundColor;
    newLightBackgroundColor = cssVariable.lightDayBackgroundColor;
    textColor = cssVariable.dayTextColor;
    varianTextColor = cssVariable.dayTextColorDark;
    filterBackgroundColor = cssVariable.filterBackgroundColorDay
  }
  // @ts-expect-error Property exist
  rootStyle.style.setProperty(
    cssVariable.backgroundColorTheme,
    `var(${newBackgroundColor})`
  );
  // @ts-expect-error Property exist
  rootStyle.style.setProperty(
    cssVariable.midBackgroundColorTheme,
    `var(${newMidBackgroundColor})`
  );
  // @ts-expect-error Property exist
  rootStyle.style.setProperty(
    cssVariable.lightBackgroundColorTheme,
    `var(${newLightBackgroundColor})`
  );
  // @ts-expect-error Property exist
  rootStyle.style.setProperty(cssVariable.textColor, `var(${textColor})`);
  // @ts-expect-error Property exist
  rootStyle.style.setProperty(cssVariable.lightTextColor, `var(${varianTextColor})`);
  // @ts-expect-error Property exist
  rootStyle.style.setProperty(cssVariable.filterBackgroundColor, `var(${filterBackgroundColor})`);
}

export { getComputedRootStyle, checkIfDayTheme, toggleTheme };
