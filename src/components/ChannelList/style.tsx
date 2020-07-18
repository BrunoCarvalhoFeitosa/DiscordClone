import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.section `
  grid-area: CL;
  display: flex;
  flex-direction: column;
  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
`;

export const Category = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;

  > h4 {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
`;

export const AddCategoryIcon = styled(Add) `
  width: 21px;
  height: 21px;
  color: var(--symbol);
  transition: color .3s;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;