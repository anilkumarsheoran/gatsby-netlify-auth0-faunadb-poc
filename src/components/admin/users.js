import React from 'react';
import * as styles from './users.module.css'

export default function Users(props){

    return (
        <ul className={styles.userswrapper}>
            {props.users.map((user) =>(
                <li className={styles.usercard}>
                    <div>
                        <img className={styles.profilepic} src={user.picture} ></img>
                        <span>{user.name}</span>
                    </div>
                    <div><span>Email</span><span>{user.email}</span></div>
                    <div><span>Roles</span><span>{user.roles}</span></div>
                </li>
            ))}
        </ul>
    )
}