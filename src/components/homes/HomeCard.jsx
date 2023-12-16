import React from "react"
import { Link } from "react-router-dom"
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";

const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, janr, tags, video } }) => {
  return (
    <>
      <div className='box'>
        <div className='coverImage'>
          <img src={cover} alt='' />
        </div>
        <div className='content flex'>
          <div className='details row'>
            <h1>{name}</h1>
            <div className='rating flex'>
           

              
              <label>{time}</label>
            </div>
            <p>{desc}</p>
            <div className='cast'>
              <h4>
                <span>Baş rollarda: </span>
                {starring}
              </h4>
              <h4>
                <span>Janrlar: </span>
                {janr}
              </h4>
              <h4>
                <span>Məzmun: </span>
                {tags}
              </h4>
            </div>
            <button className='primary-btn'>
              <i className='fas fa-play'></i>  <h3>Başlat</h3>
            </button>
          </div>
          <div className='palyButton row'>
            <Link to={`/singlepage/${id}`}>
              <button>
                <div className='img'>
                  <img src='./images/play-button.png' alt='' />
                  <img src='./images/play.png' className='change' />
                </div>
               Traileri izlə
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard
