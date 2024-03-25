import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {

    let DialogsData = [
        {id: 1, name: 'Makar'},
        {id: 2, name: 'Artem'},
        {id: 3, name: 'Stepa'}
    ]

    let MessagesData = [
        {content: "Привет"},
        {content: "Как дела?"},
        {content: "Пойдешь гулять?"}
    ]

    let dialogItems = DialogsData.map(dial => <DialogItem name={dial.name} id={dial.id}/>);
    let messagesElements = MessagesData.map(mess => <Message content={mess.content}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;