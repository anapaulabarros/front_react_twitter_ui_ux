import React from 'react';

import Feed from '../Feed';

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage,
    EditButton 
} from './style';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar Perfil</EditButton>
              <h1>Ana Barros</h1>
              <h2>@barros.anapaula</h2>

              <p>
                  Developer at <a href="https://salvus.me/">@Salvus.me</a>
              </p>
              <ul>
                  <li>
                      <LocationIcon />
                      Paraíba - Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 01 de Junho de 1990
                  </li>
              </ul>
              <Followage>
                <span>segindo <strong> 94</strong></span>
                <span><strong>672 </strong> seguidores </span>
              </Followage>
          </ProfileData>

          <Feed/>
      </Container>
  );
}

export default ProfilePage;