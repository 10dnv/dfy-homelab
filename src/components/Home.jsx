import React, { useEffect, useState } from 'react'
import temp_pic from '../assets/temp.jpg'
import co2_pic from '../assets/co2.jpg'
import pm10_pic from '../assets/pm10.jpg'
import pm25_pic from '../assets/pm25.jpg'
import humid_pic from '../assets/humid.jpg'
import { FaMapLocationDot } from "react-icons/fa6";
import data from "../data/live-data.json"

function Home() {
    const [liveData, setLiveData] = useState("");
    
    useEffect(() => {
        setLiveData((data))
        console.log(liveData.co2)
      });

  return (
    <div className='text-white flex  flex-col  mx-auto'>
        <h1 className='text-bold text-3xl pt-8 text-center pb-10 text-warning'>Live Data</h1>
        <span className='flex items-center text-2xl gap-3 mx-auto pb-16'>
            <FaMapLocationDot className='text-warning'/>
            <h1 className=''>Brasov, Romania</h1>
        </span>

        <div className='homepage-content flex gap-10'>

            <div className="card w-48 h-[90%] bg-base-100 shadow-xl">
                <figure><img className="grayscale hover:grayscale-0" src={co2_pic} alt="Shoes" /></figure>
                <div className="card-body items-center text-center border-t border-warning">
                    <h2 className="card-title text-warning">CO2</h2>
                    <p>{liveData.co2}</p>
                </div>
            </div>

            <div className="card w-48 h-[90%] bg-base-100 shadow-xl">
                <figure><img className="grayscale hover:grayscale-0 " src={pm10_pic} alt="Shoes" /></figure>
                <div className="card-body items-center text-center border-t border-warning">
                    <h2 className="card-title text-warning">PM10</h2>
                    <p>{liveData.pm10}</p>
                </div>
            </div>
            <div className="card w-48 h-[90%] bg-base-100 shadow-xl">
                <figure><img className="grayscale hover:grayscale-0" src={pm25_pic} alt="Shoes" /></figure>
                <div className="card-body items-center text-center border-t border-warning">
                    <h2 className="card-title text-warning">PM25</h2>
                    <p>{liveData.pm25}</p>
                </div>
            </div>

            <div className="card w-48 h-[90%] bg-base-100 shadow-xl">
                <figure><img className="grayscale hover:grayscale-0" src={temp_pic} alt="Shoes" /></figure>
                <div className="card-body items-center text-center border-t border-warning">
                    <h2 className="card-title text-warning">Temperature</h2>
                    <p>{liveData.temperature}°C</p>

                </div>
            </div>
            <div className="card w-48 h-[90%] bg-base-100 shadow-xl">
                <figure><img className="grayscale hover:grayscale-0" src={humid_pic} /></figure>
                <div className="card-body items-center text-center border-t border-warning">
                    <h2 className="card-title text-warning">Humidity</h2>
                    <p>{liveData.humidity}%</p>
                </div>
            </div>
        </div>
        

    </div>
    
  )
}

export default Home