import React from 'react'
import "./SearchPage.css"
import { Button } from '@mui/material'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='SearchPage'>
        <div className='searchpage_info'>

            <p>
                62 stays. 26 august to 30 august .  guest
            </p>    
            <h1> 
                Stays nearby
            </h1>
            <Button variant='outlined'>
                Cancellation fexability
            </Button>
            <Button variant='outlined'>
                Types of place
            </Button>
            <Button variant='outlined'>
                Price
            </Button>
            <Button variant='outlined'>
                Rooms and Beds
            </Button>
            <Button variant='outlined'>
                More Filters
            </Button>

        </ div>    
        <SearchResult 
        img = "https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=2048"
        location="Private Viila at mountain tops"
        title="Stays at this spacious House"
        description="1 Guest 1 room  1Bed 1 Bathroom WIFI Kitchen Paddio Free Parking"
        price="$30/night"
        total ="$120"
        star="4.67"
        />
        <SearchResult 
        img = "https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=2048"
        location="Private Viila at mountain tops"
        title="Stays at this spacious House"
        description="1 Guest 1 room  1Bed 1 Bathroom WIFI Kitchen Paddio Free Parking"
        price="$30/night"
        total ="$120"
        star="4.67"
        />
        <SearchResult 
        img = "https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=2048"
        location="Private Viila at mountain tops"
        title="Stays at this spacious House"
        description="1 Guest 1 room  1Bed 1 Bathroom WIFI Kitchen Paddio Free Parking"
        price="$30/night"
        total ="$120"
        star="4.67"
        />
        <SearchResult 
        img = "https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=2048"
        location="Private Viila at mountain tops"
        title="Stays at this spacious House"
        description="1 Guest 1 room  1Bed 1 Bathroom WIFI Kitchen Paddio Free Parking"
        price="$30/night"
        total ="$120"
        star="4.67"
        />
    </div>
  )
}

export default SearchPage