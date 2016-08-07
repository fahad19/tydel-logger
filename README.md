# tydel-logger

> Logger for [Tydel.js](https://github.com/fahad19/tydel)

[![Build Status](https://img.shields.io/travis/fahad19/tydel-logger/master.svg)](http://travis-ci.org/fahad19/tydel-logger) [![npm](https://img.shields.io/npm/v/tydel-logger.svg)](https://www.npmjs.com/package/tydel-logger)

[![Preview](https://fahad19.github.io/tydel-demos/images/tydel-logger-preview.png)](https://fahad19.github.io/tydel-demos/react-counter/)

## Install

```
$ npm install --save tydel-logger
```

## Usage

```js
import { Types, createModel } from 'tydel';
import tydelLogger from 'tydel-logger';

const Model = createModel({
  name: Types.string
}, {}, [
  tydelLogger
]);
```

## License

MIT © [Fahad Ibnay Heylaal](http://fahad19.com)
