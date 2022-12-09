import React from 'react'
import GenericInput from './GenericInput'
import propsTypes from 'prop-types'

NUMBER_REGEX = /^[0-9]*$/

const NumberInput = (props) => {

    const [valid, setValid] = React.useState(false)

    function onChange(text) {
        let textIsValid = false;
        if (NUMBER_REGEX.test(text))
        {
            if (props.min != undefined && props.max != undefined)
                textIsValid = text >= props.min && text <= props.max;
            else if (props.min != undefined)
                textIsValid = text >= props.min;
            else if (props.max != undefined)
                textIsValid = text <= props.max;
            else
                textIsValid = true;
        }
        else 
            textIsValid = false;

        setValid(textIsValid);

        if (props.onChange)
            props.onChange(text,textIsValid);
    }
    
  return (
    <GenericInput 
        invalid={!valid}
        number
        model={onChange}
        placeholder={props.placeholder}
        style={[props.style]}
        title={props.title}
    />
  )
}

NumberInput.propTypes = {
    style: propsTypes.object,
    title: propsTypes.string,
    placeholder: propsTypes.string,
    onChange: propsTypes.func,
    min: propsTypes.number,
    max: propsTypes.number,
}

NumberInput.defaultProps = {
    style: undefined,
    title: 'Password',
    placeholder: 'Email',
    onChange: undefined,
    min: undefined,
    max: undefined,
}

export default NumberInput;