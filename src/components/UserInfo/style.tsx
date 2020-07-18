import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.section `
  grid-area: UI;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0.
`;

export const Profile = styled.div `
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div `
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray);
  cursor: pointer;
`;

export const UserData = styled.div `
  margin-left: 8px;
  display: flex;
  flex-direction: column;

  > strong {
    display: block;
    font-size: 13px;
    color: var(--white);
    cursor: pointer;
  }
  
  > span {
    font-size: 13px;
    color: var(--gray);
    cursor: pointer;
  }
`;

export const Icons = styled.div `
  display: flex;
  align-items: center;
`;

export const MicIcon = styled(Mic) `
  margin-right: 4px;
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: .7;
  transition: opacity .3s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
  
export const HeadphoneIcon = styled(Headset) `
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: .7;
  transition: opacity .3s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
  
export const SettingsIcon = styled(Settings) `
  margin-left: 4px;
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: .7;
  transition: opacity .3s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
