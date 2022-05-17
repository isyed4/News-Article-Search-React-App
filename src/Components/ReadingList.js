
const ReadingList = (props) => {

    const listItemArr = props.readingList.map((item)=>{
        return(
            <>
            <li>{item.title}</li>
            <br />
            <li>{item.url}</li>
            <button>Remove</button>
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