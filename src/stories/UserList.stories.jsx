import React from 'react';

import UserList from '../components/admin/userTile';

export default {
  title: 'Example/UserTile',
  component: UserList,
};

const Template = (args) => <UserList {...args} />;

export const UserTile = Template.bind({});
UserTile.args = {
  user: {"created_at":"2021-09-16T03:24:32.897Z","email":"testing@gmail.com","email_verified":false,"identities":[{"connection":"Username-Password-Authentication","provider":"auth0","user_id":"6142b8f00a19ee006a344f47","isSocial":false}],"name":"testing@gmail.com","nickname":"testing","picture":"https://s.gravatar.com/avatar/9ad574806427070b94735f216e9abdc1?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png","updated_at":"2021-10-12T02:01:42.658Z","user_id":"auth0|6142b8f00a19ee006a344f47","last_login":"2021-10-12T02:01:42.657Z","last_ip":"103.17.59.10","logins_count":19,"roles":["Admin"]},
  styles: {"userswrapper":"users-module--userswrapper--1CWVm","usercard":"users-module--usercard--L0ShX","profilepic":"users-module--profilepic--2hGWk","userHeading":"users-module--userHeading--ZNHFR"}
};
