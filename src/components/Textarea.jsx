import React from 'react'
import styled from 'styled-components'
import { darken, transparentize } from 'polished'

import { light as lightTheme } from '../core/themes'

const StyledTextarea = styled.textarea`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${({ isLarge, theme }) =>
    isLarge ? theme.largeFontSize : theme.fontSize};

  ${({ isFullwidth, isLarge }) => {
    if (!isFullwidth) {
      return null
    }
    const padding = isLarge ? '24px' : '20px'

    return `width: calc(100% - ${padding})`
  }};

  padding-left: ${({ isLarge }) => (isLarge ? '12px' : '10px')};
  padding-right: ${({ isLarge }) => (isLarge ? '12px' : '10px')};
  padding-top: ${({ isLarge }) => (isLarge ? '10px' : '6px')};
  padding-bottom: ${({ isLarge }) => (isLarge ? '10px' : '6px')};

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

  resize: none;
`

class Textarea extends React.Component {
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
    const { isFullwidth, onChangeValue, theme, ...props } = this.props
    const { isFocused } = this.state
    const value = this.state.value || this.props.value || ''

    return (
      <StyledTextarea
        theme={theme}
        value={value}
        isFocused={isFocused}
        isFullwidth={isFullwidth}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        {...props}
      />
    )
  }
}

export default Textarea
