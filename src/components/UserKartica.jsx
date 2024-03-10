import { Link } from "react-router-dom";

const UserKartica = ({ user }) => {
  return (
    <div className="shadow-md text-center">
      <div className="flex items-center space-x-4">
        <div>
          <img
            src={user.avatar_url}
            alt={user.login}
            className="inline-block h-24 w-24 rounded-full ring-2 ring-black"
          />
        </div>
        <p className="uppercase py-2">{user.login}</p>
        <Link
          to={`/user/${user.login}`}
          className="underline inline-block py-4"
        >
          Idi na profil
        </Link>
      </div>
    </div>
  );
};

export default UserKartica;
