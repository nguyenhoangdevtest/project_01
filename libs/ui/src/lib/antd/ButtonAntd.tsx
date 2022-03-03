import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import styled from '@emotion/styled';

const ButtonWrapper = styled.div`
  line-height: 38px;
  .ant-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid var(--gray);
    color: var(--gray);
    &.bg-white {
      background: #fff;
    }
    &:hover {
      background-color: var(--gray);
      color: #fff;
      img {
        filter: invert(1);
      }
    }
    &.ant-btn-primary {
      background-color: var(--gray);
      color: #fff;
      border: 1px solid transparent;
      &:hover {
        background-color: transparent;
        border: 1px solid var(--gray);
        color: var(--gray);
      }
      &:disabled {
        opacity: 0.6;
      }
    }
  }
  &.ant-btn-borderless {
    .ant-btn {
      border: 0px;
    }
  }
`;

export interface ButtonAtndProps extends AntdButtonProps {
  borderless?: boolean;
  containerStyle?: any;
  containerClass?: string;
}

export function ButtonAtnd({ containerClass, containerStyle, borderless, ...buttonProps }: ButtonAtndProps) {
  return (
    <ButtonWrapper className={`${containerClass || ''} ${borderless ? 'ant-btn-borderless' : ''}`} style={containerStyle}>
      <AntdButton {...buttonProps} />
    </ButtonWrapper>
  );
}

export default ButtonAtnd;
