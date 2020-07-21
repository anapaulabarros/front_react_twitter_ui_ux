import React from 'react';

import { 
    Container,
    Retweeted,
    RocketSeatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    Icons,
    Status,
    ImageContent,
    CommentIcon,
    LikeIcon,
    RetweetIcon
 } from './style';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RocketSeatIcon />
              Você retweetou
          </Retweeted>

          <Body>
              <Avatar />
              <Content>
                  <Header>
                      <strong>
                        Ana Paula
                      </strong>
                      <span>@barros.anapaula</span>
                      <Dot/>
                      <time>20 de Jul</time>
                  </Header>
                  <Description>
                    Foguete não tem ré!
                  </Description>
                  <ImageContent />
                  <Icons>
                      <Status>
                          <CommentIcon />
                          180
                      </Status>
                      <Status>
                          <RetweetIcon />
                          230
                      </Status>
                      <Status>
                          <LikeIcon />
                          999
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;