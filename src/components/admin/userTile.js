import React from 'react';
// import * as styles from './users.module.css'
import './users.module.css';

export default function UserTile(props){
    return (
        <li className="usercard" style={{ backgroundColor: '#efefef',padding: '30px', borderRadius: '20px'}} key={props.user.user_id}>
            <div>
                <img className="profilepic" src={props.user.picture} ></img>
                <span>{props.user.name}</span>
            </div>
            <div><span>Email:- </span><span>{props.user.email}</span></div>
            <div><span>Roles:- </span><span>{props.user.roles}</span></div>
        </li>
    )
}