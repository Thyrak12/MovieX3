import Carousel from './Carousel'
import Slide from './Slider'
import { dataMovie } from './Data'

function Home() {

  return (
    <>
      <Carousel />
      {
        dataMovie.map((data) => {
          return <Slide key={data.id} movieNames={data}/>
        })
      }
    </>
  )
}

export default Home