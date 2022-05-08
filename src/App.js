import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import CreateBlog  from './Components/CreateBlog'
import BlogDetails from './Components/BlogDetails';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/create" element={<CreateBlog/>}/>
            <Route exact path="/blog/:id" element={<BlogDetails/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
