import React from 'react'
import "./Searchresult.css"
import StarIcon from "@mui/icons-material/Star"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function SearchResult({img,location,title,description,star,price,total }) {
  return (
    <div className='SearchResult'>
        <img src={img} alt = "" />
        <FavoriteBorderIcon className = "searchresult_heart" />

        <div className='searchresult_info'>
            <div className='searchresult_infotop'>
                <p>{location}</p>
                <h3>{title}</h3>
                <p>___</p>
                <p>{description}</p>
            </div>
            <div className='searchresult_infobottom'>
                <div className='searchresult_stars'>
                    <StarIcon className='searchresult_star'>
                    </StarIcon>
                    <p>
                        <strong>{star}</strong>
                    </p>
                </div>
                <div className='searchresult_price'>
                    <h2> {price}</h2>
                    <p>{total}</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SearchResult