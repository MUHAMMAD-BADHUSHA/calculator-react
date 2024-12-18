import './App.css'
import Calculator from './calculator'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
 

  return (
    <>
    <Router>
    <Routes>
      <Route path='/'element={<Calculator/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
