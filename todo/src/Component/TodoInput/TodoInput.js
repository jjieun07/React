import React from 'react';
import style from './TodoInput.scss';
import classNames from 'classnames/bind'

const TodoInput = () => {
    const cx = classNames.bind(style)
    return (
        <div className={cx('todo-input')}>
            <input onChange={() => {}}  onKeyPress={() => {}}/>
            <div className={cx('add-button')} onClick={() => {}}>추가</div>
        </div>
    );
};

export default TodoInput;