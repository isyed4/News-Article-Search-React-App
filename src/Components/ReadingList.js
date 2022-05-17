
const ReadingList = (props) => {

    const listItemArr = props.readingList.map((item,index)=>{
        return(
            <>
            <li>Title: {item.title}</li>
            <br />
            <a target="_blank" href={item.url}>Click here for article!</a>
            <br />
            <br />
            <button onClick={()=>props.removeItem(index)}>Remove</button>
            </>
        )
    })

    return(
        <>

        <h1>Reading List</h1>
         <ul>
            {listItemArr}
         </ul>

        </>

    )
}

export default ReadingList;