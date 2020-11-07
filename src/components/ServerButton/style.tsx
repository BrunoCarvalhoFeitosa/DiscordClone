import styled, { keyframes } from 'styled-components';

import { Props } from '.';

const pulseNotification = keyframes `
  0% {
      box-shadow: 0px 0px 0px 0px rgba(248, 74, 75, 0.23);
  }
  40% {
      box-shadow: 0px 0px 0px 3px rgba(248, 74, 75, 0.23);
  }
  80% {
      box-shadow: 0px 0px 0px 3px rgba(248, 74, 75, 0.23);
  }
  100% {
      box-shadow: 0px 0px 0px 0px rgba(248, 74, 75, 0.23);
  }
`;

export const Button = styled.button<Props>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 8px;
  background-color: ${(props) => props.isHome ? 'var(--black)' : 'var(--primary)'};
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &::before {
    content: '';
    display: ${(props) => (props.hasNotifications ? 'inline' : 'none')};
    position: absolute;
    width: 9px;
    height: 9px;
    top: calc(50% - 4.5px);
    left: -17px;
    background-color: var(--white);
    border-radius: 50%;
  }

  &::after {
    content: '${(props) => props.mentions && props.mentions}';
    display: ${(props) => props.mentions && props.mentions > 0 ? 'inline' : 'none' };
    position: absolute;
    bottom: -2px;
    right: -4px;
    width: auto;
    height: 15px;
    padding: 0 4px;
    background-color: var(--notification);
    border: 4px solid var(--quaternary);
    border-radius: 12px;
    font-size: 13px;
    font-weight: bold;
    text-align: right;
    color: var(--white);
    animation: ${pulseNotification} 1.45s infinite;
  }

  transition: border-radius .3s, background-color .3s;

  &.active, &:hover {
    border-radius: 16px;
    background-color: ${props => props.isHome ? 'var(--black)' : 'var(--discord)'};
  }
`;