import { useParams } from "react-router-dom";
import productsData from "../../data";
// import CardMUI from "../CardMUI/CardMUI";

const ProductInfo = () => {
  const { id } = useParams();
  //   console.log(id);

  const filteredProduct = productsData.filter((product) => {
    return product.id == id;
  });

  return (
    <div>
      {filteredProduct.map((e, i) => {
        return (
          <div key={i} style={{display:"flex", flexDirection:"column", alignItems:"center", width:"550px", margin:"0px auto"}}>
            <img src={e.image} alt="" width={400} height={300} />
            <h1 style={{textAlign:"center"}}>{e.title}</h1>
            <p style={{textAlign:"center"}}>{e.description}</p>
            <p>{e.price}</p>
            <p>{e.rating.rate}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductInfo;
