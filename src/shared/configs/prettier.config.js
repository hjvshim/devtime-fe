/**
 * @see https://prettier.io/docs/configuration
 */
const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false, // jsx 속성 값에 single quote 사용;
  quoteProps: 'as-needed', // 객체 속성에 필요할 때만 quotation;
  trailingComma: 'all',
  bracketSpacing: true,
  objectWrap: 'collapse', // 객체 한 줄로 유지;
  bracketSameLine: false,
  arrowParens: 'always', // parameter 1개인 arrow 함수의 괄호 유지;
  endOfLine: 'auto',
};

export default config;
