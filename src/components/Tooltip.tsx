interface TooltipProps {
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}
export default function Tooltip({ children, position }: TooltipProps) {
  //TODO: render the children as a subdiv with an on-hover that renders the tooltip in the indicated position
  return (
    <div className="">
      {children} with a tooltip in {position}
    </div>
  );
}
