import React from 'react'
import styled from 'styled-components'

import ChevronDownIcon from '../icons/ChevronDown'
import ChevronUpIcon from '../icons/ChevronUp'

const Container = styled.div`
  width: 100%;
  outline: none;
  cursor: pointer;
  position: relative;

  ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : null)}
`

const ValueContainer = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};

  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colorGreyLightest : theme.colorWhite};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colorGreyDark : theme.colorBlack};

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

const Value = styled.span`
  width: 100%;
  user-select: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const StyledChevronUpIcon = styled(ChevronUpIcon)`
  color: ${({ theme }) => theme.colorGrey};
`

const StyledChevronDownIcon = styled(ChevronDownIcon)`
  color: ${({ theme }) => theme.colorGrey};
`

const Options = styled.div`
  position: absolute;
  margin-top: 5px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colorGreyLight};
  width: 100%;
  box-shadow: 0 2px 5px ${({ theme }) => theme.colorGrey};
`

const Option = styled.div`
  background-color: white;
  padding: 10px 5px;
  ${({ isSelected, theme }) =>
    isSelected ? `background-color: ${theme.colorGreyLighter}` : null};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.colorGreyLightest};
  }
`

export default class Select extends React.Component {
  constructor(props) {
    super(props)

    const { defaultValue, options } = props

    this.state = {
      isOptionsVisible: false,
      selectedValue: defaultValue || null,
      selectedLabel: null,
    }

    if (defaultValue) {
      const option = options.find(option => option.value === defaultValue)

      if (option) {
        this.state.selectedLabel = option.label
      }
    }
  }

  onOptionClick = event => {
    event.stopPropagation()

    const {
      target: {
        dataset: { value, label },
      },
    } = event

    if (this.props.value) {
      this.setState(
        {
          isOptionsVisible: false,
        },
        () => {
          if (this.props.value !== value) {
            const { onChange, onChangeValue } = this.props

            if (onChange) {
              onChange({ value, label })
            }
            if (onChangeValue) {
              onChangeValue(value)
            }
          }
        }
      )

      return
    }

    let previousValue

    this.setState(
      ({ selectedValue }) => {
        previousValue = selectedValue

        return {
          selectedValue: value,
          selectedLabel: label,
          isOptionsVisible: false,
        }
      },
      () => {
        if (previousValue !== value) {
          const { onChange, onChangeValue } = this.props
          const { selectedValue: value, selectedLabel: label } = this.state

          if (onChange) {
            onChange({ value, label })
          }
          if (onChangeValue) {
            onChangeValue(value)
          }
        }
      }
    )
  }

  onContainerClick = event => {
    if (this.props.disabled) {
      return
    }

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

    const { value } = this.props
    const { selectedValue } = this.state

    return (
      <Options>
        {options.map((option, index) => {
          return (
            <Option
              key={index}
              data-value={option.value}
              data-label={option.label}
              onClick={this.onOptionClick}
              isSelected={
                value ? option.value === value : option.value === selectedValue
              }
            >
              {option.label}
            </Option>
          )
        })}
      </Options>
    )
  }

  renderIcon(isOptionsVisible) {
    return isOptionsVisible ? (
      <StyledChevronUpIcon />
    ) : (
      <StyledChevronDownIcon />
    )
  }

  render() {
    const {
      children,
      options,
      value,
      disabled,
      onChangeValue,
      onChange,
      ...props
    } = this.props
    const { isOptionsVisible, selectedValue, selectedLabel } = this.state

    let label = ''

    if (value) {
      const option = options.find(option => option.value === value)

      if (option) {
        label = option.label
      }
    } else {
      label = selectedValue === null ? children : selectedLabel
    }
    return (
      <Container
        {...props}
        tabIndex="0"
        onClick={this.onContainerClick}
        onBlur={this.onContainerBlur}
        disabled={disabled}
      >
        <ValueContainer disabled={disabled}>
          <Value value={selectedLabel === null ? children : selectedLabel}>
            {label}
          </Value>
          {this.renderIcon(isOptionsVisible)}
        </ValueContainer>
        {this.renderOptions(isOptionsVisible ? options : null)}
      </Container>
    )
  }
}
