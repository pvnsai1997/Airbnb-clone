import React from 'react'
import './Home.css'
import Banner from'./Banner'
import Card from "./Card"

function Home() {
  return (
    <div className='Home'>
        <Banner/>
        < div className='home_section'>
          <Card 
          src = "https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt32f089a69c8e154f/609c377360ef647e3979d07b/StinsonBeach_22256187_Bedroom_1_JSL1_169crop.jpg?crop=100p,100p,x0,y0&width=1050&height=591&auto=webp"
          title="Online Expirences"
          description="Need activities, we can do together, led by a world of hosts."/>
          <Card 
          src  = "https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt89a30e3eb7afaccf/609c478b2bcbae0ac87ca68b/22256187_Iconic-Homes-Birds-Nest_013_169crop.jpg?crop=100p,100p,x0,y0&width=1050&height=591&auto=webp"
          title = "Unique Stays"
          description= "Spaces that are more than just a place to sleep "/>
          <Card 
          src = "https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt89a30e3eb7afaccf/609c478b2bcbae0ac87ca68b/22256187_Iconic-Homes-Birds-Nest_013_169crop.jpg?crop=100p,100p,x0,y0&width=1050&height=591&auto=webp"
          title= " Entrie homes"
          description="Comfortable private places, with room for friends or family"/>
        </div>
        <div className='home_section'>
          <Card 
          src = "https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt78e4567288c4f1d9/61ae98c6a9b9a012eb90b66c/image1.jpg?crop=100p,84.47p,x0,y7.63p&width=1050&height=591&auto=webp"
          title = "3 Bedroom flat in Herndon"
          description="Good Flat with 3 washrooms"/>
          <Card 
          src = "https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt5186efd1fc4c2de8/5dc22c2bd451a5067afce618/2UV408XAWJOVI.jpg?crop=99.82p,84.21p,x0.17p,y14.73p&width=1050&height=591&auto=webp"
          title = "Penthouse in london"
          description="Flat with London Skyline"/>
          <Card 
          src = "https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt2ac0ddc3ce7dc8ec/5efb7235f3d0810fd467e37f/img1_hero_(1).jpg?crop=100p,100p,x0,y0&width=1050&height=591&auto=webp"
          title = "1 Bedroom apartment"
          description="Good spacious House"/>
        </div>
    </div>
  )
}

export default Home