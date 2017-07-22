function createElem(tag, props, ...children) {
  const elem = document.createElement(tag);
  Object.keys(props).forEach(key => element[key] = props[key]);

  children.forEach(child => {
    if(typeof child === 'string') {
      child = document.createTextNode(child);
    }
    elem.appendChild(child);
  });
  return elem;
}

export { createElem };