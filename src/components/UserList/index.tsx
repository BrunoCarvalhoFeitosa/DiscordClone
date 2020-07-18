import React from 'react';
import { Container, Role, User, Avatar } from './style';

//Interface of props to flag bot
interface UserProps {
  nickname: string;
  isBot?: boolean,
}

//Function to create flag bot
const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
}

//Function to create user list
const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="KingOfGODS" />
      
      <Role>Offline - 18</Role>
      <UserRow nickname="Denis Carvalho" isBot />
      
      <UserRow nickname="Fulano" />
      <UserRow nickname="Ciclano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Ciclano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Ciclano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Ciclano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Ciclano" />
      <UserRow nickname="Beltrano" />
    </Container>
  );
}

export default UserList;