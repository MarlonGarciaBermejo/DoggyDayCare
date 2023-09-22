import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Catalog from './components/Catalog'
import DogInfo from './components/DogInfo'

function App() {

  const WELCOME = 'Welcome', CATALOG = 'Catalog', DOGINFO = 'DogInfo';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);

  let content = null;

  switch(currentScreen) {
    case WELCOME : 
    content = <Welcome nextScreen={() => setCurrentScreen(CATALOG) }/>;
      break;
    case CATALOG :
      content = <Catalog />
      break;
    case DOGINFO : 
      content = <DogInfo />
      break;
    default:
      content = <Welcome />

  }


  return (
    <div>
   {content}
    </div>
  )
}

export default App
