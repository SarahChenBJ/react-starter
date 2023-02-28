import { useState } from "react"

export default function Form({addItem}) {
    const [text, setText] = useState("")
    const onClick = ()=>{
        addItem({id: Date.now(), text})
        setText("")
    }
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group mb-3">
                <input 
                    className="form-control rounded-0"
                    placeholder="Add Item Text Here"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    ></input>
                <button
                    className="btn btn-success text-white rounded"
                    onClick={onClick}
                    disabled={text.length===0}
                >
                    Submit
                </button>
            </div>
            <hr></hr>
        </form>
    )
}