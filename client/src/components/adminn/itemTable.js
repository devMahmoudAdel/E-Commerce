import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ItemTable(){
    const [items,setItems]=useState("");
    const navigate=useNavigate();
    
    const EditDetails=(id)=>{
        navigate("/admin/item/edit/"+id);
    }
    const RemoveDetails=(id)=>{
        if(window.confirm("Are you sure you want to delete?")){
            fetch("http://localhost:8000/items/"+id,{
                method:'DELETE',
            })
            .then((res)=>{
                alert("Removed Item successfully");
               window.location.reload();
            })
            .catch((err)=>console.log(err.message))
        }
    }
    useEffect(()=>{
        fetch('http://localhost:8000/items')
        .then((res)=>res.json())
        .then((data)=>{
            data.sort((a, b) => a.id - b.id);
            setItems(data);
        })
        .catch((err)=>console.log(err.message))
    },[])

    return(
        <div className="container">
            <h2>Item Records</h2>
            <div className="table-container">
                <Link to="item/create" className="btn btn-add">Add new Item</Link>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items && items.map((item)=>(
                                <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td><img src={item.imgLink} alt={item.name} style={{width: "50px", height: "50px"}}/></td>
                                <td>
                                    <button onClick={()=>{EditDetails(item.id)}} className="btn btn-primary">Edit</button>
                                    <button onClick={()=>{RemoveDetails(item.id)}} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}