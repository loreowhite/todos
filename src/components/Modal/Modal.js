import React, {useState} from 'react';
import {Backdrop, Input, ModalButton, ModalWrapper} from "./Modal.styles";

export const Modal = ({ onSave, close }) => {
    const [title, setTitle] = useState('');
    const contentComponentClickHandle = (event) => {
        event.stopPropagation();
    }

    const handleSave = () => {
        onSave(title);
        setTitle('');
        close();
    };

    return (
        <Backdrop onClick={close}>
            <ModalWrapper onClick={contentComponentClickHandle}>
                <Input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                />
                <ModalButton onClick={handleSave}>Сохранить</ModalButton>
            </ModalWrapper>
        </Backdrop>
    );
};
