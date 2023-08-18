import React, { useState } from "react";
function AddMultipleEntries() {
    const [val, setVal] = useState([]);
    const [ID, setValID] = useState([]);
    /*--------------Add Address-------------------*/
    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }
    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val]
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata)
    }
    const handleDelete = (i) => {
        const deletVal = [...val]
        deletVal.splice(i, 1)
        setVal(deletVal)
    }
    /*--------------Add ID-------------------*/
    const handleAddID = () => {
        const IDvalue = [...ID, []]
        setValID(IDvalue)
    }
    const handleChangeID = (onChangeValue, j) => {
        const inputdata = [...ID]
        inputdata[j] = onChangeValue.target.value;
        setValID(inputdata)
    }
    const handleDeleteID = (j) => {
        const deletVal = [...ID]
        deletVal.splice(j, 1)
        setValID(deletVal)
    }
    console.log(val, "data-")
    return (
        <>
            <table>
                <tr>
                    <td>
                    <button onClick={() => handleAdd()}>Add Address</button>
                
           
                    </td>
                </tr>
                <tr>
                    <td>
                        {val.map((data, i) => {
                            return (
                                <div>
                                    <input value={data} onChange={e => handleChange(e, i)} placeholder="Enter an Address" size="44" />
                                    <button onClick={() => handleDelete(i)}>x</button>
                                </div>
                            )
                        })}
                       
                   
            
                    </td>
                </tr>
            </table>
            <table>
                <tr>
                    <td>
                        <button onClick={() => handleAddID()}>Add ID</button>
                    </td>
                </tr>
                <tr>
                    <td>
                         {ID.map((data, j) => {
                            return (
                                <div>
                                    <select >
                                        <option>Documento de Identidad</option>
                                        <option>NIT</option>
                                        <option>Licencia de Conducir</option>
                                        <option>Pasaporte</option>
                                    </select>
                                    <input value={data} onChange={e => handleChangeID(e, j)} placeholder="Enter an ID" />
                                    <button onClick={() => handleDeleteID(j)}>x</button>
                                </div>
                            )
                        })}
                    </td>

                </tr>
            </table>
        </>

    );


}
export default AddMultipleEntries;


