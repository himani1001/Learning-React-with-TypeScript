// import { MouseEvent } from "react";
import { useState } from "react";
import "./TodoList.css"

//{items: [], headimg: string}
interface Props{
    days: string[];
    heading: string;
    //we are using these to pass data to our TodoList component

    onSelectItem: (day: string) => void;
}

function TodoList({days, heading, onSelectItem}: Props) {

    //listing items dynamically
    // let days = [
    //     'Monday',
    //     'Tuesday',
    //     'Wednesday',
    //     'Thursday',
    //     'Friday',
    //     'Saturday',
    //     'Sunday'
    // ]

    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);


    // days = [];

    // const getMessage = () => {
    //     return days.length === 0 ? <p>No item found</p> : null
    // }
    //we could have used a variable but the benefit of using a function is, they have parameters so we can get different messages depending on different conditions

    //Event handler
    // const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <>
            <h1>{heading}</h1>
            {days.length === 0 && <p>No item found</p>}
            {/*if condition is true the result of entire expression will be paragraph element but if the condition is false then the result will be false and nothing will be render on the screen*/}
            <ul className='todo-list'>
                {/* class is a reserved keyword in javascript or typesript so we use className */}
                {days.map((day, index) => (
                    <li className = {selectedIndex === index ? 'todo-list active' : 'todo-list'}
                    key={day} 
                    // onClick={()=> console.log(day, index)}
                    // onClick = {handleClick}
                    onClick={() => { 
                        setSelectedIndex(index);
                        onSelectItem(day);
                    }}
                    >
                        {day}
                    </li>))}
            </ul>
        </>)
}

export default TodoList;