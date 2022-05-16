import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import ReadingList from './Components/ReadingList';
import About from './Components/About';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [readingList, setReadingList] = useState([])

  const addNewListItem = (article) => {
    let copy = [...readingList]

    copy.push(article)

    setReadingList(copy)

    console.log(readingList);

  }


  return (
    <div className="App">

      <nav>
        <ul>

          <Link to='/'>
          <li>Home</li>
          </Link>

          <Link to='/readinglist'>
          <li>Reading List</li>
          </Link>

          <Link to='/about'>
          <li>About</li>
          </Link>

        </ul>
      </nav>




      <main>
        <Routes>
          <Route path='/' element={<Home  addNewListItem={addNewListItem}/>} />
          <Route path='/readinglist' element={<ReadingList readingList={readingList}/>} />
          <Route path='/about' element={<About/>} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
