import "../Styles/SingleAdd.scss";

function SingleAdd(props) {
  return (
    <>
      <div className="singleAdd">
        <img src={props.img} alt={props.alt} className="singleAdd__img" />
        <div className="singleAdd__product">{props.product}</div>
        <div className="singleAdd__price">{props.price} руб/т</div>
        <div className="singleAdd__trader">{props.trader}</div>
      </div>
    </>
  );
}

export default SingleAdd;
