import React, { useState } from 'react'
import axios from 'axios';
const Header = () => {

    const[image,setImage]=useState([])
    const getimage=async ()=>{

    try {
        const res=await axios.get('https://picsum.photos/v2/list')
        const data=res.data;
        console.log(data)
        setImage(data)
            
        } catch (error) {
            console.error('error')
        }

    }
  return (

    
        
    
    <div>
    <button onClick={getimage}>get image</button>
    <div>
        
    </div>.
      {image.map((ele)=>(
               <img key={ele.id} src={ele.download_url} style={{width:"50px" , height:"50px"}}/>
         

        

      ))}
    </div>
  )
}

export default Header
