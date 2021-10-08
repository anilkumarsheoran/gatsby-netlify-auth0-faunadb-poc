// //import { useEffect } from 'react'
// //import { useDispatch } from 'react-redux'
// import React, { useEffect } from 'react'
// import { useAuth0 } from '@auth0/auth0-react'
// // import { getProfile } from '@dynamic-components/Profile/Profile.actions'
// // import { localStorageSet, localStorageGet } from '@utils/local-storage'

// export default function Login() {
//   const { isAuthenticated, getTokenSilently, user } = useAuth0()
//   //const dispatch = useDispatch()

//   useEffect(() => {
//     if (isAuthenticated && user) {
//     //   getTokenSilently().then((accessToken: string) => {
//     //     localStorageSet('userEmail', user?.email)
//     //     if (
//     //       localStorageGet('accessToken') === null ||
//     //       accessToken !== localStorageGet('accessToken')
//     //     ) {
//     //       localStorageSet('accessToken', accessToken)
//     //      // dispatch(getProfile())
//     //     }
//     //   })
//         <div>Logged in </div>
//     }
//   }, [isAuthenticated, user])

//   return null
// }

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { isLoading, isAuthenticated, error, loginWithRedirect } = useAuth0();
  

  return !isAuthenticated && (
    <button onClick={loginWithRedirect}>Log in</button>
  );
};

export default LoginButton;