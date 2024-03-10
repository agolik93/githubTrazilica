export const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    case "GET_USER":
      return {
        ...state,
        loading: false,
        user: action.data,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.data,
        loading: false,
      };
    default:
      return state;
  }
};
