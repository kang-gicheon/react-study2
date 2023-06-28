import React from "react";
import ColorCunsumer from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorCunsumer>
      {(value) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: value.state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: value.state.subcolor,
            }}
          />
        </>
      )}
    </ColorCunsumer>
  );
};

export default ColorBox;
