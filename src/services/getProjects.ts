import { sendRequestGetProjects } from "./projectsRequests";

export const getProjects = () => {
    sendRequestGetProjects('https://geekhub-frontend-js-9.herokuapp.com/api/projects')
        .then(data => {
            console.log(data);
            localStorage.setItem('projects_array', JSON.stringify(data));
            let projectsArray : any = [];

            let localStorageProjects : any = localStorage.getItem('projects_array');
            let parsedLocalStorageProjects : any = JSON.parse(localStorageProjects);

            for(let i : number = 0; i < parsedLocalStorageProjects.length; i++) {
                if(parsedLocalStorageProjects[i].assigned !== null) {
                    projectsArray.push(parsedLocalStorageProjects[i])
                }
            }

            localStorage.setItem('sorted_projects_array', JSON.stringify(projectsArray));
        })
        .catch(err => {
            console.log(err);
        });
};