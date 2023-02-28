export default function Navbar ({items, clearItems}) {
    const btnClicked = () => {
    }
    return (
        <nav className="navbar bg-dark px-1 py-3 border-bottom">
            <div className="container-fluid">
                <a 
                    className="navbar-brand text-white"
                    href="">
                    React Todo Application
                </a>
                
                { (items.length > 0) && (
                    <button
                        className="btn btn-outline-success rounded-1 text-white"
                        onClick={clearItems}    
                    >
                        Clear Items
                    </button>
                ) }
                
            </div>
        </nav>
    )
}