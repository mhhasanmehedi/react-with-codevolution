import React from "react";

const Great = ({ name, children }) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      {children}
    </div>
  );
};

export default Great;
