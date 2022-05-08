import {useState,useEffect} from 'react'
import axios from 'axios'

const useAxios = (url) => {
    const [data,setData] = useState(null)
    const [isPending,setPending] = useState(true);
    const [isError,setError] = useState(false);
    
    
    useEffect(() => {
        // fetch('http://localhost:8000/blogs').then((res) => {
        //     return res.json()
        // }).then((data) => {
        //     console.log(data)
        //     setBlogs(data)
        // })
        axios.get(url).then((res) => {
            setData(res.data);
            setPending(false);
            setError(false);
        }).catch((err) => {
            console.log(err)
            setError(err.message);
            setPending(false);
        })
       
    },[])

    return {data,isPending,isError}
}

export default useAxios;


