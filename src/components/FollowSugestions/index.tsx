import React from 'react';

import { Container, Avatar, Info, FollowButton } from './style';

interface Props {
  name: string;
  nickname: string;
}

const FollowSugestions: React.FC<Props> = ({
  name,
  nickname
}) => {
  return (
    <Container>
      <div>
        <Avatar /> 

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButton outlined>Sugerir</FollowButton>
      
    </Container>
  );
}

export default FollowSugestions;