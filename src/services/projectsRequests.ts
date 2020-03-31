export const sendRequestGetProjects = async (url : string, body = null) : Promise<any> => {
  return await fetch(url, {
    method: 'GET',
    headers: {
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'
    }
  })
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      return response.json()
        .then(error => {
          const err : any = new Error('Something went wrong');
          err.data = error;
          throw err;
        })
    })
};

export const sendRequestAddProject = async (url : string, myTitle : string, myCompany : string, myCost : string, myDeadline : string, userId : any) : Promise<any> => {
  return await fetch(url, {
    method : 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify({
      title : myTitle,
      company : myCompany,
      cost : myCost,
      deadline : myDeadline,
      assigned : userId
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

export const sendRequestDelProject = async (url : string, body = null) => {
  return await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type' : 'application/json'
    }
  })
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      return response.json()
        .then(error => {
          const err : any = new Error('Something went wrong');
          err.data = error;
          throw err;
        })
    })
};