# Cake Case

[![Build Status](https://travis-ci.org/archco/cake-case.svg?branch=master)](https://travis-ci.org/archco/cake-case)
[![npm version](https://badge.fury.io/js/cake-case.svg)](https://www.npmjs.com/package/cake-case)
[![Downloads](https://img.shields.io/npm/dm/cake-case.svg)](https://www.npmjs.com/package/cake-case)

The simple utility methods that converts string case. It's optimized for use in code, such as variable or key of object.

## Installation

``` sh
npm install cake-case
```

## Usage

``` js
import * as Case from 'cake-case';

Case.lower('HelloWorld');         // 'hello world'
Case.lower('HelloWorld', '-');    // 'hello-world'
Case.upper('hello-world');        // 'HELLO WORLD'
Case.upper('hello-world', '_');   // 'HELLO_WORLD'
Case.capital('hello_world');      // 'Hello World'
Case.capital('hello_world', '');  // 'HelloWorld'

Case.camel('hello world');  // 'helloWorld'
Case.pascal('hello world'); // 'HelloWorld'
Case.kebab('HelloWorld');   // 'hello-world'
Case.snake('helloWorld');   // 'hello_world'
```

## License

[The MIT License](https://github.com/archco/cake-case/blob/master/LICENSE)
