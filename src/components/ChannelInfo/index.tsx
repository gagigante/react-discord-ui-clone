import React from 'react';

import { 
  Container, 
  HashtagIcon, 
  Title, 
  Separator, 
  Description, 
  BellIcon,
  BookmarkIcon,
  PeopleIcon,
  FileIcon,
  HelpIcon,
  SearchIcon,
  InputContainer,
} from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <div className="channel-info">
        <HashtagIcon />
        <Title>daily</Title>

        <Separator />

        <Description>Canal aberto para as dailies</Description>
      </div>

      <div className="actions">
        <BellIcon />
        <BookmarkIcon />
        <PeopleIcon />

        <InputContainer>
          <input type="text" placeholder="Buscar" />
          <SearchIcon />
        </InputContainer>

        <FileIcon />
        <HelpIcon />
      </div>
    </Container>
  );
};

export default ChannelInfo;