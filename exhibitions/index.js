console.log("executed");
document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded");
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

  // クエリパラメータをチェックしてタグを表示する
  const queryParams = getQueryParams();
  const classMap = { 1: ".year1", 2: ".year2", 3: ".year3", 4: ".year4" };
  const targetClass = classMap[queryParams.year];
  console.log(targetClass);
  if (!targetClass) return;
  const yearContent = document.querySelectorAll(targetClass);
  console.log(yearContent);
  yearContent.forEach((element) => {
    element.classList.add("showYearContent");
  });
});
