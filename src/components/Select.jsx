import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import ChevronDownIcon from '../icons/ChevronDown'

const Container = styled.div`
  width: 100%;
  outline: none;
`

const InputContainer = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 28px);

  padding-left: 14px;
  padding-right: 14px;

  height: 32px;
  border: ${({ theme }) => `1px solid ${theme.colorGrey}`};
  border-radius: 4px;
`

const Input = styled.div`
  height: 30px;
  border: none;
  width: 100%;
`

const Options = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colorGreyLight};
  border-top: none;
  margin-top: -5px;
`

const Option = styled.div`
  padding: 10px 5px;
  cursor: pointer;
  ${({ isSelected, theme }) =>
    isSelected ? `background-color: ${theme.colorGreyLighter}` : null};

  &:first-child {
    margin-top: 5px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colorGreyLightest};
  }
`

export default class Select extends React.Component {
  state = {
    isOptionsVisible: false,
    selectedValue: null,
    selectedLabel: null,
  }

  onOptionClick = event => {
    const {
      target: {
        dataset: { value, label },
      },
    } = event

    this.setState(
      {
        selectedValue: value,
        selectedLabel: label,
        isOptionsVisible: false,
      },
      () => {
        const { onChange, onChangeValue } = this.props
        const { selectedValue: value, selectedLabel: label } = this.state

        if (onChange) {
          onChange({ value, label })
        }
        if (onChangeValue) {
          onChangeValue(value)
        }
      }
    )
  }

  onContainerFocus = event => {
    // event.preventDefault()
    event.stopPropagation()

    this.setState(({ isOptionsVisible }) => ({
      isOptionsVisible: !isOptionsVisible,
    }))
  }

  onContainerClick = event => {
    this.setState(({ isOptionsVisible }) => ({
      isOptionsVisible: !isOptionsVisible,
    }))
  }

  onContainerBlur = event => {
    this.setState(({ isOptionsVisible }) => ({
      isOptionsVisible: false,
    }))
  }

  renderOptions = options => {
    if (!options) return null

    const { selectedValue } = this.state

    return (
      <Options>
        {options.map(option => {
          return (
            <Option
              data-value={option.value}
              data-label={option.label}
              onClick={this.onOptionClick}
              isSelected={option.value === selectedValue}
            >
              {option.label}
            </Option>
          )
        })}
      </Options>
    )
  }

  render() {
    const { children, options } = this.props
    const { isOptionsVisible, selectedLabel } = this.state

    return (
      <Container
        tabIndex="0"
        onClick={this.onContainerClick}
        onFocus={this.onContainerFocus}
        onBlur={this.onContainerBlur}
      >
        <InputContainer>
          <Input
            value={selectedLabel === null ? children : selectedLabel}
            onFocus={this.onButtonClick}
            onBlur={this.onContainerBlur}
          />
          <ChevronDownIcon />
        </InputContainer>
        {this.renderOptions(isOptionsVisible ? options : null)}
      </Container>
    )
  }
}
