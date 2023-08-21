import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import logo from './logom.png';


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
            <boby>
                <meta charSet="utf-8"></meta>
                <div id="all" >

                    <div class="col" id="personaldiv">
                        <img id="imagen" src={logo} alt="logo" />
                        <h3>Informaci&oacute;n del Cliente</h3>
                        <div id="genInfo">
                            <input class="form-control form-control-sm" placeholder="Ingrese su Nombre" id="texto" />
                            <input class="form-control form-control-sm" placeholder="Ingrese su Apellido" id="texto" />
                            <input
                                class="form-control form-control-sm"
                                id="email"
                                name="email"
                                type="email"
                                value={val.email}
                                onChange={handleChange}
                                placeholder="Ingrese su Correo"
                            />
                            <label>Fecha de Nacimiento:</label> <input id="datec" type="date"></input>
                        </div>

                        <table>
                            <tr>
                                <td>
                                    <button class="btnAdd" onClick={() => handleAddID()}>Agregar ID</button>
                                </td>
                            </tr>
                            <tr>
                                <td id="IDt">
                                    {ID.map((data, j) => {
                                        return (
                                            <div>
                                                <select>
                                                    <option>Documento de Identidad</option>
                                                    <option>NIT</option>
                                                    <option>Licencia de Conducir</option>
                                                    <option>Pasaporte</option>
                                                </select>
                                                <input id="docto" value={data} onChange={e => handleChangeID(e, j)} placeholder="Ingrese un Documento" />
                                                <button id="btnx" onClick={() => handleDeleteID(j)}>x</button>
                                            </div>
                                        )
                                    })}
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <button class="btnAdd" onClick={() => handleAdd()}>Agregar Direcci&oacute;n</button>


                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {val.map((data, i) => {
                                        return (
                                            <div>
                                                <input id="direc" value={data} onChange={e => handleChange(e, i)} placeholder="Ingrese una direcci&oacute;n" size="44" />
                                                <button id="btnx" onClick={() => handleDelete(i)}>x</button>
                                            </div>
                                        )
                                    })}



                                </td>
                            </tr>



                        </table>

                        <button class="btnSubmit" >Enviar</button>

                    </div>





                </div>

            </boby>


        </>

    );


}
export default AddMultipleEntries;
