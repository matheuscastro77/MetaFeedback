import React from "react";
import {RadioWrapper, Mark, Input, Label} from './Styled'

const Radio = ({ name, children, value }) => (
  <RadioWrapper>
    <Label>
      <Input name={name} type="radio" value={value}/>
      <Mark />
      {children}
    </Label>
  </RadioWrapper>
)

export default Radio
