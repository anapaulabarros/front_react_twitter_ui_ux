import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './style';

const Feed: React.FC = () => {
  return (
      <Container>
        <Tab>Twitters</Tab>

        <Tweets>
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
        </Tweets> 
      </Container>
  );
}

export default Feed;