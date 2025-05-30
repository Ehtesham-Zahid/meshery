import React from 'react';
import PropTypes from 'prop-types';
import uiConfig from '../../ui.config';

function LoadingScreen(props) {
  const { message, children, isLoading, ...other } = props;
  const AnimatedLogoDark = uiConfig.AnimatedLogoDark;

  if (isLoading) {
    return (
      <div
        {...other}
        style={{
          display: 'grid',
          placeItems: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          backgroundColor: '#263238', // color of navigation menu
          color: '#dedede', // soften the subtitle / message
          ...(other.style || {}),
        }}
      >
        <div>
          <AnimatedLogoDark />
          <h1
            style={{
              fontSize: '.9rem',
              fontWeight: 'normal',
              marginTop: '1rem',
            }}
          >
            {message}
          </h1>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

LoadingScreen.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default LoadingScreen;
