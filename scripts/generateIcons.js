const fs = require('fs')

const feather = require('feather-icons')

function toCamelCase(iconName) {
  return iconName
    .replace(/-([a-z])/g, v => v.toUpperCase())
    .replace(/-/g, '')
    .replace(/^[a-z]/, v => v.toUpperCase())
}

for (const iconName of Object.keys(feather.icons)) {
  const componentName = toCamelCase(iconName)
  const svgData = feather.icons[iconName].toSvg({
    width: "${size ? size : '20px'}",
    height: "${size ? size : '20px'}",
  })

  const component = `import React from 'react'
import styled from 'styled-components'

const ${componentName} = ({ size, ...props }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: \`${svgData}\`,
      }}
      {...props}
    />
  )
}
${componentName}.iconName = '${iconName}'

export default styled(${componentName})\`
  height: \${({ size }) => (size ? size : '20px')};
  display: inline-flex;
  align-items: center;
\``

  fs.writeFileSync(`./src/icons/${componentName}.jsx`, component)
}
