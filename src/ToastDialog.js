import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import { useBootstrapPrefix } from './ThemeProvider';

const propTypes = {
  /** @default 'toast' */
  bsPrefix: PropTypes.string,

  /**
   * Specifies a large or small toast.
   *
   * @type ('sm'|'lg')
   */
  size: PropTypes.string,

  /**
   * Specify whether the Component should be vertically centered
   */
  centered: PropTypes.bool,

  /**
   * Allows scrolling the `<Toast.Body>` instead of the entire Toast when overflowing.
   */
  scrollable: PropTypes.bool,
};

const ToastDialog = React.forwardRef(
  (
    {
      bsPrefix,
      className,
      centered,
      size,
      children,
      scrollable,
      show,
      ...props
    },
    ref,
  ) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'toast');
    const dialogClass = `${bsPrefix}`;

    return (
      <div
        {...props}
        ref={ref}
        className={classNames(
          dialogClass,
          className,
          show && 'show',
          size && `${bsPrefix}-${size}`,
          centered && `${dialogClass}-centered`,
          scrollable && `${dialogClass}-scrollable`,
        )}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        {children}
      </div>
    );
  },
);

ToastDialog.displayName = 'ToastDialog';
ToastDialog.propTypes = propTypes;

export default ToastDialog;