import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Students from './Components/Students'
import ContactUs from './Components/ContactUs'
import PageNotFound from './Components/PageNotFound'
import UpdateStudents from './Components/UpdateStudents'
import {Studentdata} from './Components/ContextAPI'

function App() {
  return (
    <Studentdata>
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="home"  element={<Home/>}/>
          <Route path="students"  element={<Students/>}/>
          <Route path="updatestudents"  element={<UpdateStudents/>}/>
          <Route path="updatestudents/:id"  element={<UpdateStudents/>}/>
          <Route path="contactus"  element={<ContactUs/>}/>
          <Route path="/*"  element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
    </Studentdata>
  );
}

export default App;
