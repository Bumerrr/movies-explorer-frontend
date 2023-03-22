import React from "react";

function Container({ children, modifier }) {
  return <div className={`container app__container ${modifier || ""}`}>{children}</div>;
}

export default Container;