document.addEventListener("DOMContentLoaded", function () {
  function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queryArray = queryString.split("&");

    queryArray.forEach((param) => {
      const [key, value] = param.split("=");
      params[key] = value;
    });

    return params;
  }

  const queryParams = getQueryParams();
  const classMap = { 1: ".year1", 2: ".year2", 3: ".year3", 4: ".year4" };
  const targetClass = classMap[queryParams.year];
  if (!targetClass) return;
  const yearContent = document.querySelectorAll(targetClass);
  yearContent.forEach((element) => {
    element.classList.add("showYearContent");
  });

  const selectorClassMap = {
    1: ".year1Selector",
    2: ".year2Selector",
    3: ".year3Selector",
    4: ".year4Selector",
  };
  const targetSelectorClass = selectorClassMap[queryParams.year];
  const yearSelector = document.querySelectorAll(targetSelectorClass);
  yearSelector.forEach((element) => {
    element.classList.add("selected");
  });
});
