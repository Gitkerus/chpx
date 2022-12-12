import "../Styles/Sales.scss";
import { useState } from "react";
import {
  Button,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  StructuredListBody,
} from "@carbon/react";

import arrowLink from "../Assets/arrowLink.svg";

function Sales() {
  const [salesList, setSalesList] = useState([
    {
      category: "Металлургия",
      name: "Подшипники 24*7",
      note: "Нужны Подшипники 24*7 для производства. Готов купить уже сегодня. Свяжитесь со мной по номеру телефона. Текст для заполнения, текст для заполнения, проверки на сокрытие",
      price: "800 000 руб.",
      id: 1,
    },
    {
      category: "Металлургия",
      name: "Подшипники 24*7",
      note: "Нужны Подшипники 24*7 для производства. Готов купить уже сегодня. Свяжитесь со мной по номеру телефона. Текст для заполнения, текст для заполнения, проверки на сокрытие",
      price: "800 000 руб.",
      id: 2,
    },
    {
      category: "Металлургия",
      name: "Подшипники 24*7",
      note: "Нужны Подшипники 24*7 для производства. Готов купить уже сегодня. Свяжитесь со мной по номеру телефона. Текст для заполнения, текст для заполнения, проверки на сокрытие",
      price: "800 000 руб.",
      id: 3,
    },
    {
      category: "Металлургия",
      name: "Подшипники 24*7",
      note: "Нужны Подшипники 24*7 для производства. Готов купить уже сегодня. Свяжитесь со мной по номеру телефона. Текст для заполнения, текст для заполнения, проверки на сокрытие",
      price: "800 000 руб.",
      id: 4,
    },
  ]);

  return (
    <>
      <div className="sales">
        <div className="sales__Wrapper">
          <StructuredListWrapper ariaLabel="Structured list">
            <StructuredListHead>
              <StructuredListRow head tabIndex={0}>
                <StructuredListCell head>Категория</StructuredListCell>
                <StructuredListCell head>Название</StructuredListCell>
                <StructuredListCell head>Описание</StructuredListCell>
                <StructuredListCell head>Сумма</StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
              {salesList.map((item) => {
                return (
                  <StructuredListRow
                    key={item.id}
                    className="sales__rowWrapper"
                    tabIndex={0}
                  >
                    <StructuredListCell className="sales__rowText">
                      {item.category}
                    </StructuredListCell>
                    <StructuredListCell className="sales__rowText">
                      {item.name}
                    </StructuredListCell>
                    <StructuredListCell className="sales__rowText">
                      {item.note}
                    </StructuredListCell>
                    <StructuredListCell className="sales__rowText">
                      {item.price}
                    </StructuredListCell>
                    <StructuredListCell className="sales__rowBtn">
                      <Button className="sales__btn">Подробнее</Button>
                    </StructuredListCell>
                  </StructuredListRow>
                );
              })}
            </StructuredListBody>
          </StructuredListWrapper>
        </div>
      </div>
    </>
  );
}

export default Sales;
