import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorBlock } from './elements'

const ErrorComponent : React.FC = () => {
  return(
    <ErrorBlock>
      <p>Please <Link to={'/'}>LOGIN</Link> to your account</p>
    </ErrorBlock>
  );
};

export default ErrorComponent;