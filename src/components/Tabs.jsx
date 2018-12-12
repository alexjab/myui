import React from 'react'
import styled from 'styled-components'

import { light as lightTheme } from '../core/themes'

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

const Tab = styled(BaseTab)`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 13px;
  padding-bottom: 14px;

  color: ${({ isSelected, theme }) =>
    isSelected ? null : theme.colorGreyDark};
  border-bottom: ${({ isSelected, theme }) =>
    isSelected ? `3px solid ${theme.colorPrimary}` : 'none'};
  height: 1em;

  font-weight: 600;

  cursor: pointer;
  user-select: none;
`

Tab.defaultProps = {
  theme: lightTheme,
}

class BaseTabs extends React.Component {
  static defaultProps = {
    defaultTab: 0,
    tabs: [],
  }

  state = {
    selected: this.props.defaultTab,
  }

  selectTab = selected => {
    this.setState({ selected })

    const { onChangeSelected } = this.props
    if (onChangeSelected) {
      onChangeSelected(selected)
    }
  }

  render() {
    const { children, className, tabs, theme } = this.props
    const { selected } = this.state

    if (!tabs.length) {
      return null
    }

    return (
      <div className={className}>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            index={index}
            isSelected={selected === index}
            selectTab={this.selectTab}
            theme={theme}
            label={tab.label}
          >
            {tab.title}
          </Tab>
        ))}
      </div>
    )
  }
}

const Tabs = styled(BaseTabs)`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};

  border-bottom: ${({ hasBorder, theme }) =>
    hasBorder ? `1px solid ${theme.colorGreyLighter}` : null};
  display: flex;
`

Tabs.defaultProps = {
  hasBorder: true,
  theme: lightTheme,
}

const Label = styled.span`
  color: ${({ theme }) => theme.colorGreyDarker};
  font-weight: 600;
  margin-left: 10px;
`

Label.defaultProps = {
  theme: lightTheme,
}

export default Tabs
