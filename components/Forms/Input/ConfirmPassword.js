import React from 'react'
import GenericInput from './GenericInput'
import propsTypes from 'prop-types'

const ConfirmPassword = (props) => {
    const [valid, setValid] = React.useState(false)

    function onChange(text) {
        setValid(text == props.matchText);

        if (props.onChange)
            props.onChange(text == props.matchText);
    }

  return (
    <GenericInput 
        invalid={!valid}
        password={true} 
        model={onChange}
        style={props.style}
        title={props.title}
    />
  )
}

ConfirmPassword.propTypes = {
    style: propsTypes.object,
    title: propsTypes.string,
    onChange: propsTypes.func,
    matchText: propsTypes.string.isRequired,
}

ConfirmPassword.defaultProps = {
    style: undefined,
    title: 'Password',
    matchText: undefined,
}

export default ConfirmPassword