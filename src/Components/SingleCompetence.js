import "../Styles/SingleCompetence.scss";

import competence_icon from "../Assets/competence_icon.svg";

function SingleCompetence() {
  return (
    <>
      <div className="singleCompitence">
        <img src={competence_icon} alt="compretence_icon" />
        Деревообработка - 156
      </div>
    </>
  );
}

export default SingleCompetence;
