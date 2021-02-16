
import styled from 'styled-components';
import { 
  Notifications,
  People,
  FileTray,
  HelpCircle,
  Bookmark,
  Search,
} from 'styled-icons/ionicons-solid';
import { Hashtag } from 'styled-icons/heroicons-outline';

export const Container = styled.div`
  grid-area: CI;
  display: flex;
  padding: 0 17px;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;

  div.channel-info {
    flex: 1;
    display: flex;
    align-items: center;
  }

  div.actions {
    display: flex;
    align-items: center;
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
`;

export const Title = styled.h1`
  margin-left: 9px;
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;
  background-color: var(--white);
  opacity: 0.2;
  margin: 0 13px;
`;

export const Description = styled.span`
  font-size: 15px;
  color: var(--gray);
`;

export const InputContainer = styled.div`
  margin: auto 6px;
  padding: 4px;
  background-color: var(--tertiary);
  border-radius: 4px;
  overflow: hidden;

  input {
    padding-left: 4px;
    color: var(--white);
    background-color: transparent;
  }
`;

export const BellIcon = styled(Notifications)`
  width: 24px;
  height: 24px;
  color: var(--gray);
  transition: 0.2s;
  margin: auto 6px;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const PeopleIcon = styled(People)`
  width: 24px;
  height: 24px;
  color: var(--gray);
  transition: 0.2s;
  margin: auto 6px;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const FileIcon = styled(FileTray)`
  width: 24px;
  height: 24px;
  color: var(--gray);
  transition: 0.2s;
  margin: auto 6px;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const HelpIcon = styled(HelpCircle)`
  width: 24px;
  height: 24px;
  color: var(--gray);
  transition: 0.2s;
  margin: auto 6px;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const BookmarkIcon = styled(Bookmark)`
  width: 24px;
  height: 24px;
  color: var(--gray);
  transition: 0.2s;
  margin: auto 6px;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const SearchIcon = styled(Search)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  transition: 0.2s;
  margin: auto 6px;
  cursor: pointer;
`;