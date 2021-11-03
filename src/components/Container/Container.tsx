import "./Container.css";

interface ContainerChildren {
  children:
    | JSX.Element
    | JSX.Element[]
    | JSX.IntrinsicElements
    | JSX.IntrinsicElements[];
  xAlign?: boolean;
  yAlign?: boolean;
}

function Container({ children, xAlign, yAlign }: ContainerChildren) {
  const xAlignClass = xAlign ? " x-align" : "";
  const yAlignClass = yAlign ? " y-align" : "";

  return (
    <div className={"container" + xAlignClass + yAlignClass}>{children}</div>
  );
}

export default Container;
