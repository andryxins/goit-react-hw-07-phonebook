import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import slideTransition from '../../Transitions/slideTransition.module.css';
import Styles from './PhoneBookLogo.module.css';

const PhoneBookLogo = ({title}) => {

    const [isActive, setIsActive] = useState(false)
    
    setTimeout(() => {
      setIsActive(true)
    }, 300)

    return (
      <CSSTransition in={isActive} classNames={slideTransition} timeout={500}>
        <div className={Styles.logo}>{title}</div>
      </CSSTransition>
    );
}

PhoneBookLogo.propTypes = {
	title: PropTypes.string.isRequired
}

export default PhoneBookLogo