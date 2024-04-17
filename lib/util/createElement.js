/**
 * A small utility to create and HTMLElement
 *
 * @param {String} tag - A string epresenting a valid html element
 * @param {Object} props - An object representing the attributes of the element; to register an event handler use on<Event>
 * @param {HTMLElement | HTMLElement[]} childElement - An HtmlElement or an array of HTMLElement to be appended to the new created element
 * @return HTMLElement
 */
export function createElement(tag, props, childElement) {
  const el = document.createElement(tag);

  if (props && Object.keys(props).length) {
    Object.entries(props).forEach(([key, value]) => {
      if (key.includes("on")) {
        el.addEventListener(key.toLowerCase().slice(2), value);
      } else {
        el.setAttribute(key, value);
      }
    });
  }

  if (childElement) {
    if (Array.isArray(childElement)) {
      childElement.forEach((child) => {
        el.appendChild(child);
      });
    } else {
      el.appendChild(childElement);
    }
  }

  return el;
}
