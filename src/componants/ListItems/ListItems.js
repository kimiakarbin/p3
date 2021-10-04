import React, { useState } from 'react';
import GetUser from '../GetUser/GetUser';

function ListItems({ items, completelistItem, onDelete }) {
    // const [openModal, setOpenModal] = useState(false);
    const [selectedId, setSelectedId] = useState();

    // const [edit, setEdit] = useState({
    //     id: null,
    //     value: '',
    // });
    // const SubmitUpdate = (value) => {
    //     updateItem(edit.id, value);
    //     setEdit({
    //         id: null,
    //         value: '',
    //     });
    // };
    // if (edit.id) {
    //     return <GetUser edit={edit} onSubmit={SubmitUpdate} />;
    // }
    return items.map((listItem, index) => (
        <div
            className={
                listItem.isComplete ? 'listItem-row complete' : 'listItem-row'
            }
            key={index}
        >
            <div
                key={listItem.id}
                onClick={() => completelistItem(listItem.id)}
            >
                <div>
                    {listItem.title}
                    {listItem.body}
                </div>

                <div>
                    <div
                        className="delete--icon"
                        onClick={() => onDelete(listItem.id)}
                    >
                        <i className="material-icons">delete</i>
                    </div>
                    <div
                    // onClick={() =>
                    //     setEdit({ id: listItem.id, value: listItem.title })
                    // }
                    >
                        <i className="material-icons">edit</i>
                    </div>
                </div>
            </div>

            {/* {openModal && (
                <Modal
                    removeTodo={removeTodo}
                    closeModal={setOpenModal}
                    id={selectedId}
                />
            )} */}
        </div>
    ));
}

export default ListItems;
