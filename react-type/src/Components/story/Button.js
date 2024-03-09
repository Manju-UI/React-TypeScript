import React from "react";

function Button({style, onMouseUp, children }) {
  return <button style={style} onMouseUp={onMouseUp}>{children}</button>;
}

export default Button;
