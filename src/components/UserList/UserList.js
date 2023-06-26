// @ts-nocheck
import React from "react";
import Card from "../Card/Card";
import style from './UserList.module.css';

const UserList = (props) => {
    return (
        <Card className={style.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>{user.username} ({user.age} years old)</li>
                ))}
            </ul>
        </Card>
    )
}

export default UserList;