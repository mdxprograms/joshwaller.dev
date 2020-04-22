document.addEventListener("DOMContentLoaded", () => {
  const navigation = document.querySelector(".js-navigation");

  navigation.selectedIndex = null;

  navigation.addEventListener("change", (e) => {
    if (e.target.value === "back") {
      history.go(-1);
    } else {
      location.href = e.target.value;
    }
  });
});
