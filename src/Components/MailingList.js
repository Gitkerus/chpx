import "../Styles/MailingList.scss";
import { TextInput, Button } from "@carbon/react";

function MailingList() {
  return (
    <>
      <div className="mailingList">
        <div className="mailingList__title">Подпишитесь на рассылку</div>
        <div className="mailingList__text">
          Получайте предложения и новости от нас первыми
        </div>
        <label
          className="mailingList__inputWrapper"
          htmlFor="mailingList__input"
        >
          <TextInput
            className="mailingList__input"
            type="mail"
            id="mailingList__input"
            invalidText="Введите корректный адрес электронной почты"
            placeholder="Ваш e-mail"
          />
          <Button className="mailingList__button">Подписаться</Button>
        </label>
        <div className="mailingList__privacePolicy">
          Нажимая на кнопку, вы даете согласие на обработку персональных данных
          и соглашаетесь с политикой конфиденциальности
        </div>
      </div>
    </>
  );
}

export default MailingList;
