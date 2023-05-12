import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import C2 from './c2'



const C1 = () => {
    const [data, setData] = useState([])
    const [data1, setData1] = useState([])
    const [lkj, setLkj] = useState(false)
    const [sn, setSn] = useState([])
    useEffect(() => {
        const fetchapi = async () => {
            const url = `https://api.tvmaze.com/search/shows?q=all`
            const response = await fetch(url)
            const reJson = await response.json()
            setData(reJson)
            setData1(reJson)
            console.log({data})

        }
        fetchapi()
    }, [])
    const fun1 = (index)=>{
        if (lkj===false){
        const updateddata = data.filter((currE)=>{
            return currE.score == index
        })
        setData(updateddata)
        setLkj(true)}
        else if (lkj===true){
            setData(data1)
            setLkj(false)

        }
    }
    const navigate = useNavigate()
    const fun2 = ((show_name)=>{
        setSn(show_name)        
        navigate('/c2',{state:{name:show_name}})
    })
    return (
        <>
        
        <div class="container">
            {<div className="row">
                {
                    data.map((ce) => {
                        return (
                            <>
                                <div class="col-md-4">
                                    <img src={ce.show.image ? ce.show.image.medium : ""} alt="" />                                
                                    <h2>{ce.show.name}</h2>
                                    <p><b>Show Genre : </b>{ce.show.genres[0]}</p>
                                    <p><b>Show Language : </b>{ce.show.language}</p>
                                    <p><b>Show Ratings : </b>{ce.show.rating.average}</p>
                                    {lkj ? <p><b>Show Summary : </b>{ce.show.summary}</p> : '' }
                                    {!lkj ? <p><a class="btn btn-secondary" role="button" onClick={()=>{fun1(ce.score)}}>View details »</a></p>: ""}
                                    {lkj ? <p><a class="btn btn-secondary" role="button" onClick={()=>fun2(ce.show.name)} >Book Now »</a></p>: ""}
                                </div>
                            </>
                        )
                    })
                }
            </div>}
            </div>
        </>
    )
}

export default C1