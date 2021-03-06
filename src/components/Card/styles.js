import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 3px;
  background: #fff;
`;

export const Header = styled.div`
  padding: 10px;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export const Body = styled.div`
  padding: 10px;
`;

export const Image = styled.img`
  width: 100%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  object-fit: cover;
`;

export const Content = styled.div`
  font-size: 12px;
  color: #666;
`;
