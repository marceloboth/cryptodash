import React  from 'react';
import styled, {css} from "styled-components";

const Logo = styled.div`
  font-size: 1.5em;
`

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 100px auto 100px 100px;
`

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0px 0px 60px #03ff03;
  `}
`

function toPropCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name, active}) {
  return (
    <ControlButtonElem active={active}>
      {toPropCase(name)}
    </ControlButtonElem>
  )
}

export default function () {
  return <Bar>
    <Logo>Cryptodash</Logo>
    <div/>
    <ControlButton name="dashboard" active />
    <ControlButton name="settings" />
  </Bar>
}