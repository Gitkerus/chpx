import "../Styles/Competences.scss";
import { Button } from "@carbon/react";
import SingleCompetence from "./SingleCompetence";

import arrowLink from "../Assets/arrowLink.svg";

function Competences() {
  const getCompetences = () => {
    let competences = [];
    for (let i = 0; i < 4; i++) {
      competences.push(<SingleCompetence key={i} />);
      // Id сделан просто уникальным = i цикла, просто для устранения ошибки
    }
    return competences;
  };
  return (
    <>
      <div className="competences">
        <div className="competences__title">Компетенции региона</div>
        <div className="competencesWrapper">
          <div className="competences__block">{getCompetences()}</div>
          <div className="competences__block">{getCompetences()}</div>
          <div className="competences__block">{getCompetences()}</div>
          <div className="competences__block">{getCompetences()}</div>
        </div>
        <Button className="competences__btn" kind="secondary">
          Все компетенции
          <img src={arrowLink} alt="arrowLink" />
        </Button>
      </div>
    </>
  );
}

export default Competences;
