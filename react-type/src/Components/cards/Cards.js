import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Cards() {
    const [datas, setDatas] = useState([]);
    console.log(datas)

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await axios.get("./Creators.json");
                setDatas(res.data.creators);
                console.log(res.data.creators);
        }catch (error){
            console.log("error fatching data:" , error.masage )
        }
    }
        fetchData()
    }, [])

    
  return (
    <div>   
        Cards
    </div>
  )
}

export default Cards