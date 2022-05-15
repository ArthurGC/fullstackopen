import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    return (
        <h1>{props.course}</h1>
    )
}

Header.propTypes = {
    props: PropTypes.shape({
        course: PropTypes.string,
    })
}

export default Header
