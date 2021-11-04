import { ContainerProps } from "../../utils/helpers";
import "./Container.css";

function Container({ children, xAlign, yAlign }: ContainerProps) {
  const xAlignClass = xAlign ? " x-align" : "";
  const yAlignClass = yAlign ? " y-align" : "";

  return (
    <div className={"container" + xAlignClass + yAlignClass}>{children}</div>
  );
}

export default Container;
