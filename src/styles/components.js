import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;

  > div {
    margin-bottom: 40px;
  }
`;

export const Button = styled.button`
  padding: 8px;
  background: #7159C1;
  border: none;
  border-radius: 4px;
  color: #fff;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;
