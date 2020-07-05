import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : '' } />
      <strong>{nickname}</strong>

      {isBot && <span>BOT</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="gagigante" />

      <Role>Offline - 8</Role>
      <UserRow nickname="gagigante" isBot />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
      <UserRow nickname="gagigante" />
    </Container>
  );
};

export default UserList;