import Link from "next/link";
import { ButtonUI, DropDownUI, InputUI } from "../ui";
import { BurgerButtonIcon, TranslateIcon, UserIcon } from "../ui/icons";
import { FlyLogo } from "../ui/logo";

import "./styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-items-block">
        <Link href="/">
          <FlyLogo />
        </Link>
        <div className="buttons">
          <DropDownUI>
            <ButtonUI icon={<TranslateIcon />} />
            <div>
              <InputUI name="lang" value="tj" label="Тоҷикӣ" type="radio" htmlFor="tj"/>
              <InputUI name="lang" value="ru" label="Русский" type="radio" htmlFor="ru" />
              <InputUI name="lang" value="en" label="English" type="radio" htmlFor="en"/>
            </div>
          </DropDownUI>
          <ButtonUI icon={<UserIcon />} />
          <ButtonUI icon={<BurgerButtonIcon />} />
        </div>
      </div>
    </header>
  );
};
