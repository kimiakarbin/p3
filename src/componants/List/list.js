import React, { useState } from 'react';
import GetUser from '../GetUser/GetUser';
import ListItems from '../ListItems/ListItems';

function List() {
    const [items, setItems] = useState([]);

    const addlistItem = (listItem) => {
        if (!listItem.title || /^\s*$/.test(listItem.title)) {
            return;
        }
        const newItems = [listItem, ...items];

        setItems(newItems);
    };

    // const updateItem = (itemId, newValue) => {
    //     if (!newValue.title || /^\s*$/.test(newValue.title)) {
    //         return;
    //     }

    //     setItems((prev) =>
    //         prev.map((item) => (item.id === itemId ? newValue : item)),
    //     );
    // };
    const onDelete = (id) => {
        const removeArr = [...items].filter((listItem) => listItem.id !== id);

        setItems(removeArr);
    };

    const completelistItem = (id) => {
        let updatedItems = items.map((listItem) => {
            if (listItem.id === id) {
                listItem.isComplete = !listItem.isComplete;
            }

            return listItem;
        });

        setItems(updatedItems);
    };
    return (
        <div>
            <div>
                <GetUser onSubmit={addlistItem} />

                <ListItems
                    items={items}
                    completelistItem={completelistItem}
                    onDelete={onDelete}
                    // updateItem={updateItem}
                />
            </div>
        </div>
    );
}

export default List;
