import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function GetUser(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: uuidv4(),
            title: title,
            body: body,
        });

        setTitle('');
        setBody('');
    };

    const onClear = () => {
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title :</label>
                <input
                    type="text"
                    name="text"
                    placeholder="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div>
                <label>Body :</label>
                <input
                    type="text"
                    placeholder="body"
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                />
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={onClear}>clear</button>
            </div>
        </form>
    );
}

export default GetUser;
