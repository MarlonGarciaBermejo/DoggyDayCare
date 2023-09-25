import './Welcome.css';

const Welcome = (props) => {

return (
<section className="content">
<h1>Welcome to <img className="img" src="/animal-icon-png-6266.png" width="85" alt="img"/><span className='span1'>DoggyDayCare.</span></h1>
<h3 className='h22'>We care for your loved ones.</h3>
<button className='btn1' onClick={props.nextScreen}>Our dogs</button>
</section>

)
}
export default Welcome; 