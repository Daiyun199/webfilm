import React from 'react'
import Header from '../../components/header'
import Carousel from '../../components/carousel'

function HomePage() {
    return (
        <div>
            <Header />
            <Carousel numberOfSlide={1} category={"Trending"} />
            <Carousel numberOfSlide={4} category={"Comedy"} isUseNavigation={true} title={"Comedy"} />
            <Carousel numberOfSlide={4} category={"Horror"} isUseNavigation={true} title={"Horror"} />
        </div>
    )
}

export default HomePage
