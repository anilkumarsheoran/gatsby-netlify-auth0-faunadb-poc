import React from 'react';
import * as styles from './users.module.css'
import UserTile from './userTile'


export default function Users(props){

    return (
        <div>
            {props.users && <div className={styles.userHeading}>List of users</div> }
            <ul className={styles.userswrapper}>
                {props.users && props.users.map((user) =>(
                    <UserTile key={user.user_id}  user={user}/>
                ))}
            </ul>
        </div>
    )
}