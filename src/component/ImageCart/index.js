import "./imageCart.css";
import Shimmer from "../Shimmer";
import NotFound from "../NotFound";
// import ShowImageDetail from "../ShowImageDetail.js";
import { useState } from "react";

const ImageCart = ({ images, searchImage }) => {

  const [showDetail , setShowDetail] = useState(false)

  const handleMouseOver = ()=>{
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
    <div className="imagecart_container">
        <div className="imagecart_wrapper">
          <img
            src={images?.urls?.regular}
            alt="This is img"
            className="cart_image cur-poi"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
          {showDetail && (
            <div>Its Visible</div>
          )}
        </div>
    </div>
    </>
  );
};

export default ImageCart;
