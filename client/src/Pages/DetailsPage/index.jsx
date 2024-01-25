import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import "./index.scss"
const DetailsPage = () => {
    const [detail, setDetail] = useState()
    const {id} = useParams()

    async function getDetail() {
        const res = await axios.get(`http://localhost:4000/products/${id}`)
        setDetail(res.data)
    }
    useEffect(() => {
        getDetail()
      
    }, [])
    
  return (
    <div className='detail'>
        {
            detail ? <div className='detailsCart'>
                <img src={detail.image}/>
                <p>{detail.name}</p>
                <p>{detail.info}</p>
                <p>{detail.price}</p>
            </div> : ""
        } 
        
    </div>
  )
}

export default DetailsPage