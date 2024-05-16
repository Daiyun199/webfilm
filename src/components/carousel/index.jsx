
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.scss';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Carousel({ numberOfSlide, category, isUseNavigation = false, title }) {
    const [movies, setMovies] = useState([]);

    async function fetchMovie() {
        const response = await axios.get("https://6627a8d4b625bf088c092eba.mockapi.io/Movie");
        console.log(response.data);
        setMovies(response.data);
    }
    useEffect(() => {
        fetchMovie();
    }, []);
    return (
        <div className={`carousel ${numberOfSlide > 1 ? "multi-item" : ""}`}>
            {/* chỉ show title khi và chỉ khi có title => title === null => ko show*/}
            {title && <h1>{title}</h1>}
            <Swiper pagination={true}
                navigation={isUseNavigation}
                slidesPerView={numberOfSlide}
                spaceBetween={10}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper" autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}>
                <SwiperSlide>
                    <img src="https://image.tmdb.org/t/p/original/ciizJ9Okzt9tBBGK7Q3T14LFT2j.jpg" alt="">
                    </img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://pbs.twimg.com/media/F5s-3z4bQAAJo6i?format=jpg&name=large" alt="">
                    </img>
                </SwiperSlide>
                { /* movie => SwiperSlide*/}
                {/* cứ mỗi movie trong movies => SwipeSlide*/}
                {movies.filter(movie => movie.category === category).map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <img src={movie.poster_path} alt="">
                        </img>
                    </SwiperSlide>))}
            </Swiper>
        </div>
    );
}
