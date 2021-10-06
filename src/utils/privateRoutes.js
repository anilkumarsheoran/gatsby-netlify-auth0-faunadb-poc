import * as React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';


function PrivateRoute({ component: Component, ...rest }) {
  return <Component {...rest} />;
}

export default withAuthenticationRequired(PrivateRoute);


// import React from "react"
// import { navigate } from "gatsby"
// import { isLoggedIn } from "../services/auth"
// const PrivateRoute = ({ component: Component, location, ...rest }) => {
//   if (!isLoggedIn() && location.pathname !== `/app/login`) {
//     navigate("/app/login")
//     return null
//   }
//   return <Component {...rest} />
// }
// export default PrivateRoute