import React from 'react'

import InfoGroup from '../src/components/InfoGroup'

export const description = '<InfoGroup />'

export default [
  {
    name: 'Info group',
    element: (
      <InfoGroup>
        <InfoGroup.Section
          title="User Account Details"
          fields={[
            { label: 'Name', data: 'Brody Senger' },
            { label: 'Date of Birth', data: '1979-10-28' },
            { label: 'Street Address', data: '56530 Treutel Ville' },
            { label: 'City, State Zip', data: 'Nealbury, ME 70770' },
            { label: 'Country', data: 'United States of America' },
            { label: 'Phone Number', data: '742.999.XXXX' },
            { label: 'Username', data: 'Brody_Senger87' },
            { label: 'Password', data: '58USigVlSk8oaZW' },
            { label: 'Email', data: 'Brody45@yahoo.com' },
          ]}
        />
        <InfoGroup.Section
          title="Company Details"
          fields={[
            { label: 'Company Name', data: 'Christiansen and Sons' },
            { label: 'Catch Phrase', data: 'Up-sized tertiary infrastructure' },
            { label: 'BS', data: 'B2B productize networks' },
            { label: 'Catch Phrase Adjective', data: 'Multi-tiered' },
            { label: 'Catchphrase Descriptor', data: 'stable' },
            { label: 'Catchphrase Noun', data: 'emulation' },
            { label: 'BS Adjective', data: 'one-to-one' },
            { label: 'BS Buzz', data: 'brand' },
            { label: 'BS Noun', data: 'e-commerce' },
          ]}
        />
      </InfoGroup>
    ),
  },
]
