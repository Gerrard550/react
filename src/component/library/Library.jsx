import React from "react";
import Sciences from "./Sciences";
import Art from "./Art";
import History from "./History";

const Library = () => {
  return (
    <div className="dept">
      <Sciences />
      <Art />
      <History />
    </div>
  );
};

export default Library;
