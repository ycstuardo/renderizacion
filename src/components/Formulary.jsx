import { useState } from "react";
import { nanoid } from "nanoid";
import { CollaboratorMain } from "../components/Collaborators";
import Search from "../components/Search";

const Formulary = () => {
  const [user, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [task, setTask] = useState(CollaboratorMain);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert("Debes completar los campos vacíos");
      return;
    }
    setTask([...task, { id: nanoid(), nombre: user, correo: email }]);
    setName("");
    setEmail("");
  };
  return (
    <div class="container">
      <div id="search">
        <Search tasks={task} setTask={setTask} />
      </div>
      <section>
        <div id="add">
          <h3>Nombre de pirata</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="Seeker"
              placeholder="unete a nuestra tripulacion"
              onChange={(e) => setName(e.target.value)}
              value={user}
            />
            <h3>tu e-mail marino</h3>
            <input
              type="text"
              className="Seeker"
              placeholder="Ingrese correo"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
      <div id="users">
        <h3>piratas encontrados</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            {task.map((el) => (
              <tr key={el.id}>
                <td>{el.nombre}</td>
                <td>{el.correo}</td>
              </tr>
            ))}
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Formulary;
