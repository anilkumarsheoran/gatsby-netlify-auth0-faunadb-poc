import React from 'react'
import Link from 'gatsby-link'
import { useAuth0 } from '@auth0/auth0-react';
import Login from '../components/login'
import Logout from '../components/logout'

import * as styles from './navigation.module.css'

const Navigation = () => {

  const {isAuthenticated} = useAuth0();
  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Link to="/" className={styles.logoLink}>
        <span className={styles.logo} />
        <span className={styles.navigationItem}>Gatsby Auth0 Netlify POC</span>
      </Link>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/search/" activeClassName="active">
            Search
          </Link>
        </li>
        {isAuthenticated &&
          <li className={styles.navigationItem}>
            <Link to="/admin/profile" activeClassName="active">
              User
            </Link>
          </li>
        }
        <li className={styles.navigationItem}><Login /></li>
        <li className={styles.navigationItem}><Logout /></li>
      </ul>
    </nav>
  )
}

export default Navigation
