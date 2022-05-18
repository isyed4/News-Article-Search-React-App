import { Link } from "react-router-dom";
import { useState } from "react";


const Home = (props) => {

    const [searchTopic, setSearchTopic] = useState('')
    const [searchDate, setSearchDate] = useState('')
    const [articles, setArticles] = useState([])


    const apiKey = '56b24ea2ee9e4820a2454b3f6276cf33'

    const handleChangeTopic = (event) =>{
        setSearchTopic(event.target.value)
    }

    const handleChangeDate = (event) => {
        setSearchDate(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(`https://newsapi.org/v2/everything?q=${searchTopic}&from=${searchDate}&sortBy=popularity&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => setArticles(data.articles))   

        setSearchTopic('')
        setSearchDate('')

    }


    const articleArr = articles.map((item)=>{
        return(
        <ul>
            <li className='title'>{item.title}</li>
            <br />
            <img src={item.urlToImage} />
            <br />
            <br />
            <li className="synopsis">Synopsis: {item.description}</li>
            <br />
            <a target="_blank" href={item.url}>Read Article Here</a>
            <br />
            <br />
            <button onClick={()=> props.addNewListItem(item)}>Add to Reading List</button>
            <br />
            <br />
        </ul>
        )
    })

   


    return(

    <div className = 'home'>
            
        <h1>Search News Articles </h1>

        <form onSubmit={handleSubmit}>
            <input onChange ={handleChangeTopic}value ={searchTopic} type="text" placeholder="Topic"/>
            <input onChange={handleChangeDate}value={searchDate} type="text" placeholder="yyyy-mm-dd"/>
            <input type="submit" value='Find Articles'/>
        </form>

        <div className='rendered-articles'>
            
           {articleArr}


        </div>

    </div>
    )
}

export default Home;