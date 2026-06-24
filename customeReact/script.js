function customRender(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  Object.entries(reactElement.props).forEach(([key, value]) => {
    domElement.setAttribute(key, value);
  });

  mainContainer.appendChild(domElement);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://arun.sajilodigital.com.np",
    target: "_blank",
  },
  children: "Click me to open portfolio",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
