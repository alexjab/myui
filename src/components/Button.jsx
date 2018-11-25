import React from 'react'
import styled from 'styled-components'
import { lighten, desaturate } from 'polished'

const Button = styled.button`
  height: ${({ isLarge, isInverted, isOutlined }) => {
    return isLarge ? '40px' : '32px'
  }};

  background-color: ${({
    disabled,
    isDanger,
    isInverted,
    isOutlined,
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

    return isDanger ? theme.colorDanger : theme.colorPrimary
  }};
  color: ${({ disabled, isDanger, isInverted, isOutlined, theme }) => {
    if (disabled) {
      return theme.colorGreyDarker
    }

    if (isInverted || isOutlined) {
      return isDanger ? theme.colorDanger : theme.colorPrimary
    }

    return theme.colorWhite
  }};
  border: ${({ disabled, isDanger, isOutlined, theme }) => {
    if (disabled) {
      if (isOutlined) {
        return `1px solid ${theme.colorGreyDarker}`
      }
    }

    if (isOutlined) {
      return `1px solid ${isDanger ? theme.colorDanger : theme.colorPrimary}`
    }

    return '1px solid transparent'
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
      theme,
    }) => {
      if (disabled) {
        return theme.colorGreyLightest
      }

      if (isInverted) {
        return isDanger
          ? lighten(0.38, theme.colorDanger)
          : lighten(0.45, theme.colorPrimary)
      }

      if (isOutlined) {
        return isDanger
          ? lighten(0.4, theme.colorDanger)
          : lighten(0.47, theme.colorPrimary)
      }

      return isDanger
        ? lighten(0.025, theme.colorDanger)
        : lighten(0.025, theme.colorPrimary)
    }}};
  }

  &:active {
    background-color: ${({
      disabled,
      isDanger,
      isInverted,
      isOutlined,
      theme,
    }) => {
      if (disabled) {
        return theme.colorGreyLightest
      }

      if (isInverted) {
        return isDanger
          ? lighten(0.32, theme.colorDanger)
          : lighten(0.4, theme.colorPrimary)
      }

      if (isOutlined) {
        return isDanger
          ? lighten(0.37, theme.colorDanger)
          : lighten(0.45, theme.colorPrimary)
      }

      return isDanger
        ? lighten(0.1, theme.colorDanger)
        : lighten(0.1, theme.colorPrimary)
    }};
    color: ${({ disabled, isDanger, isInverted, isOutlined, theme }) => {
      if (disabled) {
        return theme.colorGreyDarker
      }

      if (isInverted || isOutlined) {
        return isDanger ? theme.colorDanger : theme.colorPrimary
      }

      return theme.colorWhite
    }};
  }
`

export default Button
