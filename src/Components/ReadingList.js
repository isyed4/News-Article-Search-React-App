
const ReadingList = (props) => {

    const listItemArr = props.readingList.map((item)=>{
        return(
            <>
            <li>{item.title}</li>
            <li>{item.url}</li>
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