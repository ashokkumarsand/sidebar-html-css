const initialize = function (window) {
  const classes = {
    collapsed: "collapsed",
    selected: "selected",
  };
  const sidebar = document.getElementById("sidebar");
  const toggleButton = document.querySelector(
    "#sidebar > ul > li.toggle > button"
  );
  toggleButton.onclick = function () {
    if (sidebar.classList.contains(classes.collapsed)) {
      sidebar.classList.remove(classes.collapsed);
    } else {
      sidebar.classList.add(classes.collapsed);
    }
  };

  sidebar.addEventListener("click", (event) => {
    const target = event.target;
    const listItem = target.parentElement.parentElement;
    const allListItems = document.querySelectorAll(".sidebar li");
    allListItems.forEach((elem) => {
      elem.classList.remove(classes.selected);
    });
    if (listItem.classList.contains(classes.selected)) {
      listItem.classList.remove(classes.selected);
    } else {
      listItem.classList.add(classes.selected);
    }
  });
};

document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    initialize();
  }
};
