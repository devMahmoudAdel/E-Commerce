import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateItem(){
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imgLink, setImgLink] = useState("");
    const [validation, setValidation] = useState(false);
    const [plus, setPlus] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const itemData = { id, name, description, imgLink, plus };
        
        fetch("http://localhost:8000/items", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(itemData)
        })
        .then((res) => {
            if (res.ok) {
                alert("Item saved successfully");
                navigate("/admin");
            } else {
                alert("Failed to save item");
            }
        })
        .catch((err) => console.log(err.message));
    };

    return (
       <div className="container">
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" name="id" required value={id} onChange={e => setId(e.target.value)} onMouseDown={() => setValidation(true)} />
                {id.length === 0 && validation && <span className="errorMsg">Please Enter your id</span>}

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required value={name} onChange={e => setName(e.target.value)} onMouseDown={() => setValidation(true)} />
                {name.length === 0 && validation && <span className="errorMsg">Please Enter your name</span>}

                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" required value={description} onChange={e => setDescription(e.target.value)} onMouseDown={() => setValidation(true)} />
                {description.length === 0 && validation && <span className="errorMsg">Please Enter your description</span>}

                <label htmlFor="imgLink">Image Link:</label>
                <input type="text" id="imgLink" name="imgLink" required value={imgLink} onChange={e => setImgLink(e.target.value)} onMouseDown={() => setValidation(true)} />
                {imgLink.length === 0 && validation && <span className="errorMsg">Please Enter your image link</span>}

                <label htmlFor="plus">Plus:</label>
                <input type="text" id="plus" name="plus" required value={plus} onChange={e => setPlus(e.target.value)} onMouseDown={() => setValidation(true)} />
                {plus.length === 0 && validation && <span className="errorMsg">Please Enter plus value</span>}
                
                <div>
                    <button className="btn btn-save">Save</button>
                    <Link to=".." className="btn btn-back">Back</Link>
                </div>
            </form>
       </div>
    );
}