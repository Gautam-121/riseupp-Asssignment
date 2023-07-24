import "./imageCart.css";
import { useState } from "react";
import ShowImageDetail from "../ImagePopUp";

const ImageCart = ({ images }) => {

  const [showDetail , setShowDetail] = useState(false)
  const [position , setPosition] = useState(null)

  const handleMouseOver = (index , data)=>{
    setPosition(index)
    setShowDetail(true)
  }

  const handleMouseOut = ()=>{
    setShowDetail(false)
  }


  return (
  <>
    <div className="imagecart_container">
        {
          images.map((img , index) => (
          <div className="imagecart_wrapper" key={img.id}>
              <img
              src={img?.urls?.regular}
              alt="This is img"
              className="cart_image cur-poi"
              onMouseEnter={()=>handleMouseOver(index , img)}
              onMouseLeave={handleMouseOut}
            />
            {showDetail && (index === position)  && <ShowImageDetail data = {img}/> }
          </div>
          ))
        }
    </div>
  </>
  );
};

export default ImageCart;
