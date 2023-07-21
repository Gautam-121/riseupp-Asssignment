import React, { useEffect } from "react"
import "./imageCart.css"

const ImageCart = ()=>{

    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData(){

    }

    return(
        <div className = "Imagecart_container">
            <div className = "Imagecart_wrapper">
                <img 
                src="https://i.pinimg.com/originals/61/b3/45/61b345980671c05ddc87169a1d4874bd.jpg" 
                alt="This is img"
                className = "cart_image cur-poi" 
                />
                <span>jIqYSUwqXzTJAVRtK-25YqD1otT6L-e3Xt0spwhgm2o</span>
            </div>
            <div className = "Imagecart_wrapper">
                <img 
                src="https://i.pinimg.com/originals/61/b3/45/61b345980671c05ddc87169a1d4874bd.jpg" 
                alt="This is img"
                className = "cart_image" 
                />
            </div>
            <div className = "Imagecart_wrapper">
                <img 
                src="https://i.pinimg.com/originals/61/b3/45/61b345980671c05ddc87169a1d4874bd.jpg" 
                alt="This is img"
                className = "cart_image" 
                />
            </div>
            <div className = "Imagecart_wrapper">
                <img 
                src="https://i.pinimg.com/originals/61/b3/45/61b345980671c05ddc87169a1d4874bd.jpg" 
                alt="This is img"
                className = "cart_image" 
                />
            </div>
            <div className = "Imagecart_wrapper">
                <img 
                src="https://i.pinimg.com/originals/61/b3/45/61b345980671c05ddc87169a1d4874bd.jpg" 
                alt="This is img"
                className = "cart_image" 
                />
            </div> <div className = "Imagecart_wrapper">
                <img 
                src="https://i.pinimg.com/originals/61/b3/45/61b345980671c05ddc87169a1d4874bd.jpg" 
                alt="This is img"
                className = "cart_image" 
                />
            </div> <div className = "Imagecart_wrapper">
                <img 
                src="https://i.pinimg.com/originals/61/b3/45/61b345980671c05ddc87169a1d4874bd.jpg" 
                alt="This is img"
                className = "cart_image" 
                />
            </div> <div className = "Imagecart_wrapper">
                <img 
                src="https://i.pinimg.com/originals/61/b3/45/61b345980671c05ddc87169a1d4874bd.jpg" 
                alt="This is img"
                className = "cart_image" 
                />
            </div> <div className = "Imagecart_wrapper">
                <img 
                src="https://i.pinimg.com/originals/61/b3/45/61b345980671c05ddc87169a1d4874bd.jpg" 
                alt="This is img"
                className = "cart_image" 
                />
            </div> <div className = "Imagecart_wrapper">
                <img 
                src="https://i.pinimg.com/originals/61/b3/45/61b345980671c05ddc87169a1d4874bd.jpg" 
                alt="This is img"
                className = "cart_image" 
                />
            </div> <div className = "Imagecart_wrapper">
                <img 
                src="https://i.pinimg.com/originals/61/b3/45/61b345980671c05ddc87169a1d4874bd.jpg" 
                alt="This is img"
                className = "cart_image" 
                />
            </div> <div className = "Imagecart_wrapper">
                <img 
                src="https://i.pinimg.com/originals/61/b3/45/61b345980671c05ddc87169a1d4874bd.jpg" 
                alt="This is img"
                className = "cart_image" 
                />
            </div>
        </div>
    )
}

export default ImageCart