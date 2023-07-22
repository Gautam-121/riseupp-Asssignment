import "./imageCart.css";
import Shimmer from "../Shimmer";
import NotFound from "../NotFound";
import ShowImageDetail from "../ShowImageDetail.js";
import { useState } from "react";

const ImageCart = ({ images, searchImage }) => {

  const [showDetail , setShowDetail] = useState(false)

  const handleMouseOver = (imgData)=>{
    console.log(imgData)
    setShowDetail(true)
  }

  const handleMouseOut = ()=>{
    setShowDetail(false)
  }

  if(images === null) return <Shimmer/>

  return images.length === 0 ? <NotFound/> : (
    <>
    <div className="image-serch">
     {searchImage}
    </div>
    <div className="Imagecart_container">
      {images.map((imgData) => (
        <div className="Imagecart_wrapper" key={imgData.id}>
          <img
            src={imgData?.urls?.regular}
            alt="This is img"
            className="cart_image cur-poi"
            onMouseOver={()=>handleMouseOver(imgData)}
            onMouseOut={handleMouseOut}
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default ImageCart;
