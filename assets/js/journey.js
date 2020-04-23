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
    const Box = document.createElement("div");
    Box.id = "journey";

    const Heading = document.createElement("h5");
    const headingText = document.createTextNode("Your recent views");
    Heading.appendChild(headingText);

    Box.appendChild(Heading);

    this.places.forEach((place) => {
      const Place = document.createElement("a");

      Place.href = place.href;
      Place.textContent = place.pathname;

      Box.appendChild(Place);
    });

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

  toggleInit(element) {
    console.log(element);
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

    this.toggleInit(this.parent.querySelector("#journey"));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.Journey = Journey;
});
