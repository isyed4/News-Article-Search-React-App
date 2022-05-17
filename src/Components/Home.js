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

    }


    const articleArr = articles.map((item)=>{
        return(
            <>
            <li>Title: {item.title}</li>
            <br />
            <img src={item.urlToImage} />
            <br />
            <br />
            <li>Synopsis: {item.description}</li>
            <br />
            <a target="_blank" href={item.url}>Click Here for Article!</a>
            <br />
            <br />
            <button onClick={()=> props.addNewListItem(item)}>Add to List</button>
            <br />
            <br />
            </>
        )
    })

   


    return(

        <div>

        <form onSubmit={handleSubmit}>
            <input onChange ={handleChangeTopic}value ={searchTopic} type="text" placeholder="topic"/>
            <input onChange={handleChangeDate}value={searchDate} type="text" placeholder="year-month-day"/>
            <input type="submit" value='Find Articles'/>
        </form>

        <ul>
            
           {articleArr}


        </ul>

        </div>
    )
}

export default Home;