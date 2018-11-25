import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import * as colors from 'core/colors'

import DefaultTheme from 'components/DefaultTheme'
import GlobalStyle from 'components/GlobalStyle'

import Color from 'components/Color'
import Button from 'components/Button'
import Table from 'components/Table'
import Tabs from 'components/Tabs'

const GlobalDecorator = storyFn => (
  <DefaultTheme>
    {storyFn()}

    <GlobalStyle />
  </DefaultTheme>
)

storiesOf('Core', module)
  .addDecorator(GlobalDecorator)
  .add('Colors', () => (
    <>
      <Color name="primary" color={colors.primary} />
      <Color name="danger" color={colors.danger} />
    </>
  ))
  .add('Greys', () => (
    <>
      <Color name="Grey lightest" color={colors.greyLightest} />
      <Color name="Grey lighter" color={colors.greyLighter} />
      <Color name="Grey light" color={colors.greyLight} />
      <Color name="Grey" color={colors.grey} />
      <Color name="Grey dark" color={colors.greyDark} />
      <Color name="Grey darker" color={colors.greyDarker} />
      <Color name="Grey darkest" color={colors.greyDarkest} />
    </>
  ))
  .add('Black and white', () => (
    <>
      <Color name="White" color={colors.white} />
      <Color name="Dark" color={colors.dark} />
      <Color name="Darker" color={colors.darker} />
      <Color name="Darkest" color={colors.darkest} />
      <Color name="Black" color={colors.black} />
    </>
  ))

storiesOf('Button', module)
  .addDecorator(GlobalDecorator)
  .add('Primary', () => <Button onClick={action('onClick')}>Confirm changes</Button>)
  .add('Primary large', () => <Button isLarge onClick={action('onClick')}>Confirm changes</Button>)
  .add('Primary inverted', () => <Button isInverted onClick={action('onClick')}>Confirm changes</Button>)
  .add('Primary inverted disabled', () => (
    <Button isInverted disabled onClick={action('onClick')}>
      Confirm changes
    </Button>
  ))
  .add('Primary large inverted', () => (
    <Button isLarge isInverted onClick={action('onClick')}>
      Confirm changes
    </Button>
  ))
  .add('Primary outlined', () => <Button isOutlined onClick={action('onClick')}>Confirm changes</Button>)
  .add('Primary large outlined', () => (
    <Button isLarge isOutlined onClick={action('onClick')}>
      Confirm changes
    </Button>
  ))
  .add('Danger', () => <Button isDanger onClick={action('onClick')}>Move to trash</Button>)
  .add('Danger large', () => (
    <Button isDanger isLarge onClick={action('onClick')}>
      Move to trash
    </Button>
  ))
  .add('Danger inverted', () => (
    <Button isDanger isInverted onClick={action('onClick')}>
      Move to trash
    </Button>
  ))
  .add('Danger large inverted', () => (
    <Button isDanger isLarge isInverted onClick={action('onClick')}>
      Move to trash
    </Button>
  ))
  .add('Danger outlined', () => (
    <Button isDanger isOutlined onClick={action('onClick')}>
      Move to trash
    </Button>
  ))
  .add('Danger large outlined', () => (
    <Button isDanger isLarge isOutlined onClick={action('onClick')}>
      Move to trash
    </Button>
  ))
  .add('Disabled', () => <Button disabled onClick={action('onClick')}>Confirm changes</Button>)
  .add('Disabled large', () => (
    <Button disabled isLarge onClick={action('onClick')}>
      Confirm changes
    </Button>
  ))
  .add('Disabled inverted', () => (
    <Button disabled isInverted onClick={action('onClick')}>
      Confirm changes
    </Button>
  ))
  .add('Disabled outlined', () => (
    <Button disabled isOutlined onClick={action('onClick')}>
      Confirm changes
    </Button>
  ))

storiesOf('Table', module)
  .addDecorator(GlobalDecorator)
  .add('Table', () => (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header>Order date</Table.Header>
          <Table.Header>Region</Table.Header>
          <Table.Header>Rep</Table.Header>
          <Table.Header>Item</Table.Header>
          <Table.Header>Units</Table.Header>
          <Table.Header>Unit cost</Table.Header>
          <Table.Header>Total</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Data>1/6/2018</Table.Data>
          <Table.Data>East</Table.Data>
          <Table.Data>Jones</Table.Data>
          <Table.Data>Pencil</Table.Data>
          <Table.Data>95</Table.Data>
          <Table.Data>1.99</Table.Data>
          <Table.Data>189.05</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>1/23/2018</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Kivell</Table.Data>
          <Table.Data>Binder</Table.Data>
          <Table.Data>50</Table.Data>
          <Table.Data>19.99</Table.Data>
          <Table.Data>999.50</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>2/9/2018</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Jardine</Table.Data>
          <Table.Data>Pencil</Table.Data>
          <Table.Data>36</Table.Data>
          <Table.Data>4.99</Table.Data>
          <Table.Data>179.64</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>2/26/2018</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Gill</Table.Data>
          <Table.Data>Pen</Table.Data>
          <Table.Data>27</Table.Data>
          <Table.Data>19.99</Table.Data>
          <Table.Data>539.73</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>3/15/2018</Table.Data>
          <Table.Data>West</Table.Data>
          <Table.Data>Sorvino</Table.Data>
          <Table.Data>Pencil</Table.Data>
          <Table.Data>56</Table.Data>
          <Table.Data>2.99</Table.Data>
          <Table.Data>167.44</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>4/1/2018</Table.Data>
          <Table.Data>East</Table.Data>
          <Table.Data>Jones</Table.Data>
          <Table.Data>Binder</Table.Data>
          <Table.Data>60</Table.Data>
          <Table.Data>4.99</Table.Data>
          <Table.Data>299.40</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>4/18/2018</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Andrews</Table.Data>
          <Table.Data>Pencil</Table.Data>
          <Table.Data>75</Table.Data>
          <Table.Data>1.99</Table.Data>
          <Table.Data>149.25</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>5/5/2018</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Jardine</Table.Data>
          <Table.Data>Pencil</Table.Data>
          <Table.Data>90</Table.Data>
          <Table.Data>4.99</Table.Data>
          <Table.Data>449.10</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>5/22/2018</Table.Data>
          <Table.Data>West</Table.Data>
          <Table.Data>Thompson</Table.Data>
          <Table.Data>Pencil</Table.Data>
          <Table.Data>32</Table.Data>
          <Table.Data>1.99</Table.Data>
          <Table.Data>63.68</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>6/8/2018</Table.Data>
          <Table.Data>East</Table.Data>
          <Table.Data>Jones</Table.Data>
          <Table.Data>Binder</Table.Data>
          <Table.Data>60</Table.Data>
          <Table.Data>8.99</Table.Data>
          <Table.Data>539.40</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>6/25/2018</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Morgan</Table.Data>
          <Table.Data>Pencil</Table.Data>
          <Table.Data>90</Table.Data>
          <Table.Data>4.99</Table.Data>
          <Table.Data>449.10</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>7/12/2018</Table.Data>
          <Table.Data>East</Table.Data>
          <Table.Data>Howard</Table.Data>
          <Table.Data>Binder</Table.Data>
          <Table.Data>29</Table.Data>
          <Table.Data>1.99</Table.Data>
          <Table.Data>57.71</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>7/29/2018</Table.Data>
          <Table.Data>East</Table.Data>
          <Table.Data>Parent</Table.Data>
          <Table.Data>Binder</Table.Data>
          <Table.Data>81</Table.Data>
          <Table.Data>19.99</Table.Data>
          <Table.Data>1,619.19</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>8/15/2018</Table.Data>
          <Table.Data>East</Table.Data>
          <Table.Data>Jones</Table.Data>
          <Table.Data>Pencil</Table.Data>
          <Table.Data>35</Table.Data>
          <Table.Data>4.99</Table.Data>
          <Table.Data>174.65</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>9/1/2018</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Smith</Table.Data>
          <Table.Data>Desk</Table.Data>
          <Table.Data>2</Table.Data>
          <Table.Data>125.00</Table.Data>
          <Table.Data>250.00</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>9/18/2018</Table.Data>
          <Table.Data>East</Table.Data>
          <Table.Data>Jones</Table.Data>
          <Table.Data>Pen Set</Table.Data>
          <Table.Data>16</Table.Data>
          <Table.Data>15.99</Table.Data>
          <Table.Data>255.84</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>10/5/2018</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Morgan</Table.Data>
          <Table.Data>Binder</Table.Data>
          <Table.Data>28</Table.Data>
          <Table.Data>8.99</Table.Data>
          <Table.Data>251.72</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>10/22/2018</Table.Data>
          <Table.Data>East</Table.Data>
          <Table.Data>Jones</Table.Data>
          <Table.Data>Pen</Table.Data>
          <Table.Data>64</Table.Data>
          <Table.Data>8.99</Table.Data>
          <Table.Data>575.36</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>11/8/2018</Table.Data>
          <Table.Data>East</Table.Data>
          <Table.Data>Parent</Table.Data>
          <Table.Data>Pen</Table.Data>
          <Table.Data>15</Table.Data>
          <Table.Data>19.99</Table.Data>
          <Table.Data>299.85</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>11/25/2018</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Kivell</Table.Data>
          <Table.Data>Pen Set</Table.Data>
          <Table.Data>96</Table.Data>
          <Table.Data>4.99</Table.Data>
          <Table.Data>479.04</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>12/12/2018</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Smith</Table.Data>
          <Table.Data>Pencil</Table.Data>
          <Table.Data>67</Table.Data>
          <Table.Data>1.29</Table.Data>
          <Table.Data>86.43</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>12/29/2018</Table.Data>
          <Table.Data>East</Table.Data>
          <Table.Data>Parent</Table.Data>
          <Table.Data>Pen Set</Table.Data>
          <Table.Data>74</Table.Data>
          <Table.Data>15.99</Table.Data>
          <Table.Data>1,183.26</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>1/15/2019</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Gill</Table.Data>
          <Table.Data>Binder</Table.Data>
          <Table.Data>46</Table.Data>
          <Table.Data>8.99</Table.Data>
          <Table.Data>413.54</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>2/1/2019</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Smith</Table.Data>
          <Table.Data>Binder</Table.Data>
          <Table.Data>87</Table.Data>
          <Table.Data>15.00</Table.Data>
          <Table.Data>1,305.00</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>2/18/2019</Table.Data>
          <Table.Data>East</Table.Data>
          <Table.Data>Jones</Table.Data>
          <Table.Data>Binder</Table.Data>
          <Table.Data>4</Table.Data>
          <Table.Data>4.99</Table.Data>
          <Table.Data>19.96</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>3/7/2019</Table.Data>
          <Table.Data>West</Table.Data>
          <Table.Data>Sorvino</Table.Data>
          <Table.Data>Binder</Table.Data>
          <Table.Data>7</Table.Data>
          <Table.Data>19.99</Table.Data>
          <Table.Data>139.93</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>3/24/2019</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Jardine</Table.Data>
          <Table.Data>Pen Set</Table.Data>
          <Table.Data>50</Table.Data>
          <Table.Data>4.99</Table.Data>
          <Table.Data>249.50</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>4/10/2019</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Andrews</Table.Data>
          <Table.Data>Pencil</Table.Data>
          <Table.Data>66</Table.Data>
          <Table.Data>1.99</Table.Data>
          <Table.Data>131.34</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>4/27/2019</Table.Data>
          <Table.Data>East</Table.Data>
          <Table.Data>Howard</Table.Data>
          <Table.Data>Pen</Table.Data>
          <Table.Data>96</Table.Data>
          <Table.Data>4.99</Table.Data>
          <Table.Data>479.04</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>5/14/2019</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Gill</Table.Data>
          <Table.Data>Pencil</Table.Data>
          <Table.Data>53</Table.Data>
          <Table.Data>1.29</Table.Data>
          <Table.Data>68.37</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>5/31/2019</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Gill</Table.Data>
          <Table.Data>Binder</Table.Data>
          <Table.Data>80</Table.Data>
          <Table.Data>8.99</Table.Data>
          <Table.Data>719.20</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>6/17/2019</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Kivell</Table.Data>
          <Table.Data>Desk</Table.Data>
          <Table.Data>5</Table.Data>
          <Table.Data>125.00</Table.Data>
          <Table.Data>625.00</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>7/4/2019</Table.Data>
          <Table.Data>East</Table.Data>
          <Table.Data>Jones</Table.Data>
          <Table.Data>Pen Set</Table.Data>
          <Table.Data>62</Table.Data>
          <Table.Data>4.99</Table.Data>
          <Table.Data>309.38</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>7/21/2019</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Morgan</Table.Data>
          <Table.Data>Pen Set</Table.Data>
          <Table.Data>55</Table.Data>
          <Table.Data>12.49</Table.Data>
          <Table.Data>686.95</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>8/7/2019</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Kivell</Table.Data>
          <Table.Data>Pen Set</Table.Data>
          <Table.Data>42</Table.Data>
          <Table.Data>23.95</Table.Data>
          <Table.Data>1,005.90</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>8/24/2019</Table.Data>
          <Table.Data>West</Table.Data>
          <Table.Data>Sorvino</Table.Data>
          <Table.Data>Desk</Table.Data>
          <Table.Data>3</Table.Data>
          <Table.Data>275.00</Table.Data>
          <Table.Data>825.00</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>9/10/2019</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Gill</Table.Data>
          <Table.Data>Pencil</Table.Data>
          <Table.Data>7</Table.Data>
          <Table.Data>1.29</Table.Data>
          <Table.Data>9.03</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>9/27/2019</Table.Data>
          <Table.Data>West</Table.Data>
          <Table.Data>Sorvino</Table.Data>
          <Table.Data>Pen</Table.Data>
          <Table.Data>76</Table.Data>
          <Table.Data>1.99</Table.Data>
          <Table.Data>151.24</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>10/14/2019</Table.Data>
          <Table.Data>West</Table.Data>
          <Table.Data>Thompson</Table.Data>
          <Table.Data>Binder</Table.Data>
          <Table.Data>57</Table.Data>
          <Table.Data>19.99</Table.Data>
          <Table.Data>1,139.43</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>10/31/2019</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Andrews</Table.Data>
          <Table.Data>Pencil</Table.Data>
          <Table.Data>14</Table.Data>
          <Table.Data>1.29</Table.Data>
          <Table.Data>18.06</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>11/17/2019</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Jardine</Table.Data>
          <Table.Data>Binder</Table.Data>
          <Table.Data>11</Table.Data>
          <Table.Data>4.99</Table.Data>
          <Table.Data>54.89</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>12/4/2019</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Jardine</Table.Data>
          <Table.Data>Binder</Table.Data>
          <Table.Data>94</Table.Data>
          <Table.Data>19.99</Table.Data>
          <Table.Data>1,879.06</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>12/21/2019</Table.Data>
          <Table.Data>Central</Table.Data>
          <Table.Data>Andrews</Table.Data>
          <Table.Data>Binder</Table.Data>
          <Table.Data>28</Table.Data>
          <Table.Data>4.99</Table.Data>
          <Table.Data>139.72</Table.Data>
        </Table.Row>
      </Table.Body>
    </Table>
  ))

storiesOf('Tabs', module)
  .addDecorator(GlobalDecorator)
  .add('Tabs', () => (
    <Tabs onChangeSelected={action('onChangeSelected')}>
      <Tabs.Tab label="199">First entry</Tabs.Tab>
      <Tabs.Tab>Second entry</Tabs.Tab>
      <Tabs.Tab>Third entry</Tabs.Tab>
    </Tabs>
  ))
