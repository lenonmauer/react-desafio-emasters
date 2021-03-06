import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-radius: 18px;
  background: #E0E0E0;
  transition: background .15s linear;
  cursor: default;

  &:hover {
    background: #CECECE;
  }
`;

export const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

export const Name = styled.span`
  font-size: 12px;
  margin-left: 8px;
  margin-right: 8px;
  max-width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IconRemove = styled.img`
  margin-right: 6px;
  width: 16px;
  cursor: pointer;
`;
