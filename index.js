'use strict';
const tn = x => x.constructor.name;
const toString = v => Object.prototype.toString.call(v);

function noop() {}

module.exports = (input, type, message) => {
	if (!type || (!input && !type)) {
		return noop();
	}

	const msg = (value, expected) => message || `Type \`${value}\` is not assignable to type \`${expected}\``;

	switch (toString(input)) {
		case '[object Null]':
			message = msg('null', type.name);
			break;
		case '[object Undefined]':
			message = msg('undefined', type.name);
			break;
		default:
			if (input.constructor === type) {
				return true;
			}

			message = msg(tn(input), type.name);
			break;
	}

	throw new TypeError(message);
};
