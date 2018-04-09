# Cake Case

The simple utility methods that converts string case. It's optimized for use in code, such as variable or key of object.

## Installation

## Usage

``` js
import * as Case from 'cake-case';

Case.lower('HelloWorld'); // 'hello world'
Case.lower('HelloWorld', '-'); // 'hello-world'
Case.upper('hello-world'); // 'HELLO WORLD'
Case.upper('hello-world', '_'); // 'HELLO_WORLD'
Case.capital('hello_world'); // 'Hello World'
Case.capital('hello_world', ''); // 'HelloWorld'

Case.camel('hello world');  // 'helloWorld'
Case.pascal('hello world'); // 'HelloWorld'
Case.kebab('HelloWorld');   // 'hello-world'
Case.snake('helloWorld');   // 'hello_world'
```

## License

The MIT License
