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

class BaseTabs extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selected: 0
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
      theme
    } = this.props;
    const {
      selected
    } = this.state;
    return React.createElement("div", {
      className: className
    }, React.Children.map(children, (child, index) => React.cloneElement(child, {
      index,
      isSelected: selected === index,
      selectTab: this.selectTab,
      theme
    })));
  }

}

const Tabs = styled(BaseTabs)`
  border-bottom: 1px solid ${({
  theme
}) => theme.colorGreyLighter};
  display: flex;
`;

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

const Label = styled.span`
  color: ${({
  theme
}) => theme.colorGreyDarker};
  font-weight: 600;
  margin-left: 10px;
`;
const Tab = styled(BaseTab)`
  padding: 10px;

  color: ${({
  isSelected,
  theme
}) => isSelected ? null : theme.colorGreyDark};
  border-bottom: ${({
  isSelected,
  theme
}) => isSelected ? `3px solid ${theme.colorPrimary}` : 'none'};

  font-weight: 600;

  cursor: pointer;
  user-select: none;
`;
Tabs.Tab = Tab;

export default Tabs;
