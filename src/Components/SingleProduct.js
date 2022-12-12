import "../Styles/SingleProduct.scss";

function SingleProduct(product) {
  return (
    <>
      <div className="singleProduct">
        <img src={product.src} alt={product.alt} />
        <div className="singleProduct__name">{product.name}</div>
      </div>
    </>
  );
}

export default SingleProduct;
