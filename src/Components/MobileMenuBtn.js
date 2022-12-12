import "../Styles/MobileMenuBtn.scss";

function MobileMenuBtn({ src, alt }) {
  return (
    <>
      <button className="header-mobile__bottomButton">
        <img src={src} alt={alt} />
      </button>
    </>
  );
}

export default MobileMenuBtn;
