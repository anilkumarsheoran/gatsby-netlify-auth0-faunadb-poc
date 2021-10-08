import React from 'react';
import Seo from '../../components/seo'
import Layout from '../../components/layout'
import { Router } from "@reach/router"
import Profile from '../../components/profile'
import PrivateRoute from '../../utils/privateRoutes'


export default function Admin(props) {
    return (
        <Layout location={props.location}>
            <Seo title="Admin" />
            <Router basepath="/admin">
                <PrivateRoute component={Profile} path="/profile" />
                {/* <Details path="/details" />
                <Login path="/login" />
                <Default path="/" /> */}
            </Router>
        </Layout>
    )
}