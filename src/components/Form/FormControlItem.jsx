import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function FormControlItem({ label, ...props }) {
  return (
    <FloatingLabel label={label} className="mb-3 fw-bold text-primary">
      <Form.Control required {...props} />
    </FloatingLabel>
  );
}

export default FormControlItem;
