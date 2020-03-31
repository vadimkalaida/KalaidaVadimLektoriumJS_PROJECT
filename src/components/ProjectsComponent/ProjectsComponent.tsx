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
import { sendRequestGetProjects, sendRequestDelProject } from "../../services/projectsRequests";


const ProjectsComponent : React.FC = () => {

  const getProjects = () => {
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
  };

  const showProjects = () => {
    getProjects();

    let unparsedProjects : any = localStorage.getItem('sorted_projects_array');
    let projectsArray = JSON.parse(unparsedProjects);

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
                });
              getProjects();
            }
            }>Delete Project</DeleteProjectParagraph> : null }
          </Project> ) }
        </ProjectsBlock>
      </>
    );
  };

  return(
    <MainHomeBlock>
      <HeaderComponent buttonTextColorProps={'#F5005C'} pageNameProps={'projects'} buttonBackgroundProps={'#750000'} />
      { showProjects() }
    </MainHomeBlock>
  );
};

export default ProjectsComponent;