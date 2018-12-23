import React from 'react'

import Table from '../src/components/Table'

export default [
  {
    name: 'Table',
    element: (
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Header isSortable>Order date</Table.Header>
            <Table.Header isSortable>Region</Table.Header>
            <Table.Header>Rep</Table.Header>
            <Table.Header>Item</Table.Header>
            <Table.Header isSortable>Units</Table.Header>
            <Table.Header isSortable>Unit cost</Table.Header>
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
    ),
  },
  {
    name: 'Table.Auto',
    element: (
      <Table.Auto
        headers={[
          { title: 'Order date', isSortable: true },
          { title: 'Region', isSortable: true },
          { title: 'Rep' },
          { title: 'Item' },
          { title: 'Units', isSortable: true },
          { title: 'Unit cost', isSortable: true },
          { title: 'Total' },
        ]}
        rows={[
          ['1/6/2018', 'East', 'Jones', 'Pencil', '95', '1.99', '189.05'],
          ['1/23/2018', 'Central', 'Kivell', 'Binder', '50', '19.99', '999.50'],
          ['2/9/2018', 'Central', 'Jardine', 'Pencil', '36', '4.99', '179.64'],
          ['2/26/2018', 'Central', 'Gill', 'Pen', '27', '19.99', '539.73'],
          ['3/15/2018', 'West', 'Sorvino', 'Pencil', '56', '2.99', '167.44'],
          ['4/1/2018', 'East', 'Jones', 'Binder', '60', '4.99', '299.40'],
          ['4/18/2018', 'Central', 'Andrews', 'Pencil', '75', '1.99', '149.25'],
          ['5/5/2018', 'Central', 'Jardine', 'Pencil', '90', '4.99', '449.10'],
          ['5/22/2018', 'West', 'Thompson', 'Pencil', '32', '1.99', '63.68'],
          ['6/8/2018', 'East', 'Jones', 'Binder', '60', '8.99', '539.40'],
          ['6/25/2018', 'Central', 'Morgan', 'Pencil', '90', '4.99', '449.10'],
          ['7/12/2018', 'East', 'Howard', 'Binder', '29', '1.99', '57.71'],
          ['7/29/2018', 'East', 'Parent', 'Binder', '81', '19.99', '1,619.19'],
          ['8/15/2018', 'East', 'Jones', 'Pencil', '35', '4.99', '174.65'],
          ['9/1/2018', 'Central', 'Smith', 'Desk', '2', '125.00', '250.00'],
          ['9/18/2018', 'East', 'Jones', 'Pen Set', '16', '15.99', '255.84'],
          ['10/5/2018', 'Central', 'Morgan', 'Binder', '28', '8.99', '251.72'],
          ['10/22/2018', 'East', 'Jones', 'Pen', '64', '8.99', '575.36'],
          ['11/8/2018', 'East', 'Parent', 'Pen', '15', '19.99', '299.85'],
          [
            '11/25/2018',
            'Central',
            'Kivell',
            'Pen Set',
            '96',
            '4.99',
            '479.04',
          ],
          ['12/12/2018', 'Central', 'Smith', 'Pencil', '67', '1.29', '86.43'],
          [
            '12/29/2018',
            'East',
            'Parent',
            'Pen Set',
            '74',
            '15.99',
            '1,183.26',
          ],
          ['1/15/2019', 'Central', 'Gill', 'Binder', '46', '8.99', '413.54'],
          ['2/1/2019', 'Central', 'Smith', 'Binder', '87', '15.00', '1,305.00'],
          ['2/18/2019', 'East', 'Jones', 'Binder', '4', '4.99', '19.96'],
          ['3/7/2019', 'West', 'Sorvino', 'Binder', '7', '19.99', '139.93'],
          [
            '3/24/2019',
            'Central',
            'Jardine',
            'Pen Set',
            '50',
            '4.99',
            '249.50',
          ],
          ['4/10/2019', 'Central', 'Andrews', 'Pencil', '66', '1.99', '131.34'],
          ['4/27/2019', 'East', 'Howard', 'Pen', '96', '4.99', '479.04'],
          ['5/14/2019', 'Central', 'Gill', 'Pencil', '53', '1.29', '68.37'],
          ['5/31/2019', 'Central', 'Gill', 'Binder', '80', '8.99', '719.20'],
          ['6/17/2019', 'Central', 'Kivell', 'Desk', '5', '125.00', '625.00'],
          ['7/4/2019', 'East', 'Jones', 'Pen Set', '62', '4.99', '309.38'],
          [
            '7/21/2019',
            'Central',
            'Morgan',
            'Pen Set',
            '55',
            '12.49',
            '686.95',
          ],
          [
            '8/7/2019',
            'Central',
            'Kivell',
            'Pen Set',
            '42',
            '23.95',
            '1,005.90',
          ],
          ['8/24/2019', 'West', 'Sorvino', 'Desk', '3', '275.00', '825.00'],
          ['9/10/2019', 'Central', 'Gill', 'Pencil', '7', '1.29', '9.03'],
          ['9/27/2019', 'West', 'Sorvino', 'Pen', '76', '1.99', '151.24'],
          [
            '10/14/2019',
            'West',
            'Thompson',
            'Binder',
            '57',
            '19.99',
            '1,139.43',
          ],
          ['10/31/2019', 'Central', 'Andrews', 'Pencil', '14', '1.29', '18.06'],
          ['11/17/2019', 'Central', 'Jardine', 'Binder', '11', '4.99', '54.89'],
          [
            '12/4/2019',
            'Central',
            'Jardine',
            'Binder',
            '94',
            '19.99',
            '1,879.06',
          ],
          [
            '12/21/2019',
            'Central',
            'Andrews',
            'Binder',
            '28',
            '4.99',
            '139.72',
          ],
        ]}
      />
    ),
  },
]
