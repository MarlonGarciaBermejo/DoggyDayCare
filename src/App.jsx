import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Catalog from './components/Catalog'
import DogInfo from './components/DogInfo'
import Navbar from './components/Navbar'


function App() {

  const WELCOME = 'Welcome', CATALOG = 'Catalog', DOGINFO = 'DogInfo';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);

  let content = null;

  switch(currentScreen) {
    case WELCOME : 
      content = <Welcome nextScreen={() => setCurrentScreen(CATALOG) }/>;
      break;
    case CATALOG :
      content = <Catalog nextScreen = {() => setCurrentScreen(DOGINFO)} />;
      break;
    case DOGINFO : 
      content = <DogInfo nextScreen = {() => setCurrentScreen(CATALOG)} />;
      break;
    default:
      content = <Welcome />;

  }


  return (

    <div>
      <Navbar/>
      {content}
    </div>
    
  )
}

export default App
