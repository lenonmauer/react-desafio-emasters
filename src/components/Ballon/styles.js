import styled, { css } from 'styled-components';

const positions = {
  top: css`
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, -8px);

    &:before {
      content: '';
      width: 6px;
      height: 6px;
      bottom: -3px;
      left: 50%;
      position: absolute;
      background: black;
      transform: rotate(45deg);
    }
  `,
  left: css`
    right: 100%;
    top: 50%;
    transform: translate(-8px, -50%);

    &:before {
      content: '';
      width: 6px;
      height: 6px;
      right: -3px;
      top: 10px;
      position: absolute;
      background: black;
      transform: rotate(45deg);
    }
  `,
  right: css`
    left: 100%;
    top: 50%;
    transform: translate(8px, -50%);

    &:before {
      content: '';
      width: 6px;
      height: 6px;
      left: -3px;
      top: 10px;
      position: absolute;
      background: black;
      transform: rotate(45deg);
    }
  `,
  bottom: css`
    top: 100%;
    left: 50%;
    transform: translate(-50%, 8px);

    &:before {
      content: '';
      width: 6px;
      height: 6px;
      top: -3px;
      left: 50%;
      position: absolute;
      background: black;
      transform: rotate(45deg);
    }
  `,
};

export const Container = styled.div`
  position: relative;

  &:hover > :first-child {
    opacity: 1;
    visibility: visible;
  }
`;

export const Tooltip = styled.div`
  z-index: 10;
  visibility: hidden;
  position: absolute;
  opacity: 0;
  background: black;
  border-radius: 4px;
  color: #fff;
  padding: .5em 1em;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  text-shadow: none;
  white-space: nowrap;
  transition: opacity 0.20s linear;

  ${props => positions[props.position || 'top']}
`;
