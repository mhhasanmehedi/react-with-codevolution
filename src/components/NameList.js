import React from "react";

const NameList = () => {
  const names = ["Mehedi", "Hasan", "Rahat", "Mahmud", "Forhad"];
  const nameList = names.map((name, index) => (
    <h2 key={index}>{`${index} ${name}`}</h2>
  ));
  return <div>{nameList}</div>;
};

export default NameList;
