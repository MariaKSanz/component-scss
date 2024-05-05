import {Card} from "./components/Card.jsx";
import './assets/styles/app.scss';
import cover from "./assets/images/cover.jpg"

function App() {

  return (
    <>
      <Card image={cover} title="Blank Space" album="1989" year={2014}/>
      <Card image={cover} title="Welcome To New York" album="1989" year={2014}/>
    </>
  )
}

export default App
