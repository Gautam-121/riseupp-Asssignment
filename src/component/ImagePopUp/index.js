import React from 'react';
import './imagePopup.css'; // Create this CSS file for styling the pop-up


const ImagePopup = ({ data }) => {

    console.log(data)
  return(
    <div className="image-container">
      {/* Render the popup when the image is hovered */}
        <div className="image-popup show">
          <div>
            <p>{data?.alt_description}</p>
            <p>{data?.description}</p>
          </div>
        </div>
    </div>
  );
}

export default ImagePopup;