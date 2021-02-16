import React from 'react';
import faker from 'faker';

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

      <Role>Offline - 16</Role>

      <UserRow nickname={faker.name.findName()} isBot />

      {Array.from(Array(15).keys()).map((n) => (
        <UserRow nickname={faker.name.findName()} />
      ))}
    </Container>
  );
};

export default UserList;