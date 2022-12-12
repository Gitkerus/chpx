import "../Styles/Content.scss";
import Presentation from "./Presentation";
import Products from "./Products";
import Competences from "./Competences";
import MailingList from "./MailingList";
import Adds from "./Adds";
import Sales from "./Sales";

import Button from "@carbon/react/lib/components/Button/Button";
import arrowLink from "../Assets/arrowLink.svg";

function Content() {
  return (
    <>
      <div className="content">
        <Presentation />
        <div className="contentMobileWrapper">
          <Products />
          <Competences />
          <div className="content__adds">
            <div className="content__adds__title">
              Новые объявления в Тольятти - Продам
            </div>
            <Adds />
            <Button kind="secondary" className="adds__btn">
              Все новые объявления
              <img src={arrowLink} alt="arrowLink" />
            </Button>
          </div>
          <div className="content__sales">
            <div className="content__sales__title">
              Новые объявления в Тольятти - Куплю
            </div>
            <Sales />
            <Button kind="secondary" className="content__sales__btn">
              Все новые объявления
              <img src={arrowLink} alt="arrowLink" />
            </Button>
          </div>
        </div>
      </div>
      <MailingList />
    </>
  );
}

export default Content;
