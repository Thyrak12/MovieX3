import Slide from './Slider'
import Header from './Header';
import { dataMovie } from './Data' 

export default function Search() {
    return (
        <div>
            {
                dataMovie.map((data) => {
                    return <Slide key={data.id} movieNames={data} />
                })
            }
        </div>
    );
}