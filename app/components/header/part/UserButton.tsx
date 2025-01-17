"use client";

import { ButtonUI, DropDownUI } from "../../ui";
import {
  CartIcon,
  DownloadIcon,
  LoguotIcon,
  ReturnPaymentIcon,
  UserIcon,
  UsersIcon,
} from "../../ui/icons";
import userAuth from "@/store/userAuth";
import { useRouter } from "next/navigation";
import { uploadsUrl } from "@/config/configs";
import Image from "next/image";

import "./styles.scss";
import Link from "next/link";
import { logoutRequest } from "@/services";
import { useDropDown } from "@/hooks";

export const UserButton = () => {
  const router = useRouter();

  const isAuth = userAuth((state) => state.isAuth);
  const userData = userAuth((state) => state.userData);
  const setUserData = userAuth((state) => state.setUserData);
  const setIsAuth = userAuth((state) => state.setIsAuth);

  const { isShowDropDown, setIsShowDropDown, handleToggleDropDown } =
    useDropDown();

  const renderNavLinks = () => {
    const navLinks = [
      {
        href: "#",
        icon: <UserIcon />,
        text: "Мой профиль",
      },
      {
        href: "#",
        icon: <CartIcon />,
        text: "Мои заказы",
      },
      {
        href: "#",
        icon: <UsersIcon />,
        text: "Список пассажиров",
      },
      {
        href: "#",
        icon: <DownloadIcon />,
        text: "Загрузить документы",
      },
      {
        href: "#",
        icon: <ReturnPaymentIcon />,
        text: "Заявление о возврате",
      },
    ];

    return navLinks.map((linkElem, index) => (
      <Link key={index} className="nav-link" href={linkElem.href}>
        <span className="icon">{linkElem.icon}</span>{" "}
        <span>{linkElem.text}</span>
      </Link>
    ));
  };

  const logoutHandler = () => {
    logoutRequest().then(() => {
      router.push("/info");
      handleToggleDropDown();
      setUserData(null);
      setIsAuth(false);
    });
  };

  return isAuth && userData ? (
    <DropDownUI
      right="0"
      {...isShowDropDown}
      setIsShowDropDown={setIsShowDropDown}
    >
      <ButtonUI icon={<UserIcon />} onClick={handleToggleDropDown} />
      <div className="user-dropdown-wrap">
        <div className="dropdown-block">
          <Image
            className="corporate-img"
            src={`${uploadsUrl}${userData.logo}`}
            width={80}
            height={80}
            alt="corporate logo"
          />
          <div>
            <h3 className="title">{userData.name}</h3>
            <small>
              Баланс: {userData.deposit} {userData.currency}
            </small>
            <small>Кредитный лимит: {userData.credit_limit}</small>
          </div>
        </div>
        {renderNavLinks()}
        <div className="nav-link" role="button" onClick={logoutHandler}>
          <span className="icon">
            <LoguotIcon />
          </span>{" "}
          <span>Выйти</span>
        </div>
      </div>
    </DropDownUI>
  ) : (
    <ButtonUI icon={<UserIcon />} onClick={() => router.push("/login")} />
  );
};
