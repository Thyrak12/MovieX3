// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './Slide.css'
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function MovieCard(url, title, text) {
    return (
        <div className='card-container'>
            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img className='card-img' variant="top" src={url} />
                <Card.Body className='card-body'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

function SlideMovie() {
    return (
        <div className='slide-container bg-dark' >
            <button>Lastest Movie {'➩'} </button>
            <div className='card-container'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={5}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}>
                    <SwiperSlide >
                        {MovieCard("https://comicbook.com/wp-content/uploads/sites/4/2024/12/loki-season-2-key-art-header.jpg?resize=2000,1125", "Loki", "Loki")}
                    </SwiperSlide>
                    <SwiperSlide>
                        {MovieCard("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxBK54SKIu9LIKYPqOZsYGm7AZRvcmMLQsg&s", "Loki", "Loki")}
                    </SwiperSlide><SwiperSlide>
                        {MovieCard("https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/0a823cb0-01a9-4835-a348-c64187783ccb/d37cb96c-805c-4aa2-9f2f-e62d9eb814c7/1280x720/match/image.jpg", "Loki", "Loki")}
                    </SwiperSlide><SwiperSlide>
                        {MovieCard("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxBK54SKIu9LIKYPqOZsYGm7AZRvcmMLQsg&s", "Loki", "Loki")}
                    </SwiperSlide><SwiperSlide>
                        {MovieCard("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Dl2K1d0fRW0qz6tIGxznKVsFJbPTPWL7oA&s", "Loki", "Loki")}
                    </SwiperSlide><SwiperSlide>
                        {MovieCard("https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3421528F5E3679CEA7D89FE51BE6DE6904289364AD148688A2E236A340144BF6/scale?width=1200&aspectRatio=1.78&format=webp", "Loki", "Loki")}
                    </SwiperSlide><SwiperSlide>
                        {MovieCard("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Dl2K1d0fRW0qz6tIGxznKVsFJbPTPWL7oA&s", "Loki", "Loki")}
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default SlideMovie;