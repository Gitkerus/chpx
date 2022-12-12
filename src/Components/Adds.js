import "../Styles/Adds.scss";
import "../Styles/Slider.scss";
import { useState } from "react";
import { Button } from "@carbon/react";
import SingleAdd from "./SingleAdd";

import left_arrow from "../Assets/left_arrow.svg";
import right_arrow from "../Assets/right_arrow.svg";
import add_img from "../Assets/add_img.png";

function Adds() {
  const [addList, setAddList] = useState([
    {
      img: add_img,
      alt: "add_img",
      product: "Валуны",
      price: 3500,
      trader: "Симонов В.В., ИП",
      id: 1,
    },
    {
      img: add_img,
      alt: "add_img",
      product: "Валуны",
      price: 3500,
      trader: "Симонов В.В., ИП",
      id: 2,
    },
    {
      img: add_img,
      alt: "add_img",
      product: "Валуны",
      price: 3500,
      trader: "Симонов В.В., ИП",
      id: 3,
    },
    {
      img: add_img,
      alt: "add_img",
      product: "Валуны",
      price: 3500,
      trader: "Симонов В.В., ИП",
      id: 4,
    },
  ]);

  return (
    <>
      <div className="adds">
        <div className="slider">
          <Button className="slider__btn slider__btn-adds slider__btn-left">
            <img src={left_arrow} alt="left_arrow" />
          </Button>
          <Button className="slider__btn slider__btn-adds slider__btn-right">
            <img src={right_arrow} alt="right_arrow" />
          </Button>
          <div className="adds__container">
            {addList.map((item) => {
              return <SingleAdd key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Adds;
