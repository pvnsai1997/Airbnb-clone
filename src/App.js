import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SearchPage from './SearchPage';

function App() {
  return (  
    <div className="App">
      <Router>
        < Header />
        <Routes>
          {/* /*/}
          {/* Search */}
          <Route path='/Search' element={<SearchPage />} />

          <Route path ="/" element={<Home></Home>} />

        </Routes>

      <Footer/>

      </Router>

      {/* Header */}
      {
        /* Bannerr  */
      }


      {
        /* Cards*/
      }

      {
        /* Footer */
      } 

      { /*  */}
    </div>
  );
}

export default App;
