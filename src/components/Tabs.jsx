import React from 'react'
import styled from 'styled-components'

class BaseTabs extends React.Component {
  state = {
    selected: 0,
  }

  selectTab = selected => {
    this.setState({ selected })

    const { onChangeSelected } = this.props
    if (onChangeSelected) {
      onChangeSelected(selected)
    }
  }

  render() {
    const { children, className, theme } = this.props
    const { selected } = this.state

    return (
      <div className={className}>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            index,
            isSelected: selected === index,
            selectTab: this.selectTab,
            theme,
          })
        )}
      </div>
    )
  }
}

const Tabs = styled(BaseTabs)`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};

  border-bottom: 1px solid ${({ theme }) => theme.colorGreyLighter};
  display: flex;
`

class BaseTab extends React.Component {
  selectTab = () => {
    const { index, selectTab } = this.props

    selectTab(index)
  }

  render() {
    const { children, className, label } = this.props

    return (
      <div className={className} onClick={this.selectTab}>
        {children}
        {label ? <Label>{label}</Label> : null}
      </div>
    )
  }
}

const Label = styled.span`
  color: ${({ theme }) => theme.colorGreyDarker};
  font-weight: 600;
  margin-left: 10px;
`

const Tab = styled(BaseTab)`
  padding: 10px;

  color: ${({ isSelected, theme }) =>
    isSelected ? null : theme.colorGreyDark};
  border-bottom: ${({ isSelected, theme }) =>
    isSelected ? `3px solid ${theme.colorPrimary}` : 'none'};

  font-weight: 600;

  cursor: pointer;
  user-select: none;
`

Tabs.Tab = Tab

export default Tabs
