// Importing necessary libraries and components
import React from "react"; // React library for building UI
import CanvasDraw from "react-canvas-draw"; // Component for drawing canvas
import { GithubPicker } from "react-color"; // Component for color picker
import "./styles.css"; // Importing CSS styles
import { useClickAway } from "./useClickAway"; // Custom hook for handling clicks outside an element

import classNames from "classnames"; // Utility for conditional className joining

// Default properties for the CanvasDraw component
const defaultProps = {
  loadTimeOffset: 5,
  lazyRadius: 0,
  brushRadius: 2,
  catenaryColor: "#0a0302",
  gridColor: "rgba(150,150,150,0.17)",
  hideGrid: true,
  canvasWidth: 400,
  canvasHeight: 400,
  disabled: false,
  imgSrc: "",
  saveData: "",
  immediateLoading: false,
  hideInterface: false,
};

const colors = [
  "#B80000",
  "#DB3E00",
  "#FCCB00",
  "#008B02",
  "#006B76",
  "#1273DE",
  "#004DCF",
  "#5300EB",
  "#000000",
  "#EB9694",
  "#FAD0C3",
  "#FEF3BD",
  "#C1E1C5",
  "#BEDADC",
  "#C4DEF6",
  "#BED3F3",
  "#D4C4FB",
  "#CCCCCC",
];

// Calculate the width of the color picker based on the number of colors
const width = `${Math.ceil(colors.length / 2) * 32}px`;

// Main App component
export default function App() {
  // Ref for the canvas element
  const canvasRef = React.createRef(null);
  // State for brush color, visibility of color picker, and saved canvas data
  const [brushColor, setBrushColor] = React.useState("#000000");
  const [showColor, setShowColor] = React.useState(false);
  const [saveData, setSaveData] = React.useState("");

  // Function to get the current drawing from the canvas as a data URL
  const getImg = () =>
    canvasRef.current.canvasContainer.children[1].toDataURL();

  // Use custom hook to close color picker when clicking outside of it
  const paletteRef = useClickAway(() => {
    setShowColor(false);
  });

  // Function to clear the canvas and reset saved data
  const handleClear = () => {
    canvasRef.current.clear();
    setSaveData("");
  };

  // Function to handle canvas change and update saved data
  const handleCanvasChange = () => {
    const saveData = getImg();
    setSaveData(saveData);
  };

  // Merging defaultProps with additional properties for the canvas
  const props = {
    ...defaultProps,
    className: classNames("canvas"),
    onChange: handleCanvasChange,
    ref: canvasRef,
    brushColor,
    catenaryColor: brushColor,
  };

  // Rendering the JSX for the drawing application
  return (
    <div className="App">
      <CanvasDraw {...props} />
      <div className="button-container">
        <div ref={paletteRef} className="picker-container">
          {/* Button to toggle color picker */}
          <button
            className="palette"
            onClick={() => {
              setShowColor((s) => !s);
            }}
          >
            <span role="img" aria-label="">
              🎨
            </span>{" "}
            color
          </button>
          {/* Conditional rendering of the color picker */}
          {showColor && (
            <div className="picker-popper">
              <GithubPicker
                triangle={"hide"}
                color={brushColor}
                colors={colors}
                width={width}
                onChangeComplete={(c) => setBrushColor(c.hex)}
              />
            </div>
          )}
        </div>
        {/* Button to undo the last action on the canvas */}
        <button
          className="undo"
          onClick={() => {
            canvasRef.current.undo();
          }}
        >
          <span role="img" aria-label="">
            ↩️
          </span>{" "}
          undo
        </button>
        {/* Button to clear the canvas */}
        <button className="clear" onClick={handleClear}>
          <span className="non-hover" role="img" aria-label="">
            💣
          </span>{" "}
          <span className="hover" role="img" aria-label="">
            🧨
          </span>{" "}
          clear
        </button>
        {/* Uncomment below to add a save button */}
        {/* <button className="save" onClick={handleSave}>
          <span role="img" aria-label="">
            💾
          </span>{" "}
          save
        </button> */}
      </div>
      {/* Display the saved canvas data as an image and text */}
      {saveData && (
        <>
          <img src={saveData} alt="" />
          <textarea rows={10} value={saveData} readOnly />
        </>
      )}
    </div>
  );
}