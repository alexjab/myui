import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonJS from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import globby from 'globby'

const srcDirs = ['components', 'core']

if (process.env.BUILD_WITH_ICONS) {
  srcDirs.push('icons')
}

export default globby
  .sync([`./src/{${srcDirs}}/*.{jsx,js}`, '!**/*.test*'])
  .map(inputFile => ({
    input: inputFile,
    external: ['react', 'react-dom', 'styled-components'],
    output: {
      file: inputFile.replace('./src/', './'),
      format: 'es',
      name: 'myui',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    },
    plugins: [
      resolve({
        extensions: ['.mjs', '.js', '.jsx', '.json'],
      }),
      babel({
        exclude: 'node_modules/**',
      }),
      commonJS({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/react-is/index.js': [
            'isElement',
            'isValidElementType',
            'ForwardRef',
          ],
        },
      }),
      terser(),
    ],
  }))
