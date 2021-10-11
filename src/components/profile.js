import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import {useGetAllUsers} from '../components/hooks/useGetAllUsers'
import Users from '../components/admin/users'
import Container from './container'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import * as styles from './admin/users.module.css'


export default function Profile(){
    const { data, loading, error, getToken } = useGetAllUsers();
    const { user } = useAuth0();
    return (
        <Container>
            <div>
                <div className={styles.usercard} key={user.user_id}>
                    <div>
                        <img className={styles.profilepic} src={user.picture} ></img>
                        <span>{user.name}</span>
                    </div>
                    <div><span>Email:- </span><span>{user.email}</span></div>
                    {/* <div><span>Roles:- </span><span>{user.roles}</span></div> */}
                </div>
          {loading && <div style={{ textAlign: 'center' }}><Loader type="Circles" color="#00BFFF" height={80} width={80}/></div>}
                {!loading && data && <Users users={data.body.users} />}
            </div>
        </Container>
    )
}