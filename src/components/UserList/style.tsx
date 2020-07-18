import styled from 'styled-components';

export const Container = styled.section `
  grid-area: UL;
  display: flex;
  flex-direction: column;
  padding: 3px 6px 0 16px;
  background-color: var(--secondary);
  max-height: calc(100vh - 46px);
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    barckgrond-color: var(--secondary);
  }
`;

export const Role = styled.span `
  margin-top: 20px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--gray);
`;

export const User = styled.div `
  margin-top: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  background-color: transparent;
  transition: background-color: .3s;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  > strong {
    margin-left: 13px;
    font-size: 12px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    position: relative;
    bottom: 5px;
    margin-left: 9px;
    background-color: var(--discord);
    border-radius: 4px;
    padding: 4px 5px;
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--white);
    cursor: pointer;
  }
`;

export const Avatar = styled.div `
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background-color: var(--primary);
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }
`;
