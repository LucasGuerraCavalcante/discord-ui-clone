import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelList from '../ChannelList';
import ChannelInfo from '../ChannelInfo';
import UserInfo from '../UserInfo';
import UserList from '../UserList';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <div />
      <UserList />
    </Grid>
  );
};

export default Layout;
