import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonJS from 'rollup-plugin-commonjs'
import globby from 'globby'

const multipleFilesConfigs = globby
  .sync('./src/components/*.jsx')
  .map(inputFile => ({
    input: inputFile,
    external: ['react', 'react-dom', 'styled-components'],
    output: {
      file: inputFile.replace('src', 'dist'),
      format: 'es',
      name: 'myui',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    },
    plugins: [
      resolve(),
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
    ],
  }))

const singleFileConfig = {
  input: './src/index.js',
  external: ['react', 'react-dom'],
  output: {
    file: './dist/myui.min.js',
    format: 'es',
    name: 'myui',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  plugins: [
    resolve(),
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
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
      plugins: ['@babel/plugin-proposal-class-properties'],
    }),
  ],
}

const configs = [...multipleFilesConfigs, singleFileConfig]

export default configs
