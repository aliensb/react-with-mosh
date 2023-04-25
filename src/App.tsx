import userService from "./services/user-service";

import { User } from "./services/user-service";

import useUser from "./hooks/useUser";

function App() {
  const { users, error, loading, setUsers, setError } = useUser();

  const addUser = () => {
    const originalUsers = [...users];
    const newUser: User = { id: 100, name: "tom" };
    userService
      .create(newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const deleteUser = (id: number) => {
    userService
      .delete(id)
      .then((res) => {
        console.log(res);
        setUsers(users.filter((u) => u.id !== id));
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const updateUser = (id: number) => {
    const findUser = users.filter((u) => u.id === id);
    if (findUser && findUser.length > 0) {
      const user = findUser[0];
      user.name = "tom";
      userService
        .update<User>(user)
        .then((res) => {
          console.log(res);
          setUsers(users.map((u) => (u.id === id ? user : u)));
        })
        .catch((err) => {
          setError(err.message);
        });
    } else {
      setError("user not exsisted");
    }
  };

  return (
    <>
      <div className="container mt-3 ">
        {error && <p className="text-danger">{error}</p>}
        {loading && <div className="spinner-border"></div>}
        <ul className="list-group">
          {users.map((u) => (
            <li
              key={u.id}
              className="list-group-item d-flex justify-content-between"
            >
              <span>
                {u.name} {u.id}
              </span>
              <div>
                <button className="btn btn-primary mx-2" onClick={addUser}>
                  Add
                </button>
                <button
                  className="btn btn-secondary mx-2"
                  onClick={() => updateUser(u.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deleteUser(u.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
