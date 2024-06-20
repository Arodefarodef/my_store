import { FC } from "react";

import { newButtonVar } from "./variance";
import { iButton } from "../utils/interface";
import { merge } from "./merge";

const Button: FC<iButton> = ({
  size,
  something,
  children,
  className,
  icon,
  ...props
}) => {
  return (
    <button
      {...props}
      className={merge(newButtonVar({ something, size }), className)}
    >
      <div className={`${icon ? "mr-2" : ""}`}>{icon}</div>
      <div>{children}</div>
    </button>
  );
};

export default Button;
