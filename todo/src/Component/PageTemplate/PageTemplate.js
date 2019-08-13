import React from 'react';
import style from './PageTemplate.scss';
import classNames from 'classnames/bind';

const PageTemplate = ({children}) => {
    const cx = classNames.bind(style);
    return (
        <div className={cx('page-template')}>
            <h1>일정관리</h1>
            <div>
                {children}
            </div>
        </div>
    );
};

export default PageTemplate;