import React, { useState } from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { FormConstructor, FormConstructorTitle, FormConstructorInputBlock, FormConstructorInput, FormConstructorTip, FormConstructorAddInput, DropDownMenu } from './elements'

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

  const handleInputNameChange = ( event : any ) => {
    setInputName(event.target.value);
  };

  const handleInputPlaceholderChange = ( event : any ) => {
    setInputPlaceholder(event.target.value);
  };

  const handleInputColorChange = ( event : any ) => {
    setInputColor(event.target.value);
  };

  const handleInputBGChange = ( event : any ) => {
    setInputBG(event.target.value);
  };

  const handleInputRequiredClick = (event : any) => {
    if(event.target.checked) {
      setInputRequiredNumber(1);
    } else {
      setInputRequiredNumber(0);
    }
    console.log(inputRequiredNumber);
  };

  const handleInputBorderColorChange = (event : any) => {
    setInputBorderColor(event.target.value);
  };

  const addInput = (e : any) => {
    e.preventDefault();

    if(inputType === 'Type:' || inputName.length < 1 || inputColor.length > 7 || inputBorderColor.length > 7) {
      alert('Please, choose type of input, write name of input or inputColor.length > 7 or inputBG.length > 7!');
    } else {
      // if(localStorage.getItem('forms_array')) {
      //   let unsortedFormsArray : any = localStorage.getItem('forms_array');
      //   let formsArray = JSON.parse(unsortedFormsArray);
      // } else {
      //   let formsArray = [];
      // }
      let inputObject : any = {its: 'input', type: inputType, name: inputName, placeholder: '', inputColor: '#ffffff', inputBG: 'transparent', inputBorderColor: '#297CC1', required: 0};

      if(inputPlaceholder.length > 0) {
        inputObject.placeholder = inputPlaceholder;
      }

      if(inputColor.length > 3) {
        inputObject.inputColor = inputColor;
      }

      if(inputBG.length > 3) {
        inputObject.inputBG = inputBG;
      }

      if(inputBorderColor.length > 3) {
        inputObject.inputBorderColor = inputBorderColor;
      }

      if(inputRequiredNumber === 1) {
        inputObject.required = inputRequiredNumber;
      }

      formComponentsArray.push(inputObject);

      alert('Input was added!');

      console.log(formComponentsArray);

      setInputType('Type:');
      setInputName('');
      setInputPlaceholder('');
      setInputColor('');
      setInputBG('');
      setInputBorderColor('');
    }
  };

  return(
    <>
      <HeaderComponent pageNameProps={'form_constructor'} />
      <FormConstructor>
        <FormConstructorTip>Checkbox(checked) - required</FormConstructorTip>

        <FormConstructorTitle>Title</FormConstructorTitle>
        <FormConstructorInputBlock>
          <FormConstructorInput type={'text'} id={'formTitle'} name={'formTitle'} value={formTitle} onChange={handleFormTitleChange} placeholder={'Title'} />
        </FormConstructorInputBlock>
        <FormConstructorAddInput onClick={addTitle}>Add Title</FormConstructorAddInput>

        <FormConstructorTitle>Input</FormConstructorTitle>
        <FormConstructorInputBlock>
          <DropDownMenu>
            <p>{ inputType }</p>
            <div>
              <p onClick={() => {setInputType('email')}}>email</p>
              <p onClick={() => {setInputType('text')}}>text</p>
              <p onClick={() => {setInputType('password')}}>password</p>
              <p onClick={() => {setInputType('number')}}>number</p>
              <p onClick={() => {setInputType('checkbox')}}>checkbox</p>
              <p onClick={() => {setInputType('submit')}}>submit</p>
              <p onClick={() => {setInputType('button')}}>button</p>
            </div>
          </DropDownMenu>
          <FormConstructorInput type={'text'} id={'inputName'} name={'inputName'} onChange={handleInputNameChange} value={ inputName } placeholder={'*name'} />
          <FormConstructorInput type={'text'} id={'inputPlaceholder'} name={'inputPlaceholder'} onChange={handleInputPlaceholderChange} value={ inputPlaceholder } placeholder={'placeholder'} />
          <FormConstructorInput type={'text'} id={'inputColor'} name={'inputColor'} onChange={handleInputColorChange} value={ inputColor } placeholder={'color(#0E57AA)'} />
          <FormConstructorInput style={{width: 225, marginRight: 10}} type={'text'} id={'inputBG'} name={'inputBG'} onChange={handleInputBGChange} value={ inputBG } placeholder={'BG color(#0E57AA)'} />
          <FormConstructorInput style={{width: 225, marginLeft: 10}} type={'text'} id={'inputBorderColor'} name={'inputBorderColor'} onChange={handleInputBorderColorChange} value={ inputBorderColor } placeholder={'Border color(#0E57AA)'} />
          <FormConstructorInput style={{marginLeft: 20}} type={'checkbox'} id={'inputRequired'} onClick={handleInputRequiredClick} name={'inputRequired'} />
        </FormConstructorInputBlock>
        <FormConstructorAddInput onClick={addTitle}>Add Input</FormConstructorAddInput>


      </FormConstructor>
    </>
  );
};

export default FormConstructorComponent;