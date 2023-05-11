export function createElement(tag, props, parent) {
  const element = document.createElement(tag);
  parent?.append(element);
  return Object.assign(element, props);
}
