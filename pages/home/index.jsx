import React from 'react'
import Carousel from '../../components/ui/Carousel';
import Campaigns from '../../components/Campaigns';
import MenuWrapper from '../../components/menu/MenuWrapper'
import About from '../../components/About'
import Reservation from '../../components/Reservation';
const Home = ( ) => {
    
    return (
        <div >
            <Carousel />
            <Campaigns />
            <MenuWrapper />
            <About />
            <Reservation />
        </div>
    )
}

export default Home