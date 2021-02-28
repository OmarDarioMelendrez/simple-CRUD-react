import React, { useState } from "react";
import uniqid from 'uniqid';

const ListadoNombres = () => {
const [nombre, setNombre] = useState("");
const [id, setId] = useState("");
const [listaNombres, setListaNombres] = useState([]);
const [modoEdicion, setModoEdicion] = useState(false);
const [error, setError] = useState(null);

  const addNombre = (e) => {
    e.preventDefault();
    const nuevoNombre = {
        id: uniqid(),
        tituloNombre: nombre
    }
    if (!nombre.trim()) {
        setError('El campo nombre está vacío.')
        return
    }
    setListaNombres([...listaNombres, nuevoNombre]);
    setNombre("");
    setError(null);
  };

  const deleteNombre = (id) => {
      const nuevaArray = listaNombres.filter(item => item.id !== id);
      setListaNombres(nuevaArray);
  }
  
  const editar = (tituloNombre,id) => {
    setModoEdicion(true);
    setNombre(tituloNombre);
    setId(id);
  }
  
  const editarNombre = (e) => {
      e.preventDefault();
      const nuevoArray = listaNombres.map(item => item.id === id ? {id:id, tituloNombre:nombre}: item);
      console.log(nuevoArray)
      setListaNombres(nuevoArray);
      setModoEdicion(false)
      setNombre("");
      setId("")
  }
  

  return (
    <div>
      <h1 className="text-center">Aplicación CRUD básica.</h1>
      <div className="row">
        <div className="col">
          <h3 className="text-center">Listado de nombres</h3>
          <ul className="list-group">
            {listaNombres.map(({tituloNombre, id}) => 
              <li className="list-group-item" key={id}>{tituloNombre}
              <button onClick={() => {deleteNombre(id)}} className="btn btn-danger float-right">Borrar</button>
              <button onClick={() => {editar(tituloNombre, id)}} className="btn btn-info float-right mr-2">Editar</button>
              </li>
              
            )}
          </ul>
        </div>
        <div className="col">
          <h3 className="text-center">Formulario para añadir nombres</h3>
          <form
            action=""
            onSubmit={modoEdicion ? editarNombre : addNombre}
            className="form-group"
          >
            <input
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              className="form-control mb-3"
              type="text"
              placeholder="Introduce tú nombre"
              value={nombre}
            />
            <button className="btn btn-info btn-block" type="submit">
              {modoEdicion ? 'EDITAR NOMBRE' : 'REGISTRAR NOMBRE'}
            </button>
          </form>
          {
              error != null ? (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
                )
              :
              (
                <div></div>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default ListadoNombres;
