export const sendRequest = async (url : string, method : any, loginEmail : string, loginPassword : string) : Promise<any> => {
  return await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify({
      email: loginEmail,
      password: loginPassword,
    })
  })
    .then((response) => {
      if(response.ok) {
        return response.json();
      }
      return response.json()
        .then(error => {
          const err : any = new Error('Something went wrong');
          err.data = error;
          return err;
        })
    })
};

export const sendRequestGet = async (url : string) : Promise<any> => {
  return await fetch(url, {
    method: 'GET',
    headers: {
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'
    }
  })
    .then((response) => {
      if(response.ok) {
        return response.json();
      }
      return response.json()
        .then(error => {
          const err : any = new Error('Something went wrong');
          err.data = error;
          return err;
        })
    })
};