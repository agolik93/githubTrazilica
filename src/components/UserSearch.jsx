import { useState, useContext } from "react";
import GithubContext from "../context/GithubContext";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, fetchUsers, clearUsers } = useContext(GithubContext);
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      alert("Molimo unesite nešto u polje");
    } else {
      fetchUsers(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-8">
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-gray-200 text-black w-1/2 pr-40"
          placeholder="pretraži"
          onChange={handleChange}
          value={text}
        />
        <button className="bg-indigo-600 text-white py-4 px-2">pretraži</button>
      </form>
      {users.length > 0 && (
        <div className="flex justify-center">
          <button className="bg-indigo-200 py-4 px-2" onClick={clearUsers}>
            resetiraj
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
