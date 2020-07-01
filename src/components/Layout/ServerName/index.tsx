import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';

const ServerName: React.FC = () => {
  return (
    <Grid>
      <ServerList />
    </Grid>
  );
};

export default ServerName;