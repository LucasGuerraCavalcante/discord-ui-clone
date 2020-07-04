import React from 'react';

import { Container, User, Avatar, Role } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={ isBot ? 'bot' : '' } />
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </ User>
    )
}

const UserList: React.FC = () => {
  return (
    <Container>
        <Role>Online - 1</Role>
        <UserRow nickname="Lucas Guerra"/>

        <Role>Offline - 18</Role>
        <UserRow nickname="Clone 1" isBot />
        <UserRow nickname="Clone x" />
        <UserRow nickname="Clone x" />
        <UserRow nickname="Clone x" />
        <UserRow nickname="Clone x" />
        <UserRow nickname="Clone x" />
        <UserRow nickname="Clone x" />
        <UserRow nickname="Clone x" />
        <UserRow nickname="Clone x" />
        <UserRow nickname="Clone x" />
        <UserRow nickname="Clone x" />
        <UserRow nickname="Clone x" />
        <UserRow nickname="Clone x" />
        <UserRow nickname="Clone x" />
        <UserRow nickname="Clone x" />
        <UserRow nickname="Clone x" />
        <UserRow nickname="Clone x" />
        <UserRow nickname="Clone x" />
    </ Container>
  );
};

export default UserList;
