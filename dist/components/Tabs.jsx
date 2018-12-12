import React from 'react';
import styled from 'styled-components';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

const primary = '#1a73e8';
const danger = '#e34160';
const white = '#ffffff';
const dark = '#555555';
const black = '#000000';
const greyLightest = '#f5f5f5';
const greyLighter = '#dcdcdc';
const greyLight = '#d3d3d3';
const grey = '#c0c0c0';
const greyDark = '#a9a9a9';
const greyDarker = '#808080';
const greyDarkest = '#696969';

const light = {
  fontFamily: 'Inter UI, sans-serif',
  fontSize: '12px',
  largeFontSize: '14px',
  colorPrimary: primary,
  colorDanger: danger,
  colorGreyDarkest: greyDarkest,
  colorGreyDarker: greyDarker,
  colorGreyDark: greyDark,
  colorGrey: grey,
  colorGreyLight: greyLight,
  colorGreyLighter: greyLighter,
  colorGreyLightest: greyLightest,
  colorWhite: white,
  colorBlack: black,
  colorDark: dark
};

class BaseTab extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "selectTab", () => {
      const {
        index,
        selectTab
      } = this.props;
      selectTab(index);
    });
  }

  render() {
    const {
      children,
      className,
      label
    } = this.props;
    return React.createElement("div", {
      className: className,
      onClick: this.selectTab
    }, children, label ? React.createElement(Label, null, label) : null);
  }

}

const Tab = styled(BaseTab)`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 13px;
  padding-bottom: 14px;

  color: ${({
  isSelected,
  theme
}) => isSelected ? null : theme.colorGreyDark};
  border-bottom: ${({
  isSelected,
  theme
}) => isSelected ? `3px solid ${theme.colorPrimary}` : 'none'};
  height: 1em;

  font-weight: 600;

  cursor: pointer;
  user-select: none;
`;
Tab.defaultProps = {
  theme: light
};

class BaseTabs extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selected: this.props.defaultTab
    });

    _defineProperty(this, "selectTab", selected => {
      this.setState({
        selected
      });
      const {
        onChangeSelected
      } = this.props;

      if (onChangeSelected) {
        onChangeSelected(selected);
      }
    });
  }

  render() {
    const {
      children,
      className,
      tabs,
      theme
    } = this.props;
    const {
      selected
    } = this.state;

    if (!tabs.length) {
      return null;
    }

    return React.createElement("div", {
      className: className
    }, tabs.map((tab, index) => React.createElement(Tab, {
      key: index,
      index: index,
      isSelected: selected === index,
      selectTab: this.selectTab,
      theme: theme,
      label: tab.label
    }, tab.title)));
  }

}

_defineProperty(BaseTabs, "defaultProps", {
  defaultTab: 0,
  tabs: []
});

const Tabs = styled(BaseTabs)`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};

  border-bottom: ${({
  hasBorder,
  theme
}) => hasBorder ? `1px solid ${theme.colorGreyLighter}` : null};
  display: flex;
`;
Tabs.defaultProps = {
  hasBorder: true,
  theme: light
};
const Label = styled.span`
  color: ${({
  theme
}) => theme.colorGreyDarker};
  font-weight: 600;
  margin-left: 10px;
`;
Label.defaultProps = {
  theme: light
};

export default Tabs;
