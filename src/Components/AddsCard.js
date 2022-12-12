import { useState } from "react";
import Adds from "./Adds";
import Button from "@carbon/react/lib/components/Button/Button";

import photo from "../Assets/photo.png";
import placeholder from "../Assets/placeholder.png";
import placeholder2 from "../Assets/placeholder2.png";
import add_img from "../Assets/add_img.png";
import arrowLink from "../Assets/arrowLink.svg";
import lock from "../Assets/lock.svg";

import "../Styles/AddsCard.scss";
import "../Styles/Slider.scss";
import "../Styles/Adds.scss";
import "../Styles/SingleAdd.scss";

function AddsCard() {
  return (
    <>
      <div className="addsCard">
        <div className="addsCard__leftWrapper">
          <div className="addsCard__gallery">
            <img
              className="addsCard__gallery__bigImg"
              src={photo}
              alt="photo"
            />
            <img
              className="addsCard__gallery__smallImg"
              src={placeholder}
              alt="placeholder"
            />
            <img
              className="addsCard__gallery__smallImg"
              src={placeholder}
              alt="placeholder"
            />
            <img
              className="addsCard__gallery__smallImg"
              src={placeholder}
              alt="placeholder"
            />
            <img src="" alt="" />
          </div>
          <div className="addsCard__note">
            <div className="addsCard__note__title">Описание</div>
            <div className="addsCard__note__text">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
              condimentum tempus diam, ultricies sollicitudin erat facilisis
              eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus
              eget elementum ligula, vitae pharetra quam. Nullam at ligula sed
              metu. Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
              Nam condimentum tempus diam, ultricies sollicitudin erat facilisis
              eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus
              eget elementum ligula, vitae pharetra quam. Nullam at ligula sed
              metu
            </div>
          </div>
          <div className="addsCard__similarAdds">
            <div className="addsCard__similarAdds__title">
              Похожие объявления
            </div>
            <div className="addsCard__similarAdds__Wrapper">
              <div className="addsCard__similarAdds__gallery">
                <img
                  className="addsCard__similarAdds__gallery__img"
                  src={placeholder2}
                  alt=""
                />
              </div>
              <div className="addsCard__similarAdds__description">
                <div className="addsCard__similarAdds__description__title">
                  Соя без ГМО из Украины/Бразилии
                </div>
                <div className="addsCard__similarAdds__description__price">
                  450 руб/т
                </div>
                <div className="addsCard__similarAdds__description__company">
                  <span>ДСК-ГРУП, Москва</span>
                  <span>+16 объявлений</span>
                </div>
                <div className="addsCard__similarAdds__description__note">
                  Прямые поставки из отечечественных складов. Прямые поставки из
                  отечечественных складов. Прямые поставки...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addsCard__rightWrapper">
          <div className="addsCard__companyCard">
            <div className="addsCard__companyCard__date">
              Обновлено: 12.12.2020
            </div>
            <div className="addsCard__companyCard__title">
              Соя без ГМО из Украины/Бразилии
            </div>
            <div className="addsCard__companyCard__price">450 руб/т</div>
            <div className="addsCard__companyCard__contacts">
              <div className="addsCard__companyCard__contacts__header">
                <div className="addsCard__companyCard__contacts__avatar"></div>
                <div className="addsCard__companyCard__contacts__topWrapper">
                  <div className="addsCard__companyCard__contacts__name">
                    Рязанов Виталий Дмитриевич
                  </div>
                  <div className="addsCard__companyCard__contacts__title">
                    Директор
                  </div>
                </div>
              </div>
              <div className="addsCard__companyCard__contacts__vertLine"></div>
              <div className="addsCard__companyCard__contacts__link">
                ИП, Киров, RU
              </div>
              <div className="addsCard__companyCard__contacts__adds">
                Все объявления компании: 16
              </div>
              <div className="addsCard__companyCard__contacts__btnWrapper">
                <Button className="addsCard__btn">Показать контакты</Button>
                <Button className="addsCard__btn">Написать сообщение</Button>
              </div>
            </div>
          </div>
          <div className="addsCard__trial">
            <img className="addsCard__trial__lock" src={lock} alt="lock" />
            <div className="addsCard__trial__text">
              Доступ к контактам и возможность мнгновенной связи доступна только
              для зарегистрированных пользователей. Войти
            </div>
          </div>
        </div>
      </div>
      <div className="addsCard__sliderWrapper">
        <div className="addsCard__sliderWrapper__title">
          Прочие объявления компании
        </div>
        <Adds />
        <Button kind="secondary" className="adds__btn">
          Все объявления компании
          <img src={arrowLink} alt="arrowLink" />
        </Button>
      </div>
    </>
  );
}

export default AddsCard;
