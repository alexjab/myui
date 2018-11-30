import React from 'react'
import styled from 'styled-components'
import { lighten, desaturate } from 'polished'

import defaultTheme from '../core/themes'

const Button = styled.button`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};

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

  font-weight: 500;
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
  theme: defaultTheme,
}

export default Button
