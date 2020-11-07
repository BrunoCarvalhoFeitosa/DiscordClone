import React from 'react';
import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './style';
import userPicture from '../../assets/bruno.jpg';

//Function to create user info (settings)
const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar>
          <img src={userPicture} alt="Bruno Carvalho Feitosa" title="Bruno Carvalho Feitosa" />
        </Avatar>
        <UserData>
          <strong>Bruno Carvalho</strong>
          <span>#0013</span>
        </UserData>
      </Profile>
      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
}

export default UserInfo;