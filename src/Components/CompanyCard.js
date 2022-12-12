import "../Styles/CompanyCard.scss";
import "../Styles/AddsCard.scss";
import { Button } from "@carbon/react";
import SingleNews from "./SingleNews";
import Sales from "./Sales";

import companyLogo from "../Assets/companyLogo.png";
import competenceIcon from "../Assets/competence_icon.svg";
import placeholder2 from "../Assets/placeholder2.png";

function CompanyCard() {
  return (
    <>
      <div className="companyCard">
        <div className="companyWrapper">
          <div className="companyWrapper__header">
            <div className="companyWrapper__header__title">
              Алмаз-Инвест, ООО
            </div>
            <div className="companyWrapper__header__date">
              На портале:
              <strong> 6 лет 6 месяцев</strong>
            </div>
          </div>
          <div className="companyWrapper__vertLine"></div>
          <div className="companyWrapper__top">
            <div className="companyWrapper__top__logo">
              <img src={companyLogo} alt="companyLogo" />
            </div>
            <div className="companyWrapper__top__text">
              <strong>Деятельность компании:</strong>
              <p className="companyWrapper__top__text__description">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
                condimentum tempus diam, ultricies sollicitudin erat facilisis
                eget. Vestibulum rhoncus dui vel eros laoreet consectetur.
                Vivamus eget elementum ligula, vitae pharetra quam. Nullam at
                ligula sed metu. Lorem ipsum dolor sit amet, consec tetur
                adipiscing elit. Nam condimentum...
              </p>
            </div>
          </div>
          <div className="companyWrapper__bot">
            <div className="companyWrapper__bot__adress">
              <strong>Адрес компании:</strong>
              <div>
                <span className="companyWrapper__bot__adress__adressType">
                  Юридический
                </span>
                <p>Россия, Самарская обл. г. Тольятти, Южное Шоссе 24Б</p>
              </div>
              <div>
                <span className="companyWrapper__bot__adress__adressType">
                  Физический
                </span>
                <p>Россия, Самарская обл. г. Тольятти, Южное Шоссе 24Б</p>
              </div>
            </div>
            <Button className="companyWrapper__bot__btn" kind="secondary">
              Написать компании
            </Button>
          </div>
        </div>
        <div className="companyContacts">
          <div className="companyContacts__title">Контактное лицо</div>
          <div className="companyContacts__wrapper">
            <div className="companyContacts__wrapper__owner">
              <strong>И.В. Юрьев</strong>
              <span>Заместитель генерального директора</span>
            </div>
            <Button kind="secondary" className>
              Показать контакты
            </Button>
          </div>
        </div>
        <div className="companyCompetences">
          <div className="companyCompetences__title">Компетенции</div>
          <div className="companyCompetences__wrapper">
            <div className="companyCompetences__wrapper__title">
              <img src={competenceIcon} alt="competenceIcon" />
              Деревообработка
            </div>
            <div className="companyCompetences__wrapper__description">
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
        </div>
        <div className="companyNews">
          <div className="companyNews__title">Новости компании</div>
          <div className="companyNews__wrapper">
            <SingleNews />
            <SingleNews />
            <SingleNews />
          </div>
          <Button kind="secondary">Все новости компании</Button>
        </div>
        <div className="addsCard__similarAdds">
          <div className="addsCard__similarAdds__title">
            Объявления компании - Продам
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
          <Button className="addsCard__similarAdds__btn" kind="secondary">
            Все объявления
          </Button>
        </div>
        <div className="companySales">
          <div className="companySales__title">Объявления компании - Куплю</div>
          <Sales />
          <Button className="companySales__btn" kind="secondary">
            Все объявления
          </Button>
        </div>
      </div>
    </>
  );
}

export default CompanyCard;
