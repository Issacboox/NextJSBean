import api from './api'

export const login = (email: string, password: string) => {
  return api.post("/login", { email, password }).then((res) => {
    return res.data;
  });
};

export const signup = (email: string, password: string) => {
  return api.post("/signup", { email, password });
};
