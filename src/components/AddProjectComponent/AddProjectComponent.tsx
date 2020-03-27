import React, {useState} from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import formatDate from "../../services/formatDate";
import {AddProjectForm} from "./elements";

const AddProjectComponent : React.FC = () => {
  const [ addProjectTitle, setAddProjectTitle ] : React.ComponentState = useState('');
  const [ addProjectCompany, setAddProjectCompany ] : React.ComponentState = useState('');
  const [ addProjectCost, setAddProjectCost ] : React.ComponentState = useState('');
  const [ addProjectDeadline, setAddProjectDeadline ] : React.ComponentState = useState('');

  const handleProjectTitleChange = (e : any) => {
    setAddProjectTitle(e.target.value);
  };

  const handleProjectCompanyChange = (e : any) => {
    setAddProjectCompany(e.target.value);
  };

  const handleProjectCostChange = (e : any) => {
    setAddProjectCost(e.target.value);
  };

  const handleProjectDeadlineChange = (e : any) => {
    setAddProjectDeadline(e.target.value);
  };

  return(
    <>
      <HeaderComponent pageNameProps={'add_project'}  />
      <AddProjectForm>

      </AddProjectForm>
    </>
  );
};

export default AddProjectComponent;