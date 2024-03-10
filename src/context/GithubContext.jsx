import { createContext, useReducer } from "react";
import { githubReducer } from "./githubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async (text) => {
    setLoading();
    const res = await fetch(`https://api.github.com/search/users?q=${text}`);
    const { items } = await res.json();
    dispatch({
      type: "GET_USERS",
      users: items,
    });
  };

  const getUser = async (login) => {
    setLoading();
    const res = await fetch(`https://api.github.com/users/${login}`);
    const data = await res.json();
    dispatch({
      type: "GET_USER",
      data: data,
    });
  };

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  const getRepos = async (login) => {
    setLoading();
    const res = await fetch(`https://api.github.com/users/${login}/repos`);
    const data = await res.json();
    dispatch({
      type: "GET_REPOS",
      data: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        fetchUsers,
        clearUsers,
        getUser,
        getRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
