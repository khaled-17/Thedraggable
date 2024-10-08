import React, { useState, useRef, useEffect } from "react";

const DraggableComponent = ({ initialX = 0, initialY = 0, moveTo }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const elementRef = useRef(null);

  useEffect(() => {
    if (moveTo) {
      setPosition(moveTo);
    }
  }, [moveTo]);

  const onDragStart = (e) => {
    const element = elementRef.current;
    const offsetX = e.clientX - element.getBoundingClientRect().left;
    const offsetY = e.clientY - element.getBoundingClientRect().top;

    const onMouseMove = (moveEvent) => {
      const newX = moveEvent.clientX - offsetX;
      const newY = moveEvent.clientY - offsetY;
      setPosition({ x: newX, y: newY });
      console.log("New position:", newX, newY);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", onMouseMove);
      },
      { once: true }
    );
  };

  return (
    <div
      ref={elementRef}
      onMouseDown={onDragStart}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "lightblue",
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: "grab",
      }}
    >
      Drag me!
    </div>
  );
};

export default DraggableComponent;
