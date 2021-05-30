import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;

}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
  return (
    <User>
      <Avatar className = { isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      { isBot && <span>Bot</span> }

    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1 </Role>
      <UserRow nickname ="Mauricio Natacci" />
      
      <Role>Offline - 18 </Role>
      <UserRow nickname="Nathan" isBot/>
      <UserRow nickname="Player" isBot/>
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      <UserRow nickname="Player" />
      
    </Container>
  );
};

export default UserList;