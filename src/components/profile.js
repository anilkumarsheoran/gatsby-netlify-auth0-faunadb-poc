import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import {useGetAllUsers} from '../components/hooks/useGetAllUsers'
import Users from '../components/admin/users'
import Container from './container'


export default function Profile(){
    const { data, loading, error, getToken } = useGetAllUsers();
    const { user } = useAuth0();
    return (
        <Container>
            <div>Hello {user.name}
                {data && <Users users={data.body.users} />}
            </div>
        </Container>
    )
}