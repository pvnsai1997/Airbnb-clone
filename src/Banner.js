import React, {useState} from 'react'
import './Banner.css'
import Search  from './Search'
import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom";

function Banner() {
const history = useNavigate();
const[showSearch, setShowSearch] = useState(false);

  return (
    <div className='Banner'>
        <div className='Banner_search'>
            {showSearch && <Search></Search>}
            
            <Button onClick={() => setShowSearch(!showSearch)} className = 'Banner_info_button' variant='outlined'>
                {showSearch? "Hide" : "Search Dates"} 
            </Button>
        </div>
            <div className='Banner_info'>
            <h1>
                Create you booking with us
            </h1>
            <h5>
                And have a happy stay
            </h5>
            <Button onClick={() => history('/search')}
            variant='outlined'>
                Explore nearby
            </Button>

        </div>
    </div>
  )
}

export default Banner