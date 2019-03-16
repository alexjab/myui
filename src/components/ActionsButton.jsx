import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Stack from './Stack'
import Button from './Button'
import Toolbar from './Toolbar'
import ChevronDownIcon from '../icons/ChevronDown'
import ChevronUpIcon from '../icons/ChevronUp'
import Padder from './Padder'

const Container = styled.div`
  position: relative;
  outline: none;
`

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
  color: ${({ theme }) => theme.colorGreyDarker};
`

const ActionTitle = styled.div`
  color: ${({ theme }) => theme.colorGreyDarkest};
  font-weight: bold;
`

const ActionSubtitle = styled.div`
  color: ${({ theme }) => theme.colorGreyDarkest};
`

export default class ButtonActions extends React.Component {
  static defaultProps = {
    isPrimary: false,
  }

  static propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    onActionClick: PropTypes.func,
  }

  state = {
    isActionsVisible: false,
  }

  onButtonClick = () => {
    this.setState(({ isActionsVisible }) => ({
      isActionsVisible: !isActionsVisible,
    }))
  }

  onActionClick = event => {
    const index = parseInt(event.currentTarget.dataset.index, 10)

    this.setState({ isActionsVisible: false }, () => {
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
      isPrimary,
      isDanger,
      isLarge,
      isOutlined,
      isInverted,
      isFullWidth,
    } = this.props
    const { isActionsVisible } = this.state

    const chevronIcon = isActionsVisible ? ChevronUpIcon : ChevronDownIcon

    return (
      <Container onBlur={this.hideActions} tabIndex="0">
        <Button
          isPrimary={isPrimary}
          isDanger={isDanger}
          isLarge={isLarge}
          isFullWidth={isFullWidth}
          isInverted={isInverted}
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
                      <ActionIcon>{<action.icon />}</ActionIcon>
                    </Padder>
                  ) : null}
                  <Padder top="10px" bottom="10px" right="10px">
                    <Stack>
                      <ActionTitle>{action.title}</ActionTitle>
                      <ActionSubtitle>{action.subtitle}</ActionSubtitle>
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
