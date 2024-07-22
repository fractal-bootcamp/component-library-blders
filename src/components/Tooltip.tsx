import React, { useMemo, useState } from "react";
import "../index.css";
interface TooltipProps {
  children: React.ReactNode; //the page elements being wrapped which should display tooltip when hovered
  content: React.ReactNode; //the text/other content to render in the tooltip, passed in as a text/JSX/whatever prop
  position: "top" | "bottom" | "left" | "right"; //the position of the tooltip relative to the wrapped element
}
export default function Tooltip({ children, content, position }: TooltipProps) {
  //TODO: render the children as a subdiv with an on-hover that renders the tooltip in the indicated position
  const [show, setShow] = useState(false);
  //string dynamically generating the proper positioning class for the tooltip, e.g. "absolute ..." with positioning placing the tooltip subelement in the indicated position
  const positionClass = useMemo(
    () =>
      position === "top"
        ? "absolute top-0 -transform-y-full"
        : position === "bottom"
          ? "absolute bottom-0"
          : position === "left"
            ? "absolute left-0 top-1/2 transform -translate-x-full"
            : position === "right"
              ? "absolute top-1/2 transform"
              : "",
    [position]
  );
  return (
    <div
      className="relative w-32 h-32 bg-slate-200"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {/* The tooltip */}
      {show && (
        <div
          className={`${positionClass} bg-gray-800 text-white p-2 rounded-md shadow-lg`}
        >
          {content}
        </div>
      )}
      {/* The children to be hovered */}
      <div className="absolute top-0 left-0 w-full h-full">{children}</div>
    </div>
  );
}
