import { useState } from "react";

function AuthForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setUsers([...users, { username, password }]);
      setUsername("");
      setPassword("");
    }
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} - {user.password}{" "}
            <button onClick={() => deleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthForm;
