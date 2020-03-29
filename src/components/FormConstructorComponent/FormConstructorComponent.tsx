import React, { useState } from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { FormConstructor, FormConstructorTitle, FormConstructorInputBlock, FormConstructorInput, FormConstructorTip, FormConstructorAddInput } from './elements'

const FormConstructorComponent : React.FC = () => {
  const [ inputType, setInputType ] : React.ComponentState = useState('Type:');
  const [ inputName, setInputName ] : React.ComponentState = useState('');
  const [ inputPlaceholder, setInputPlaceholder ] : React.ComponentState = useState('');
  const [ inputColor, setInputColor ] : React.ComponentState = useState('');
  const [ inputBG, setInputBG ] : React.ComponentState = useState('');
  const [ inputBorderColor, setInputBorderColor ] : React.ComponentState = useState('');
  const [ inputRequiredNumber, setInputRequiredNumber ] : React.ComponentState = useState(0);
  const [ formTitle, setFormTitle ] : React.ComponentState = useState('');
  const [ formSubmitButtonText, setFormSubmitButtonText ] : React.ComponentState = useState('');
  const [ formSubmitButtonColor, setFormSubmitButtonColor ] : React.ComponentState = useState('');
  const [ formSubmitButtonBG, setFormSubmitButtonBG ] : React.ComponentState = useState('');
  const [ formSubmitButtonBorderColor, setFormSubmitButtonBorderColor ] : React.ComponentState = useState('');
  const [ formSubmitButtonWidth, setFormSubmitButtonWidth ] : React.ComponentState = useState('');
  const [ formSubmitButtonHeight, setFormSubmitButtonHeight ] : React.ComponentState = useState('');
  const [ formComponentsArray, setFormComponentsArray ] : React.ComponentState = useState([]);
  const [ showLinkNumber, setShowLinkNumber ] : React.ComponentState = useState(0);

  const handleFormTitleChange = ( event: any ) => {
    setFormTitle(event.target.value);
  };

  const addTitle = ( event : any ) => {
    event.preventDefault();

    let titleObject : any = { title: formTitle };
    let titleIndex = -1;
    for(let i : number = 0; i < formComponentsArray.length; i++) {
      if(formComponentsArray[i].title) {
        titleIndex = i;
      }
    }

    if(titleIndex === -1) {
      formComponentsArray.push(titleObject);
    } else {
      formComponentsArray[titleIndex] = titleObject;
    }

    setFormTitle('');
    alert('Title was added!');
    console.log(formComponentsArray);
  };

  return(
    <>
      <HeaderComponent pageNameProps={'form_constructor'} />
      <FormConstructor>
        <FormConstructorTip>Checkbox(checked) - required</FormConstructorTip>

        <FormConstructorTitle>Title</FormConstructorTitle>
        <FormConstructorInputBlock>
          <FormConstructorInput type={'text'} id={'formTitle'} name={'formTitle'} value={formTitle} onChange={handleFormTitleChange} placeholder={'Title'} />
          <FormConstructorAddInput onClick={addTitle}>Add Title</FormConstructorAddInput>
        </FormConstructorInputBlock>

      </FormConstructor>
    </>
  );
};

export default FormConstructorComponent;