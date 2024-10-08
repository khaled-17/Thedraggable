import React, { useState } from "react";
import DraggableComponent from "./DraggableComponent";

const DraggableWithButton = () => {
  const [moveTo, setMoveTo] = useState(null);

  const moveToPosition = () => {
    setMoveTo({ x: 200, y: 200 });
  };

  return (
    <div>
      <button onClick={moveToPosition}>Move to (200, 200)</button>
      <DraggableComponent moveTo={moveTo} />
    </div>
  );
};

export default DraggableWithButton;
