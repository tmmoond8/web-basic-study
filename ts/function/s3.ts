type CreateElement = {
  (tag: "a"): HTMLAnchorElement;
  (tag: "canvas"): HTMLCanvasElement;
  (tag: "table"): HTMLTableElement;
  (tag: string): HTMLElement;
};

function MyComponent(props: {}): string {
  return "hello Wolrd";
}
MyComponent.display = "MyComponent";

export default MyComponent;

const MyCo = (props) => {
  return "hello world";
};

MyCo.display = "MyCo";
