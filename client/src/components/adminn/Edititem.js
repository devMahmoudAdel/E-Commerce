import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditItem() {
  const { itemid } = useParams();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [plus, setPlus] = useState("");
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //     fetch("http://localhost:8000/items/" + itemid)
  //     .then((res) => res.json())
  //     .then((data) => {
  //         setId(data.id);
  //         setName(data.name);
  //         setDescription(data.description);
  //         setImgLink(data.imgLink);
  //         setPlus(data.plus);
  //     })
  //     .catch((err) => console.log(err.message));
  // }, [itemid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemData = { id, name, description, imgLink, plus };

    fetch("http://localhost:8000/items/" + itemid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(itemData),
    })
      .then((res) => {
        if (res.ok) {
          if (itemid !== id) {
            fetch("http://localhost:8000/items/" + itemid, {
              method: "DELETE",
            }).then(() => {
              fetch("http://localhost:8000/items", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(itemData),
              }).then((res) => {
                if (res.ok) {
                  alert("Item Updated successfully");
                  navigate("/admin");
                }
              });
            });
          } else {
            alert("Item Updated successfully");
            navigate("/admin");
          }
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="container">
      <h2>Edit Item Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {id.length === 0 && validation && (
          <span className="errorMsg">Please Enter ID</span>
        )}

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {name.length === 0 && validation && (
          <span className="errorMsg">Please Enter Name</span>
        )}

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {description.length === 0 && validation && (
          <span className="errorMsg">Please Enter Description</span>
        )}

        <label htmlFor="imgLink">Image Link:</label>
        <input
          type="text"
          id="imgLink"
          required
          value={imgLink}
          onChange={(e) => setImgLink(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {imgLink.length === 0 && validation && (
          <span className="errorMsg">Please Enter Image Link</span>
        )}

        <label htmlFor="plus">Plus:</label>
        <input
          type="text"
          id="plus"
          required
          value={plus}
          onChange={(e) => setPlus(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {plus.length === 0 && validation && (
          <span className="errorMsg">Please Enter Plus Value</span>
        )}

        <div>
          <button className="btn btn-save">Update</button>
          <Link to=".." className="btn btn-back">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
