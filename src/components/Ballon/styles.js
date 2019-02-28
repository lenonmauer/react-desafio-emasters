import styled, { css } from 'styled-components';

const positions = {
  top: css`
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, -13px);

    &:before {
      content: '';
      width: 10px;
      height: 10px;
      bottom: -6px;
      left: 50%;
      position: absolute;
      background: black;
      z-index: -1;
      transform: rotate(45deg);
    }
  `,
  left: css`
    right: 100%;
    top: 50%;
    transform: translate(-13px, -50%);

    &:before {
      content: '';
      content: '';
      width: 10px;
      height: 10px;
      right: -6px;
      top: 8px;
      position: absolute;
      background: black;
      z-index: -1;
      transform: rotate(45deg);
    }
  `,
  right: css`
    left: 100%;
    top: 50%;
    transform: translate(13px, -50%);


    &:before {
      content: '';
      content: '';
      width: 10px;
      height: 10px;
      left: -6px;
      top: 8px;
      position: absolute;
      background: black;
      z-index: -1;
      transform: rotate(45deg);
    }
  `,
  bottom: css`
    top: 100%;
    left: 50%;
    transform: translate(-50%, 13px);

    &:before {
      content: '';
      content: '';
      width: 10px;
      height: 10px;
      top: -6px;
      left: 50%;
      position: absolute;
      background: black;
      z-index: -1;
      transform: rotate(45deg);
    }
  `,
};

export const Container = styled.div`
  position: relative;

  &:hover > :first-child {
    opacity: 1;
  }
`;

export const Tooltip = styled.div`
  z-index: -1;
  position: absolute;
  opacity: 0;
  background: black;
  border-radius: 4px;
  color: #fff;
  padding: .5em 1em;
  font-size: 12px;
  font-family: sans-serif;
  font-weight: normal;
  font-style: normal;
  text-shadow: none;
  white-space: nowrap;
  transition: opacity 0.20s linear;

  ${props => positions[props.position || 'top']}
`;
