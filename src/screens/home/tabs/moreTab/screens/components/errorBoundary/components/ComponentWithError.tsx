import React from 'react';

const ComponentWithError = () => {
  throw new Error('Error arrojado por ComponentWithError');
  return <></>;
};

export default ComponentWithError;
