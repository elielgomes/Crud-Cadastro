import styled, { css } from "styled-components";
import { IMaskInput } from "react-imask";

export const Input = styled.input`
  ${({ isvalid }) =>
    isvalid && css
      ? `outline: 1px solid transparent;`
      : `outline: 1px solid #ff0000;`}

  border-radius: 5px;
  border: none;
  padding: 10px;
  font-size: 20px;
 
  color: #000;

  &:disabled {
    background-color: transparent;
    color: #fff;
  }

  &.info-name {
    width: 250px;
    margin-right: 20px;
  }

  &.info-email {
    width: 320px;
  }
`;

export const InputMask = styled(IMaskInput)`
  ${({ isvalidmask }) =>
    isvalidmask == "true" && css
      ? `outline: 1px solid transparent;`
      : `outline: 1px solid #ff0000;`}

  border-radius: 5px;
  border: none;
  padding: 10px;
  font-size: 20px;
 
  color: #000;

  &:disabled {
    background-color: transparent;
    color: #fff;
  }

  &.info-phone {
    width: 180px;
    margin-right: 20px;
  }

  &.info-cep {
    width: 125px;
    margin-right: 20px;
  }

  &.info-number {
    width: 90px;
    margin-right: 20px;
  }
`;

export const SaveButton = styled.button`
  ${({ colordisabled }) =>
    colordisabled && css
      ? `background-color: #3D9971; color: rgba(255,255,255, 0.4);`
      : `background-color: #14CC7C; color: rgba(255,255,255, 0.8);`}

  padding: 10px 5px;
  font-size: 20px;
  margin-right: 20px;
  width: 90px;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
 
  transition: 0.5s;
  ;

  &:hover {
    transform: scale(1.1);
  }
`;


export const ContainerInfoBody = styled.div`

  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0px 35px;
    width: 100%;
    
  }

  label {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }

  span {
    color: #fff;
    font-size: 20px;
  }

  #container-btn-send {
    display: flex;
    justify-content: flex-end;
  }

  #information-board {
    background-color: ${props => props.theme.colors.primary};
    width: 800px;
    height: 500px;
    border-radius: 5px;
  }

  #container-head {
    display: flex;
    justify-content: flex-end;
    height: 63px;
  }
  `;


export const ButtonEdit = styled.button`

${({ btnvisible }) =>
    btnvisible && css
      ? `display: initial;`
      : `display:none;`}

    background-color: transparent;
    width: 30px;
    outline: none;
    border: none;
    margin: 15px;
    color: #ffffffbb;
    

 &:hover{
    color: #fff;
  }

  &:disabled {
    color: #ffffff6c;
  }

`