# mickey-model-extend

> Utility method to extend mickey model.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mickeyjsx/mickey-model-extend/blob/master/LICENSE)

[![NPM Version](https://img.shields.io/npm/v/mickey-model-extend.svg?style=flat-square)](https://www.npmjs.com/package/mickey-model-extend)
[![Build Status](https://img.shields.io/travis/mickeyjsx/mickey-model-extend.svg?style=flat)](https://travis-ci.org/mickeyjsx/mickey-model-extend)
[![Coverage Status](https://img.shields.io/coveralls/mickeyjsx/mickey-model-extend.svg?style=flat)](https://coveralls.io/r/mickeyjsx/mickey-model-extend)
[![NPM downloads](http://img.shields.io/npm/dm/mickey-model-extend.svg?style=flat)](https://npmjs.org/package/mickey-model-extend)
[![Dependencies](https://david-dm.org/mickeyjsx/mickey-model-extend/status.svg)](https://david-dm.org/mickeyjsx/mickey-model-extend)

## Install

```
$ npm install --save mickey-model-extend
```

## Usage

```es6
import modelExtend from 'mickey-model-extend';

const base = {
  state: {
    foo: null,
  },
  add: (state, payload) => state + payload,
};

const model = modelExtend(base, {
  namespace: 'foo.bar',
  state: {
    bar: 1,
  },
});

```

## API

### modelExtend(...models) => Model

Behaviour:

- `model.namespace` will be overrided by latter model
- `model.createReducer` will be overrided by latter model
- `model.state` will be merged with `Object.assign`
- `model.state` will be overrided by latter model if it isn't an object
- `model[subscriptions|enhancers]` will be merged to a array
- reducer functions will be merge with `Object.assign`


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mickeyjsx/mickey-model-extend/issues/new).
