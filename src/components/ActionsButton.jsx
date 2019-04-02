import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Stack from './Stack'
import Button from './Button'
import Toolbar from './Toolbar'
import Padder from './Padder'
import ChevronDownIcon from '../icons/ChevronDown'
import ChevronUpIcon from '../icons/ChevronUp'
import CheckIcon from '../icons/Check'

const Container = styled.div`
  display: inline;
  outline: none;
`

const getColor = ({ theme, isSelected, saveChoice }) => {
  if (!saveChoice) {
    return theme.colorDarker
  }

  if (isSelected) {
    return theme.colorGreyBlack
  }

  return theme.colorGreyDarkest
}

const ActionsContainer = styled.div`
  position: absolute;
  margin-top: 5px;

  border: 1px solid ${({ theme }) => theme.colorGreyLight};

  box-shadow: 0 2px 5px ${({ theme }) => theme.colorGrey};

  cursor: pointer;
  user-select: none;
`

const ActionContainer = styled.div`
  background-color: ${({ theme }) => theme.colorWhite}

  &:hover {
    background-color: ${({ theme }) => theme.colorGreyLightest};
  }
`

const ActionIcon = styled.div`
  color: ${getColor};
`

const ActionTitle = styled.div`
  color: ${getColor};
  font-weight: bold;
`

const ActionSubtitle = styled.div`
  color: ${getColor};
  margin-top: 5px;
`

export default class ActionsButton extends React.Component {
  static defaultProps = {
    isPrimary: false,
  }

  static propTypes = {
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        icon: PropTypes.element,
      })
    ).isRequired,
    buttonLabel: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    iconLeft: PropTypes.element,
    isDanger: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    isInverted: PropTypes.bool,
    isLarge: PropTypes.bool,
    isOutlined: PropTypes.bool,
    isPrimary: PropTypes.bool,
    onActionClick: PropTypes.func,
    saveChoice: PropTypes.bool,
  }

  constructor(props) {
    super(props)

    this.state = {
      isActionsVisible: false,
      selectedIndex: props.defaultSelected || 0,
    }
  }

  onButtonClick = () => {
    this.setState(({ isActionsVisible }) => ({
      isActionsVisible: !isActionsVisible,
    }))
  }

  onActionClick = event => {
    const { saveChoice } = this.props

    const index = parseInt(event.currentTarget.dataset.index, 10)

    const stateUpdate = { isActionsVisible: false }

    if (saveChoice) {
      stateUpdate.selectedIndex = index
    }

    this.setState(stateUpdate, () => {
      const { onActionClick } = this.props

      if (onActionClick) {
        onActionClick(index)
      }
    })
  }

  hideActions = () => {
    this.setState({ isActionsVisible: false })
  }

  render() {
    const {
      actions,
      buttonLabel,
      disabled,
      iconLeft,
      isPrimary,
      isDanger,
      isLarge,
      isOutlined,
      isInverted,
      isFullWidth,
      saveChoice,
    } = this.props
    const { isActionsVisible, selectedIndex } = this.state

    const chevronIcon = isActionsVisible ? ChevronUpIcon : ChevronDownIcon

    return (
      <Container tabIndex="0" onBlur={this.hideActions}>
        <Button
          isPrimary={isPrimary}
          isDanger={isDanger}
          isLarge={isLarge}
          isFullWidth={isFullWidth}
          isInverted={isInverted}
          isOutlined={isOutlined}
          iconLeft={iconLeft}
          iconRight={chevronIcon}
          disabled={disabled}
          onClick={this.onButtonClick}
        >
          {buttonLabel}
        </Button>
        {isActionsVisible ? (
          <ActionsContainer>
            {actions.map((action, index) => (
              <ActionContainer
                key={index}
                onClick={this.onActionClick}
                data-index={index}
              >
                <Toolbar hasBorderTop={index}>
                  {action.icon ? (
                    <Padder padding="10px">
                      <ActionIcon
                        isSelected={selectedIndex === index}
                        saveChoice={saveChoice}
                      >
                        {<action.icon />}
                      </ActionIcon>
                    </Padder>
                  ) : null}
                  <Padder top="10px" bottom="10px" right="10px">
                    <Stack>
                      <ActionTitle
                        isSelected={selectedIndex === index}
                        saveChoice={saveChoice}
                      >
                        <Toolbar>
                          {action.title}
                          &nbsp;{' '}
                          {saveChoice && selectedIndex === index ? (
                            <CheckIcon size={16} />
                          ) : null}
                        </Toolbar>
                      </ActionTitle>
                      <ActionSubtitle
                        isSelected={selectedIndex === index}
                        saveChoice={saveChoice}
                      >
                        {action.subtitle}
                      </ActionSubtitle>
                    </Stack>
                  </Padder>
                </Toolbar>
              </ActionContainer>
            ))}
          </ActionsContainer>
        ) : null}
      </Container>
    )
  }
}
