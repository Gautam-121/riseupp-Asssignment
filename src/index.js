import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// const [images , setImages] = useState(null)
//     const [searchText , setSearchText] = useState("")
//     const [searchImage , setSearchImage] = useState("")
//     const [showShimmer , setShowShimmer] = useState(true)


//     useEffect(()=>{
//         fetchData("animal")
//     },[])

//     useEffect(()=>{
//         const timer = setTimeout(()=>{
//           setShowShimmer(false)
//         },1000)
    
//         return ()=> clearInterval(timer)
//       },[])

//       async function fetchData(img) {

//         if(img.length > 0)
//         {
//             const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=15&query=${img}&&client_id=jIqYSUwqXzTJAVRtK-25YqD1otT6L-e3Xt0spwhgm2o`)

//             console.log(response)
//             setImages(response?.data?.results)
//             setSearchImage(img)   
//         }
//     }

    

