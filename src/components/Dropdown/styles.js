import styled, { css } from 'styled-components';

const activeCss = css`
  > div {
    display: block;
  }
`;

export const Container = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  padding: 8px;
  background: #7159C1;
  border: none;
  border-radius: 4px;
  color: #fff;

  ${props => props.active && activeCss}
`;

export const Label = styled.span`
  margin-right: 8px;
`;

export const Caret = styled.div`
  width: 0;
  height: 0;
  margin-left: .255em;
  vertical-align: .255em;
  content: "";
  border-top: .3em solid;
  border-right: .3em solid transparent;
  border-bottom: 0;
  border-left: .3em solid transparent;
`;

export const Menu = styled.div`
  display: none;
  position: absolute;
  box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
  top: 40px;
  left: 0;
  min-width: 150px;
  text-align: left;
  padding: 4px;
`;

export const MenuItem = styled.div`
  color: #333;
  padding: 8px 2px;
  border-bottom: 1px solid #f5f5f5;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #fbfbfb;
  }
`;
