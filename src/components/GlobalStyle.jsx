import { createGlobalStyle } from 'styled-components'

import { light as lightTheme } from '../core/themes'

import InterUIRegular2 from '../../fonts/Inter-UI-Regular.woff2'
import InterUIRegular from '../../fonts/Inter-UI-Regular.woff'

import InterUIItalic2 from '../../fonts/Inter-UI-Italic.woff2'
import InterUIItalic from '../../fonts/Inter-UI-Italic.woff'

import InterUIMedium2 from '../../fonts/Inter-UI-Medium.woff2'
import InterUIMedium from '../../fonts/Inter-UI-Medium.woff'

import InterUIMediumItalic2 from '../../fonts/Inter-UI-MediumItalic.woff2'
import InterUIMediumItalic from '../../fonts/Inter-UI-MediumItalic.woff'

import InterUISemiBold2 from '../../fonts/Inter-UI-SemiBold.woff2'
import InterUISemiBold from '../../fonts/Inter-UI-SemiBold.woff'

import InterUISemiBoldItalic2 from '../../fonts/Inter-UI-SemiBoldItalic.woff2'
import InterUISemiBoldItalic from '../../fonts/Inter-UI-SemiBoldItalic.woff'

import InterUIBold2 from '../../fonts/Inter-UI-Bold.woff2'
import InterUIBold from '../../fonts/Inter-UI-Bold.woff'

import InterUIBoldItalic2 from '../../fonts/Inter-UI-BoldItalic.woff2'
import InterUIBoldItalic from '../../fonts/Inter-UI-BoldItalic.woff'

import InterUIExtraBold2 from '../../fonts/Inter-UI-ExtraBold.woff2'
import InterUIExtraBold from '../../fonts/Inter-UI-ExtraBold.woff'

import InterUIExtraBoldItalic2 from '../../fonts/Inter-UI-ExtraBoldItalic.woff2'
import InterUIExtraBoldItalic from '../../fonts/Inter-UI-ExtraBoldItalic.woff'

import InterUIBlack2 from '../../fonts/Inter-UI-Black.woff2'
import InterUIBlack from '../../fonts/Inter-UI-Black.woff'

import InterUIBlackItalic2 from '../../fonts/Inter-UI-BlackItalic.woff2'
import InterUIBlackItalic from '../../fonts/Inter-UI-BlackItalic.woff'

const GlobalStyle = createGlobalStyle`
  /* Copied from fonts/inter-ui.css */
  @font-face {
    font-family: 'Inter UI';
    font-style:  normal;
    font-weight: 400;
    src: url(${InterUIRegular2}) format("woff2"),
         url(${InterUIRegular}) format("woff");
  }
  @font-face {
    font-family: 'Inter UI';
    font-style:  italic;
    font-weight: 400;
    src: url(${InterUIItalic2}) format("woff2"),
         url(${InterUIItalic}) format("woff");
  }

  @font-face {
    font-family: 'Inter UI';
    font-style:  normal;
    font-weight: 500;
    src: url(${InterUIMedium2}) format("woff2"),
         url(${InterUIMedium}) format("woff");
  }
  @font-face {
    font-family: 'Inter UI';
    font-style:  italic;
    font-weight: 500;
    src: url(${InterUIMediumItalic2}) format("woff2"),
         url(${InterUIMediumItalic}) format("woff");
  }

  @font-face {
    font-family: 'Inter UI';
    font-style:  normal;
    font-weight: 600;
    src: url(${InterUISemiBold2}) format("woff2"),
         url(${InterUISemiBold}) format("woff");
  }
  @font-face {
    font-family: 'Inter UI';
    font-style:  italic;
    font-weight: 600;
    src: url(${InterUISemiBoldItalic2}) format("woff2"),
         url(${InterUISemiBoldItalic}) format("woff");
  }

  @font-face {
    font-family: 'Inter UI';
    font-style:  normal;
    font-weight: 700;
    src: url(${InterUIBold2}) format("woff2"),
         url(${InterUIBold}) format("woff");
  }
  @font-face {
    font-family: 'Inter UI';
    font-style:  italic;
    font-weight: 700;
    src: url(${InterUIBoldItalic2}) format("woff2"),
         url(${InterUIBoldItalic}) format("woff");
  }

  @font-face {
    font-family: 'Inter UI';
    font-style:  normal;
    font-weight: 800;
    src: url(${InterUIExtraBold2}) format("woff2"),
         url(${InterUIExtraBold}) format("woff");
  }
  @font-face {
    font-family: 'Inter UI';
    font-style:  italic;
    font-weight: 800;
    src: url(${InterUIExtraBoldItalic2}) format("woff2"),
         url(${InterUIExtraBoldItalic}) format("woff");
  }

  @font-face {
    font-family: 'Inter UI';
    font-style:  normal;
    font-weight: 900;
    src: url(${InterUIBlack2}) format("woff2"),
         url(${InterUIBlack}) format("woff");
  }
  @font-face {
    font-family: 'Inter UI';
    font-style:  italic;
    font-weight: 900;
    src: url(${InterUIBlackItalic2}) format("woff2"),
         url(${InterUIBlackItalic}) format("woff");
  }

  body {
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSize};
    background-color: ${props => props.theme.backgroundColor};
  }

  a {
    font-weight: 500;
    color: ${({ theme }) => theme.colorPrimary}
  }
`

GlobalStyle.defaultProps = {
  theme: lightTheme,
}

export default GlobalStyle
