import React, { useState } from "react";
import uniqid from 'uniqid';

const ListadoNombres = () => {
  const [nombre, setNombre] = useState("");
  const [listaNombres, setListaNombres] = useState([]);

  const addNombre = (e) => {
    e.preventDefault();
    const nuevoNombre = {
        id: uniqid(),
        tituloNombre: nombre
    }
    setListaNombres([...listaNombres, nuevoNombre]);
    setNombre("");
  };

  return (
    <div>
      <h1 className="text-center">Aplicación CRUD básica.</h1>
      <div className="row">
        <div className="col">
          <h3 className="text-center">Listado de nombres</h3>
          <ul className="list-group">
            {listaNombres.map(({tituloNombre, id}) => (
              <li className="list-group-item" key={id}>{tituloNombre}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h3 className="text-center">Formulario para añadir nombres</h3>
          <form
            action=""
            onSubmit={(e) => {
              addNombre(e);
            }}
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
              Registrar nombre
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListadoNombres;
