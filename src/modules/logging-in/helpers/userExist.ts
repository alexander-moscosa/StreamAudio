import axios from 'axios';

type PromiseType = {
  data: any;
  exist: boolean;
};

export function userExist(username: string): Promise<PromiseType> {
  return new Promise((resolve, reject: (error: PromiseType) => void) => {
    axios
      .get(`http://localhost:9090/api/v1/user/${username}`)
      .then(({ data }) => {
        resolve({
          data,
          exist: true,
        });
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          reject({
            data: err.response,
            exist: false,
          });
        }
      });
  });
}
