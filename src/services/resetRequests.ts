export const sendRequestReset = async (url : string, myPass : string, myConfirmPass : string, myEmail : string) : Promise<any> => {
  return await fetch (url, {
    method : 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'
    },
    body : JSON.stringify({
      password: myPass,
      confirmationPassword: myConfirmPass,
      email: myEmail
    }),
  })
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      return response.json().then(error => {
        const err : any = new Error('Something went wrong');
        err.data = error;
        throw err;
      })
    });
};