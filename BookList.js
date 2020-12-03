import React, { useState, useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
function BookList() {
    const { isLight, light, dark } = useContext(ThemeContext)

    const ui = isLight ? light : dark;

    const [books, setBook] = useState([
        { name: 'htmlcss', author: 'Jon Duc' },
        { name: 'React', author: 'Dave' },
        { name: 'Js', author: 'Mark' }


    ])
    return (
        <div style={{ backgroundColor: ui.bg, color: ui.text }}>
            <ul>
                {books.map((item) => (
                    <li key={item.name}>{`${item.name} author is ${item.author}`}</li>

                ))}
            </ul>


        </div>
    );
}

export default BookList;
