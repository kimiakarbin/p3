import React, { useState } from 'react';

function ListItems({ items, completelistItem }) {
    // const [openModal, setOpenModal] = useState(false);
    // const [selectedId, setSelectedId] = useState();

    // const onDelete = (id) => {
    //     setOpenModal(true);
    //     setSelectedId(id);
    // };

    return items.map((listItem, index) => (
        <div
            className={
                listItem.isComplete ? 'listItem-rpw complete' : 'listItem-row'
            }
            key={listItem.id}
            onClick={() => completelistItem(listItem.id)}
        >
            <div>
                <div>
                    <h3> {listItem.title}</h3>
                    <p> {listItem.body}</p>
                </div>

                <div>
                    <div

                    // onClick={() => onDelete(listItem.id)}
                    >
                        <i className="material-icons">delete</i>
                    </div>
                    <div>
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
