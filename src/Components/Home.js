import { Link } from "react-router-dom";
import { useState } from "react";


const Home = (props) => {

    const [searchTopic, setSearchTopic] = useState('')
    const [articles, setArticles] = useState([])


    const apiKey = 'JfthfewNjCsIcdGTcJH7mdL8joHhIAVS'

    const handleChangeTopic = (event) =>{
        setSearchTopic(event.target.value)
    }

  

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTopic}&api-key=${apiKey}`)
        .then(response => response.json())
        .then(data => setArticles(data.response.docs))   

        setSearchTopic('')
   
    }


    const articleArr = articles.map((item)=>{
        return(
        <ul>
            <li className='title'>{item.headline.main}</li>
            <br />
            <li className="synopsis">{item.abstract}</li>
            <br />
            <li>Publish Date: {item.pub_date}</li>
            <br />
            <a target="_blank" href={item.web_url}>Read Article Here</a>
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
            <ul>
                <li><input id='text-field'onChange ={handleChangeTopic}value ={searchTopic} type="text" placeholder="Enter Topic"/></li>
                <li><input id='submit-button'type="submit" value='Find Articles'/></li>
            </ul>
        </form>

        <div className='rendered-articles'>
            
           {articleArr}


        </div>

    </div>
    )
}

export default Home;