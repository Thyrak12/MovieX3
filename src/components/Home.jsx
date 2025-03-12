import Carousel from './Carousel'
import Slide from './Slider'
import { dataMovie } from './Data'
import Header from './Header'

function Home() {

  return (
    <>
      <Header/>
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