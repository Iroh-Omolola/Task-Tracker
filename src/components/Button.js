import React from 'react'
import PropTypes from 'prop-types'

const button = ({text, onClick}) => { 
    return(
        <button className='btn' onClick={onClick}>{text}</button>
    )
}
button.defaultProps ={
    text:'Add'
}
// eslint-disable-next-line react/no-typos
button.propTypes={
    text: PropTypes,
    onClick:PropTypes.func.isRequired
}
export default button
