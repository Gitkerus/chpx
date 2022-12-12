import "../Styles/Products.scss";
import "../Styles/Slider.scss";
import { useState } from "react";
import { Button } from "@carbon/react";

import left_arrow from "../Assets/left_arrow.svg";
import right_arrow from "../Assets/right_arrow.svg";
import arrowLink from "../Assets/arrowLink.svg";
import product_img from "../Assets/product_img.png";
import SingleProduct from "./SingleProduct";

function Products() {
  const [productList, setProductList] = useState([
    {
      src: product_img,
      alt: "product_img",
      name: "Металлургия",
      id: 1,
    },
    {
      src: product_img,
      alt: "product_img",
      name: "Металлургия",
      id: 2,
    },
    {
      src: product_img,
      alt: "product_img",
      name: "Металлургия",
      id: 3,
    },
    {
      src: product_img,
      alt: "product_img",
      name: "Металлургия",
      id: 4,
    },
    {
      src: product_img,
      alt: "product_img",
      name: "Металлургия",
      id: 5,
    },
    {
      src: product_img,
      alt: "product_img",
      name: "Металлургия",
      id: 6,
    },
  ]);

  return (
    <>
      <div className="products">
        <div className="products__title">Товары в Тольятти </div>
        <div className="slider">
          <Button className="slider__btn slider__btn-left">
            <img src={left_arrow} alt="left_arrow" />
          </Button>
          <Button className="slider__btn slider__btn-right">
            <img src={right_arrow} alt="right_arrow" />
          </Button>
          <div className="products__container">
            {productList.map((item) => {
              return <SingleProduct key={item.id} {...item} />;
            })}
          </div>
        </div>
        <Button kind="secondary" className="products__btn">
          Все категории
          <img src={arrowLink} alt="arrowLink" />
        </Button>
      </div>
    </>
  );
}

export default Products;
