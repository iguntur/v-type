import test from 'ava';
import vt from './';

function noop() {}

test('not throws', t => {
	t.is(vt(), noop());
	t.is(vt('△'), noop());

	const date = new Date();
	t.true(vt(date, Date));
	t.true(vt(() => {}, Function));
	t.true(vt(['☺'], Array));
	t.true(vt({x: 'y'}, Object));
	t.true(vt(1, Number));
	t.true(vt(true, Boolean));
	t.true(vt(false, Boolean));
});

test('TypeError: with custom message', t => {
	const err = t.throws(() => vt({}, Function, '✗'), '✗');
	t.is(err.message, '✗');
});

test('TypeError: default message', t => {
	t.throws(() => vt(null, Object), 'Type `null` is not assignable to type `Object`');
	t.throws(() => vt(noop(), String), 'Type `undefined` is not assignable to type `String`');
	t.throws(() => vt(undefined, Date), 'Type `undefined` is not assignable to type `Date`');
	t.throws(() => vt('2', Number), 'Type `String` is not assignable to type `Number`');
	t.throws(() => vt(2, String), 'Type `Number` is not assignable to type `String`');
	t.throws(() => vt([], Object), 'Type `Array` is not assignable to type `Object`');
	t.throws(() => vt({}, Array), 'Type `Object` is not assignable to type `Array`');
	t.throws(() => vt(() => {}, String), 'Type `Function` is not assignable to type `String`');
	t.throws(() => vt([], Function), 'Type `Array` is not assignable to type `Function`');
	t.throws(() => vt({}, Map), 'Type `Object` is not assignable to type `Map`');
	t.throws(() => vt(new Date(), Set), 'Type `Date` is not assignable to type `Set`');
	t.throws(() => vt(1, Boolean), 'Type `Number` is not assignable to type `Boolean`');
	t.throws(() => vt(0, Boolean), 'Type `Number` is not assignable to type `Boolean`');
	t.throws(() => vt(true, Number), 'Type `Boolean` is not assignable to type `Number`');
});
