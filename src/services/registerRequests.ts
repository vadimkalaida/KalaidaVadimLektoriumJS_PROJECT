export const sendRequestRegister = async (url : string, myJob : string, myPhone : string, myAddress : string, myCompany : string, myName : string, myEmail : string, myPass : string) : Promise<any> => {
  return await fetch(url, {
    method : 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify({
      position: myJob,
      description: 'Master/Lomaster.',
      phone: myPhone,
      address: myAddress,
      organization: myCompany,
      name: myName,
      email: myEmail,
      password: myPass
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