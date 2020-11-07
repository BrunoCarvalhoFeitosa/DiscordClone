import styled from 'styled-components';

export const Container = styled.section `
  display: flex;
  align-items: center;
  padding: 11px 16px;
  margin-right: 4px;
  background-color: transparent;
  
  &.mention {
    background-color: var(--mention-message);
    border-left: 2px solid var(--mention-detail);
    padding-left: 16px; 
  }

  & + div {
    margin-top: 2px;
  }
`;

export const Avatar = styled.div `
  width: 50px;
  height: 50px;
  background-color: var(--secondary);
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;
  img {
    
  }

  &.bot {
    background-color: var(--mention-detail);
  }
`;

export const Message = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 17px;
  min-height: 40px;
  padding: 6px 14px;
  border-radius: 4px;
  transition: background-color 180ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);;
  }
`;

export const Header = styled.header `
  display: flex;
  align-items: center;

  > strong {
    font-size: 16px;
    color: var(--white);
    cursor: pointer;
  }

  > span {
    position: relative;
    bottom: 5px;
    margin-left: 6px;
    background-color: var(--discord);
    border-radius: 4px;
    padding: 4px 5px;
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--white);
    cursor: pointer;
  }

  time {
    margin-left: 6px;
    font-size: 13px;
    color: var(--gray);
  }
`;

export const Content = styled.div `
  font-size: 13px;
  text-align: left;
  color: var(--white);
`;

export const Mention = styled.span `
  color: var(--link);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
