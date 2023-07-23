import { useEffect, useState } from "react"
import "./body.css"
import Logo from "../../assets/app_logo.png"
import Filter from "../Filter"
import ImageCart from "../ImageCart"
import axios from "axios"

const Body = ()=>{

    const [images , setImages] = useState(null)
    const [searchText , setSearchText] = useState("")

    useEffect(()=>{
        fetchData("animal")
    },[])

    let [searchImage , setSearchImage] = useState("")

    async function fetchData(img) {

        if(img.length > 0)
        {
            const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=15&query=${img}&&client_id=jIqYSUwqXzTJAVRtK-25YqD1otT6L-e3Xt0spwhgm2o`)
            setImages(response?.data?.results)
            setSearchImage(img)   
        }
    }

    return(
        <div className="app_layout_wrapper">
           <div className="logo_wrapper">
             <img 
              src={Logo} 
              alt="This is logo"
              className="main_logo" 
            />
           </div>
            <div className="search_container">
                <div className="search_btn_wrapper">
                <input 
                type="text"
                placeholder="Search Images"
                className="search_input"
                onChange={(e)=>setSearchText(e.target.value)}
                />
                <button className="search_btn cur-poi"
                onClick={()=>fetchData(searchText)}
                >Search</button>
                </div>
            </div>
            <Filter fetchData = {fetchData}/>
            {
                images === null || images.length === 0 ? 
                <ImageCart images = {images} searchImage = {searchImage} /> :
                images.map((imagesItem)=>(
                    <ImageCart images = {imagesItem} searchImage = {searchImage} key={imagesItem.id}/>
                ))
            }
        </div>
    )
}

export default Body