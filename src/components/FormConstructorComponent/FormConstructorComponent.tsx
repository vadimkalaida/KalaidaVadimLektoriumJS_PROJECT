import React, { useState } from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { FormConstructor, FormConstructorTitle, FormConstructorInputBlock, FormConstructorInput,
  FormConstructorTip, FormConstructorAddInput, DropDownMenu, MakeFormButton } from './elements'
import FormComponent from '../FormComponent/FormComponent'
import ErrorComponent from "../ErrorComponent/ErrorComponent";

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
      let inputObject : any = {its: 'input', type: inputType, name: inputName, placeholder: '', inputColor: '#100E2A', inputBG: '#6B20DE', inputBorderColor: '#100E2A', required: 0};

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

  const handleSubmitButtonTextChange = (e : any) => {
    setFormSubmitButtonText(e.target.value);
  };

  const handleSubmitButtonColorChange = (e : any) => {
    setFormSubmitButtonColor(e.target.value);
  };

  const handleSubmitButtonBGChange = (e : any) => {
    setFormSubmitButtonBG(e.target.value);
  };

  const handleSubmitButtonBorderColorChange = (e : any) => {
    setFormSubmitButtonBorderColor(e.target.value);
  };

  const handleSubmitButtonWidthChange = (e : any) => {
    setFormSubmitButtonWidth(e.target.value);
  };

  const handleSubmitButtonHeightChange = (e : any) => {
    setFormSubmitButtonHeight(e.target.value);
  };

  const addSubmitButton = (e : any) => {
    e.preventDefault();

    if( formSubmitButtonColor.length > 7 || formSubmitButtonBorderColor.length > 7 || formSubmitButtonWidth.length > 7 || formSubmitButtonHeight.length > 7) {
      alert('Please, submitButtonColor.length > 7, submitButtonBorderColor.length > 7, submitButtonWidth.length > 7 or submitButtonHeight.length > 7');
    } else {
      let submitButtonObject : any = {its: 'submitButton' ,text: formSubmitButtonText, color: '#ffffff', bg: '#8933DC', BorderColor: 'none', width: '150px', height: '50px'};

      if(formSubmitButtonColor.length > 1) {
        submitButtonObject.color = formSubmitButtonColor;
      }

      if(formSubmitButtonBG.length > 1) {
        submitButtonObject.bg = formSubmitButtonBG;
      }

      if(formSubmitButtonBorderColor.length > 1) {
        submitButtonObject.BorderColor = formSubmitButtonBorderColor;
      }

      if(formSubmitButtonWidth.length > 0) {
        submitButtonObject.width = formSubmitButtonWidth + 'px';
      }

      if(formSubmitButtonHeight.length > 0) {
        submitButtonObject.height = formSubmitButtonHeight + 'px';
      }

      let submitButtonIndex : number = -1;

      for(let i : number = 0; i < formComponentsArray.length; i++) {
        if(formComponentsArray[i].its === 'submitButton') {
          submitButtonIndex = i;
        }
      }

      if(submitButtonIndex === -1) {
        formComponentsArray.push(submitButtonObject);
      } else {
        formComponentsArray[submitButtonIndex] = submitButtonObject;
      }

      console.log(formComponentsArray);

      setFormSubmitButtonText('');
      setFormSubmitButtonColor('');
      setFormSubmitButtonBG('');
      setFormSubmitButtonBorderColor('');
      setFormSubmitButtonWidth('');
      setFormSubmitButtonHeight('');

      alert('Submit Button was added!');
    }


  };

  const makeForm = (e : any) => {
    e.preventDefault();
    if(formComponentsArray.length < 2) {
      alert('Form is not finished. Form should has title and al least one input or submit button!');
    } else {
      setShowLinkNumber(1);
    }

  };

  const showFormConstructor = () => {
    return(
      <>
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
            <FormConstructorInput type={'text'} name={'inputName'} onChange={handleInputNameChange} value={ inputName } placeholder={'*name'} />
            <FormConstructorInput type={'text'} name={'inputPlaceholder'} onChange={handleInputPlaceholderChange} value={ inputPlaceholder } placeholder={'placeholder'} />
            <FormConstructorInput type={'text'} name={'inputColor'} onChange={handleInputColorChange} value={ inputColor } placeholder={'color(#100E2A)'} />
            <FormConstructorInput style={{width: 275, marginRight: 10}} type={'text'} name={'inputBG'} onChange={handleInputBGChange} value={ inputBG } placeholder={'BG color(#6B20DE)'} />
            <FormConstructorInput style={{width: 275, marginLeft: 10}} type={'text'} name={'inputBorderColor'} onChange={handleInputBorderColorChange} value={ inputBorderColor } placeholder={'Border color(#100E2A)'} />
            <FormConstructorInput style={{cursor: 'pointer'}} type={'checkbox'} onClick={handleInputRequiredClick} name={'inputRequired'} />
          </FormConstructorInputBlock>
          <FormConstructorAddInput onClick={addInput}>Add Input</FormConstructorAddInput>

          <FormConstructorTitle>Submit Button</FormConstructorTitle>
          <FormConstructorInputBlock>
            <FormConstructorInput type={'text'} name={'submitValue'} onChange={handleSubmitButtonTextChange} value={ formSubmitButtonText } placeholder={'*value'} />
            <FormConstructorInput type={'text'} name={'submitColor'} onChange={handleSubmitButtonColorChange} value={ formSubmitButtonColor } placeholder={'color(#100E2A)'} />
            <FormConstructorInput style={{width: 275, marginRight: 10}} type={'text'} name={'submitBG'} onChange={handleSubmitButtonBGChange} value={ formSubmitButtonBG } placeholder={'BG color(#8933DC)'} />
            <FormConstructorInput style={{width: 275, marginLeft: 10}} type={'text'} name={'submitBorderColor'} onChange={handleSubmitButtonBorderColorChange} value={ formSubmitButtonBorderColor } placeholder={'Border color(#100E2A)'} />
            <FormConstructorInput style={{width: 275, marginRight: 10}} type={'text'} name={'submitWidth'} onChange={handleSubmitButtonWidthChange} value={ formSubmitButtonWidth } placeholder={'Width(100)'} />
            <FormConstructorInput style={{width: 275, marginLeft: 10}} type={'text'} name={'submitHeight'} onChange={handleSubmitButtonHeightChange} value={ formSubmitButtonHeight } placeholder={'Height(50)'} />
          </FormConstructorInputBlock>
          <FormConstructorAddInput onClick={addSubmitButton} style={{width: 200, height: 65}}>Add Submit Button</FormConstructorAddInput>
        </FormConstructor>
        <MakeFormButton onClick={makeForm}>Make Form</MakeFormButton>
      </>
    );
  };

  const showFormContent = () => {
    return(
      <>
        <HeaderComponent pageNameProps={'form_constructor'} />
        { showLinkNumber === 0 ? showFormConstructor() : <FormComponent formArray={formComponentsArray} /> }
      </>
    )
  };

  return(
    <>
      { !sessionStorage.getItem('userLoggedIN') || sessionStorage.getItem('userLoggedIN') === '0' ? <ErrorComponent /> : showFormContent() }
    </>
  );
};

export default FormConstructorComponent;