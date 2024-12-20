import Link from "next/link";
import "./styles.scss";

interface LinkUIProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const LinkUI: React.FC<LinkUIProps> = ({
  children,
  href,
  className,
}) => {
  return (
    <Link href={href} className={`link-ui ${className}`}>
      {children}
      <span></span>
    </Link>
  );
};
