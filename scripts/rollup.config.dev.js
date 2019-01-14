import scss from 'rollup-plugin-scss';

export default [
{
  input: 'sass/main.js',
  output: {
    file: 'dist/main.js',
    format: 'iife',
  },
  plugins: [
    scss({
      output: 'dist/main.css',
      sourceMap: true
    })
  ]
}
];

