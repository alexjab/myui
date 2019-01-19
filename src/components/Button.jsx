import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

import { light as lightTheme } from '../core/themes'

import Icon from './Icon.jsx'

const ButtonIcon = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding-left: ${({ paddingLeft }) => paddingLeft || 0};
  padding-right: ${({ paddingRight }) => paddingRight || 0};
`

const BaseButton = ({
  children,
  iconLeft,
  iconRight,
  isDanger,
  isInverted,
  isLarge,
  isOutlined,
  isPrimary,
  theme,
  ...props
}) => {
  let paddingIconLeft = iconLeft && children ? (isLarge ? '18px' : '14px') : 0
  let paddingIconRight = iconRight && children ? (isLarge ? '18px' : '14px') : 0

  return (
    <button {...props}>
      {iconLeft ? (
        <ButtonIcon paddingRight={paddingIconLeft}>
          <Icon name={iconLeft} size={isLarge ? '16px' : '14px'} />
        </ButtonIcon>
      ) : null}
      {children}
      {iconRight ? (
        <ButtonIcon paddingLeft={paddingIconRight} size="16px">
          <Icon name={iconRight} size={isLarge ? '16px' : '14px'} />
        </ButtonIcon>
      ) : null}
    </button>
  )
}

const Button = styled(BaseButton)`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${({ isLarge, theme }) =>
    isLarge ? theme.largeFontSize : theme.fontSize};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({ isFullwidth }) => isFullwidth && 'width: 100%;'}

  padding-left: ${({ children, isLarge }) => {
    if (isLarge) {
      return children ? '18px' : '14px'
    }
    return children ? '14px' : '10px'
  }};
  padding-right: ${({ children, isLarge }) => {
    if (isLarge) {
      return children ? '18px' : '14px'
    }
    return children ? '14px' : '10px'
  }};

  &:not(:first-child) {
    margin-left: 5px;
  }

  height: ${({ isLarge, isInverted, isOutlined }) => {
    return isLarge ? '40px' : '32px'
  }};

  background-color: ${({
    disabled,
    isDanger,
    isInverted,
    isOutlined,
    isPrimary,
    theme,
  }) => {
    if (disabled) {
      return theme.colorGreyLightest
    }

    if (isInverted) {
      return theme.colorWhite
    }

    if (isOutlined) {
      return theme.colorWhite
    }

    if (isDanger) {
      return theme.colorDanger
    }

    if (isPrimary) {
      return theme.colorPrimary
    }

    return theme.colorWhite
  }};
  color: ${({
    disabled,
    isDanger,
    isInverted,
    isOutlined,
    isPrimary,
    theme,
  }) => {
    if (disabled) {
      return theme.colorGreyDark
    }

    if (isInverted || isOutlined) {
      if (isDanger) {
        return theme.colorDanger
      }

      if (isPrimary) {
        return theme.colorPrimary
      }
    }

    if (isDanger || isPrimary) {
      return theme.colorWhite
    }

    return theme.colorDark
  }};
  border: ${({
    disabled,
    isDanger,
    isInverted,
    isOutlined,
    isPrimary,
    theme,
  }) => {
    if (disabled) {
      if (isOutlined) {
        return `1px solid ${theme.colorGreyLight}`
      }
      return '1px solid transparent'
    }

    if (isOutlined) {
      if (isDanger) {
        return `1px solid ${theme.colorDanger}`
      }

      if (isPrimary) {
        return `1px solid ${theme.colorPrimary}`
      }
    }

    if (isPrimary || isDanger || isInverted) {
      return '1px solid transparent'
    }

    return `1px solid ${theme.colorGrey}`
  }};
  border-radius: 4px;

  font-weight: 600;
  font-size: ${({ isLarge, theme }) =>
    isLarge ? theme.largeFontSize : theme.fontSize};

  cursor: pointer;
  outline: none;

  &[disabled] {
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${({
      disabled,
      isDanger,
      isInverted,
      isOutlined,
      isPrimary,
      theme,
    }) => {
      if (disabled) {
        return theme.colorGreyLightest
      }

      if (isInverted) {
        if (isDanger) {
          return lighten(0.38, theme.colorDanger)
        }

        if (isPrimary) {
          return lighten(0.45, theme.colorPrimary)
        }
      }

      if (isOutlined) {
        if (isDanger) {
          return lighten(0.4, theme.colorDanger)
        }

        if (isPrimary) {
          return lighten(0.47, theme.colorPrimary)
        }

        return theme.colorGreyLightest
      }

      if (isDanger) {
        return lighten(0.025, theme.colorDanger)
      }

      if (isPrimary) {
        return lighten(0.025, theme.colorPrimary)
      }

      return theme.colorGreyLightest
    }}};
  }

  &:active {
    background-color: ${({
      disabled,
      isDanger,
      isInverted,
      isOutlined,
      isPrimary,
      theme,
    }) => {
      if (disabled) {
        return theme.colorGreyLightest
      }

      if (isInverted) {
        if (isDanger) {
          return lighten(0.32, theme.colorDanger)
        }

        if (isPrimary) {
          return lighten(0.4, theme.colorPrimary)
        }
      }

      if (isOutlined) {
        if (isDanger) {
          return lighten(0.37, theme.colorDanger)
        }

        if (isPrimary) {
          return lighten(0.45, theme.colorPrimary)
        }
      }

      if (isDanger) {
        return lighten(0.1, theme.colorDanger)
      }

      if (isPrimary) {
        return lighten(0.1, theme.colorPrimary)
      }

      return theme.colorGreyLighter
    }};
    color: ${({
      disabled,
      isDanger,
      isInverted,
      isOutlined,
      isPrimary,
      theme,
    }) => {
      if (disabled) {
        return theme.colorGreyDark
      }

      if (isInverted || isOutlined) {
        if (isDanger) {
          return theme.colorDanger
        }
        if (isPrimary) {
          return theme.colorPrimary
        }
      }

      if (isPrimary || isDanger) {
        return theme.colorWhite
      }

      return theme.colorDark
    }};
  }
`

Button.defaultProps = {
  theme: lightTheme,
}

export default Button
