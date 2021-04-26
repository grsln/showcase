import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

interface IToggle {
  firstState: string;
  secondState: string;
  onChange: (select: string) => void;
}
const Toggle = ({ firstState, secondState, onChange }: IToggle) => {
  const [state, setState] = useState(firstState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
    onChange(e.target.value);
  };
  return (
    <ButtonGroup toggle>
      <ToggleButton
        key={firstState}
        type="radio"
        variant="primary"
        name="radio"
        value={firstState}
        checked={state === firstState}
        onChange={handleChange}
        size="sm"
      >
        {firstState}
      </ToggleButton>
      <ToggleButton
        key={secondState}
        type="radio"
        variant="primary"
        name="radio"
        value={secondState}
        checked={state === secondState}
        onChange={handleChange}
        size="sm"
      >
        {secondState}
      </ToggleButton>
    </ButtonGroup>
  );
};

export default Toggle;
