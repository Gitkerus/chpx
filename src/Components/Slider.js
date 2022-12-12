import "../Styles/Slider.scss";
import Button from "@carbon/react";

import left_arrow from "../Assets/left_arrow.svg"
import right_arrow from "../Assets/right_arrow.svg"

function Slider() {
  return (
  <>
    <div className="slider">
        <Button className="slider__btn slider__btn-left">
            <img src={left_arrow} alt="left_arrow" />
        </Button>
        <Button className="slider__btn slider__btn-right">
            <img src={right_arrow} alt="right_arrow" />
        </Button>
    </div>
  </>;

  )
}

export default Slider;
