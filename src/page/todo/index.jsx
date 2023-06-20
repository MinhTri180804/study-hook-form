import React, { useState } from 'react';
import TodoItem from './components/todoItem';
import './style.css';
function TodoFeatures(props) {
    const dataTodo = [
        {
            id : 1,
            title : 'Buy milk',
            completed : false
        },
        {
            id : 2,
            title : 'Watch TV',
            completed : false
        },
        
        {
            id : 3,
            title : 'Go to School',
            completed : false
        },
        
        {
            id : 4,
            title : 'Play Soccer',
            completed : false
        },
        
        {
            id : 5,
            title : 'listening music',
            completed : false
        },
    ]

    const [data, setData] = useState(dataTodo);

    function handleOnclick(todo, index) {
        const newData = [...dataTodo]
        newData[index] = {
            ...todo,
            completed : todo.completed === false ? true : false
        }

        console.log(newData[index]);
        setData(newData);        
    }
    return (
        <>
            <h2 className="title-page">
                    TODO LIST
            </h2>
            <ul className="list__item">
                {data.map((todo, index) => (
                    <TodoItem data={todo} indexTodo={index} key={index} eventClick={handleOnclick}/>
                ))}
            </ul>
        </>
    );
}

export default TodoFeatures;