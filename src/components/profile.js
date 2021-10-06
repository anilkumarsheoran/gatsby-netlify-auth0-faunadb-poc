import React from 'react'
import {useGetAllUsers} from '../components/hooks/useGetAllUsers'

export default function Profile(){
    const { data, loading, error, getToken } = useGetAllUsers();
    {console.log('fffffffffffffffffffff' + data)}
    return (
        <div>Profile</div>
    )
}