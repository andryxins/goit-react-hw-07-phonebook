import React from 'react';
import Loader from 'react-loader-spinner';
import Style from './PhoneBookContactLoader.module.css';

const PhoneBookContactLoader = ({ isLoading }) => {
  return isLoading ? (
    <div className={Style.container}>
      <Loader
        className={Style.loader}
        type="Grid"
        color="#3645ab"
        height={80}
        width={80}
      />
    </div>
  ) : null;
};

export default PhoneBookContactLoader;
