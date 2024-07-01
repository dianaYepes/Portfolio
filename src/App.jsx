import { BrowserRouter } from "react-router-dom"
import { Hero, LightUp} from './components'

const App = ()=> {

  return(
    <BrowserRouter>
        <div className="background-container">
            <Hero />
        </div>
        <LightUp/>
    </BrowserRouter>
  )
}
export default App
