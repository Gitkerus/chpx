import "../Styles/SingleNews.scss";
import news_img from "../Assets/add_img.png";

function SingleNews() {
  return (
    <>
      <div className="singleNews">
        <img className="singleNews__img" src={news_img} alt="news_img" />
        <div className="singleNews__date">12.18.22</div>
        <div className="singleNews__title">Повышение цен!</div>
        <div className="singleNews__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id velit
          deserunt repellendus blanditiis atque porro doloremque sint
          perspiciatis facere, culpa officiis nulla, repudiandae architecto amet
          modi cupiditate ducimus fuga necessitatibus deleniti? Unde harum, vel
          placeat suscipit molestiae nihil et saepe illum, officiis temporibus
          aut molestias ipsum fugit est vitae beatae. Aut totam inventore iste
          voluptate animi eius voluptatum ullam cupiditate officiis laudantium
          nobis aperiam quo voluptatem quae iusto itaque, hic in ipsam mollitia
          fugiat? Nemo similique facilis nulla officia numquam non? Totam iure
          dolorem eius. Libero veritatis fugiat soluta voluptatum placeat nihil
          dignissimos quaerat. Nisi fuga, cupiditate officia, consectetur,
          architecto cum alias culpa voluptatum quod repellat quam aperiam odio
          dicta? Accusantium doloribus odio ad recusandae earum dolorum sapiente
          tempora laudantium cupiditate voluptatem provident iusto corrupti,
          esse similique eius molestias magnam hic. Facere natus doloribus
          libero, eos distinctio eius. Sunt dignissimos, ducimus autem maiores
          asperiores natus aut repudiandae maxime doloremque esse non iusto quod
          perspiciatis sapiente praesentium vel id reiciendis. Natus optio
          quibusdam corrupti excepturi nostrum tenetur cupiditate. Dolorem
          maiores tenetur illum cum labore odio repellat nihil suscipit
          excepturi ab inventore, adipisci numquam reprehenderit, quaerat quasi
          distinctio aut, et perferendis? Esse, consequatur. Beatae voluptate
          animi nihil veritatis facere eos adipisci!
        </div>
      </div>
    </>
  );
}

export default SingleNews;
