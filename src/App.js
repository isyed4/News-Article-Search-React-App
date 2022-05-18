import './App.css';
import Home from './Components/Home';
import ReadingList from './Components/ReadingList';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes, Route,} from "react-router-dom";
import { useState } from 'react';

function App() {

  const [readingList, setReadingList] = useState([])

  const addNewListItem = (article) => {
    let copy = [...readingList]

    copy.push(article)

    setReadingList(copy)

  }

  const removeItem = (articleId) => {

      let filterArr = readingList.filter((item, index)=>{
        return(index !== articleId)
      })

      setReadingList(filterArr)
  }


  return (
    <div className="App">

    
      <Header/>
      
      <main>
      
        <Routes>
          <Route path='/' element={<Home  addNewListItem={addNewListItem}/>} />
          <Route path='/readinglist' element={<ReadingList removeItem={removeItem} readingList={readingList}/>} />
          <Route path='/about' element={<About/>} />
        </Routes>

      </main>

      <Footer/>

     

    </div>
  );
}

export default App;
