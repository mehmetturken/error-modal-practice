// @ts-nocheck
import React, { useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import ErrorModal from '../ErrorModal/ErrorModal';
import style from './AddUser.module.css';

const AddUser = (props) => {

    const [userNameData, setUserNameData] = useState('');
    const [userAgeData, setUserAgeData] = useState('');
    const [error, setError] = useState();


    const addUserHandler = (e) => {
        e.preventDefault();

        if (userNameData.trim().length === 0 || userAgeData.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter valid name and age'
            });
            return;
        }

        if (+userAgeData < 1) {
            setError({
                title: 'Invalid age',
                message: 'Age must be positive!'
            });
            return;
        }

        props.onAddUser(userNameData, userAgeData);
        setUserNameData('');
        setUserAgeData('');
    }

    const usernameChangeHandler = (e) => {
        setUserNameData(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setUserAgeData(e.target.value);
    }

    const errorHandler = () => {
        setError(null); //falsy condition to remove the error modal.
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onCancel={errorHandler} />}
            <Card>
                <form onSubmit={addUserHandler} className={style.form}>
                    <label htmlFor='username' className={style.label}>Username</label>
                    <input id="username" name="username" type="text" value={userNameData} className={style.text} onChange={usernameChangeHandler} />
                    <label htmlFor='age' className={style.label}>Age (Years)</label>
                    <input id="age" type="number" name="age" className={style.text} value={userAgeData} onChange={ageChangeHandler} />
                    <Button type='submit'>Add User</Button>
                </form>

            </Card>
        </>
    )
}

export default AddUser;