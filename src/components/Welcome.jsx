import { Carousel } from './Carousel';
import './Welcome.css';
import './styles/Carousel.css'; 
import {slides} from "./carouselData.json"

const Welcome = () => {

return (
<div>
<section className='content'>
<h1 className='h11'>Welcome to <img className="img" src="/animal-icon-png-6266.png" width="85" alt="img"/><span className='span1'>DoggyDayCare.</span></h1> <br /><br />
<Carousel data={slides}/>
<br />
<h3><span className='spanC'>We</span> understand that your furry family members are more than just pets; they are cherished companions who deserve the very best care and attention. 
That's why we've created a home away from home, a place where your four-legged friends can play, learn, and socialize in a safe and loving environment.
Our dedicated team of experienced and passionate caregivers is here to ensure that your dogs have a tail-wagging good time.
 From the moment they step through our doors, they'll be greeted with smiles and open arms. 
 We're committed to making their time with us enjoyable, comfortable, and filled with exciting activities. </h3>
<br /> <br /> 
</section>
</div>
)
}

export default Welcome; 