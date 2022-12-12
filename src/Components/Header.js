import "../Styles/Header.scss";
import { Search, Button, Select, SelectItem } from "@carbon/react";
import { useState, useEffect } from "react";
import MobileMenuBtn from "./MobileMenuBtn";

import catalog_icon from "../Assets/catalog-icon.svg";
import map_icon from "../Assets/map-icon.svg";
import plus_icon from "../Assets/plus-icon.svg";
import login_icon from "../Assets/login-icon.svg";
import home_icon from "../Assets/home-icon.svg";
import map_icon_white from "../Assets/map-icon_white.svg";
import search_icon from "../Assets/search-icon.svg";
import shoping_icon from "../Assets/shoping-icon.svg";
import profile_icon from "../Assets/profile-icon.svg";

function Header() {
  const [windwoWidth, setWindwoWidth] = useState({
    width: "",
  });
  const [mobileButtons, setMobileButtons] = useState([
    {
      src: home_icon,
      alt: "home_icon",
      id: 1,
    },
    {
      src: map_icon_white,
      alt: "map_icon_white",
      id: 2,
    },
    {
      src: search_icon,
      alt: "search_icon",
      id: 3,
    },
    {
      src: shoping_icon,
      alt: "shoping_icon",
      id: 4,
    },
    {
      src: profile_icon,
      alt: "profile_icon",
      id: 5,
    },
  ]);

  useEffect(() => {
    setWindwoWidth({
      width: window.innerWidth,
    });

    function handleResize() {
      setWindwoWidth({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
  }, []);
  if (windwoWidth.width > 1024)
    return (
      <>
        <header className="header">
          <div className="header__catalogWrapper">
            <div className="header__title">СРНХ</div>
            <Button kind="secondary" className="header__button">
              Главный каталог
              <img
                src={catalog_icon}
                alt="catalog-icon
            "
              />
            </Button>
          </div>
          <div className="header__regionWrapper">
            <div className="header__region">
              <img src={map_icon} alt="map-icon" />
              Регион
            </div>
            <Select
              className="header__select"
              defaultValue="placeholder-item"
              labelText=""
              onChange={function noRefCheck() {}}
            >
              <SelectItem text="Option 1" value="option-1" />
              <SelectItem text="Option 2" value="option-2" />
              <SelectItem text="Option 3" value="option-3" />
              <SelectItem text="Option 4" value="option-4" />
              <SelectItem text="Option 4" value="option-4" />
            </Select>
          </div>
          <div className="header__searchWrapper">
            Поиск по порталу
            <Search
              defaultValue="Наименование продукта, отрасль, специализация, компания"
              className="header__search"
            ></Search>
          </div>
          <div className="header__rightWrapper">
            <Button
              kind="tertiary"
              className="header__button header__button_login"
            >
              Вход в портал
              <img src={login_icon} alt="login-icon" />
            </Button>
            <Button className="header__button header__button_publish">
              Подать объявление
              <img src={plus_icon} alt="plus-icon" />
            </Button>
          </div>
        </header>
      </>
    );
  else
    return (
      <>
        <header className="header-mobile">
          <div className="header-mobile__topWrapper">
            СРНХ
            <Button className="header-mobile__button">
              Подать объявление
              <img src={plus_icon} alt="plus-icon" />
            </Button>
          </div>
          <div className="header-mobile__botWrapper">
            {mobileButtons.map((item) => {
              return <MobileMenuBtn key={item.id} {...item} />;
            })}
          </div>
        </header>
      </>
    );
}
export default Header;
