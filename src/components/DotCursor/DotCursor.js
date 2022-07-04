import "./DotCursor.scss";
import useMousePosition from "../../hooks/useMousePosition";

const DotCursor = () => {
  const { x, y } = useMousePosition();

  return (
    <>
      <div className="ring" style={{ left: `${x}px`, top: `${y}px` }}></div>
      <div className="dot" style={{ left: `${x}px`, top: `${y}px` }}></div>
    </>
  );
};

export default DotCursor;
