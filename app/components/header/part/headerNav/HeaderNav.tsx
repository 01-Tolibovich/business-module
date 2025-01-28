import Link from "next/link";
import { usePathname } from "next/navigation";

import "./styles.scss";
import { Dispatch, SetStateAction } from "react";

interface HeaderNavProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  isActive,
  setIsActive,
}) => {
  const navItems = [
    {
      text: "Поиск",
      link: "/",
    },
    {
      text: "Отчётность",
      link: "/reporting",
    },
    {
      text: "Заказы",
      link: "/orders",
    },
    {
      text: "Аналитика",
      link: "/analytics",
    },
  ];

  const pathname = usePathname();

  return (
    <nav className="header-nav">
      <ul className={`links ${isActive ? "active" : ""}`}>
        {navItems.map((navItem) => (
          <li key={Math.random()}>
            <Link
              onClick={() => setIsActive(false)}
              className={pathname === navItem.link ? "current-link" : ""}
              href={navItem.link}
            >
              {navItem.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
