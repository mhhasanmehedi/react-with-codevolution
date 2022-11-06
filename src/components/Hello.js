import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h1>Hello Mehedi</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    { id: "hello", className: "hello", style: { background: "red" } },
    React.createElement("h1", null, "Hello Mehedi")
  );
};

export default Hello;
