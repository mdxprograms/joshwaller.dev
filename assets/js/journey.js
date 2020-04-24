class Journey {
  constructor(parent = document.body, location = window.location) {
    this.location = location;
    this.parent = parent;
    this.places = [];
    this.start();
  }

  start() {
    this.places.push(this.location);
    this.places = this.getPlaces().concat(this.places);
    this.savePlaces();
  }

  html() {
    const Box = Object.assign(document.createElement("div"), {
      id: "journey",
      className: "card bg-dark",
    });

    const ToggleBtn = Object.assign(document.createElement("button"), {
      className: "btn btn-dark text-light",
      innerHTML: "<i class='far fa-clone'></i>",
      onclick() {
        const isOpen = Box.classList.contains("open");
        if (isOpen) {
          Box.classList.remove("open");
          Box.classList.add("closed");
        } else {
          Box.classList.remove("closed");
          Box.classList.add("open");
        }
      },
    });

    const Heading = document.createElement("h5");
    const headingText = document.createTextNode("Your recent views");
    Heading.className = "h5 text-light";
    Heading.appendChild(headingText);

    const List = Object.assign(document.createElement("div"), {
      className: "list-group",
    });

    this.places.forEach((place) => {
      const Place = Object.assign(document.createElement("a"), {
        className: "list-group-item bg-light text-dark",
        href: place.href,
        textContent: place.pathname,
      });

      List.appendChild(Place);
    });

    Box.appendChild(ToggleBtn);
    Box.appendChild(Heading);
    Box.appendChild(List);

    return Box;
  }

  initPlaces() {
    sessionStorage.setItem("places", "");
  }

  savePlaces() {
    sessionStorage.setItem("places", JSON.stringify(this.places));
    this.render();
  }

  getPlaces() {
    if (
      sessionStorage.getItem("places") &&
      sessionStorage.getItem("places") !== ""
    ) {
      return JSON.parse(sessionStorage.getItem("places")).slice(0, 5);
    } else {
      return [];
    }
  }

  render() {
    if (this.parent.querySelector("#journey")) {
      this.parent.replaceChild(
        this.parent.querySelector("#journey"),
        this.html()
      );
    } else {
      this.parent.prepend(this.html());
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.Journey = Journey;
});
