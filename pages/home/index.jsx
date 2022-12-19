import React from 'react'
import Carousel from '../../components/ui/Carousel';
import Campaigns from '../../components/Campaigns';
import MenuWrapper from '../../components/menu/MenuWrapper'
const Home = ( ) => {
    
    return (
        <div >
            <Carousel />
            <Campaigns />
            <MenuWrapper />
        </div>
    )
}

export default Home