import React from 'react';

import Login from '../components/login';

export default {
  title: 'Example/Login',
  component: Login,
};

const Template = (args) => <Login {...args} />;

export const UserTile = Template.bind({});
UserTile.args = {
 };
