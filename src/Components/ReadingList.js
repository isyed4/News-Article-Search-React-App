
const ReadingList = (props) => {

    const listItemArr = props.readingList.map((item,index)=>{
        return(
            <>
            <li>{item.title}</li>
            <br />
            <li>{item.url}</li>
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