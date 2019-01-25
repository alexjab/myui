import React from 'react'
import styled from 'styled-components'
import { darken, transparentize } from 'polished'

import { light as lightTheme } from '../core/themes'

const IconContainer = styled.div`
  height: ${({ isLarge }) => {
    return isLarge ? '38px' : '30px'
  }};
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding-left: ${({ hasIconLeft, isLarge }) => {
    if (isLarge) {
      return hasIconLeft ? '10px' : '8px'
    }
    return hasIconLeft ? '6px' : '4px'
  }};
  padding-right: ${({ hasIconRight, isLarge }) => {
    if (isLarge) {
      return hasIconRight ? '10px' : '8px'
    }
    return hasIconRight ? '6px' : '4px'
  }};
`

const Container = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${({ isLarge, theme }) =>
    isLarge ? theme.largeFontSize : theme.fontSize};

  display: ${({ isFullWidth, theme }) =>
    isFullWidth ? 'flex' : 'inline-flex'};
  justify-content: flex-start;
  align-items: center;

  margin: 0;

  border: 1px solid
    ${({ isFocused, theme, value }) => {
      if (isFocused) {
        return theme.colorPrimary
      }

      if (value) {
        return theme.colorGreyDark
      }

      return 'transparent'
    }};
  box-shadow: ${({ isFocused, theme }) => {
    if (isFocused) {
      return `0 0 10px ${transparentize(0.3, theme.colorPrimary)}`
    }

    return 'none'
  }};
  background-color: ${({ isFocused, theme, value }) => {
    if (isFocused || value) {
      return 'transparent'
    }

    return darken(0.03, theme.colorGreyLightest)
  }};
  border-radius: 4px;
  color: ${({ theme }) => theme.colorDark};
`

const StyledInput = styled.input`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${({ isLarge, theme }) =>
    isLarge ? theme.largeFontSize : theme.fontSize};

  position: relative;
  width: 100%;
  border: none;
  outline: none;
  background: none;

  height: ${({ isLarge }) => {
    return isLarge ? '36px' : '28px'
  }};

  margin-left: ${({ hasIconLeft, isLarge }) => {
    if (isLarge) {
      return hasIconLeft ? 0 : '10px'
    }
    return hasIconLeft ? 0 : '8px'
  }};
  margin-right: ${({ hasIconRight, isLarge }) => {
    if (isLarge) {
      return hasIconRight ? 0 : '10px'
    }
    return hasIconRight ? 0 : '8px'
  }};
`

class Input extends React.Component {
  static defaultProps = {
    theme: lightTheme,
  }

  state = {
    value: '',
  }

  handleChange = event => {
    const value = event.target.value
    const { value: valueProps, onChange, onChangeValue } = this.props

    if (valueProps !== undefined) {
      if (onChange) {
        event.persist()
        onChange(event)
      }

      if (onChangeValue) {
        onChangeValue(value)
      }
      return
    }

    this.setState({ value }, () => {
      if (onChange) {
        event.persist()
        onChange(event)
      }

      if (onChangeValue) {
        onChangeValue(value)
      }
    })
  }

  handleFocus = event => {
    const { onFocus } = this.props

    this.setState({ isFocused: true }, () => {
      if (onFocus) {
        event.persist()
        onFocus(event)
      }
    })
  }

  handleBlur = () => {
    const { onBlur } = this.props

    this.setState({ isFocused: false }, () => {
      if (onBlur) {
        event.persist()
        onBlur(event)
      }
    })
  }

  setInputRef = ref => {
    this.inputElement = ref
  }

  focus = () => {
    this.inputElement.focus()
  }

  handleMouseDown = event => {
    event.preventDefault()

    this.focus()
  }

  render() {
    const {
      iconLeft: IconLeft,
      iconRight: IconRight,
      isFullWidth,
      isLarge,
      theme,
      onChangeValue,
      ...props
    } = this.props
    const { isFocused } = this.state
    const value = this.state.value || this.props.value || ''

    return (
      <Container
        hasIconLeft={!!IconLeft}
        hasIconRight={!!IconRight}
        isFullWidth={isFullWidth}
        isLarge={isLarge}
        theme={theme}
        value={value}
        isFocused={isFocused}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      >
        {IconLeft ? (
          <IconContainer
            hasIconLeft={!!IconLeft}
            isLarge={isLarge}
            onMouseDown={this.handleMouseDown}
          >
            <IconLeft size={isLarge ? '16px' : '14px'} />
          </IconContainer>
        ) : null}
        <StyledInput
          {...props}
          ref={this.setInputRef}
          hasIconLeft={!!IconLeft}
          hasIconRight={!!IconRight}
          isLarge={isLarge}
          theme={theme}
          value={value}
          onChange={this.handleChange}
        />
        {IconRight ? (
          <IconContainer
            hasIconRight={!!IconRight}
            onMouseDown={this.handleMouseDown}
            isLarge={isLarge}
          >
            <IconRight
              size={isLarge ? '16px' : '14px'}
              onMouseDown={this.handleMouseDown}
            />
          </IconContainer>
        ) : null}
      </Container>
    )
  }
}

export default Input
