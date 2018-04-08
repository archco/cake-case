import {
  camel,
  capital,
  kebab,
  lower,
  normal,
  pascal,
  snake,
  upper,
} from '../src/cake-case';

describe('#normal', () => {
  it('should be works.', () => {
    expect(normal('HelloWorld')).toEqual('Hello World');
    expect(normal('HTMLElement')).toEqual('HTML Element');
  });
});

describe('#lower', () => {
  it('should be works.', () => {
    expect(lower('HelloWorld')).toEqual('hello world');
    expect(lower('HTMLElement')).toEqual('html element');
    expect(lower('SPACE-COWBOY')).toEqual('space cowboy');
    expect(lower('rgb2hex')).toEqual('rgb 2 hex');
    expect(lower('email@example.com')).toEqual('email example com');
  });

  it('can fill other character instead space.', () => {
    expect(lower('HelloWorld', '.')).toEqual('hello.world');
  });
});

describe('#upper', () => {
  it('should be works.', () => {
    expect(upper('hello_world')).toEqual('HELLO WORLD');
  });

  it('can fill other character instead space.', () => {
    expect(upper('rgb2hex', '++')).toEqual('RGB++2++HEX');
  });
});

describe('#capital', () => {
  it('works.', () => {
    expect(capital('hello_world')).toEqual('Hello World');
  });

  it('can fill other character instead space.', () => {
    expect(capital('hello world', '')).toEqual('HelloWorld');
  });
});

describe('#camel', () => {
  it('works.', () => {
    expect(camel('i phone')).toEqual('iPhone');
    expect(camel('RGB-2-HEX')).toEqual('rgb2Hex');
  });
});

describe('#pascal', () => {
  it('works.', () => {
    expect(pascal('pascal-case')).toEqual('PascalCase');
    expect(pascal('camel.case')).toEqual('CamelCase');
  });
});

describe('#kebab', () => {
  it('works.', () => {
    expect(kebab('helloWorld')).toEqual('hello-world');
    expect(kebab('SimpleCRUD')).toEqual('simple-crud');
  });
});

describe('#snake', () => {
  it('works.', () => {
    expect(snake('kebab-case')).toEqual('kebab_case');
    expect(snake('Terminator2')).toEqual('terminator_2');
  });
});
