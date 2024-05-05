import {Card} from "./components/Card.jsx";
import './assets/styles/app.scss';
import cover from "./assets/images/cover.jpg"

function App() {

  return (
    <>
      <Card image={cover} artist="Taylor Swift" song="Blank Space" year={2014}/>
    </>
  )
}

export default App
