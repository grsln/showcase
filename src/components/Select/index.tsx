import React from "react";
import { Form } from "react-bootstrap";

interface ISelectLink {
  id: string;
  items: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Select = ({ id, items, onChange }: ISelectLink) => {
  return (
    <Form.Group controlId={id}>
      <Form.Control as="select" custom onChange={onChange}>
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default Select;
