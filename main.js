import { Plugin, createElement, Disposable } from "obsidian";

export default class ObsidianPinPlugin extends Plugin {
  constructor() {
    super();

    this.registerFilter("obsidian-pin", this.pinFilter);
  }

  pinFilter(view, args) {
    // Create a new div element to hold the pin
    const pin = createElement("div");
    pin.className = "pin";

    // Add the pin's title
    const title = createElement("h4");
    title.textContent = view.title;
    pin.appendChild(title);

    // Add the pin's image
    const image = createElement("img");
    image.src = view.image;
    pin.appendChild(image);

    // Add the pin's body text
    const body = createElement("p");
    body.textContent = view.body;
    pin.appendChild(body);

    // Add the pin to the view
    view.appendChild(pin);

    // Return a disposable that will remove the pin from the view when it is destroyed
    return {
      dispose() {
        view.removeChild(pin);
      }
    };
  }
}
