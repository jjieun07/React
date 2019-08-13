import React, { Component } from 'react';
import style from './TodoItem.scss';
import classNames from 'classnames/bind'

class TodoItem extends Component {
    render() {
        const cx = classNames.bind(style)
        return (
            <div className={cx('todo-item')} onClick={() => {}}>
                <input className={cx('tick')} type='checkbox' checked={true} readOnly/>
                <div className={cx('text')}>{this.props.children}</div>
                <div className={cx('delete')} onClick={() => {}}>[지우기]</div>
            </div>
        );
    }
}

export default TodoItem;