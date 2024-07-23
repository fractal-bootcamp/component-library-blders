import React, { useMemo, useState } from "react";
import "../index.css";
interface TooltipProps {
  children: React.ReactNode; //the page elements being wrapped which should display tooltip when hovered
  tipContent: React.ReactNode; //the text/other content to render in the tooltip, passed in as a text/JSX/whatever prop
  position: "top" | "bottom" | "left" | "right"; //the position of the tooltip relative to the wrapped element
}
export default function Tooltip({
  children,
  tipContent,
  position
}: TooltipProps) {
  //TODO: render the children as a subdiv with an on-hover that renders the tooltip in the indicated position
  const [show, setShow] = useState(false);
  //string dynamically generating the proper positioning class for the tooltip, e.g. "absolute ..." with positioning placing the tooltip subelement in the indicated position
  const positionClass = useMemo(() => {
    switch (position) {
      case "top":
        return "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[calc(100%+0.5rem)] ";
      case "bottom":
        return "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[calc(100%+0.5rem)]";
      case "left":
        return "absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-[calc(100%+0.5rem)]";
      case "right":
        return "absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-[calc(100%+0.5rem)]";
      default:
        return "";
    }
  }, [position]);
  return (
    <div
      className="relative inline-block bg-slate-200"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {/* The tooltip */}
      {tipContent && (
        <div
          className={`${positionClass} ${show ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-in-out flex justify-center items-center text-center text-xs w-max  bg-gray-800 text-white p-2 rounded-md shadow-lg`}
        >
          {tipContent}
        </div>
      )}
      {/* The children to be hovered */}
      {children}
    </div>
  );
}
