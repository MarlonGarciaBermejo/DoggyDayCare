const Welcome = (props) => {

return (
<section className="content">

<h1 style= {{ fontFamily: 'Poppins', color: 'black'}}>Welcome to <span style={{color: 'orange'}}>DoggyDayCare.</span></h1>
<h2>We care for your loved ones.</h2>
<button onClick={props.nextScreen}>Our dogs</button>

</section>

)
}
export default Welcome; 