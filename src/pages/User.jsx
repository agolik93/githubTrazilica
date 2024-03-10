import { useContext, useEffect } from "react";
import GithubContext from "../context/GithubContext";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import RepoList from "../components/RepoList";

const User = () => {
  const { getUser, user, loading, getRepos, repos } = useContext(GithubContext);
  const params = useParams();
  const { avatar_url, name, login, html_url, bio } = user;
  useEffect(() => {
    getUser(params.login);
    getRepos(params.login);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/">Nazad</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-8">
          <div className="mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl">
              <figure>
                <img src={avatar_url} alt={login} />
              </figure>
              <div className="flex items-center flex-col">
                <h1 className="mb-0">{name}</h1>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-span-2 mb-6">
            <h2 className="text-3xl">{name}</h2>
            <p>{bio}</p>
            <a
              href={html_url}
              target="_blank"
              className="bg-indigo-600 text-white py-4 px-2 inline-block mt-4"
            >
              Github stranica
            </a>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default User;
