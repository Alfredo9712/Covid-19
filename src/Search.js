import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
const Search = ({ getCountry }) => {
  const [text, setText] = useState('');
  const onChange = (q) => {
    setText(q);
  };
  return (
    <Form
      onClick={(q) => {
        q.preventDefault();
        getCountry(text.replace(/\s+/g, '-').toLowerCase());
      }}
    >
      <Form.Group>
        <Form.Label className='text-muted text-xs-center'>
          Search below
        </Form.Label>
        <Form.Control
          type='text'
          placeholder='ex. United States'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </Form.Group>

      <Button className='mb-3'>Submit</Button>
    </Form>
  );
};

export default Search;
