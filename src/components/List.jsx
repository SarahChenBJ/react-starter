export default function List({items, deleteItem, editItem}) {

    if (items.length === 0) return (
        <p className="text-center fs-3 mt-5">Nothing on my Todo Lixt</p>
    )

    
    return (
        <ul className="list-group mt-5 rounded-1">
            {
            
            /* 
            Step #1: Render a Static block to design the page
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>Item 1</span>
                <div>
                    <i className="bi bi-pencil-square text-warning fs-5 pointer me-3"></i>
                    <i className="bi bi-trash text-danger fs-5 pointer"></i>
                </div>
            </li> */}
            
            {
            /* 
            Step #2: Pass the props and render blocks with data
            {items.map((item) => {
                return (
                    <li className="list-group-item d-flex justify-content-between align-items-center"
                        key={item.id}
                    >
                        <span>{item.text}</span>
                        <div>
                            <i className="bi bi-pencil-square text-warning fs-5 pointer me-3"></i>
                            <i className="bi bi-trash text-danger fs-5 pointer"></i>
                        </div>
                    </li>
                )

            })} */
            }
            {items.map((item) => (
                <li className="list-group-item d-flex justify-content-between align-items-center"
                key={item.id}
            >
                <span>{item.text}</span>
                <div>
                    <i className="bi bi-pencil-square text-warning fs-5 pointer me-3" onClick={()=>editItem(item)}></i>
                    <i className="bi bi-trash text-danger fs-5 pointer" onClick={()=> deleteItem(item)}></i>
                </div>
            </li>
            ))}
        </ul>
    )
}