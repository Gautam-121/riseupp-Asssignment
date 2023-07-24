import { useEffect, useState } from "react"
import "./body.css"
import Logo from "../../assets/app_logo.png"
import Filter from "../Filter"
import ImageCart from "../ImageCart"
import Shimmer from "../Shimmer"
import NotFound from "../NotFound"

const Body = ()=>{

    const [images , setImages] = useState(null)
    const [searchText , setSearchText] = useState("")
    const [searchImage , setSearchImage] = useState("")
    const [showShimmer , setShowShimmer] = useState(true)

    useEffect(()=>{
        fetchData("animal")
    },[])

    useEffect(()=>{
        const timer = setTimeout(()=>{
          setShowShimmer(false)
        },1000)
    
        return ()=> clearInterval(timer)
      },[])
    


    async function fetchData(img) {

        if(img.length > 0)
        {
            const data = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=15&query=${img}&&client_id=jIqYSUwqXzTJAVRtK-25YqD1otT6L-e3Xt0spwhgm2o`)
            const response = await data.json()
            console.log(response)
            setImages(response?.results)
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
            <div className="image-serch">
              {searchImage}
            </div>
            {
                images === null || showShimmer ? 
                <Shimmer/> :
                images.length === 0 ? <NotFound/> : <ImageCart images = {images} />
            }
        </div>
    )
}

export default Body