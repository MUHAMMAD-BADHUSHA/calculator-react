import './App.css'
import Calculator from './calculator'
import{HashRouter as Router,Routes,Route} from "react-router-dom"
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
