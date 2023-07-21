import "./body.css"
import Logo from "../../assets/app_logo.png"
import Filter from "../Filter"
import ImageCart from "../ImageCart"

const Body = ()=>{
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
                />
                <button className="search_btn cur-poi">Search</button>
                </div>
            </div>
            <Filter/>
            <ImageCart/>
        </div>
    )
}

export default Body