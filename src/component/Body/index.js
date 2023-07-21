import "./body.css"
import Logo from "../../assets/app_logo.png"

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
            <h3>Filter</h3>
            <h3>Cart</h3>
        </div>
    )
}

export default Body