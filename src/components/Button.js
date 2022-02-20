import React from 'react';
import './Button.scss';
import classNames from 'classnames';
function Button({ children, size, color, outline, fullWidth }) {
    return (
      <button className={classNames('Button', size, color, { outline, fullWidth })}>
                                    {/* outline의 값이 true일때만 
                                        button에 outline class가 적용된다
                                        조건식같은 느낌?
                                    */}
        {children}
      </button>
    );
  }
  

Button.defaultProps = {
    size: 'medium',
    color: 'blue',
};

export default Button;

