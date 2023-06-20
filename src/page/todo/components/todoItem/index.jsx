import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

TodoItem.propTypes = {
    data : PropTypes.object.isRequired,
    indexTodo : PropTypes.number.isRequired,
    eventClick : PropTypes.func
};

TodoItem.defaultProps = {
    eventClick : null
}

function TodoItem(props) {
    const { data, indexTodo, eventClick } = props;

    function handleOnclick(todo, index) {
        if(!eventClick) return;

        return eventClick(todo, index);
    }

    return (
        <li
        className={classNames({
            'todo-item': true,
            'completed': data.completed === true
        })}
        onClick={() => handleOnclick(data, indexTodo)}
        >
            {data.title}
        </li>
    );
}

export default TodoItem;