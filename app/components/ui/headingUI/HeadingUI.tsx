import "./styles.scss";

interface HeadingUIProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
  textTransform?: React.CSSProperties["textTransform"];
  textAlign?: React.CSSProperties["textAlign"];
}

export const HeadingUI: React.FC<HeadingUIProps> = ({
  as: Component = "h1",
  children,
  className,
  textTransform = "none",
  textAlign = "left",
}) => {
  return (
    // Стили по умолчанию, который можно менять в атрибуте styles
    // text-align: left | right | center | justify | inherit | initial | unset | start | end;
    // text-transform: none | capitalize | uppercase | lowercase | full-width | inherit | initial | unset;
    <div
      style={{ textTransform, textAlign }}
      className={`heading-ui ${className}`}
    >
      <Component>{children}</Component>
    </div>
  );
};
