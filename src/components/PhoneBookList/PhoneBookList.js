import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PhoneBookListItem from '../PhoneBookListItem/PhoneBookListItemContainer';
import Styles from './PhoneBookList.module.css';
import transitionsStyle from '../../Transitions/slideTransition.module.css';

const PhoneBookList = ({phoneBookItems, onGetAllContact}) => {

    useEffect(() => {
      onGetAllContact()
    },[])

return (
    <TransitionGroup component="ul" className={Styles.container}>
        {phoneBookItems.map(contact => (
          <CSSTransition
            in
            timeout={500}
            classNames={transitionsStyle}
            key={contact.id}
            unmountOnExit
          >
            <PhoneBookListItem contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    )
}

PhoneBookList.propTypes = {
  phoneBookItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string,
      }),
    ).isRequired,
    onGetAllContact: PropTypes.func,
}

export default PhoneBookList
