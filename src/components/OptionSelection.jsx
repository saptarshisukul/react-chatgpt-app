import React from "react";

const OptionSelection = ({ items, options }) => {
  return (
    <div>
      <h1 className="heading">Mentored-Your AI Companion</h1>

      <div className="grid-main">
        {items.map((item) => {
          return (
            <div className="grid-child" onClick={() => options(item.option)}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OptionSelection;
