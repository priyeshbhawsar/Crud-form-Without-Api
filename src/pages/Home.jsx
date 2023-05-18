import React, { useState } from "react";

const Home = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
    });
    const [tableData, setTableData] = useState([]);
    const [editClick, setEditClick] = useState(false);
    const [editIndex, setEditIndex] = useState("");
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("inputs", inputs);
        if (editClick) {
            const tempTableData = tableData;
            Object.assign(tempTableData[editIndex], inputs);
            setTableData([...tempTableData]);
            setEditClick(false);
            setInputs({
                name: "",
                email: "",
            });
        } else {
            setTableData([...tableData, inputs]);
            setInputs({
                name: "",
                email: "",
            });
        }
    };

    const handleDelete = (index) => {
        const filterData = tableData.filter((item, i) => i !== index);
        setTableData(filterData);
    };
    const handleEdit = (index) => {
        const tempData = tableData[index];

        setInputs({ name: tempData.name, email: tempData.email });
        setEditClick(true);
        setEditIndex(index);
    };
    return (
        <div>Crud-Form-Without-Api

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mx-auto">
                                <div className="card mt-3">
                                    <label>Name</label>
                                    <input name="name" value={inputs.name} onChange={handleChange} className="form-control mt-3 mb-1 " placeholder="Enter Name" />
                                    <label>Email</label>
                                    <input name="email" value={inputs.email} onChange={handleChange} className="form-control mt-3 mb-1 " placeholder="Enter Name" />
                                    <button type="submit" className="btn btn-primary mt-3 ">
                                        {editClick ? "update" : "Add"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <table className="table table-striped mt-2">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {tableData.map((item, i) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button
                                        onClick={() => handleEdit(i)}
                                        className="btn btn-warning mr-1"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(i)}
                                        className="btn btn-danger "
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;