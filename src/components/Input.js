import React from "react";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import {
    GroupInput,
    Input,
    ParagraphError,
    IconValidation,
  } from "../stylesComponents/FormularioStyle";
  

function InputForm({state,changeStatus,type,placeholder,name,paragraphError,expresionRegular}) {
    const onChange = (e) => {
        changeStatus({...state, campo: e.target.value});
    };

    //PARA VALIDAR EL FORMULARIO
    const validation = () => {
        if(expresionRegular){
            if(expresionRegular.test(state.campo)){
                changeStatus({...state, valid: "true"});
            }else{
                changeStatus({...state, valid: "false"});
            }
        }
    };

  return (
    <div>
      <GroupInput>
        <Input 
            type={type}
            placeholder={placeholder}
            name={name}
            value={state.campo}
            onChange={onChange}
            onKeyUp={validation}
            onBlur={validation}
            valid={state.valid}
        />
        <IconValidation 
            valid={state.valid}
            icon={state.valid === "true" ? faCheckCircle : faTimesCircle}
        />
      </GroupInput>
      <ParagraphError valid={state.valid}>{paragraphError}</ParagraphError>
    </div>
  );
}

export default InputForm;
