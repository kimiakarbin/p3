import React, { useState } from 'react';
import GetUser from '../GetUser/GetUser';
import ListItems from '../ListItems/ListItems';

function List() {
    const [items, setItems] = useState([]);

    const addlistItem = (listItem) => {
        if (!listItem.text || /^\s*$/.test(listItem.text)) {
            return;
        }
        const newItems = [listItem, ...items];

        setItems(newItems);
    };

    // const removeTodo = (id) => {
    //     const removeArr = [...items].filter((listItem) => listItem.id !== id);

    //     setItems(removeArr);
    // };

    const completelistItem = (id) => {
        let updatedlistItem = items.map((listItem) => {
            if (listItem.id === id) {
                listItem.isComplete = !listItem.isComplete;
            }

            return listItem;
        });

        setItems(updatedlistItem);
    };

    return (
        <div>
            <div>
                <GetUser onSubmit={addlistItem} />

                <ListItems
                    items={items}
                    completelistItem={completelistItem}
                    // removeTodo={removeTodo}
                />
            </div>
        </div>
    );
}

export default List;
