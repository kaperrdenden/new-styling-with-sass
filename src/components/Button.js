import React from 'react';
import './Button.scss';
import classNames from 'classnames';
function Button({children, size}){
    return (<button className={classNames('Button', size)}>{children}</button>)
}

Button.defaultProps = {
    size: 'medium',
};

export default Button;

