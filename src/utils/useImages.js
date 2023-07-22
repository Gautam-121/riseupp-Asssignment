import { useEffect, useState } from "react"
import axios from "axios"

const useImages = ()=>{

    const [images , setImages] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData() {
        const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=16&query=office&&client_id=jIqYSUwqXzTJAVRtK-25YqD1otT6L-e3Xt0spwhgm2o`)
        setImages(response?.data?.results)
    }

    return images
}

export default useImages