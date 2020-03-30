import React, { useState, useEffect } from 'react';
import { Form, FormTitle, FormInput, FormButton, FormLink } from "./element";
import { Link } from "react-router-dom";


const FormComponent : React.FC<{formArray : Array<any>}> = ({formArray}) => {
  const [ title, setTitle ] : React.ComponentState = useState('');
  const [ inputsArray, setInputsArray ] : React.ComponentState = useState([]);
  const [ submitButton, setSubmitButton ] : React.ComponentState = useState([]);
  const [ showInputNumber, setShowInputNumber ] : React.ComponentState = useState(0);

  useEffect(() => {
    let inputsArray = [];
    let submitButton = [];

    for(let i : number = 0; i < formArray.length; i++) {
      if(formArray[i].title) {
        setTitle(formArray[i].title);
      }


      if(formArray[i].its === 'input') {
        inputsArray.push(formArray[i]);
      }

      if(formArray[i].its === 'submitButton') {
        submitButton.push(formArray[i]);
      }
    }

    if(inputsArray.length !== 0) {
      setShowInputNumber(1);
    } else {
      setShowInputNumber(0);
    }

    setInputsArray(inputsArray);
    setSubmitButton(submitButton);

  }, [ formArray ]);


  return(
    <>
      <Form>
        <FormTitle>{ title }</FormTitle>
        { showInputNumber === 1 ? inputsArray.map( ( item : any, index : number ) => {
          if(item.required === 1) {
            return (
              <FormInput type={item.type} name={item.name}
               placeholder={item.placeholder.length > 0 ? item.placeholder : null} style={{color: item.inputColor, background: item.inputBG, border: `1px solid ${item.inputBorderColor}` }}
               key={index} required />
            );
          } else {
            return (
              <FormInput type={item.type} name={item.name}
               placeholder={item.placeholder.length > 0 ? item.placeholder : null} style={{color: item.inputColor, background: item.inputBG, border: `1px solid ${item.inputBorderColor}` }}
               key={index} />);
          }
        } ) : null }

        { submitButton.length !== 0 ? submitButton.map( ( item : any, index : number ) =>
          <FormButton type={'submit'} style={{color: item.color, background: item.bg, width: item.width, height: item.height,
          border: item.BorderColor !== 'none' ? `1px solid ${item.BorderColor}` : 'none' }} value={item.text} /> ) : null }
      </Form>
      <FormLink onClick={() => {document.location.reload();}}>Return</FormLink>

    </>
  );
};

export default FormComponent;