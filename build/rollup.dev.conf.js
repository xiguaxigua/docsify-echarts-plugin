import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: './src/index.js',
  output: {
    file: './docs/index.js',
    format: 'umd',
    name: 'docsifyEcharts'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel()
  ]
}
