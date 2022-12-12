import "../Styles/Footer.scss";
import { useState } from "react";

import vk from "../Assets/VK.png";
import telegram from "../Assets/Telegram.png";

function Footer() {
  const [links1, setLinks1] = useState([
    {
      id: 11,
      link: "Связаться с нами",
    },
    {
      id: 12,
      link: "info@srnh.ru",
    },
    {
      id: 13,
      link: "sales@srnh.ru",
    },
    {
      id: 14,
      link: "88005553535",
    },
  ]);
  const [links2, setLinks2] = useState([
    {
      id: 21,
      link: "Центр поддержки",
    },
    {
      id: 22,
      link: "О нас",
    },
    {
      id: 23,
      link: "Правообладание",
    },
  ]);
  const [links3, setLinks3] = useState([
    {
      id: 31,
      link: "FAQ и помощь",
    },
  ]);
  const [links4, setLinks4] = useState([
    {
      id: 41,
      link: "Политика приватности",
    },
    {
      id: 42,
      link: "Правила и условия",
    },
    {
      id: 43,
      link: "Карта сайта",
    },
  ]);
  return (
    <>
      <div className="footer">
        <div className="footer__blocksWrapper">
          <div className="footer__block footer__block-socialNetworks">
            <div className="footer__block__title">Соцсети</div>
            <div className="footer__block__socialMedia ">
              <img
                className="footer__block__socialMedia__img"
                src={vk}
                alt="vk"
              />
              <img
                className="footer__block__socialMedia__img"
                src={telegram}
                alt="telegram"
              />
            </div>
          </div>
          <div className="footer__block">
            <div className="footer__block__title">Контакты</div>
            <ul className="footer__block__links">
              {links1.map((item) => {
                return <li key={item.id}>{item.link}</li>;
              })}
            </ul>
          </div>
          <div className="footer__block">
            <div className="footer__block__title">О компании</div>
            <ul className="footer__block__links">
              {links2.map((item) => {
                return <li key={item.id}>{item.link}</li>;
              })}
            </ul>
          </div>
          <div className="footer__block">
            <div className="footer__block__title">Сервис</div>
            <ul className="footer__block__links">
              {links3.map((item) => {
                return <li key={item.id}>{item.link}</li>;
              })}
            </ul>
          </div>
          <div className="footer__block">
            <div className="footer__block__title">Информация</div>
            <ul className="footer__block__links">
              {links4.map((item) => {
                return <li key={item.id}>{item.link}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__holder">
            Правообладатель “ООО СРНХ” 2022 Все права защищены
          </div>
          <div className="footer__bottom__made">Сделано в Tehnopolus.ru</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
