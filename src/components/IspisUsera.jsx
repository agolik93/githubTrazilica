import UserKartica from "./UserKartica";
import Spinner from "./Spinner";
import { useContext } from "react";
import GithubContext from "../context/GithubContext";

const IspisUsera = () => {
  const { users, loading } = useContext(GithubContext);
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserKartica key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default IspisUsera;
