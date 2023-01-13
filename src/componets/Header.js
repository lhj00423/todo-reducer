import React from 'react';

const Header = ({input,onChange ,addTodo}) => {
    return (
        <div>
            <h2>to do list</h2>
            <div>
                <input value={input} onChange={onChange}/>
                <button onClick={addTodo}>+</button>
            </div>
        </div>
    );
};

export default Header;