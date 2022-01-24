import React from 'react';

function Tittle({ tittle }) {
  return (
    <>
      <p className="fs-5 fw-bolder lh-base text-primary text-opacity-75 text-center">
        {tittle}
      </p>
    </>
  );
}

export default Tittle;
