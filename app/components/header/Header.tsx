import Link from "next/link";
import { FlyLogo } from "../ui/logo";
import { BurgerButton, TranslateButton, UserButton } from "./part";

import "./styles.scss";

export const Header = () => {

  return (
    <header className="header">
      <div className="header-items-block">
        <Link href="/">
          <FlyLogo />
        </Link>
        <div className="buttons">
          <TranslateButton />
            <UserButton />
            <BurgerButton/>
        </div>
      </div>
    </header>
  );
};
