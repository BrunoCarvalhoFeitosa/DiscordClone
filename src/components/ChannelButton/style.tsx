import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.section `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color .2s;
  cursor: pointer;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    font-size: 15px;
    color: var(--senary);
  }

  &.active, &:hover {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }
  }
`;

export const HashtagIcon = styled(Hashtag) `
  width: 20px;
  height: 20px;
  color: var(--symbol);
  `;
  
export const InviteIcon = styled(PersonAdd) `
  margin-right: 2px;
  width: 16px;
  height: 16px;
  color: var(--symbol);
  transition: color .2s;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings) `
  width: 16px;
  height: 16px;
  color: var(--symbol);
  transition: color .2s;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;
