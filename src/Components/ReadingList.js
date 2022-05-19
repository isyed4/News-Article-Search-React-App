
const ReadingList = (props) => {

    const listItemArr = props.readingList.map((item,index)=>{
        return(
            <ul>
                <li className="reading-list-title">{item.title}</li>
                <br />
                <a target="_blank" href={item.url}>Read Article Here</a>
                <br />
                <br />
                <button onClick={()=>props.removeItem(index)}>Remove</button>
            </ul>
        )
    })

    return(
    <div className='reading-list'>

        <h1>Reading List</h1>
        
         <div className='rendered-reading-list'>
            {listItemArr}
         </div>

    </div>

    )
}

export default ReadingList;