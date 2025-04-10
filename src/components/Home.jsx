import Carousel from './Carousel'
import Slide from './Slider'
import { dataMovie } from './Data'

function Home() {

  return (
    <>
      <Carousel /> {/* No editting */}
      {
        dataMovie.map((data) => {
          return <Slide key={data.id} movieNames={data}/>
        })
      } {/* No editting */}
    </>
  )
}

export default Home