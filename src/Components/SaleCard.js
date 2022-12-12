import "../Styles/SaleCard.scss";
import "../Styles/Slider.scss";
import {
  Button,
  Select,
  SelectItem,
  FileUploader,
  TextArea,
} from "@carbon/react";

import left_arrow from "../Assets/left_arrow.svg";
import right_arrow from "../Assets/right_arrow.svg";
import arrowLink from "../Assets/arrowLink.svg";
import document from "../Assets/document.svg";
import download from "../Assets/download.svg";

import Sales from "./Sales";
import Adds from "./Adds";

function SaleCard() {
  return (
    <>
      <div className="saleCard">
        <div className="saleCard__sliderWrapper">
          <div className="slider">
            <Button className="slider__btn slider__btn-left-wide">
              <img src={left_arrow} alt="left_arrow" />
            </Button>
            <Button className="slider__btn slider__btn-right-wide">
              <img src={right_arrow} alt="right_arrow" />
            </Button>
            <div className="saleCard__product">
              <div className="saleCard__product__date">
                Обновлено: 12.12.2020
              </div>
              <a className="saleCard__product__company" href="/company">
                АПК “Алмаз-Инвест”
              </a>
              <div className="saleCard__product__title">
                Соя без ГМО из Украины/Бразилии
              </div>
              <div className="saleCard__product__description">Описание</div>
              <div className="saleCard__product__descriptionText">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
                condimentum tempus diam, ultricies sollicitudin erat facilisis
                eget. Vestibulum rhoncus dui vel eros laoreet consectetur.
                Vivamus eget elementum ligula, vitae pharetra quam. Nullam at
                ligula sed metu. Lorem ipsum dolor sit amet, consec tetur
                adipiscing elit. Nam condimentum tempus diam, ultricies
                sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel
                eros laoreet consectetur. Vivamus eget elementum ligula, vitae
                pharetra quam. Nullam at ligula sed metu
              </div>
              <div className="saleCard__product__filesWrapper">
                <div className="saleCard__product__file">
                  <div className="saleCard__product__singleFile saleCard__product__singleFile-grey">
                    <img src={document} alt="document" />
                    <span className="saleCard__product__file__format">png</span>
                    <span className="saleCard__product__file__size">
                      1.6 mb
                    </span>
                  </div>
                  <div className="saleCard__product__file__name">
                    altspa...cab.png
                  </div>
                </div>
                <div className="saleCard__product__file">
                  <div className="saleCard__product__singleFile saleCard__product__singleFile-blue">
                    <img src={download} alt="download" />
                  </div>
                  <div className="saleCard__product__file__name">
                    altspa...cab.png
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="saleCard__order">
          <div className="saleCard__order__title">Отправить предложение</div>
          <TextArea
            className="saleCard__order__textArea"
            enableCounter
            helperText=""
            id="text-area-1"
            labelText="Описание предложения"
            maxCount={100}
            placeholder="Введите ваше предложение"
          />
          <div className="saleCard__order__bottomWrapper">
            <div className="cds--file__container saleCard__order__addFiles">
              <FileUploader
                accept={[".jpg", ".png"]}
                buttonLabel="Add file"
                filenameStatus="edit"
                iconDescription="Delete file"
                labelDescription="Only .jpg and .png files. 5 MB max file size."
                labelTitle="Загрузить файлы"
                multiple
                name=""
                onChange={function noRefCheck() {}}
                onClick={function noRefCheck() {}}
                onDelete={function noRefCheck() {}}
                role="button"
                size="md"
              />
            </div>
            <Select
              className="saleCard__order__select"
              defaultValue="placeholder-item"
              labelText=""
              onChange={function noRefCheck() {}}
            >
              <SelectItem
                disabled
                hidden
                text="Выберите прайс лист"
                value="placeholder-item"
              />
              <SelectItem text="Option 1" value="option-1" />
              <SelectItem text="Option 2" value="option-2" />
              <SelectItem text="Option 3" value="option-3" />
              <SelectItem text="Option 4" value="option-4" />
              <SelectItem text="Option 4" value="option-4" />
            </Select>
          </div>
        </div>
        <div className="saleCard__sales">
          <div className="saleCard__sales__title">Похожие объявления</div>
          <Sales />
        </div>
      </div>
      <div className="saleCard__adds">
        <div className="saleCard__adds__title">Прочие объявления компании</div>
        <Adds />
        <Button kind="secondary" className="adds__btn">
          Все объявления компании
          <img src={arrowLink} alt="arrowLink" />
        </Button>
      </div>
    </>
  );
}

export default SaleCard;
