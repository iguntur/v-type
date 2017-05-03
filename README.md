# v-type [![Build Status](https://travis-ci.org/iguntur/v-type.svg?branch=master)](https://travis-ci.org/iguntur/v-type)

> Validation type of value is assignable.


## Install

```
$ npm install --save v-type
```


## Usage

```js
const vType = require('v-type');

vType('△', String);
//=> true

vType(['△'], String);
//=> TypeError: Type `Array` is not assignable to type `String`
```


## API

### vType(input, TypeName, [message])

Returns __`throw TypeError`__ if __`input`__ is not assignable to type __`TypeName`__.

#### input

Required: `true`<br>
Type: `any`

#### TypeName

Required: `true`<br>
Type: `constructor<Function>`

The constructor function - __`Function`__, __`Object`__, __`Array`__, __`Map`__, etc...

#### message

Type: `string`

Set the default message.

__Example:__

```js
function foo(bar) {
	vType(bar, Object, 'Expected `bar` to be of type `Object`');

	console.log(bar.x);
}

foo({x: 'yo'});
//=> 'yo'

foo('1');
//=> 'TypeError: Expected `bar` to be of type `Object`'
```


## License

MIT © [Guntur Poetra](http://iguntur.starmediateknik.com)
