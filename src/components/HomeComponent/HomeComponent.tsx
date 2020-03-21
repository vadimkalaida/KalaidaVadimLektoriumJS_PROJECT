import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ErrorBlock } from "../../elements";

const HomeComponent = () => {
  const [ showBlock, setShowBlock ] : React.ComponentState = useState(0);
  let userLoggedIN : any = sessionStorage.getItem('userLoggedIN');

  useEffect(() => {
    if(userLoggedIN === 1) {
      setShowBlock(1)
    } else {
      setShowBlock(0)
    }
  }, [showBlock, userLoggedIN]);

  const mainHomeBlock = () => {
    return(
      <>
        Home Component
      </>
    )
  };

  const loginAccount = () => {
    return(
      <ErrorBlock>
        <Link to={'/'}>Please login to your account.</Link>
      </ErrorBlock>
    );
  };

  return(
    <>
      { showBlock === 0 ? loginAccount() : mainHomeBlock() }
    </>
  );
};

export default HomeComponent;