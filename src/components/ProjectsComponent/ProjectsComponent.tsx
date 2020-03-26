import React from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { MainHomeBlock } from '../../elements';
import {
  DeleteProjectParagraph,
  Project,
  ProjectParagraph,
  ProjectsBlock,
  ProjectsTitle
} from "./elements";
import formatDate from "../../services/formatDate";


const ProjectsComponent : React.FC = () => {
  const sendRequestGetProjects = async (url : string, body = null) : Promise<any> => {
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

  const sendRequestDelProject = async (url : string, body = null) => {
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

  const showProjects = () => {
    sendRequestGetProjects('https://geekhub-frontend-js-9.herokuapp.com/api/projects')
      .then(data => {
        console.log(data);
        localStorage.setItem('projects_array', JSON.stringify(data));
      })
      .catch(err => {
        console.log(err);
      });
    let projectsArray : any = [];

    let localStorageProjects : any = localStorage.getItem('projects_array');
    let parsedLocalStorageProjects : any = JSON.parse(localStorageProjects);

    for(let i : number = 0; i < parsedLocalStorageProjects.length; i++) {
      if(parsedLocalStorageProjects[i].assigned !== null) {
        projectsArray.push(parsedLocalStorageProjects[i])
      }
    }

    localStorage.setItem('sorted_projects_array', JSON.stringify(projectsArray));

    return(
      <>
        <ProjectsBlock>
          <ProjectsTitle>Projects</ProjectsTitle>
          { projectsArray.map( (item : any, index : number) => <Project key={index}>
            <ProjectParagraph>Title: <span>{ item.title }</span></ProjectParagraph>
            <ProjectParagraph>Company: <span>{ item.company }</span></ProjectParagraph>
            <ProjectParagraph>Cost: <span>{ item.cost }</span></ProjectParagraph>
            <ProjectParagraph>Deadline: <span>{ formatDate(item.deadline) }</span></ProjectParagraph>
            <ProjectParagraph>Author: <span>{ localStorage.getItem('lektorium_login_user_id') === item.assigned._id ? 'Me' : item.assigned.name }</span></ProjectParagraph>
            { localStorage.getItem('lektorium_login_user_id') === item.assigned._id ? <DeleteProjectParagraph onClick={() => {
              sendRequestDelProject(`https://geekhub-frontend-js-9.herokuapp.com/api/projects/${item._id}`)
                .then(data => {
                  console.log(data);
                  alert('Project was deleted! Please reload webpage to see changes!');
                })
                .catch(err => {
                  console.log(err);
                })}
            }>Delete Project</DeleteProjectParagraph> : null }
          </Project> ) }
        </ProjectsBlock>
      </>
    );
  };

  return(
    <MainHomeBlock>
      <HeaderComponent />
      { showProjects() }
    </MainHomeBlock>
  );
};

export default ProjectsComponent;