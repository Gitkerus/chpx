import "../Styles/Presentation.scss";
import { Button } from "@carbon/react";

function Presentation() {
  return (
    <>
      <div className="content__presentation">
        <div className="content__presentation__title">СРНХ</div>
        <div className="content__presentation__serviceText">
          Сервис Развития Народного Хозяйства
        </div>
        <div className="content__presentation__b2bText">
          Удобная B2B площадка для регионального бизнеса
        </div>
        <Button className="content__presentation__btn">
          Перейти в каталог
        </Button>
      </div>
    </>
  );
}

export default Presentation;
