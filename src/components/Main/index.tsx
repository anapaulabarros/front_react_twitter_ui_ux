import React from 'react';

import ProfilePage from '../ProfilePage';

import { 
    Container, 
    Header, 
    BackIcon, 
    ProfileInfo, 
    BottomMenu,
    SearchIcon,
    BellIcon,
    EmailIcon,
    HomeIcon
} from './style';

const Main: React.FC = () => {
  return (
      <Container>
        <Header>
            <button>
                <BackIcon/>
            </button>

            <ProfileInfo>
                <strong>Ana Barros</strong>
                <span>524 Tweeets</span>
            </ProfileInfo>
        </Header>

        <ProfilePage />
        <BottomMenu>
            <HomeIcon className="active"/>
            <SearchIcon/>
            <BellIcon />
            <EmailIcon/>
        </BottomMenu>

      </Container>
  );
}

export default Main;