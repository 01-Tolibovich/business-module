import Link from "next/link";
import { ButtonUI } from "../ui";
import { BurgerButtonIcon, TranslateIcon, UserIcon } from "../ui/icons";
import { FlyLogo } from "../ui/logo";

import "./styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-items-block">
        <Link href="/"><FlyLogo /></Link>
        <div className="buttons">
          <ButtonUI icon={<TranslateIcon />} />
          <ButtonUI icon={<UserIcon />} />
          <ButtonUI icon={<BurgerButtonIcon />} />
        </div>
      </div>
    </header>
  );
};
