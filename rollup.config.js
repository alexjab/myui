import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonJS from 'rollup-plugin-commonjs'

const config = {
  input: 'src/components/Button.jsx',
  external: ['react', 'react-dom'],
  output: {
    format: 'umd',
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
    }),
  ],
}
export default config
