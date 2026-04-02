(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.n.cS === region.k.cS)
	{
		return 'on line ' + region.n.cS;
	}
	return 'on lines ' + region.n.cS + ' through ' + region.k.cS;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (Object.prototype.hasOwnProperty.call(value, key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	var unwrapped = _Json_unwrap(value);
	if (!(key === 'toJSON' && typeof unwrapped === 'function'))
	{
		object[key] = unwrapped;
	}
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.jL,
		impl.lw,
		impl.k2,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS
//
// For some reason, tabs can appear in href protocols and it still works.
// So '\tjava\tSCRIPT:alert("!!!")' and 'javascript:alert("!!!")' are the same
// in practice. That is why _VirtualDom_RE_js and _VirtualDom_RE_js_html look
// so freaky.
//
// Pulling the regular expressions out to the top level gives a slight speed
// boost in small benchmarks (4-10%) but hoisting values to reduce allocation
// can be unpredictable in large programs where JIT may have a harder time with
// functions are not fully self-contained. The benefit is more that the js and
// js_html ones are so weird that I prefer to see them near each other.


var _VirtualDom_RE_script = /^script$/i;
var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;


function _VirtualDom_noScript(tag)
{
	return _VirtualDom_RE_script.test(tag) ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return _VirtualDom_RE_on_formAction.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'outerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return _VirtualDom_RE_js.test(value)
		? /**/''//*//**_UNUSED/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return _VirtualDom_RE_js_html.test(value)
		? /**/''//*//**_UNUSED/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlJson(value)
{
	return (
		(typeof _Json_unwrap(value) === 'string' && _VirtualDom_RE_js_html.test(_Json_unwrap(value)))
		||
		(Array.isArray(_Json_unwrap(value)) && _VirtualDom_RE_js_html.test(String(_Json_unwrap(value))))
	)
		? _Json_wrap(
			/**/''//*//**_UNUSED/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		) : value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		G: func(record.G),
		fP: record.fP,
		fH: record.fH
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.G;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.fP;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.fH) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.jL,
		impl.lw,
		impl.k2,
		function(sendToApp, initialModel) {
			var view = impl.ly;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.jL,
		impl.lw,
		impl.k2,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.fM && impl.fM(sendToApp)
			var view = impl.ly;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.iS);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.lo) && (_VirtualDom_doc.title = title = doc.lo);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.kq;
	var onUrlRequest = impl.kr;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		fM: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.hG === next.hG
							&& curr.gS === next.gS
							&& curr.hD.a === next.hD.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		jL: function(flags)
		{
			return A3(impl.jL, flags, _Browser_getUrl(), key);
		},
		ly: impl.ly,
		lw: impl.lw,
		k2: impl.k2
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { jE: 'hidden', i2: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { jE: 'mozHidden', i2: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { jE: 'msHidden', i2: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { jE: 'webkitHidden', i2: 'webkitvisibilitychange' }
		: { jE: 'hidden', i2: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		hP: _Browser_getScene(),
		ih: {
			$9: _Browser_window.pageXOffset,
			io: _Browser_window.pageYOffset,
			ij: _Browser_doc.documentElement.clientWidth,
			gP: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		ij: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		gP: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			hP: {
				ij: node.scrollWidth,
				gP: node.scrollHeight
			},
			ih: {
				$9: node.scrollLeft,
				io: node.scrollTop,
				ij: node.clientWidth,
				gP: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			hP: _Browser_getScene(),
			ih: {
				$9: x,
				io: y,
				ij: _Browser_doc.documentElement.clientWidth,
				gP: _Browser_doc.documentElement.clientHeight
			},
			jm: {
				$9: x + rect.left,
				io: y + rect.top,
				ij: rect.width,
				gP: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.j7) { flags += 'm'; }
	if (options.i1) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.x) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.C),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.C);
		} else {
			var treeLen = builder.x * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.H) : builder.H;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.x);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.C) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.C);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{H: nodeList, x: (len / $elm$core$Array$branchFactor) | 0, C: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {gI: fragment, gS: host, hA: path, hD: port_, hG: protocol, hH: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$document = _Browser_document;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$Main$Closed = 1;
var $author$project$Main$High = 0;
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $mdgriffith$elm_animator$Internal$Timeline$Timeline = $elm$core$Basics$identity;
var $mdgriffith$elm_animator$Internal$Timeline$Timetable = $elm$core$Basics$identity;
var $ianmackenzie$elm_units$Quantity$Quantity = $elm$core$Basics$identity;
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0;
	return millis;
};
var $mdgriffith$elm_animator$Internal$Time$absolute = function (posix) {
	return $elm$time$Time$posixToMillis(posix);
};
var $elm$time$Time$Posix = $elm$core$Basics$identity;
var $elm$time$Time$millisToPosix = $elm$core$Basics$identity;
var $mdgriffith$elm_animator$Animator$init = function (first) {
	return {
		jp: _List_Nil,
		gX: first,
		cN: _List_Nil,
		fk: $mdgriffith$elm_animator$Internal$Time$absolute(
			$elm$time$Time$millisToPosix(0)),
		c1: $elm$core$Maybe$Nothing,
		ea: true
	};
};
var $orus_io$elm_nats$Nats$State = $elm$core$Basics$identity;
var $orus_io$elm_nats$Nats$Internal$SocketStateCollection$SocketStateCollection = $elm$core$Basics$identity;
var $orus_io$elm_nats$Nats$Internal$SocketStateCollection$empty = _List_Nil;
var $orus_io$elm_nats$Nats$Nuid$Nuid = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $elm$random$Random$Generator = $elm$core$Basics$identity;
var $elm$random$Random$andThen = F2(
	function (callback, _v0) {
		var genA = _v0;
		return function (seed) {
			var _v1 = genA(seed);
			var result = _v1.a;
			var newSeed = _v1.b;
			var _v2 = callback(result);
			var genB = _v2;
			return genB(newSeed);
		};
	});
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$random$Random$next = function (_v0) {
	var state0 = _v0.a;
	var incr = _v0.b;
	return A2($elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm$random$Random$peel = function (_v0) {
	var state = _v0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var $elm$random$Random$float = F2(
	function (a, b) {
		return function (seed0) {
			var seed1 = $elm$random$Random$next(seed0);
			var range = $elm$core$Basics$abs(b - a);
			var n1 = $elm$random$Random$peel(seed1);
			var n0 = $elm$random$Random$peel(seed0);
			var lo = (134217727 & n1) * 1.0;
			var hi = (67108863 & n0) * 1.0;
			var val = ((hi * 134217728.0) + lo) / 9007199254740992.0;
			var scaled = (val * range) + a;
			return _Utils_Tuple2(
				scaled,
				$elm$random$Random$next(seed1));
		};
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $elm_community$random_extra$Random$Extra$frequency = F2(
	function (head, pairs) {
		var total = $elm$core$List$sum(
			A2(
				$elm$core$List$map,
				A2($elm$core$Basics$composeL, $elm$core$Basics$abs, $elm$core$Tuple$first),
				A2($elm$core$List$cons, head, pairs)));
		var pick = F2(
			function (someChoices, n) {
				pick:
				while (true) {
					if (someChoices.b) {
						var _v1 = someChoices.a;
						var k = _v1.a;
						var g = _v1.b;
						var rest = someChoices.b;
						if (_Utils_cmp(n, k) < 1) {
							return g;
						} else {
							var $temp$someChoices = rest,
								$temp$n = n - k;
							someChoices = $temp$someChoices;
							n = $temp$n;
							continue pick;
						}
					} else {
						return head.b;
					}
				}
			});
		return A2(
			$elm$random$Random$andThen,
			pick(
				A2($elm$core$List$cons, head, pairs)),
			A2($elm$random$Random$float, 0, total));
	});
var $elm_community$random_extra$Random$Extra$choices = F2(
	function (hd, gens) {
		return A2(
			$elm_community$random_extra$Random$Extra$frequency,
			_Utils_Tuple2(1, hd),
			A2(
				$elm$core$List$map,
				function (g) {
					return _Utils_Tuple2(1, g);
				},
				gens));
	});
var $elm$core$Char$fromCode = _Char_fromCode;
var $elm$random$Random$int = F2(
	function (a, b) {
		return function (seed0) {
			var _v0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
			var lo = _v0.a;
			var hi = _v0.b;
			var range = (hi - lo) + 1;
			if (!((range - 1) & range)) {
				return _Utils_Tuple2(
					(((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo,
					$elm$random$Random$next(seed0));
			} else {
				var threshhold = (((-range) >>> 0) % range) >>> 0;
				var accountForBias = function (seed) {
					accountForBias:
					while (true) {
						var x = $elm$random$Random$peel(seed);
						var seedN = $elm$random$Random$next(seed);
						if (_Utils_cmp(x, threshhold) < 0) {
							var $temp$seed = seedN;
							seed = $temp$seed;
							continue accountForBias;
						} else {
							return _Utils_Tuple2((x % range) + lo, seedN);
						}
					}
				};
				return accountForBias(seed0);
			}
		};
	});
var $elm$random$Random$map = F2(
	function (func, _v0) {
		var genA = _v0;
		return function (seed0) {
			var _v1 = genA(seed0);
			var a = _v1.a;
			var seed1 = _v1.b;
			return _Utils_Tuple2(
				func(a),
				seed1);
		};
	});
var $elm_community$random_extra$Random$Char$char = F2(
	function (start, end) {
		return A2(
			$elm$random$Random$map,
			$elm$core$Char$fromCode,
			A2($elm$random$Random$int, start, end));
	});
var $elm_community$random_extra$Random$Char$lowerCaseLatin = A2($elm_community$random_extra$Random$Char$char, 97, 122);
var $orus_io$elm_nats$Nats$Nuid$num = A2($elm_community$random_extra$Random$Char$char, 48, 57);
var $elm_community$random_extra$Random$Char$upperCaseLatin = A2($elm_community$random_extra$Random$Char$char, 65, 90);
var $orus_io$elm_nats$Nats$Nuid$alphaNum = A2(
	$elm_community$random_extra$Random$Extra$choices,
	$elm_community$random_extra$Random$Char$lowerCaseLatin,
	_List_fromArray(
		[$elm_community$random_extra$Random$Char$upperCaseLatin, $orus_io$elm_nats$Nats$Nuid$num]));
var $orus_io$elm_nats$Nats$Nuid$defaultLen = 22;
var $orus_io$elm_nats$Nats$Nuid$new = A2($orus_io$elm_nats$Nats$Nuid$Nuid, $orus_io$elm_nats$Nats$Nuid$defaultLen, $orus_io$elm_nats$Nats$Nuid$alphaNum);
var $elm$random$Random$step = F2(
	function (_v0, seed) {
		var generator = _v0;
		return generator(seed);
	});
var $elm$core$String$fromList = _String_fromList;
var $elm$random$Random$listHelp = F4(
	function (revList, n, gen, seed) {
		listHelp:
		while (true) {
			if (n < 1) {
				return _Utils_Tuple2(revList, seed);
			} else {
				var _v0 = gen(seed);
				var value = _v0.a;
				var newSeed = _v0.b;
				var $temp$revList = A2($elm$core$List$cons, value, revList),
					$temp$n = n - 1,
					$temp$gen = gen,
					$temp$seed = newSeed;
				revList = $temp$revList;
				n = $temp$n;
				gen = $temp$gen;
				seed = $temp$seed;
				continue listHelp;
			}
		}
	});
var $elm$random$Random$list = F2(
	function (n, _v0) {
		var gen = _v0;
		return function (seed) {
			return A4($elm$random$Random$listHelp, _List_Nil, n, gen, seed);
		};
	});
var $elm_community$random_extra$Random$String$string = F2(
	function (stringLength, charGenerator) {
		return A2(
			$elm$random$Random$map,
			$elm$core$String$fromList,
			A2($elm$random$Random$list, stringLength, charGenerator));
	});
var $orus_io$elm_nats$Nats$Nuid$next = function (_v0) {
	var len = _v0.a;
	var charGen = _v0.b;
	var seed = _v0.c;
	var _v1 = A2(
		$elm$random$Random$step,
		A2($elm_community$random_extra$Random$String$string, len, charGen),
		seed);
	var value = _v1.a;
	var nextSeed = _v1.b;
	return _Utils_Tuple2(
		value,
		A3($orus_io$elm_nats$Nats$Nuid$Nuid, len, charGen, nextSeed));
};
var $orus_io$elm_nats$Nats$init = F2(
	function (seed, now) {
		var _v0 = $orus_io$elm_nats$Nats$Nuid$next(
			$orus_io$elm_nats$Nats$Nuid$new(seed));
		var inboxPrefix = _v0.a;
		var nuid = _v0.b;
		return {
			a1: $elm$core$Maybe$Nothing,
			e0: inboxPrefix + '.',
			fl: nuid,
			R: $orus_io$elm_nats$Nats$Internal$SocketStateCollection$empty,
			h6: $elm$time$Time$posixToMillis(now)
		};
	});
var $elm$random$Random$initialSeed = function (x) {
	var _v0 = $elm$random$Random$next(
		A2($elm$random$Random$Seed, 0, 1013904223));
	var state1 = _v0.a;
	var incr = _v0.b;
	var state2 = (state1 + x) >>> 0;
	return $elm$random$Random$next(
		A2($elm$random$Random$Seed, state2, incr));
};
var $orus_io$elm_nats$Nats$Internal$Types$Socket = $elm$core$Basics$identity;
var $orus_io$elm_nats$Nats$Socket$new = F2(
	function (sid, url) {
		return {jc: false, je: false, ad: sid, lx: url};
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Main$init = function (flags) {
	var nats = A2(
		$orus_io$elm_nats$Nats$init,
		$elm$random$Random$initialSeed(flags.fk),
		$elm$time$Time$millisToPosix(flags.fk));
	return _Utils_Tuple2(
		{
			L: _List_Nil,
			aL: $mdgriffith$elm_animator$Animator$init(
				$elm$core$Dict$fromList(
					_List_fromArray(
						[
							_Utils_Tuple2('Valve-M03', 1),
							_Utils_Tuple2('Valve-M04', 1),
							_Utils_Tuple2('Valve-M05', 1),
							_Utils_Tuple2('Gate-M03', 1),
							_Utils_Tuple2('Gate-M04', 1),
							_Utils_Tuple2('Gate-M05', 1)
						]))),
			a_: $mdgriffith$elm_animator$Animator$init(
				$elm$core$Dict$fromList(
					_List_fromArray(
						[
							_Utils_Tuple2('AChamber', 0),
							_Utils_Tuple2('BChamber', 0)
						]))),
			G: '',
			bk: nats,
			ef: $elm$core$Maybe$Nothing,
			fN: A2($orus_io$elm_nats$Nats$Socket$new, '0', 'ws://localhost:8087'),
			dp: 0,
			_: $mdgriffith$elm_animator$Animator$init($elm$core$Dict$empty)
		},
		$elm$core$Platform$Cmd$none);
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$Main$AnimationRuntimeStep = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_animator$Internal$Timeline$Animator = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $mdgriffith$elm_animator$Animator$animator = A2(
	$mdgriffith$elm_animator$Internal$Timeline$Animator,
	$elm$core$Basics$always(false),
	F2(
		function (now, model) {
			return model;
		}));
var $mdgriffith$elm_animator$Internal$Timeline$Line = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $mdgriffith$elm_animator$Internal$Timeline$Occurring = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $ianmackenzie$elm_units$Duration$inSeconds = function (_v0) {
	var numSeconds = _v0;
	return numSeconds;
};
var $ianmackenzie$elm_units$Duration$inMilliseconds = function (duration) {
	return $ianmackenzie$elm_units$Duration$inSeconds(duration) * 1000;
};
var $ianmackenzie$elm_units$Quantity$plus = F2(
	function (_v0, _v1) {
		var y = _v0;
		var x = _v1;
		return x + y;
	});
var $mdgriffith$elm_animator$Internal$Time$advanceBy = F2(
	function (dur, time) {
		return A2(
			$ianmackenzie$elm_units$Quantity$plus,
			time,
			$ianmackenzie$elm_units$Duration$inMilliseconds(dur));
	});
var $mdgriffith$elm_animator$Internal$Timeline$toOccurring = F2(
	function (_v0, _v1) {
		var duration = _v0.a;
		var event = _v0.b;
		var maybeDwell = _v0.c;
		var now = _v1.a;
		var events = _v1.b;
		var occursAt = A2($mdgriffith$elm_animator$Internal$Time$advanceBy, duration, now);
		var endsAt = function () {
			if (maybeDwell.$ === 1) {
				return occursAt;
			} else {
				var dwell = maybeDwell.a;
				return A2($mdgriffith$elm_animator$Internal$Time$advanceBy, dwell, occursAt);
			}
		}();
		return _Utils_Tuple2(
			endsAt,
			A2(
				$elm$core$List$cons,
				A3($mdgriffith$elm_animator$Internal$Timeline$Occurring, event, occursAt, endsAt),
				events));
	});
var $mdgriffith$elm_animator$Internal$Timeline$createLine = F2(
	function (now, scheduled) {
		var _v0 = scheduled.b;
		var dur = _v0.a;
		var startEvent = _v0.b;
		var maybeDwell = _v0.c;
		var reverseQueued = scheduled.c;
		var start = A2($mdgriffith$elm_animator$Internal$Time$advanceBy, dur, now);
		var startNextEvent = function () {
			if (maybeDwell.$ === 1) {
				return start;
			} else {
				var dwell = maybeDwell.a;
				return A2($mdgriffith$elm_animator$Internal$Time$advanceBy, dwell, start);
			}
		}();
		var events = $elm$core$List$reverse(
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_animator$Internal$Timeline$toOccurring,
				_Utils_Tuple2(startNextEvent, _List_Nil),
				$elm$core$List$reverse(reverseQueued)).b);
		return A3(
			$mdgriffith$elm_animator$Internal$Timeline$Line,
			now,
			A3($mdgriffith$elm_animator$Internal$Timeline$Occurring, startEvent, start, startNextEvent),
			events);
	});
var $mdgriffith$elm_animator$Internal$Timeline$endTime = function (_v0) {
	var end = _v0.c;
	return end;
};
var $mdgriffith$elm_animator$Internal$Time$latest = F2(
	function (oneQty, twoQty) {
		var one = oneQty;
		var two = twoQty;
		return ((one - two) <= 0) ? twoQty : oneQty;
	});
var $mdgriffith$elm_animator$Internal$Time$thisAfterThat = F2(
	function (_v0, _v1) {
		var _this = _v0;
		var that = _v1;
		return (_this - that) > 0;
	});
var $mdgriffith$elm_animator$Internal$Timeline$addEventsToLine = F4(
	function (now, scheduled, existing, lines) {
		var delay = scheduled.a;
		var scheduledStartingEvent = scheduled.b;
		var reverseQueued = scheduled.c;
		var startLineAt = existing.a;
		var startingEvent = existing.b;
		var events = existing.c;
		var start = A2($mdgriffith$elm_animator$Internal$Time$advanceBy, delay, now);
		var _v0 = $elm$core$List$reverse(events);
		if (!_v0.b) {
			var startingEventWithDwell = function () {
				var ev = startingEvent.a;
				var lastEventTime = startingEvent.b;
				return A2($mdgriffith$elm_animator$Internal$Time$thisAfterThat, start, lastEventTime) ? A3($mdgriffith$elm_animator$Internal$Timeline$Occurring, ev, lastEventTime, start) : A3($mdgriffith$elm_animator$Internal$Timeline$Occurring, ev, lastEventTime, lastEventTime);
			}();
			var startNewEventsAt = A2(
				$mdgriffith$elm_animator$Internal$Time$latest,
				A2(
					$mdgriffith$elm_animator$Internal$Time$advanceBy,
					delay,
					$mdgriffith$elm_animator$Internal$Timeline$endTime(startingEvent)),
				start);
			var newLine = A2($mdgriffith$elm_animator$Internal$Timeline$createLine, startNewEventsAt, scheduled);
			return A2(
				$elm$core$List$cons,
				A3($mdgriffith$elm_animator$Internal$Timeline$Line, startLineAt, startingEventWithDwell, _List_Nil),
				A2($elm$core$List$cons, newLine, lines));
		} else {
			var _v2 = _v0.a;
			var lastEvent = _v2.a;
			var lastEventTime = _v2.b;
			var lastEventFinish = _v2.c;
			var eventTail = _v0.b;
			var startNewEventsAt = A2(
				$mdgriffith$elm_animator$Internal$Time$latest,
				A2($mdgriffith$elm_animator$Internal$Time$advanceBy, delay, lastEventFinish),
				start);
			var newLine = A2($mdgriffith$elm_animator$Internal$Timeline$createLine, startNewEventsAt, scheduled);
			var newLastEvent = A3($mdgriffith$elm_animator$Internal$Timeline$Occurring, lastEvent, lastEventTime, startNewEventsAt);
			return A2(
				$elm$core$List$cons,
				A3(
					$mdgriffith$elm_animator$Internal$Timeline$Line,
					startLineAt,
					startingEvent,
					$elm$core$List$reverse(
						A2($elm$core$List$cons, newLastEvent, eventTail))),
				A2($elm$core$List$cons, newLine, lines));
		}
	});
var $elm$core$Basics$ge = _Utils_ge;
var $mdgriffith$elm_animator$Internal$Time$thisAfterOrEqualThat = F2(
	function (_v0, _v1) {
		var _this = _v0;
		var that = _v1;
		return (_this - that) >= 0;
	});
var $mdgriffith$elm_animator$Internal$Time$thisBeforeOrEqualThat = F2(
	function (_v0, _v1) {
		var _this = _v0;
		var that = _v1;
		return (_this - that) <= 0;
	});
var $mdgriffith$elm_animator$Internal$Timeline$addToCurrentLine = F3(
	function (now, scheduled, lines) {
		if (!lines.b) {
			return _List_fromArray(
				[
					A2($mdgriffith$elm_animator$Internal$Timeline$createLine, now, scheduled)
				]);
		} else {
			if (!lines.b.b) {
				var line = lines.a;
				return A4($mdgriffith$elm_animator$Internal$Timeline$addEventsToLine, now, scheduled, line, _List_Nil);
			} else {
				var _v1 = lines.a;
				var startOne = _v1.a;
				var startEventOne = _v1.b;
				var one = _v1.c;
				var _v2 = lines.b;
				var _v3 = _v2.a;
				var startTwo = _v3.a;
				var startEventTwo = _v3.b;
				var two = _v3.c;
				var remaining = _v2.b;
				return (A2($mdgriffith$elm_animator$Internal$Time$thisAfterOrEqualThat, now, startOne) && A2($mdgriffith$elm_animator$Internal$Time$thisBeforeOrEqualThat, now, startTwo)) ? A4(
					$mdgriffith$elm_animator$Internal$Timeline$addEventsToLine,
					now,
					scheduled,
					A3($mdgriffith$elm_animator$Internal$Timeline$Line, startOne, startEventOne, one),
					A2(
						$elm$core$List$cons,
						A3($mdgriffith$elm_animator$Internal$Timeline$Line, startTwo, startEventTwo, two),
						remaining)) : A2(
					$elm$core$List$cons,
					A3($mdgriffith$elm_animator$Internal$Timeline$Line, startOne, startEventOne, one),
					A3(
						$mdgriffith$elm_animator$Internal$Timeline$addToCurrentLine,
						now,
						scheduled,
						A2(
							$elm$core$List$cons,
							A3($mdgriffith$elm_animator$Internal$Timeline$Line, startTwo, startEventTwo, two),
							remaining)));
			}
		}
	});
var $mdgriffith$elm_animator$Internal$Timeline$enqueue = F3(
	function (timeline, now, scheduled) {
		var _v0 = timeline.jp;
		var lines = _v0;
		return A3($mdgriffith$elm_animator$Internal$Timeline$addToCurrentLine, now, scheduled, lines);
	});
var $mdgriffith$elm_animator$Internal$Timeline$LastTwoEvents = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_animator$Internal$Time$thisBeforeThat = F2(
	function (_v0, _v1) {
		var _this = _v0;
		var that = _v1;
		return (_this - that) < 0;
	});
var $mdgriffith$elm_animator$Internal$Timeline$beforeEventEnd = F2(
	function (time, events) {
		beforeEventEnd:
		while (true) {
			if (!events.b) {
				return false;
			} else {
				var top = events.a;
				var remain = events.b;
				if (A2(
					$mdgriffith$elm_animator$Internal$Time$thisBeforeThat,
					time,
					$mdgriffith$elm_animator$Internal$Timeline$endTime(top))) {
					return true;
				} else {
					var $temp$time = time,
						$temp$events = remain;
					time = $temp$time;
					events = $temp$events;
					continue beforeEventEnd;
				}
			}
		}
	});
var $mdgriffith$elm_animator$Internal$Timeline$beforeLineEnd = F2(
	function (time, _v0) {
		var lineStartAt = _v0.a;
		var startingEvent = _v0.b;
		var trailing = _v0.c;
		if (A2($mdgriffith$elm_animator$Internal$Time$thisBeforeOrEqualThat, time, lineStartAt)) {
			return true;
		} else {
			if (!trailing.b) {
				return A2(
					$mdgriffith$elm_animator$Internal$Time$thisBeforeThat,
					time,
					$mdgriffith$elm_animator$Internal$Timeline$endTime(startingEvent));
			} else {
				return A2($mdgriffith$elm_animator$Internal$Timeline$beforeEventEnd, time, trailing);
			}
		}
	});
var $mdgriffith$elm_animator$Internal$Timeline$getEvent = function (_v0) {
	var ev = _v0.a;
	return ev;
};
var $mdgriffith$elm_animator$Internal$Timeline$startTime = function (_v0) {
	var time = _v0.b;
	return time;
};
var $mdgriffith$elm_animator$Internal$Timeline$getTransitionAt = F3(
	function (interruptionTime, prev, trailing) {
		getTransitionAt:
		while (true) {
			if (!trailing.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var next = trailing.a;
				var remain = trailing.b;
				if (A2(
					$mdgriffith$elm_animator$Internal$Time$thisAfterOrEqualThat,
					interruptionTime,
					$mdgriffith$elm_animator$Internal$Timeline$endTime(prev)) && A2(
					$mdgriffith$elm_animator$Internal$Time$thisBeforeThat,
					interruptionTime,
					$mdgriffith$elm_animator$Internal$Timeline$startTime(next))) {
					return $elm$core$Maybe$Just(
						A4(
							$mdgriffith$elm_animator$Internal$Timeline$LastTwoEvents,
							$mdgriffith$elm_animator$Internal$Timeline$endTime(prev),
							$mdgriffith$elm_animator$Internal$Timeline$getEvent(prev),
							$mdgriffith$elm_animator$Internal$Timeline$startTime(next),
							$mdgriffith$elm_animator$Internal$Timeline$getEvent(next)));
				} else {
					var $temp$interruptionTime = interruptionTime,
						$temp$prev = next,
						$temp$trailing = remain;
					interruptionTime = $temp$interruptionTime;
					prev = $temp$prev;
					trailing = $temp$trailing;
					continue getTransitionAt;
				}
			}
		}
	});
var $mdgriffith$elm_animator$Internal$Timeline$Schedule = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $mdgriffith$elm_animator$Internal$Timeline$Event = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $mdgriffith$elm_animator$Internal$Timeline$adjustScheduledDuration = F2(
	function (fn, _v0) {
		var dur = _v0.a;
		var ev = _v0.b;
		var maybeDwell = _v0.c;
		return A3(
			$mdgriffith$elm_animator$Internal$Timeline$Event,
			fn(dur),
			ev,
			maybeDwell);
	});
var $mdgriffith$elm_animator$Internal$Timeline$getScheduledEvent = function (_v0) {
	var ev = _v0.b;
	return ev;
};
var $ianmackenzie$elm_units$Quantity$multiplyBy = F2(
	function (scale, _v0) {
		var value = _v0;
		return scale * value;
	});
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $mdgriffith$elm_animator$Internal$Time$progress = F3(
	function (_v0, _v1, _v2) {
		var start = _v0;
		var end = _v1;
		var current = _v2;
		var total = $elm$core$Basics$abs(end - start);
		return (!total) ? 0 : A2(
			$elm$core$Basics$min,
			1,
			A2($elm$core$Basics$max, 0, (current - start) / total));
	});
var $mdgriffith$elm_animator$Internal$Timeline$interruptAtExactly = F3(
	function (startInterruption, scheduled, last) {
		var penultimateTime = last.a;
		var penultimate = last.b;
		var lastEventTime = last.c;
		var lastEvent = last.d;
		var delay_ = scheduled.a;
		var startingEvent = scheduled.b;
		var reverseQueued = scheduled.c;
		var amountProgress = A3($mdgriffith$elm_animator$Internal$Time$progress, penultimateTime, lastEventTime, startInterruption);
		var newStartingEvent = _Utils_eq(
			penultimate,
			$mdgriffith$elm_animator$Internal$Timeline$getScheduledEvent(startingEvent)) ? A2(
			$mdgriffith$elm_animator$Internal$Timeline$adjustScheduledDuration,
			$ianmackenzie$elm_units$Quantity$multiplyBy(amountProgress),
			startingEvent) : startingEvent;
		return A2(
			$mdgriffith$elm_animator$Internal$Timeline$createLine,
			startInterruption,
			A3($mdgriffith$elm_animator$Internal$Timeline$Schedule, delay_, newStartingEvent, reverseQueued));
	});
var $mdgriffith$elm_animator$Internal$Timeline$interruptLine = F4(
	function (startInterruption, scheduled, line, future) {
		var start = line.a;
		var startEvent = line.b;
		var trailing = line.c;
		if (A2($mdgriffith$elm_animator$Internal$Time$thisAfterOrEqualThat, startInterruption, start)) {
			if (!future.b) {
				var _v2 = A3($mdgriffith$elm_animator$Internal$Timeline$getTransitionAt, startInterruption, startEvent, trailing);
				if (_v2.$ === 1) {
					return A2($mdgriffith$elm_animator$Internal$Timeline$beforeLineEnd, startInterruption, line) ? $elm$core$Maybe$Just(
						_List_fromArray(
							[
								A2($mdgriffith$elm_animator$Internal$Timeline$createLine, startInterruption, scheduled)
							])) : $elm$core$Maybe$Nothing;
				} else {
					var last2Events = _v2.a;
					return $elm$core$Maybe$Just(
						_List_fromArray(
							[
								A3($mdgriffith$elm_animator$Internal$Timeline$interruptAtExactly, startInterruption, scheduled, last2Events)
							]));
				}
			} else {
				var _v3 = future.a;
				var nextStart = _v3.a;
				var next = _v3.b;
				var nextEvents = _v3.c;
				var futureRemaining = future.b;
				return (A2($mdgriffith$elm_animator$Internal$Time$thisAfterOrEqualThat, startInterruption, nextStart) && A2(
					$mdgriffith$elm_animator$Internal$Time$thisBeforeOrEqualThat,
					startInterruption,
					$mdgriffith$elm_animator$Internal$Timeline$startTime(next))) ? $elm$core$Maybe$Just(
					A2(
						$elm$core$List$cons,
						A3($mdgriffith$elm_animator$Internal$Timeline$Line, nextStart, next, nextEvents),
						A2(
							$elm$core$List$cons,
							A3(
								$mdgriffith$elm_animator$Internal$Timeline$interruptAtExactly,
								startInterruption,
								scheduled,
								A4(
									$mdgriffith$elm_animator$Internal$Timeline$LastTwoEvents,
									$mdgriffith$elm_animator$Internal$Timeline$endTime(startEvent),
									$mdgriffith$elm_animator$Internal$Timeline$getEvent(startEvent),
									$mdgriffith$elm_animator$Internal$Timeline$startTime(next),
									$mdgriffith$elm_animator$Internal$Timeline$getEvent(next))),
							futureRemaining))) : $elm$core$Maybe$Nothing;
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $mdgriffith$elm_animator$Internal$Timeline$lineStartTime = function (_v0) {
	var start = _v0.a;
	return start;
};
var $mdgriffith$elm_animator$Internal$Timeline$interruptionHappensLater = F2(
	function (startInterruption, remaining) {
		if (!remaining.b) {
			return false;
		} else {
			var top = remaining.a;
			return A2(
				$mdgriffith$elm_animator$Internal$Time$thisAfterOrEqualThat,
				startInterruption,
				$mdgriffith$elm_animator$Internal$Timeline$lineStartTime(top));
		}
	});
var $mdgriffith$elm_animator$Internal$Timeline$interruptLines = F5(
	function (now, startInterruption, scheduled, pastLines, lines) {
		interruptLines:
		while (true) {
			if (!lines.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var startLine = lines.a;
				var remaining = lines.b;
				if (A2($mdgriffith$elm_animator$Internal$Timeline$interruptionHappensLater, startInterruption, remaining)) {
					var $temp$now = now,
						$temp$startInterruption = startInterruption,
						$temp$scheduled = scheduled,
						$temp$pastLines = A2($elm$core$List$cons, startLine, pastLines),
						$temp$lines = remaining;
					now = $temp$now;
					startInterruption = $temp$startInterruption;
					scheduled = $temp$scheduled;
					pastLines = $temp$pastLines;
					lines = $temp$lines;
					continue interruptLines;
				} else {
					var _v1 = A4($mdgriffith$elm_animator$Internal$Timeline$interruptLine, startInterruption, scheduled, startLine, remaining);
					if (_v1.$ === 1) {
						var $temp$now = now,
							$temp$startInterruption = startInterruption,
							$temp$scheduled = scheduled,
							$temp$pastLines = A2($elm$core$List$cons, startLine, pastLines),
							$temp$lines = remaining;
						now = $temp$now;
						startInterruption = $temp$startInterruption;
						scheduled = $temp$scheduled;
						pastLines = $temp$pastLines;
						lines = $temp$lines;
						continue interruptLines;
					} else {
						var interruption = _v1.a;
						return (_Utils_eq(
							startInterruption,
							$mdgriffith$elm_animator$Internal$Timeline$lineStartTime(startLine)) && A2($mdgriffith$elm_animator$Internal$Time$thisAfterThat, startInterruption, now)) ? $elm$core$Maybe$Just(
							_Utils_ap(
								$elm$core$List$reverse(pastLines),
								interruption)) : $elm$core$Maybe$Just(
							_Utils_ap(
								$elm$core$List$reverse(pastLines),
								A2($elm$core$List$cons, startLine, interruption)));
					}
				}
			}
		}
	});
var $mdgriffith$elm_animator$Internal$Timeline$interrupt = F3(
	function (details, startAt, scheduled) {
		var _v0 = details.jp;
		var lines = _v0;
		var _v1 = A5($mdgriffith$elm_animator$Internal$Timeline$interruptLines, details.fk, startAt, scheduled, _List_Nil, lines);
		if (_v1.$ === 1) {
			return A3($mdgriffith$elm_animator$Internal$Timeline$enqueue, details, startAt, scheduled);
		} else {
			var interrupted = _v1.a;
			return interrupted;
		}
	});
var $mdgriffith$elm_animator$Internal$Timeline$applyInterruptionHelper = F2(
	function (interrupts, timeline) {
		applyInterruptionHelper:
		while (true) {
			if (!interrupts.b) {
				return timeline;
			} else {
				var inter = interrupts.a;
				var remaining = interrupts.b;
				var delay = function () {
					var d = inter.a;
					return d;
				}();
				var newEvents = A3(
					$mdgriffith$elm_animator$Internal$Timeline$interrupt,
					timeline,
					A2($mdgriffith$elm_animator$Internal$Time$advanceBy, delay, timeline.fk),
					inter);
				var $temp$interrupts = remaining,
					$temp$timeline = _Utils_update(
					timeline,
					{jp: newEvents});
				interrupts = $temp$interrupts;
				timeline = $temp$timeline;
				continue applyInterruptionHelper;
			}
		}
	});
var $mdgriffith$elm_animator$Internal$Timeline$applyInterruptions = function (timeline) {
	var _v0 = timeline.cN;
	if (!_v0.b) {
		return timeline;
	} else {
		return A2(
			$mdgriffith$elm_animator$Internal$Timeline$applyInterruptionHelper,
			$elm$core$List$reverse(timeline.cN),
			_Utils_update(
				timeline,
				{cN: _List_Nil}));
	}
};
var $mdgriffith$elm_animator$Internal$Timeline$applyQueued = function (timeline) {
	var _v0 = timeline.c1;
	if (_v0.$ === 1) {
		return timeline;
	} else {
		var queued = _v0.a;
		return _Utils_update(
			timeline,
			{
				jp: A3($mdgriffith$elm_animator$Internal$Timeline$enqueue, timeline, timeline.fk, queued),
				c1: $elm$core$Maybe$Nothing
			});
	}
};
var $mdgriffith$elm_animator$Internal$Timeline$dwellingAt = F2(
	function (now, event) {
		var eventStartTime = $mdgriffith$elm_animator$Internal$Timeline$startTime(event);
		var eventEndTime = $mdgriffith$elm_animator$Internal$Timeline$endTime(event);
		return A2($mdgriffith$elm_animator$Internal$Time$thisAfterOrEqualThat, now, eventStartTime) && A2($mdgriffith$elm_animator$Internal$Time$thisBeforeOrEqualThat, now, eventEndTime);
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_animator$Internal$Timeline$Captured = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_animator$Internal$Timeline$NothingCaptured = {$: 1};
var $mdgriffith$elm_animator$Internal$Timeline$hewLine = F2(
	function (now, events) {
		hewLine:
		while (true) {
			if (!events.b) {
				return $mdgriffith$elm_animator$Internal$Timeline$NothingCaptured;
			} else {
				var top = events.a;
				var remaining = events.b;
				if (A2($mdgriffith$elm_animator$Internal$Timeline$dwellingAt, now, top)) {
					return $mdgriffith$elm_animator$Internal$Timeline$Captured(
						A3(
							$mdgriffith$elm_animator$Internal$Timeline$Line,
							$mdgriffith$elm_animator$Internal$Timeline$startTime(top),
							top,
							remaining));
				} else {
					if (A2(
						$mdgriffith$elm_animator$Internal$Time$thisAfterThat,
						now,
						$mdgriffith$elm_animator$Internal$Timeline$endTime(top))) {
						var $temp$now = now,
							$temp$events = remaining;
						now = $temp$now;
						events = $temp$events;
						continue hewLine;
					} else {
						return $mdgriffith$elm_animator$Internal$Timeline$NothingCaptured;
					}
				}
			}
		}
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $mdgriffith$elm_animator$Internal$Timeline$garbageCollectOldEvents = F3(
	function (now, droppable, lines) {
		garbageCollectOldEvents:
		while (true) {
			if (!lines.b) {
				return $elm$core$List$reverse(droppable);
			} else {
				var _v1 = lines.a;
				var startAt = _v1.a;
				var startingEvent = _v1.b;
				var events = _v1.c;
				var remaining = lines.b;
				if (A2($mdgriffith$elm_animator$Internal$Time$thisAfterOrEqualThat, startAt, now)) {
					return _Utils_ap(
						$elm$core$List$reverse(droppable),
						lines);
				} else {
					if (A2($mdgriffith$elm_animator$Internal$Timeline$dwellingAt, now, startingEvent)) {
						return lines;
					} else {
						var maybeInterruptionTime = A2(
							$elm$core$Maybe$map,
							$mdgriffith$elm_animator$Internal$Timeline$lineStartTime,
							$elm$core$List$head(remaining));
						var interrupted = function () {
							if (maybeInterruptionTime.$ === 1) {
								return false;
							} else {
								var interruptionTime = maybeInterruptionTime.a;
								return A2($mdgriffith$elm_animator$Internal$Time$thisAfterOrEqualThat, now, interruptionTime);
							}
						}();
						if (interrupted) {
							var $temp$now = now,
								$temp$droppable = A2(
								$elm$core$List$cons,
								A3($mdgriffith$elm_animator$Internal$Timeline$Line, startAt, startingEvent, events),
								droppable),
								$temp$lines = remaining;
							now = $temp$now;
							droppable = $temp$droppable;
							lines = $temp$lines;
							continue garbageCollectOldEvents;
						} else {
							var _v2 = A2($mdgriffith$elm_animator$Internal$Timeline$hewLine, now, events);
							if (_v2.$ === 1) {
								return _Utils_ap(
									$elm$core$List$reverse(droppable),
									lines);
							} else {
								var capturedLine = _v2.a;
								return A2($elm$core$List$cons, capturedLine, remaining);
							}
						}
					}
				}
			}
		}
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $mdgriffith$elm_animator$Internal$Timeline$linesAreActive = F2(
	function (now, lines) {
		linesAreActive:
		while (true) {
			if (!lines.b) {
				return false;
			} else {
				var _v1 = lines.a;
				var startAt = _v1.a;
				var startingEvent = _v1.b;
				var events = _v1.c;
				var remaining = lines.b;
				if (A2($mdgriffith$elm_animator$Internal$Time$thisAfterOrEqualThat, startAt, now)) {
					return true;
				} else {
					var maybeInterruption = function () {
						var _v5 = $elm$core$List$head(remaining);
						if (_v5.$ === 1) {
							return $elm$core$Maybe$Nothing;
						} else {
							var _v6 = _v5.a;
							var interruptionTime = _v6.a;
							return $elm$core$Maybe$Just(interruptionTime);
						}
					}();
					var last = A2(
						$elm$core$Maybe$withDefault,
						startingEvent,
						$elm$core$List$head(
							$elm$core$List$reverse(events)));
					if (!maybeInterruption.$) {
						var interruptTime = maybeInterruption.a;
						if (A2($mdgriffith$elm_animator$Internal$Time$thisAfterOrEqualThat, interruptTime, now)) {
							return true;
						} else {
							var time = last.b;
							if (A2($mdgriffith$elm_animator$Internal$Time$thisAfterOrEqualThat, time, now)) {
								return true;
							} else {
								var $temp$now = now,
									$temp$lines = remaining;
								now = $temp$now;
								lines = $temp$lines;
								continue linesAreActive;
							}
						}
					} else {
						var time = last.b;
						if (A2($mdgriffith$elm_animator$Internal$Time$thisAfterOrEqualThat, time, now)) {
							return true;
						} else {
							var $temp$now = now,
								$temp$lines = remaining;
							now = $temp$now;
							lines = $temp$lines;
							continue linesAreActive;
						}
					}
				}
			}
		}
	});
var $mdgriffith$elm_animator$Internal$Timeline$clean = F2(
	function (runGC, details) {
		var running = function () {
			var _v1 = details.jp;
			var lines = _v1;
			return A2($mdgriffith$elm_animator$Internal$Timeline$linesAreActive, details.fk, lines);
		}();
		var events = function () {
			var _v0 = details.jp;
			var evs = _v0;
			return evs;
		}();
		return _Utils_update(
			details,
			{
				jp: runGC ? A3($mdgriffith$elm_animator$Internal$Timeline$garbageCollectOldEvents, details.fk, _List_Nil, events) : details.jp,
				ea: running
			});
	});
var $ianmackenzie$elm_units$Quantity$max = F2(
	function (_v0, _v1) {
		var x = _v0;
		var y = _v1;
		return A2($elm$core$Basics$max, x, y);
	});
var $mdgriffith$elm_animator$Internal$Timeline$updateWith = F3(
	function (withGC, possiblyNow, _v0) {
		var timeline = _v0;
		var now = A2(
			$ianmackenzie$elm_units$Quantity$max,
			$mdgriffith$elm_animator$Internal$Time$absolute(possiblyNow),
			timeline.fk);
		return _Utils_eq(timeline.jp, _List_Nil) ? A2(
			$mdgriffith$elm_animator$Internal$Timeline$clean,
			withGC,
			$mdgriffith$elm_animator$Internal$Timeline$applyInterruptions(
				$mdgriffith$elm_animator$Internal$Timeline$applyQueued(
					_Utils_update(
						timeline,
						{
							jp: function () {
								var firstOccurring = A3($mdgriffith$elm_animator$Internal$Timeline$Occurring, timeline.gX, now, now);
								return _List_fromArray(
									[
										A3($mdgriffith$elm_animator$Internal$Timeline$Line, now, firstOccurring, _List_Nil)
									]);
							}(),
							fk: now
						})))) : A2(
			$mdgriffith$elm_animator$Internal$Timeline$clean,
			withGC,
			$mdgriffith$elm_animator$Internal$Timeline$applyInterruptions(
				$mdgriffith$elm_animator$Internal$Timeline$applyQueued(
					_Utils_update(
						timeline,
						{fk: now}))));
	});
var $mdgriffith$elm_animator$Internal$Timeline$update = $mdgriffith$elm_animator$Internal$Timeline$updateWith(true);
var $mdgriffith$elm_animator$Animator$watching = F3(
	function (get, set, _v0) {
		var isRunning = _v0.a;
		var updateModel = _v0.b;
		return A2(
			$mdgriffith$elm_animator$Internal$Timeline$Animator,
			$elm$core$Basics$always(true),
			F2(
				function (now, model) {
					var newModel = A2(updateModel, now, model);
					return A2(
						set,
						A2(
							$mdgriffith$elm_animator$Internal$Timeline$update,
							now,
							get(newModel)),
						newModel);
				}));
	});
var $author$project$Main$animator = A3(
	$mdgriffith$elm_animator$Animator$watching,
	function ($) {
		return $._;
	},
	F2(
		function (newVesselStates, model) {
			return _Utils_update(
				model,
				{_: newVesselStates});
		}),
	A3(
		$mdgriffith$elm_animator$Animator$watching,
		function ($) {
			return $.a_;
		},
		F2(
			function (newChamberStates, model) {
				return _Utils_update(
					model,
					{a_: newChamberStates});
			}),
		A3(
			$mdgriffith$elm_animator$Animator$watching,
			function ($) {
				return $.aL;
			},
			F2(
				function (newActuatorStates, model) {
					return _Utils_update(
						model,
						{aL: newActuatorStates});
				}),
			$mdgriffith$elm_animator$Animator$animator)));
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $author$project$Main$NatsMsg = function (a) {
	return {$: 8, a: a};
};
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Main$natsReceive = _Platform_incomingPort(
	'natsReceive',
	A2(
		$elm$json$Json$Decode$andThen,
		function (open) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (message) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (error) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (close) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (ack) {
											return $elm$json$Json$Decode$succeed(
												{dq: ack, gt: close, jn: error, G: message, hs: open});
										},
										A2(
											$elm$json$Json$Decode$field,
											'ack',
											$elm$json$Json$Decode$oneOf(
												_List_fromArray(
													[
														$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
														A2(
														$elm$json$Json$Decode$map,
														$elm$core$Maybe$Just,
														A2(
															$elm$json$Json$Decode$andThen,
															function (sid) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (ack) {
																		return $elm$json$Json$Decode$succeed(
																			{dq: ack, c8: sid});
																	},
																	A2($elm$json$Json$Decode$field, 'ack', $elm$json$Json$Decode$string));
															},
															A2($elm$json$Json$Decode$field, 'sid', $elm$json$Json$Decode$string)))
													]))));
								},
								A2(
									$elm$json$Json$Decode$field,
									'close',
									$elm$json$Json$Decode$oneOf(
										_List_fromArray(
											[
												$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
												A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$string)
											]))));
						},
						A2(
							$elm$json$Json$Decode$field,
							'error',
							$elm$json$Json$Decode$oneOf(
								_List_fromArray(
									[
										$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
										A2(
										$elm$json$Json$Decode$map,
										$elm$core$Maybe$Just,
										A2(
											$elm$json$Json$Decode$andThen,
											function (sid) {
												return A2(
													$elm$json$Json$Decode$andThen,
													function (message) {
														return $elm$json$Json$Decode$succeed(
															{G: message, c8: sid});
													},
													A2($elm$json$Json$Decode$field, 'message', $elm$json$Json$Decode$string));
											},
											A2($elm$json$Json$Decode$field, 'sid', $elm$json$Json$Decode$string)))
									]))));
				},
				A2(
					$elm$json$Json$Decode$field,
					'message',
					$elm$json$Json$Decode$oneOf(
						_List_fromArray(
							[
								$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
								A2(
								$elm$json$Json$Decode$map,
								$elm$core$Maybe$Just,
								A2(
									$elm$json$Json$Decode$andThen,
									function (sid) {
										return A2(
											$elm$json$Json$Decode$andThen,
											function (message) {
												return A2(
													$elm$json$Json$Decode$andThen,
													function (ack) {
														return $elm$json$Json$Decode$succeed(
															{dq: ack, G: message, c8: sid});
													},
													A2(
														$elm$json$Json$Decode$field,
														'ack',
														$elm$json$Json$Decode$oneOf(
															_List_fromArray(
																[
																	$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
																	A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$string)
																]))));
											},
											A2($elm$json$Json$Decode$field, 'message', $elm$json$Json$Decode$string));
									},
									A2($elm$json$Json$Decode$field, 'sid', $elm$json$Json$Decode$string)))
							]))));
		},
		A2(
			$elm$json$Json$Decode$field,
			'open',
			$elm$json$Json$Decode$oneOf(
				_List_fromArray(
					[
						$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
						A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$string)
					])))));
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$core$Maybe$destruct = F3(
	function (_default, func, maybe) {
		if (!maybe.$) {
			var a = maybe.a;
			return func(a);
		} else {
			return _default;
		}
	});
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Main$natsSend = _Platform_outgoingPort(
	'natsSend',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'close',
					function ($) {
						return A3($elm$core$Maybe$destruct, $elm$json$Json$Encode$null, $elm$json$Json$Encode$string, $);
					}($.gt)),
					_Utils_Tuple2(
					'open',
					function ($) {
						return A3(
							$elm$core$Maybe$destruct,
							$elm$json$Json$Encode$null,
							function ($) {
								return $elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'debug',
											$elm$json$Json$Encode$bool($.jc)),
											_Utils_Tuple2(
											'mode',
											$elm$json$Json$Encode$string($.j6)),
											_Utils_Tuple2(
											'sid',
											$elm$json$Json$Encode$string($.c8)),
											_Utils_Tuple2(
											'url',
											$elm$json$Json$Encode$string($.lx))
										]));
							},
							$);
					}($.hs)),
					_Utils_Tuple2(
					'send',
					function ($) {
						return A3(
							$elm$core$Maybe$destruct,
							$elm$json$Json$Encode$null,
							function ($) {
								return $elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'ack',
											function ($) {
												return A3($elm$core$Maybe$destruct, $elm$json$Json$Encode$null, $elm$json$Json$Encode$string, $);
											}($.dq)),
											_Utils_Tuple2(
											'message',
											$elm$json$Json$Encode$string($.G)),
											_Utils_Tuple2(
											'sid',
											$elm$json$Json$Encode$string($.c8))
										]));
							},
							$);
					}($.hT))
				]));
	});
var $orus_io$elm_nats$Nats$Internal$Types$Config = $elm$core$Basics$identity;
var $orus_io$elm_nats$Nats$Protocol$MSG = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $orus_io$elm_nats$Nats$Protocol$PartialCommand = function (a) {
	return {$: 1, a: a};
};
var $orus_io$elm_nats$Nats$Protocol$PartialMessage = function (a) {
	return {$: 0, a: a};
};
var $elm$core$String$append = _String_append;
var $orus_io$elm_nats$Nats$Protocol$cr = '\u000D\n';
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$String$endsWith = _String_endsWith;
var $orus_io$elm_nats$Nats$Protocol$initialParseState = $orus_io$elm_nats$Nats$Protocol$PartialCommand('');
var $orus_io$elm_nats$Nats$Protocol$ERR = function (a) {
	return {$: 9, a: a};
};
var $orus_io$elm_nats$Nats$Protocol$INFO = function (a) {
	return {$: 0, a: a};
};
var $orus_io$elm_nats$Nats$Protocol$OK = {$: 8};
var $orus_io$elm_nats$Nats$Protocol$PING = {$: 6};
var $orus_io$elm_nats$Nats$Protocol$PONG = {$: 7};
var $orus_io$elm_nats$Nats$Protocol$ServerInfo = F7(
	function (server_id, version, go, host, port_, auth_required, max_payload) {
		return {iJ: auth_required, jA: go, gS: host, j3: max_payload, hD: port_, kS: server_id, f9: version};
	});
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = $elm$json$Json$Decode$map2($elm$core$Basics$apR);
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder = F3(
	function (path, valDecoder, fallback) {
		var nullOr = function (decoder) {
			return $elm$json$Json$Decode$oneOf(
				_List_fromArray(
					[
						decoder,
						$elm$json$Json$Decode$null(fallback)
					]));
		};
		var handleResult = function (input) {
			var _v0 = A2(
				$elm$json$Json$Decode$decodeValue,
				A2($elm$json$Json$Decode$at, path, $elm$json$Json$Decode$value),
				input);
			if (!_v0.$) {
				var rawValue = _v0.a;
				var _v1 = A2(
					$elm$json$Json$Decode$decodeValue,
					nullOr(valDecoder),
					rawValue);
				if (!_v1.$) {
					var finalResult = _v1.a;
					return $elm$json$Json$Decode$succeed(finalResult);
				} else {
					return A2(
						$elm$json$Json$Decode$at,
						path,
						nullOr(valDecoder));
				}
			} else {
				return $elm$json$Json$Decode$succeed(fallback);
			}
		};
		return A2($elm$json$Json$Decode$andThen, handleResult, $elm$json$Json$Decode$value);
	});
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional = F4(
	function (key, valDecoder, fallback, decoder) {
		return A2(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A3(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder,
				_List_fromArray(
					[key]),
				valDecoder,
				fallback),
			decoder);
	});
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A2($elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var $orus_io$elm_nats$Nats$Protocol$decodeServerInfo = A3(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'max_payload',
	$elm$json$Json$Decode$int,
	A4(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
		'auth_required',
		$elm$json$Json$Decode$bool,
		true,
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'port',
			$elm$json$Json$Decode$int,
			A3(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'host',
				$elm$json$Json$Decode$string,
				A3(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'go',
					$elm$json$Json$Decode$string,
					A3(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'version',
						$elm$json$Json$Decode$string,
						A3(
							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'server_id',
							$elm$json$Json$Decode$string,
							$elm$json$Json$Decode$succeed($orus_io$elm_nats$Nats$Protocol$ServerInfo))))))));
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {d: index, cU: match, kj: number, fS: submatches};
	});
var $elm$regex$Regex$findAtMost = _Regex_findAtMost;
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{i1: false, j7: false},
		string);
};
var $orus_io$elm_nats$Nats$Protocol$messageRe = $elm$regex$Regex$fromString('^MSG ([a-zA-Z0-9._-]+) ([a-zA-Z0-9]+)( [a-zA-Z0-9._]+)? ([0-9]+)$');
var $orus_io$elm_nats$Nats$Protocol$parseCommandMessage = function (str) {
	var matches = function () {
		var _v3 = $orus_io$elm_nats$Nats$Protocol$messageRe;
		if (_v3.$ === 1) {
			return _List_Nil;
		} else {
			var re = _v3.a;
			return A3($elm$regex$Regex$findAtMost, 1, re, str);
		}
	}();
	var _v0 = $elm$core$List$head(matches);
	if (!_v0.$) {
		var match = _v0.a;
		var args = A2(
			$elm$core$List$map,
			$elm$core$Maybe$withDefault(''),
			match.fS);
		var size = A2(
			$elm$core$Maybe$withDefault,
			'',
			$elm$core$List$head(
				A2($elm$core$List$drop, 3, args)));
		var _v1 = $elm$core$String$toInt(size);
		if (_v1.$ === 1) {
			return $elm$core$Result$Err('Invalid size: ' + size);
		} else {
			var value = _v1.a;
			var subject = A2(
				$elm$core$Maybe$withDefault,
				'',
				$elm$core$List$head(args));
			var sid = A2(
				$elm$core$Maybe$withDefault,
				'',
				$elm$core$List$head(
					A2($elm$core$List$drop, 1, args)));
			var replyTo = function () {
				var _v2 = A2(
					$elm$core$Maybe$withDefault,
					'',
					$elm$core$List$head(
						A2($elm$core$List$drop, 2, args)));
				if (_v2 === ' ') {
					return '';
				} else {
					var v = _v2;
					return v;
				}
			}();
			return $elm$core$Result$Ok(
				{aW: replyTo, c8: sid, bp: value, W: subject});
		}
	} else {
		return $elm$core$Result$Err('Invalid MSG syntax: ' + str);
	}
};
var $orus_io$elm_nats$Nats$Protocol$parseCommand = F2(
	function (empty, c) {
		switch (c) {
			case 'PING':
				return $elm$core$Result$Ok($orus_io$elm_nats$Nats$Protocol$PING);
			case 'PONG':
				return $elm$core$Result$Ok($orus_io$elm_nats$Nats$Protocol$PONG);
			case '+OK':
				return $elm$core$Result$Ok($orus_io$elm_nats$Nats$Protocol$OK);
			default:
				if (A2($elm$core$String$startsWith, 'INFO ', c)) {
					var _v1 = A2(
						$elm$json$Json$Decode$decodeString,
						$orus_io$elm_nats$Nats$Protocol$decodeServerInfo,
						A2($elm$core$String$dropLeft, 5, c));
					if (!_v1.$) {
						var info = _v1.a;
						return $elm$core$Result$Ok(
							$orus_io$elm_nats$Nats$Protocol$INFO(info));
					} else {
						var err = _v1.a;
						return $elm$core$Result$Err(
							$elm$json$Json$Decode$errorToString(err));
					}
				} else {
					if (A2($elm$core$String$startsWith, '-ERR ', c)) {
						return $elm$core$Result$Ok(
							$orus_io$elm_nats$Nats$Protocol$ERR(
								A2(
									$elm$core$String$dropRight,
									1,
									A2($elm$core$String$dropLeft, 5, c))));
					} else {
						if (A2($elm$core$String$startsWith, 'MSG', c)) {
							var _v2 = $orus_io$elm_nats$Nats$Protocol$parseCommandMessage(c);
							if (!_v2.$) {
								var msg = _v2.a;
								return $elm$core$Result$Ok(
									A2(
										$orus_io$elm_nats$Nats$Protocol$MSG,
										msg.c8,
										{jb: empty, aW: msg.aW, bp: msg.bp, W: msg.W}));
							} else {
								var err = _v2.a;
								return $elm$core$Result$Err(err);
							}
						} else {
							return $elm$core$Result$Err('Invalid command \'' + (c + '\''));
						}
					}
				}
		}
	});
var $orus_io$elm_nats$Nats$Protocol$splitFirstLine = function (s) {
	var _v0 = A2($elm$core$String$indexes, $orus_io$elm_nats$Nats$Protocol$cr, s);
	if (!_v0.b) {
		return _Utils_Tuple2(s, $elm$core$Maybe$Nothing);
	} else {
		var i = _v0.a;
		return _Utils_Tuple2(
			A2($elm$core$String$left, i, s),
			$elm$core$Maybe$Just(
				A2($elm$core$String$dropLeft, i + 2, s)));
	}
};
var $orus_io$elm_nats$Nats$Protocol$parseString = F2(
	function (partialOp, str) {
		if (!partialOp.$) {
			var partial = partialOp.a;
			var data = A2($elm$core$String$append, partial.jb, str);
			var newDataSize = $elm$core$String$length(data);
			if (_Utils_eq(newDataSize, partial.bp + 2) && A2($elm$core$String$endsWith, $orus_io$elm_nats$Nats$Protocol$cr, data)) {
				return $elm$core$Result$Ok(
					_Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								$orus_io$elm_nats$Nats$Protocol$MSG,
								partial.c8,
								{
									jb: A2($elm$core$String$dropRight, 2, data),
									aW: partial.aW,
									bp: partial.bp,
									W: partial.W
								})
							]),
						$orus_io$elm_nats$Nats$Protocol$initialParseState));
			} else {
				if (_Utils_cmp(newDataSize, partial.bp + 2) > 0) {
					var _v1 = A2(
						$orus_io$elm_nats$Nats$Protocol$parseString,
						$orus_io$elm_nats$Nats$Protocol$initialParseState,
						A2($elm$core$String$dropLeft, partial.bp + 2, data));
					if (_v1.$ === 1) {
						var err = _v1.a;
						return $elm$core$Result$Err(err);
					} else {
						var _v2 = _v1.a;
						var ops = _v2.a;
						var nextPartial = _v2.b;
						return $elm$core$Result$Ok(
							_Utils_Tuple2(
								A2(
									$elm$core$List$cons,
									A2(
										$orus_io$elm_nats$Nats$Protocol$MSG,
										partial.c8,
										{
											jb: A2($elm$core$String$left, partial.bp, data),
											aW: partial.aW,
											bp: partial.bp,
											W: partial.W
										}),
									ops),
								nextPartial));
					}
				} else {
					return $elm$core$Result$Ok(
						_Utils_Tuple2(
							_List_Nil,
							$orus_io$elm_nats$Nats$Protocol$PartialMessage(
								_Utils_update(
									partial,
									{jb: data}))));
				}
			}
		} else {
			var partial = partialOp.a;
			var _v3 = $orus_io$elm_nats$Nats$Protocol$splitFirstLine(str);
			if (_v3.b.$ === 1) {
				var firstLine = _v3.a;
				var _v4 = _v3.b;
				return $elm$core$Result$Ok(
					_Utils_Tuple2(
						_List_Nil,
						$orus_io$elm_nats$Nats$Protocol$PartialCommand(
							_Utils_ap(partial, firstLine))));
			} else {
				var firstLine = _v3.a;
				var tail = _v3.b.a;
				var _v5 = A2(
					$orus_io$elm_nats$Nats$Protocol$parseCommand,
					'',
					_Utils_ap(partial, firstLine));
				if (_v5.$ === 1) {
					var err = _v5.a;
					return $elm$core$Result$Err(err);
				} else {
					if (_v5.a.$ === 5) {
						var _v6 = _v5.a;
						var sid = _v6.a;
						var msg = _v6.b;
						if (_Utils_eq(
							$elm$core$String$length(tail),
							msg.bp + 2)) {
							return A2($elm$core$String$endsWith, $orus_io$elm_nats$Nats$Protocol$cr, tail) ? $elm$core$Result$Ok(
								_Utils_Tuple2(
									_List_fromArray(
										[
											A2(
											$orus_io$elm_nats$Nats$Protocol$MSG,
											sid,
											{
												jb: A2($elm$core$String$dropRight, 2, tail),
												aW: msg.aW,
												bp: msg.bp,
												W: msg.W
											})
										]),
									$orus_io$elm_nats$Nats$Protocol$initialParseState)) : $elm$core$Result$Err('message payload size mismatch');
						} else {
							if (_Utils_cmp(
								$elm$core$String$length(tail),
								msg.bp + 2) > 0) {
								if (A2(
									$elm$core$String$startsWith,
									$orus_io$elm_nats$Nats$Protocol$cr,
									A2($elm$core$String$dropLeft, msg.bp, tail))) {
									var _v7 = A2(
										$orus_io$elm_nats$Nats$Protocol$parseString,
										$orus_io$elm_nats$Nats$Protocol$initialParseState,
										A2($elm$core$String$dropLeft, msg.bp + 2, tail));
									if (_v7.$ === 1) {
										var err = _v7.a;
										return $elm$core$Result$Err(err);
									} else {
										var _v8 = _v7.a;
										var ops = _v8.a;
										var nextPartial = _v8.b;
										return $elm$core$Result$Ok(
											_Utils_Tuple2(
												A2(
													$elm$core$List$cons,
													A2(
														$orus_io$elm_nats$Nats$Protocol$MSG,
														sid,
														{
															jb: A2($elm$core$String$left, msg.bp, tail),
															aW: msg.aW,
															bp: msg.bp,
															W: msg.W
														}),
													ops),
												nextPartial));
									}
								} else {
									return $elm$core$Result$Err('message payload size mismatch');
								}
							} else {
								return $elm$core$Result$Ok(
									_Utils_Tuple2(
										_List_Nil,
										$orus_io$elm_nats$Nats$Protocol$PartialMessage(
											{jb: tail, aW: msg.aW, c8: sid, bp: msg.bp, W: msg.W})));
							}
						}
					} else {
						var op = _v5.a;
						var _v9 = A2($orus_io$elm_nats$Nats$Protocol$parseString, $orus_io$elm_nats$Nats$Protocol$initialParseState, tail);
						if (_v9.$ === 1) {
							var err = _v9.a;
							return $elm$core$Result$Err(err);
						} else {
							var _v10 = _v9.a;
							var ops = _v10.a;
							var nextPartial = _v10.b;
							return $elm$core$Result$Ok(
								_Utils_Tuple2(
									A2($elm$core$List$cons, op, ops),
									nextPartial));
						}
					}
				}
			}
		}
	});
var $elm$json$Json$Encode$int = _Json_wrap;
var $orus_io$elm_nats$Nats$Protocol$encodeConnect = function (options) {
	return $elm$json$Json$Encode$object(
		_Utils_ap(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'verbose',
					$elm$json$Json$Encode$bool(options.$8)),
					_Utils_Tuple2(
					'pedantic',
					$elm$json$Json$Encode$bool(options.hB)),
					_Utils_Tuple2(
					'lang',
					$elm$json$Json$Encode$string(options.g7)),
					_Utils_Tuple2(
					'version',
					$elm$json$Json$Encode$string(options.f9)),
					_Utils_Tuple2(
					'protocol',
					$elm$json$Json$Encode$int(options.hG))
				]),
			_Utils_ap(
				function () {
					var _v0 = options.gl;
					if (!_v0.$) {
						var auth_token = _v0.a;
						return _List_fromArray(
							[
								_Utils_Tuple2(
								'auth_token',
								$elm$json$Json$Encode$string(auth_token))
							]);
					} else {
						return _List_Nil;
					}
				}(),
				_Utils_ap(
					function () {
						var _v1 = options.ib;
						if (!_v1.$) {
							var user = _v1.a;
							return _List_fromArray(
								[
									_Utils_Tuple2(
									'user',
									$elm$json$Json$Encode$string(user))
								]);
						} else {
							return _List_Nil;
						}
					}(),
					_Utils_ap(
						function () {
							var _v2 = options.hz;
							if (!_v2.$) {
								var pass = _v2.a;
								return _List_fromArray(
									[
										_Utils_Tuple2(
										'pass',
										$elm$json$Json$Encode$string(pass))
									]);
							} else {
								return _List_Nil;
							}
						}(),
						function () {
							var _v3 = options.av;
							if (!_v3.$) {
								var name = _v3.a;
								return _List_fromArray(
									[
										_Utils_Tuple2(
										'name',
										$elm$json$Json$Encode$string(name))
									]);
							} else {
								return _List_Nil;
							}
						}())))));
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$core$Basics$not = _Basics_not;
var $orus_io$elm_nats$Nats$Protocol$opHeader = function (op) {
	switch (op.$) {
		case 0:
			return '';
		case 1:
			var options = op.a;
			return A2(
				$elm$core$String$append,
				'CONNECT ',
				A2(
					$elm$json$Json$Encode$encode,
					0,
					$orus_io$elm_nats$Nats$Protocol$encodeConnect(options)));
		case 5:
			return '';
		case 6:
			return 'PING';
		case 7:
			return 'PONG';
		case 2:
			var message = op.a;
			return 'PUB ' + (message.W + (((!$elm$core$String$isEmpty(message.aW)) ? (' ' + message.aW) : '') + (' ' + $elm$core$String$fromInt(message.bp))));
		case 3:
			var subject = op.a;
			var queueGroup = op.b;
			var sid = op.c;
			return 'SUB ' + (subject + (' ' + (((!$elm$core$String$isEmpty(queueGroup)) ? (queueGroup + ' ') : '') + sid)));
		case 4:
			var sid = op.a;
			var maxMsgs = op.b;
			return 'UNSUB ' + (sid + ((!(!maxMsgs)) ? (' ' + $elm$core$String$fromInt(maxMsgs)) : ''));
		case 8:
			return 'OK';
		default:
			var err = op.a;
			return 'ERR \'' + (err + '\'');
	}
};
var $orus_io$elm_nats$Nats$Protocol$toString = function (op) {
	return _Utils_ap(
		$orus_io$elm_nats$Nats$Protocol$opHeader(op),
		_Utils_ap(
			$orus_io$elm_nats$Nats$Protocol$cr,
			function () {
				if (op.$ === 2) {
					var message = op.a;
					return _Utils_ap(message.jb, $orus_io$elm_nats$Nats$Protocol$cr);
				} else {
					return '';
				}
			}()));
};
var $orus_io$elm_nats$Nats$Config$string = F2(
	function (parentMsg, ports) {
		return {jc: false, jy: $elm$core$Result$Ok, j6: 'text', kk: $elm$core$Maybe$Nothing, aT: parentMsg, fE: $orus_io$elm_nats$Nats$Protocol$parseString, b$: ports, bp: $elm$core$String$length, lq: $elm$core$Basics$identity, ge: $orus_io$elm_nats$Nats$Protocol$toString};
	});
var $orus_io$elm_nats$Nats$Config$withDebug = F2(
	function (value, _v0) {
		var cfg = _v0;
		return _Utils_update(
			cfg,
			{jc: value});
	});
var $author$project$Main$natsConfig = A2(
	$orus_io$elm_nats$Nats$Config$withDebug,
	false,
	A2(
		$orus_io$elm_nats$Nats$Config$string,
		$author$project$Main$NatsMsg,
		{kB: $author$project$Main$natsReceive, hT: $author$project$Main$natsSend}));
var $orus_io$elm_nats$Nats$Internal$Types$OnTime = function (a) {
	return {$: 5, a: a};
};
var $elm$time$Time$Every = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$time$Time$State = F2(
	function (taggers, processes) {
		return {hF: processes, h2: taggers};
	});
var $elm$time$Time$init = $elm$core$Task$succeed(
	A2($elm$time$Time$State, $elm$core$Dict$empty, $elm$core$Dict$empty));
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$time$Time$addMySub = F2(
	function (_v0, state) {
		var interval = _v0.a;
		var tagger = _v0.b;
		var _v1 = A2($elm$core$Dict$get, interval, state);
		if (_v1.$ === 1) {
			return A3(
				$elm$core$Dict$insert,
				interval,
				_List_fromArray(
					[tagger]),
				state);
		} else {
			var taggers = _v1.a;
			return A3(
				$elm$core$Dict$insert,
				interval,
				A2($elm$core$List$cons, tagger, taggers),
				state);
		}
	});
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$time$Time$Name = function (a) {
	return {$: 0, a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 1, a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$setInterval = _Time_setInterval;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$time$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		if (!intervals.b) {
			return $elm$core$Task$succeed(processes);
		} else {
			var interval = intervals.a;
			var rest = intervals.b;
			var spawnTimer = $elm$core$Process$spawn(
				A2(
					$elm$time$Time$setInterval,
					interval,
					A2($elm$core$Platform$sendToSelf, router, interval)));
			var spawnRest = function (id) {
				return A3(
					$elm$time$Time$spawnHelp,
					router,
					rest,
					A3($elm$core$Dict$insert, interval, id, processes));
			};
			return A2($elm$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var $elm$time$Time$onEffects = F3(
	function (router, subs, _v0) {
		var processes = _v0.hF;
		var rightStep = F3(
			function (_v6, id, _v7) {
				var spawns = _v7.a;
				var existing = _v7.b;
				var kills = _v7.c;
				return _Utils_Tuple3(
					spawns,
					existing,
					A2(
						$elm$core$Task$andThen,
						function (_v5) {
							return kills;
						},
						$elm$core$Process$kill(id)));
			});
		var newTaggers = A3($elm$core$List$foldl, $elm$time$Time$addMySub, $elm$core$Dict$empty, subs);
		var leftStep = F3(
			function (interval, taggers, _v4) {
				var spawns = _v4.a;
				var existing = _v4.b;
				var kills = _v4.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, interval, spawns),
					existing,
					kills);
			});
		var bothStep = F4(
			function (interval, taggers, id, _v3) {
				var spawns = _v3.a;
				var existing = _v3.b;
				var kills = _v3.c;
				return _Utils_Tuple3(
					spawns,
					A3($elm$core$Dict$insert, interval, id, existing),
					kills);
			});
		var _v1 = A6(
			$elm$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			processes,
			_Utils_Tuple3(
				_List_Nil,
				$elm$core$Dict$empty,
				$elm$core$Task$succeed(0)));
		var spawnList = _v1.a;
		var existingDict = _v1.b;
		var killTask = _v1.c;
		return A2(
			$elm$core$Task$andThen,
			function (newProcesses) {
				return $elm$core$Task$succeed(
					A2($elm$time$Time$State, newTaggers, newProcesses));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v2) {
					return A3($elm$time$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $elm$time$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _v0 = A2($elm$core$Dict$get, interval, state.h2);
		if (_v0.$ === 1) {
			return $elm$core$Task$succeed(state);
		} else {
			var taggers = _v0.a;
			var tellTaggers = function (time) {
				return $elm$core$Task$sequence(
					A2(
						$elm$core$List$map,
						function (tagger) {
							return A2(
								$elm$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						taggers));
			};
			return A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$succeed(state);
				},
				A2($elm$core$Task$andThen, tellTaggers, $elm$time$Time$now));
		}
	});
var $elm$time$Time$subMap = F2(
	function (f, _v0) {
		var interval = _v0.a;
		var tagger = _v0.b;
		return A2(
			$elm$time$Time$Every,
			interval,
			A2($elm$core$Basics$composeL, f, tagger));
	});
_Platform_effectManagers['Time'] = _Platform_createManager($elm$time$Time$init, $elm$time$Time$onEffects, $elm$time$Time$onSelfMsg, 0, $elm$time$Time$subMap);
var $elm$time$Time$subscription = _Platform_leaf('Time');
var $elm$time$Time$every = F2(
	function (interval, tagger) {
		return $elm$time$Time$subscription(
			A2($elm$time$Time$Every, interval, tagger));
	});
var $elm$core$Platform$Sub$map = _Platform_map;
var $orus_io$elm_nats$Nats$Internal$Types$OnAck = function (a) {
	return {$: 0, a: a};
};
var $orus_io$elm_nats$Nats$Internal$Types$OnClose = function (a) {
	return {$: 2, a: a};
};
var $orus_io$elm_nats$Nats$Internal$Types$OnError = function (a) {
	return {$: 3, a: a};
};
var $orus_io$elm_nats$Nats$Internal$Types$OnMessage = function (a) {
	return {$: 4, a: a};
};
var $orus_io$elm_nats$Nats$Internal$Types$OnOpen = function (a) {
	return {$: 1, a: a};
};
var $orus_io$elm_nats$Nats$onReceive = F2(
	function (_v0, event) {
		var cfg = _v0;
		var _v1 = _Utils_Tuple3(event.dq, event.hs, event.gt);
		if (!_v1.a.$) {
			var ack = _v1.a.a;
			return $orus_io$elm_nats$Nats$Internal$Types$OnAck(ack);
		} else {
			if (!_v1.b.$) {
				var sid = _v1.b.a;
				return $orus_io$elm_nats$Nats$Internal$Types$OnOpen(sid);
			} else {
				if (!_v1.c.$) {
					var sid = _v1.c.a;
					return $orus_io$elm_nats$Nats$Internal$Types$OnClose(sid);
				} else {
					var _v2 = _Utils_Tuple2(event.jn, event.G);
					if (!_v2.a.$) {
						var err = _v2.a.a;
						return $orus_io$elm_nats$Nats$Internal$Types$OnError(err);
					} else {
						if (!_v2.b.$) {
							var msg = _v2.b.a;
							var _v3 = cfg.jy(msg.G);
							if (!_v3.$) {
								var message = _v3.a;
								return $orus_io$elm_nats$Nats$Internal$Types$OnMessage(
									{dq: msg.dq, G: message, c8: msg.c8});
							} else {
								var err = _v3.a;
								return $orus_io$elm_nats$Nats$Internal$Types$OnError(
									{G: 'could not decode port message: ' + err, c8: msg.c8});
							}
						} else {
							return $orus_io$elm_nats$Nats$Internal$Types$OnError(
								{G: 'invalid event coming from the port', c8: ''});
						}
					}
				}
			}
		}
	});
var $orus_io$elm_nats$Nats$subscriptions = F2(
	function (ocfg, _v0) {
		var cfg = ocfg;
		return A2(
			$elm$core$Platform$Sub$map,
			cfg.aT,
			$elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						cfg.b$.kB(
						$orus_io$elm_nats$Nats$onReceive(ocfg)),
						A2($elm$time$Time$every, 1000, $orus_io$elm_nats$Nats$Internal$Types$OnTime)
					])));
	});
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$browser$Browser$AnimationManager$Time = function (a) {
	return {$: 0, a: a};
};
var $elm$browser$Browser$AnimationManager$State = F3(
	function (subs, request, oldTime) {
		return {fm: oldTime, hL: request, h1: subs};
	});
var $elm$browser$Browser$AnimationManager$init = $elm$core$Task$succeed(
	A3($elm$browser$Browser$AnimationManager$State, _List_Nil, $elm$core$Maybe$Nothing, 0));
var $elm$browser$Browser$AnimationManager$now = _Browser_now(0);
var $elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(0);
var $elm$browser$Browser$AnimationManager$onEffects = F3(
	function (router, subs, _v0) {
		var request = _v0.hL;
		var oldTime = _v0.fm;
		var _v1 = _Utils_Tuple2(request, subs);
		if (_v1.a.$ === 1) {
			if (!_v1.b.b) {
				var _v2 = _v1.a;
				return $elm$browser$Browser$AnimationManager$init;
			} else {
				var _v4 = _v1.a;
				return A2(
					$elm$core$Task$andThen,
					function (pid) {
						return A2(
							$elm$core$Task$andThen,
							function (time) {
								return $elm$core$Task$succeed(
									A3(
										$elm$browser$Browser$AnimationManager$State,
										subs,
										$elm$core$Maybe$Just(pid),
										time));
							},
							$elm$browser$Browser$AnimationManager$now);
					},
					$elm$core$Process$spawn(
						A2(
							$elm$core$Task$andThen,
							$elm$core$Platform$sendToSelf(router),
							$elm$browser$Browser$AnimationManager$rAF)));
			}
		} else {
			if (!_v1.b.b) {
				var pid = _v1.a.a;
				return A2(
					$elm$core$Task$andThen,
					function (_v3) {
						return $elm$browser$Browser$AnimationManager$init;
					},
					$elm$core$Process$kill(pid));
			} else {
				return $elm$core$Task$succeed(
					A3($elm$browser$Browser$AnimationManager$State, subs, request, oldTime));
			}
		}
	});
var $elm$browser$Browser$AnimationManager$onSelfMsg = F3(
	function (router, newTime, _v0) {
		var subs = _v0.h1;
		var oldTime = _v0.fm;
		var send = function (sub) {
			if (!sub.$) {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(
						$elm$time$Time$millisToPosix(newTime)));
			} else {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(newTime - oldTime));
			}
		};
		return A2(
			$elm$core$Task$andThen,
			function (pid) {
				return A2(
					$elm$core$Task$andThen,
					function (_v1) {
						return $elm$core$Task$succeed(
							A3(
								$elm$browser$Browser$AnimationManager$State,
								subs,
								$elm$core$Maybe$Just(pid),
								newTime));
					},
					$elm$core$Task$sequence(
						A2($elm$core$List$map, send, subs)));
			},
			$elm$core$Process$spawn(
				A2(
					$elm$core$Task$andThen,
					$elm$core$Platform$sendToSelf(router),
					$elm$browser$Browser$AnimationManager$rAF)));
	});
var $elm$browser$Browser$AnimationManager$Delta = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$AnimationManager$subMap = F2(
	function (func, sub) {
		if (!sub.$) {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Time(
				A2($elm$core$Basics$composeL, func, tagger));
		} else {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Delta(
				A2($elm$core$Basics$composeL, func, tagger));
		}
	});
_Platform_effectManagers['Browser.AnimationManager'] = _Platform_createManager($elm$browser$Browser$AnimationManager$init, $elm$browser$Browser$AnimationManager$onEffects, $elm$browser$Browser$AnimationManager$onSelfMsg, 0, $elm$browser$Browser$AnimationManager$subMap);
var $elm$browser$Browser$AnimationManager$subscription = _Platform_leaf('Browser.AnimationManager');
var $elm$browser$Browser$AnimationManager$onAnimationFrame = function (tagger) {
	return $elm$browser$Browser$AnimationManager$subscription(
		$elm$browser$Browser$AnimationManager$Time(tagger));
};
var $elm$browser$Browser$Events$onAnimationFrame = $elm$browser$Browser$AnimationManager$onAnimationFrame;
var $mdgriffith$elm_animator$Animator$toSubscription = F3(
	function (toMsg, model, _v0) {
		var isRunning = _v0.a;
		return isRunning(model) ? $elm$browser$Browser$Events$onAnimationFrame(toMsg) : $elm$core$Platform$Sub$none;
	});
var $author$project$Main$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2($orus_io$elm_nats$Nats$subscriptions, $author$project$Main$natsConfig, model.bk),
				A3($mdgriffith$elm_animator$Animator$toSubscription, $author$project$Main$AnimationRuntimeStep, model, $author$project$Main$animator)
			]));
};
var $orus_io$elm_orus_ui$OUI$Text$Body = 4;
var $orus_io$elm_orus_ui$OUI$Text$Medium = 1;
var $orus_io$elm_orus_ui$OUI$Text$NoColor = {$: 0};
var $orus_io$elm_orus_ui$OUI$Text$Text = $elm$core$Basics$identity;
var $orus_io$elm_orus_ui$OUI$Text$text = function (s) {
	return {bC: $orus_io$elm_orus_ui$OUI$Text$NoColor, bp: 1, p: s, v: 4};
};
var $orus_io$elm_orus_ui$OUI$Text$withSize = F2(
	function (value, _v0) {
		var props = _v0;
		return _Utils_update(
			props,
			{bp: value});
	});
var $orus_io$elm_orus_ui$OUI$Text$withType = F2(
	function (value, _v0) {
		var props = _v0;
		return _Utils_update(
			props,
			{v: value});
	});
var $orus_io$elm_orus_ui$OUI$Text$textTypeSize = F3(
	function (type_, size, s) {
		return A2(
			$orus_io$elm_orus_ui$OUI$Text$withSize,
			size,
			A2(
				$orus_io$elm_orus_ui$OUI$Text$withType,
				type_,
				$orus_io$elm_orus_ui$OUI$Text$text(s)));
	});
var $orus_io$elm_orus_ui$OUI$Text$bodyMedium = A2($orus_io$elm_orus_ui$OUI$Text$textTypeSize, 4, 1);
var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AsColumn = 1;
var $mdgriffith$elm_ui$Internal$Model$asColumn = 1;
var $mdgriffith$elm_ui$Internal$Style$classes = {ir: 'a', bv: 'atv', iv: 'ab', iw: 'cx', ix: 'cy', iy: 'acb', iz: 'accx', iA: 'accy', iB: 'acr', gh: 'al', gi: 'ar', iC: 'at', ev: 'ah', ew: 'av', iF: 's', iP: 'bh', iQ: 'b', iT: 'w7', iV: 'bd', iW: 'bdt', du: 'bn', iX: 'bs', dw: 'cpe', i3: 'cp', i4: 'cpx', i5: 'cpy', a$: 'c', dB: 'ctr', dD: 'cb', dE: 'ccx', a0: 'ccy', cx: 'cl', dF: 'cr', i6: 'ct', i8: 'cptr', i9: 'ctxt', jw: 'fcs', gH: 'focus-within', jz: 'fs', jC: 'g', eW: 'hbh', eY: 'hc', gQ: 'he', eZ: 'hf', gR: 'hfp', jG: 'hv', jH: 'ic', jK: 'fr', dM: 'lbl', jM: 'iml', jN: 'imlf', jO: 'imlp', jP: 'implw', jQ: 'it', jU: 'i', fe: 'lnk', bS: 'nb', hj: 'notxt', kl: 'ol', ko: 'or', bm: 'oq', kv: 'oh', hy: 'pg', fD: 'p', kw: 'ppe', kJ: 'ui', kK: 'r', kO: 'sb', kP: 'sbx', kQ: 'sby', kR: 'sbt', kU: 'e', kV: 'cap', kW: 'sev', k0: 'sk', p: 't', la: 'tc', lb: 'w8', lc: 'w2', ld: 'w9', le: 'tj', em: 'tja', lf: 'tl', lg: 'w3', lh: 'w5', li: 'w4', lj: 'tr', lk: 'w6', ll: 'w1', lm: 'tun', lu: 'ts', bs: 'clr', lv: 'u', gb: 'wc', ik: 'we', gc: 'wf', il: 'wfp', gd: 'wrp'};
var $mdgriffith$elm_ui$Internal$Model$Generic = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.iF + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.a$);
var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.iF + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.jC);
var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.iF + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.hy);
var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.iF + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.fD);
var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.iF + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.kK);
var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.iF + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.kU);
var $mdgriffith$elm_ui$Internal$Model$contextClasses = function (context) {
	switch (context) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Model$rowClass;
		case 1:
			return $mdgriffith$elm_ui$Internal$Model$columnClass;
		case 2:
			return $mdgriffith$elm_ui$Internal$Model$singleClass;
		case 3:
			return $mdgriffith$elm_ui$Internal$Model$gridClass;
		case 4:
			return $mdgriffith$elm_ui$Internal$Model$paragraphClass;
		default:
			return $mdgriffith$elm_ui$Internal$Model$pageClass;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Keyed = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$NoStyleSheet = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$Styled = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Unstyled = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addChildren = F2(
	function (existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 0:
				return existing;
			case 1:
				var behind = nearbyChildren.a;
				return _Utils_ap(behind, existing);
			case 2:
				var inFront = nearbyChildren.a;
				return _Utils_ap(existing, inFront);
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					behind,
					_Utils_ap(existing, inFront));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$addKeyedChildren = F3(
	function (key, existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 0:
				return existing;
			case 1:
				var behind = nearbyChildren.a;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					existing);
			case 2:
				var inFront = nearbyChildren.a;
				return _Utils_ap(
					existing,
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						inFront));
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					_Utils_ap(
						existing,
						A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(key, x);
							},
							inFront)));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$AsEl = 2;
var $mdgriffith$elm_ui$Internal$Model$asEl = 2;
var $mdgriffith$elm_ui$Internal$Model$AsParagraph = 4;
var $mdgriffith$elm_ui$Internal$Model$asParagraph = 4;
var $mdgriffith$elm_ui$Internal$Flag$Flag = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Second = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $mdgriffith$elm_ui$Internal$Flag$flag = function (i) {
	return (i > 31) ? $mdgriffith$elm_ui$Internal$Flag$Second(1 << (i - 32)) : $mdgriffith$elm_ui$Internal$Flag$Flag(1 << i);
};
var $mdgriffith$elm_ui$Internal$Flag$alignBottom = $mdgriffith$elm_ui$Internal$Flag$flag(41);
var $mdgriffith$elm_ui$Internal$Flag$alignRight = $mdgriffith$elm_ui$Internal$Flag$flag(40);
var $mdgriffith$elm_ui$Internal$Flag$centerX = $mdgriffith$elm_ui$Internal$Flag$flag(42);
var $mdgriffith$elm_ui$Internal$Flag$centerY = $mdgriffith$elm_ui$Internal$Flag$flag(43);
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $mdgriffith$elm_ui$Internal$Model$lengthClassName = function (x) {
	switch (x.$) {
		case 0:
			var px = x.a;
			return $elm$core$String$fromInt(px) + 'px';
		case 1:
			return 'auto';
		case 2:
			var i = x.a;
			return $elm$core$String$fromInt(i) + 'fr';
		case 3:
			var min = x.a;
			var len = x.b;
			return 'min' + ($elm$core$String$fromInt(min) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
		default:
			var max = x.a;
			var len = x.b;
			return 'max' + ($elm$core$String$fromInt(max) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
	}
};
var $elm$core$Basics$round = _Basics_round;
var $mdgriffith$elm_ui$Internal$Model$floatClass = function (x) {
	return $elm$core$String$fromInt(
		$elm$core$Basics$round(x * 255));
};
var $mdgriffith$elm_ui$Internal$Model$transformClass = function (transform) {
	switch (transform.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'mv-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(x) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(y) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(z))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			return $elm$core$Maybe$Just(
				'tfrm-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ty) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ox) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oz) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(angle))))))))))))))))))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$getStyleName = function (style) {
	switch (style.$) {
		case 13:
			var name = style.a;
			return name;
		case 12:
			var name = style.a;
			var o = style.b;
			return name;
		case 0:
			var _class = style.a;
			return _class;
		case 1:
			var name = style.a;
			return name;
		case 2:
			var i = style.a;
			return 'font-size-' + $elm$core$String$fromInt(i);
		case 3:
			var _class = style.a;
			return _class;
		case 4:
			var _class = style.a;
			return _class;
		case 5:
			var cls = style.a;
			var x = style.b;
			var y = style.c;
			return cls;
		case 7:
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 6:
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 8:
			var template = style.a;
			return 'grid-rows-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.kL)) + ('-cols-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.aM)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.kX.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.kX.b)))))));
		case 9:
			var pos = style.a;
			return 'gp grid-pos-' + ($elm$core$String$fromInt(pos.kK) + ('-' + ($elm$core$String$fromInt(pos.gu) + ('-' + ($elm$core$String$fromInt(pos.ij) + ('-' + $elm$core$String$fromInt(pos.gP)))))));
		case 11:
			var selector = style.a;
			var subStyle = style.b;
			var name = function () {
				switch (selector) {
					case 0:
						return 'fs';
					case 1:
						return 'hv';
					default:
						return 'act';
				}
			}();
			return A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (sty) {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(sty);
						if (_v1 === '') {
							return '';
						} else {
							var styleName = _v1;
							return styleName + ('-' + name);
						}
					},
					subStyle));
		default:
			var x = style.a;
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				$mdgriffith$elm_ui$Internal$Model$transformClass(x));
	}
};
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$member, key, dict);
	});
var $mdgriffith$elm_ui$Internal$Model$reduceStyles = F2(
	function (style, nevermind) {
		var cache = nevermind.a;
		var existing = nevermind.b;
		var styleName = $mdgriffith$elm_ui$Internal$Model$getStyleName(style);
		return A2($elm$core$Set$member, styleName, cache) ? nevermind : _Utils_Tuple2(
			A2($elm$core$Set$insert, styleName, cache),
			A2($elm$core$List$cons, style, existing));
	});
var $mdgriffith$elm_ui$Internal$Model$Property = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$dot = function (c) {
	return '.' + c;
};
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $mdgriffith$elm_ui$Internal$Model$formatColor = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return 'rgba(' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(red * 255)) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(green * 255))) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(blue * 255))) + (',' + ($elm$core$String$fromFloat(alpha) + ')')))));
};
var $mdgriffith$elm_ui$Internal$Model$formatBoxShadow = function (shadow) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					shadow.g_ ? $elm$core$Maybe$Just('inset') : $elm$core$Maybe$Nothing,
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.e.a) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.e.b) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.bB) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.bp) + 'px'),
					$elm$core$Maybe$Just(
					$mdgriffith$elm_ui$Internal$Model$formatColor(shadow.bC))
				])));
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $mdgriffith$elm_ui$Internal$Model$renderFocusStyle = function (focus) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gH) + ':focus-within',
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.iU),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.iK),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										bB: shadow.bB,
										bC: shadow.bC,
										g_: false,
										e: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.e)),
										bp: shadow.bp
									}));
						},
						focus.kT),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					]))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF) + ':focus .focusable, ') + (($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF) + '.focusable:focus, ') + ('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF) + ' .focusable-thumb'))),
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.iU),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.iK),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										bB: shadow.bB,
										bC: shadow.bC,
										g_: false,
										e: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.e)),
										bp: shadow.bp
									}));
						},
						focus.kT),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					])))
		]);
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlJson(value));
	});
var $mdgriffith$elm_ui$Internal$Style$AllChildren = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Batch = function (a) {
	return {$: 6, a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Child = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Class = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Descriptor = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Left = 3;
var $mdgriffith$elm_ui$Internal$Style$Prop = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Right = 2;
var $mdgriffith$elm_ui$Internal$Style$Self = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$Supports = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Content = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$Bottom = 1;
var $mdgriffith$elm_ui$Internal$Style$CenterX = 4;
var $mdgriffith$elm_ui$Internal$Style$CenterY = 5;
var $mdgriffith$elm_ui$Internal$Style$Top = 0;
var $mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray(
	[0, 1, 2, 3, 4, 5]);
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $mdgriffith$elm_ui$Internal$Style$contentName = function (desc) {
	switch (desc) {
		case 0:
			var _v1 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i6);
		case 1:
			var _v2 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dD);
		case 2:
			var _v3 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dF);
		case 3:
			var _v4 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cx);
		case 4:
			var _v5 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dE);
		default:
			var _v6 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a0);
	}
};
var $mdgriffith$elm_ui$Internal$Style$selfName = function (desc) {
	switch (desc) {
		case 0:
			var _v1 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iC);
		case 1:
			var _v2 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iv);
		case 2:
			var _v3 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gi);
		case 3:
			var _v4 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gh);
		case 4:
			var _v5 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iw);
		default:
			var _v6 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ix);
	}
};
var $mdgriffith$elm_ui$Internal$Style$describeAlignment = function (values) {
	var createDescription = function (alignment) {
		var _v0 = values(alignment);
		var content = _v0.a;
		var indiv = _v0.b;
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$contentName(alignment),
				content),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(alignment),
						indiv)
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$elDescription = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eW),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iP),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kR),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.p),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eZ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gc),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eY),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eZ),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gc),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.il),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gb),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
			])),
		$mdgriffith$elm_ui$Internal$Style$describeAlignment(
		function (alignment) {
			switch (alignment) {
				case 0:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
							]));
				case 1:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
							]));
				case 2:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
							]));
				case 3:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							]));
				case 4:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
							]));
				default:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
									]))
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
							]));
			}
		})
	]);
var $mdgriffith$elm_ui$Internal$Style$gridAlignments = function (values) {
	var createDescription = function (alignment) {
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(alignment),
						values(alignment))
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$Above = 0;
var $mdgriffith$elm_ui$Internal$Style$Behind = 5;
var $mdgriffith$elm_ui$Internal$Style$Below = 1;
var $mdgriffith$elm_ui$Internal$Style$OnLeft = 3;
var $mdgriffith$elm_ui$Internal$Style$OnRight = 2;
var $mdgriffith$elm_ui$Internal$Style$Within = 4;
var $mdgriffith$elm_ui$Internal$Style$locations = function () {
	var loc = 0;
	var _v0 = function () {
		switch (loc) {
			case 0:
				return 0;
			case 1:
				return 0;
			case 2:
				return 0;
			case 3:
				return 0;
			case 4:
				return 0;
			default:
				return 0;
		}
	}();
	return _List_fromArray(
		[0, 1, 2, 3, 4, 5]);
}();
var $mdgriffith$elm_ui$Internal$Style$baseSheet = _List_fromArray(
	[
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		'html,body',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		_Utils_ap(
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF),
			_Utils_ap(
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kU),
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jH))),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eZ),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-height', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gc),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF) + ':focus',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kJ),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eZ)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eZ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jK),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bS),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bS),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kU),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				$mdgriffith$elm_ui$Internal$Style$Batch(
				function (fn) {
					return A2($elm$core$List$map, fn, $mdgriffith$elm_ui$Internal$Style$locations);
				}(
					function (loc) {
						switch (loc) {
							case 0:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ir),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eZ),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gc),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
												])),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 1:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iQ),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eZ),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 2:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ko),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 3:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kl),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'right', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 4:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jK),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							default:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iP),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
						}
					}))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'resize', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'box-sizing', 'border-box'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-size', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-family', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'inherit'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gd),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hj),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i8),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i9),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kw),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dw),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bs),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bm),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.jG, $mdgriffith$elm_ui$Internal$Style$classes.bs)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.jG, $mdgriffith$elm_ui$Internal$Style$classes.bm)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.jw, $mdgriffith$elm_ui$Internal$Style$classes.bs)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.jw, $mdgriffith$elm_ui$Internal$Style$classes.bm)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.bv, $mdgriffith$elm_ui$Internal$Style$classes.bs)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.bv, $mdgriffith$elm_ui$Internal$Style$classes.bm)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.lu),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Prop,
						'transition',
						A2(
							$elm$core$String$join,
							', ',
							A2(
								$elm$core$List$map,
								function (x) {
									return x + ' 160ms';
								},
								_List_fromArray(
									['transform', 'opacity', 'filter', 'background-color', 'color', 'font-size']))))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kO),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kP),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kK),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kQ),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a$),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kU),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i3),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i4),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.i5),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gb),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.du),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iV),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iW),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.p),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jQ),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1.05'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background', 'transparent'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'inherit')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kU),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kK),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ik),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fe),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eZ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gR),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gc),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dB),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.iB,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.iz,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iw),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.iz,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iw),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.iz,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ix),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.iz + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.iB + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.iz)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 1:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 2:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_Nil);
								case 3:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_Nil);
								case 4:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kW),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dM),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'baseline')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a$),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0px'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', 'min-content'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gQ),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eZ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gc),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.il),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gb),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.iy,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.iA,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ix),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.iA,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ix),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.iA,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ix),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.iA + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.iy + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.iA)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
											]));
								case 1:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto')
											]));
								case 2:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 3:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 4:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dB),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kW),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jC),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', '-ms-grid'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'.gp',
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Supports,
						_Utils_Tuple2('display', 'grid'),
						_List_fromArray(
							[
								_Utils_Tuple2('display', 'grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$gridAlignments(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
										]);
								case 1:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
										]);
								case 2:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
										]);
								case 3:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
										]);
								case 4:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
										]);
								default:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
										]);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hy),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF + ':first-child'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.iF + ($mdgriffith$elm_ui$Internal$Style$selfName(3) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.iF))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.iF + ($mdgriffith$elm_ui$Internal$Style$selfName(2) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.iF))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 1:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 2:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 3:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 4:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jM),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background-color', 'transparent')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jP),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kU),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jO),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jN),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'transparent')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fD),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-wrap', 'break-word'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eW),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iP),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.p),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fD),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::after',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::before',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kU),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ik),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jK),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iP),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ir),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iQ),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ko),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kl),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.p),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kK),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a$),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jC),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 1:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 2:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right')
											]));
								case 3:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left')
											]));
								case 4:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.hidden',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ll),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.lc),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.lg),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.li),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.lh),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.lk),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iT),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.lb),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ld),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.jU),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.k0),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.lv),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.lv),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.k0)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.lm),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.le),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.em),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.la),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.lj),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.lf),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'left')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.modal',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none')
					]))
			]))
	]);
var $mdgriffith$elm_ui$Internal$Style$fontVariant = function (_var) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + _var,
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\"'))
				])),
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + (_var + '-off'),
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\" 0'))
				]))
		]);
};
var $mdgriffith$elm_ui$Internal$Style$commonValues = $elm$core$List$concat(
	_List_fromArray(
		[
			A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.border-' + $elm$core$String$fromInt(x),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'border-width',
							$elm$core$String$fromInt(x) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 6)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 8, 32)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.p-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'padding',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 24)),
			_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'small-caps')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp-off',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'normal')
					]))
			]),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('zero'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('onum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('liga'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('dlig'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('ordn'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('tnum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('afrc'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('frac')
		]));
var $mdgriffith$elm_ui$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + ($mdgriffith$elm_ui$Internal$Style$classes.iF + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + ($mdgriffith$elm_ui$Internal$Style$classes.iF + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$sliderReset = '\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$thumbReset = '\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var $mdgriffith$elm_ui$Internal$Style$trackReset = '\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kK) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF) + (' { flex-basis: auto !important; } ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.kK) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dB) + (' { flex-basis: auto !important; }}' + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $mdgriffith$elm_ui$Internal$Style$Intermediate = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return {dA: closing, O: _List_Nil, a7: _List_Nil, aH: selector};
	});
var $mdgriffith$elm_ui$Internal$Style$renderRules = F2(
	function (_v0, rulesToRender) {
		var parent = _v0;
		var generateIntermediates = F2(
			function (rule, rendered) {
				switch (rule.$) {
					case 0:
						var name = rule.a;
						var val = rule.b;
						return _Utils_update(
							rendered,
							{
								a7: A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.a7)
							});
					case 3:
						var _v2 = rule.a;
						var prop = _v2.a;
						var value = _v2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								O: A2(
									$elm$core$List$cons,
									{dA: '\n}', O: _List_Nil, a7: props, aH: '@supports (' + (prop + (':' + (value + (') {' + parent.aH))))},
									rendered.O)
							});
					case 5:
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								O: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.aH + (' + ' + selector), ''),
										adjRules),
									rendered.O)
							});
					case 1:
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								O: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.aH + (' > ' + child), ''),
										childRules),
									rendered.O)
							});
					case 2:
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								O: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.aH + (' ' + child), ''),
										childRules),
									rendered.O)
							});
					case 4:
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								O: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(
											$mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
											_Utils_ap(parent.aH, descriptor),
											''),
										descriptorRules),
									rendered.O)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								O: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.aH, ''),
										batched),
									rendered.O)
							});
				}
			});
		return A3($elm$core$List$foldr, generateIntermediates, parent, rulesToRender);
	});
var $mdgriffith$elm_ui$Internal$Style$renderCompact = function (styleClasses) {
	var renderValues = function (values) {
		return $elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (_v3) {
					var x = _v3.a;
					var y = _v3.b;
					return x + (':' + (y + ';'));
				},
				values));
	};
	var renderClass = function (rule) {
		var _v2 = rule.a7;
		if (!_v2.b) {
			return '';
		} else {
			return rule.aH + ('{' + (renderValues(rule.a7) + (rule.dA + '}')));
		}
	};
	var renderIntermediate = function (_v0) {
		var rule = _v0;
		return _Utils_ap(
			renderClass(rule),
			$elm$core$String$concat(
				A2($elm$core$List$map, renderIntermediate, rule.O)));
	};
	return $elm$core$String$concat(
		A2(
			$elm$core$List$map,
			renderIntermediate,
			A3(
				$elm$core$List$foldr,
				F2(
					function (_v1, existing) {
						var name = _v1.a;
						var styleRules = _v1.b;
						return A2(
							$elm$core$List$cons,
							A2(
								$mdgriffith$elm_ui$Internal$Style$renderRules,
								A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, name, ''),
								styleRules),
							existing);
					}),
				_List_Nil,
				styleClasses)));
};
var $mdgriffith$elm_ui$Internal$Style$rules = _Utils_ap(
	$mdgriffith$elm_ui$Internal$Style$overrides,
	$mdgriffith$elm_ui$Internal$Style$renderCompact(
		_Utils_ap($mdgriffith$elm_ui$Internal$Style$baseSheet, $mdgriffith$elm_ui$Internal$Style$commonValues)));
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $mdgriffith$elm_ui$Internal$Model$staticRoot = function (opts) {
	var _v0 = opts.j6;
	switch (_v0) {
		case 0:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'div',
				_List_Nil,
				_List_fromArray(
					[
						A3(
						$elm$virtual_dom$VirtualDom$node,
						'style',
						_List_Nil,
						_List_fromArray(
							[
								$elm$virtual_dom$VirtualDom$text($mdgriffith$elm_ui$Internal$Style$rules)
							]))
					]));
		case 1:
			return $elm$virtual_dom$VirtualDom$text('');
		default:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'elm-ui-static-rules',
				_List_fromArray(
					[
						A2(
						$elm$virtual_dom$VirtualDom$property,
						'rules',
						$elm$json$Json$Encode$string($mdgriffith$elm_ui$Internal$Style$rules))
					]),
				_List_Nil);
	}
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$fontName = function (font) {
	switch (font.$) {
		case 0:
			return 'serif';
		case 1:
			return 'sans-serif';
		case 2:
			return 'monospace';
		case 3:
			var name = font.a;
			return '\"' + (name + '\"');
		case 4:
			var name = font.a;
			var url = font.b;
			return '\"' + (name + '\"');
		default:
			var name = font.a.av;
			return '\"' + (name + '\"');
	}
};
var $mdgriffith$elm_ui$Internal$Model$isSmallCaps = function (_var) {
	switch (_var.$) {
		case 0:
			var name = _var.a;
			return name === 'smcp';
		case 1:
			var name = _var.a;
			return false;
		default:
			var name = _var.a;
			var index = _var.b;
			return (name === 'smcp') && (index === 1);
	}
};
var $mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function (typeface) {
	if (typeface.$ === 5) {
		var font = typeface.a;
		return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.id);
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderProps = F3(
	function (force, _v0, existing) {
		var key = _v0.a;
		var val = _v0.b;
		return force ? (existing + ('\n  ' + (key + (': ' + (val + ' !important;'))))) : (existing + ('\n  ' + (key + (': ' + (val + ';')))));
	});
var $mdgriffith$elm_ui$Internal$Model$renderStyle = F4(
	function (options, maybePseudo, selector, props) {
		if (maybePseudo.$ === 1) {
			return _List_fromArray(
				[
					selector + ('{' + (A3(
					$elm$core$List$foldl,
					$mdgriffith$elm_ui$Internal$Model$renderProps(false),
					'',
					props) + '\n}'))
				]);
		} else {
			var pseudo = maybePseudo.a;
			switch (pseudo) {
				case 1:
					var _v2 = options.jG;
					switch (_v2) {
						case 0:
							return _List_Nil;
						case 2:
							return _List_fromArray(
								[
									selector + ('-hv {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(true),
									'',
									props) + '\n}'))
								]);
						default:
							return _List_fromArray(
								[
									selector + ('-hv:hover {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(false),
									'',
									props) + '\n}'))
								]);
					}
				case 0:
					var renderedProps = A3(
						$elm$core$List$foldl,
						$mdgriffith$elm_ui$Internal$Model$renderProps(false),
						'',
						props);
					return _List_fromArray(
						[
							selector + ('-fs:focus {' + (renderedProps + '\n}')),
							('.' + ($mdgriffith$elm_ui$Internal$Style$classes.iF + (':focus ' + (selector + '-fs  {')))) + (renderedProps + '\n}'),
							(selector + '-fs:focus-within {') + (renderedProps + '\n}'),
							('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iF) + (' .focusable-thumb' + (selector + '-fs {')))) + (renderedProps + '\n}')
						]);
				default:
					return _List_fromArray(
						[
							selector + ('-act:active {' + (A3(
							$elm$core$List$foldl,
							$mdgriffith$elm_ui$Internal$Model$renderProps(false),
							'',
							props) + '\n}'))
						]);
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderVariant = function (_var) {
	switch (_var.$) {
		case 0:
			var name = _var.a;
			return '\"' + (name + '\"');
		case 1:
			var name = _var.a;
			return '\"' + (name + '\" 0');
		default:
			var name = _var.a;
			var index = _var.b;
			return '\"' + (name + ('\" ' + $elm$core$String$fromInt(index)));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderVariants = function (typeface) {
	if (typeface.$ === 5) {
		var font = typeface.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				', ',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font.id)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$transformValue = function (transform) {
	switch (transform.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'translate3d(' + ($elm$core$String$fromFloat(x) + ('px, ' + ($elm$core$String$fromFloat(y) + ('px, ' + ($elm$core$String$fromFloat(z) + 'px)'))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			var translate = 'translate3d(' + ($elm$core$String$fromFloat(tx) + ('px, ' + ($elm$core$String$fromFloat(ty) + ('px, ' + ($elm$core$String$fromFloat(tz) + 'px)')))));
			var scale = 'scale3d(' + ($elm$core$String$fromFloat(sx) + (', ' + ($elm$core$String$fromFloat(sy) + (', ' + ($elm$core$String$fromFloat(sz) + ')')))));
			var rotate = 'rotate3d(' + ($elm$core$String$fromFloat(ox) + (', ' + ($elm$core$String$fromFloat(oy) + (', ' + ($elm$core$String$fromFloat(oz) + (', ' + ($elm$core$String$fromFloat(angle) + 'rad)')))))));
			return $elm$core$Maybe$Just(translate + (' ' + (scale + (' ' + rotate))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderStyleRule = F3(
	function (options, rule, maybePseudo) {
		switch (rule.$) {
			case 0:
				var selector = rule.a;
				var props = rule.b;
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, selector, props);
			case 13:
				var name = rule.a;
				var prop = rule.b;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, 'box-shadow', prop)
						]));
			case 12:
				var name = rule.a;
				var transparency = rule.b;
				var opacity = A2(
					$elm$core$Basics$max,
					0,
					A2($elm$core$Basics$min, 1, 1 - transparency));
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'opacity',
							$elm$core$String$fromFloat(opacity))
						]));
			case 2:
				var i = rule.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			case 1:
				var name = rule.a;
				var typefaces = rule.b;
				var features = A2(
					$elm$core$String$join,
					', ',
					A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Internal$Model$renderVariants, typefaces));
				var families = _List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-family',
						A2(
							$elm$core$String$join,
							', ',
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$fontName, typefaces))),
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'font-feature-settings', features),
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-variant',
						A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$hasSmallCaps, typefaces) ? 'small-caps' : 'normal')
					]);
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, '.' + name, families);
			case 3:
				var _class = rule.a;
				var prop = rule.b;
				var val = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, prop, val)
						]));
			case 4:
				var _class = rule.a;
				var prop = rule.b;
				var color = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							prop,
							$mdgriffith$elm_ui$Internal$Model$formatColor(color))
						]));
			case 5:
				var cls = rule.a;
				var x = rule.b;
				var y = rule.c;
				var yPx = $elm$core$String$fromInt(y) + 'px';
				var xPx = $elm$core$String$fromInt(x) + 'px';
				var single = '.' + $mdgriffith$elm_ui$Internal$Style$classes.kU;
				var row = '.' + $mdgriffith$elm_ui$Internal$Style$classes.kK;
				var wrappedRow = '.' + ($mdgriffith$elm_ui$Internal$Style$classes.gd + row);
				var right = '.' + $mdgriffith$elm_ui$Internal$Style$classes.gi;
				var paragraph = '.' + $mdgriffith$elm_ui$Internal$Style$classes.fD;
				var page = '.' + $mdgriffith$elm_ui$Internal$Style$classes.hy;
				var left = '.' + $mdgriffith$elm_ui$Internal$Style$classes.gh;
				var halfY = $elm$core$String$fromFloat(y / 2) + 'px';
				var halfX = $elm$core$String$fromFloat(x / 2) + 'px';
				var column = '.' + $mdgriffith$elm_ui$Internal$Style$classes.a$;
				var _class = '.' + cls;
				var any = '.' + $mdgriffith$elm_ui$Internal$Style$classes.iF;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (row + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (wrappedRow + (' > ' + any)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin', halfY + (' ' + halfX))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (column + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_Utils_ap(_class, paragraph),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							'textarea' + (any + _class),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)')),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'height',
									'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::after'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-top',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::before'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-bottom',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								]))
						]));
			case 7:
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'padding',
							$elm$core$String$fromFloat(top) + ('px ' + ($elm$core$String$fromFloat(right) + ('px ' + ($elm$core$String$fromFloat(bottom) + ('px ' + ($elm$core$String$fromFloat(left) + 'px')))))))
						]));
			case 6:
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'border-width',
							$elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px')))))))
						]));
			case 8:
				var template = rule.a;
				var toGridLengthHelper = F3(
					function (minimum, maximum, x) {
						toGridLengthHelper:
						while (true) {
							switch (x.$) {
								case 0:
									var px = x.a;
									return $elm$core$String$fromInt(px) + 'px';
								case 1:
									var _v2 = _Utils_Tuple2(minimum, maximum);
									if (_v2.a.$ === 1) {
										if (_v2.b.$ === 1) {
											var _v3 = _v2.a;
											var _v4 = _v2.b;
											return 'max-content';
										} else {
											var _v6 = _v2.a;
											var maxSize = _v2.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v2.b.$ === 1) {
											var minSize = _v2.a.a;
											var _v5 = _v2.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + 'max-content)'));
										} else {
											var minSize = _v2.a.a;
											var maxSize = _v2.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 2:
									var i = x.a;
									var _v7 = _Utils_Tuple2(minimum, maximum);
									if (_v7.a.$ === 1) {
										if (_v7.b.$ === 1) {
											var _v8 = _v7.a;
											var _v9 = _v7.b;
											return $elm$core$String$fromInt(i) + 'fr';
										} else {
											var _v11 = _v7.a;
											var maxSize = _v7.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v7.b.$ === 1) {
											var minSize = _v7.a.a;
											var _v10 = _v7.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(i) + ('fr' + 'fr)'))));
										} else {
											var minSize = _v7.a.a;
											var maxSize = _v7.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 3:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = $elm$core$Maybe$Just(m),
										$temp$maximum = maximum,
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
								default:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = minimum,
										$temp$maximum = $elm$core$Maybe$Just(m),
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
							}
						}
					});
				var toGridLength = function (x) {
					return A3(toGridLengthHelper, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, x);
				};
				var xSpacing = toGridLength(template.kX.a);
				var ySpacing = toGridLength(template.kX.b);
				var rows = function (x) {
					return 'grid-template-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.kL)));
				var msRows = function (x) {
					return '-ms-grid-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.aM)));
				var msColumns = function (x) {
					return '-ms-grid-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.aM)));
				var gapY = 'grid-row-gap:' + (toGridLength(template.kX.b) + ';');
				var gapX = 'grid-column-gap:' + (toGridLength(template.kX.a) + ';');
				var columns = function (x) {
					return 'grid-template-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.aM)));
				var _class = '.grid-rows-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.kL)) + ('-cols-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.aM)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.kX.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.kX.b)))))));
				var modernGrid = _class + ('{' + (columns + (rows + (gapX + (gapY + '}')))));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msColumns + (msRows + '}')));
				return _List_fromArray(
					[base, supports]);
			case 9:
				var position = rule.a;
				var msPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'-ms-grid-row: ' + ($elm$core$String$fromInt(position.kK) + ';'),
							'-ms-grid-row-span: ' + ($elm$core$String$fromInt(position.gP) + ';'),
							'-ms-grid-column: ' + ($elm$core$String$fromInt(position.gu) + ';'),
							'-ms-grid-column-span: ' + ($elm$core$String$fromInt(position.ij) + ';')
						]));
				var modernPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'grid-row: ' + ($elm$core$String$fromInt(position.kK) + (' / ' + ($elm$core$String$fromInt(position.kK + position.gP) + ';'))),
							'grid-column: ' + ($elm$core$String$fromInt(position.gu) + (' / ' + ($elm$core$String$fromInt(position.gu + position.ij) + ';')))
						]));
				var _class = '.grid-pos-' + ($elm$core$String$fromInt(position.kK) + ('-' + ($elm$core$String$fromInt(position.gu) + ('-' + ($elm$core$String$fromInt(position.ij) + ('-' + $elm$core$String$fromInt(position.gP)))))));
				var modernGrid = _class + ('{' + (modernPosition + '}'));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msPosition + '}'));
				return _List_fromArray(
					[base, supports]);
			case 11:
				var _class = rule.a;
				var styles = rule.b;
				var renderPseudoRule = function (style) {
					return A3(
						$mdgriffith$elm_ui$Internal$Model$renderStyleRule,
						options,
						style,
						$elm$core$Maybe$Just(_class));
				};
				return A2($elm$core$List$concatMap, renderPseudoRule, styles);
			default:
				var transform = rule.a;
				var val = $mdgriffith$elm_ui$Internal$Model$transformValue(transform);
				var _class = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				var _v12 = _Utils_Tuple2(_class, val);
				if ((!_v12.a.$) && (!_v12.b.$)) {
					var cls = _v12.a.a;
					var v = _v12.b.a;
					return A4(
						$mdgriffith$elm_ui$Internal$Model$renderStyle,
						options,
						maybePseudo,
						'.' + cls,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Model$Property, 'transform', v)
							]));
				} else {
					return _List_Nil;
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$encodeStyles = F2(
	function (options, stylesheet) {
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$map,
				function (style) {
					var styled = A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing);
					return _Utils_Tuple2(
						$mdgriffith$elm_ui$Internal$Model$getStyleName(style),
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styled));
				},
				stylesheet));
	});
var $mdgriffith$elm_ui$Internal$Model$bracket = F2(
	function (selector, rules) {
		var renderPair = function (_v0) {
			var name = _v0.a;
			var val = _v0.b;
			return name + (': ' + (val + ';'));
		};
		return selector + (' {' + (A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, renderPair, rules)) + '}'));
	});
var $mdgriffith$elm_ui$Internal$Model$fontRule = F3(
	function (name, modifier, _v0) {
		var parentAdj = _v0.a;
		var textAdjustment = _v0.b;
		return _List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + (', ' + ('.' + (name + (' .' + modifier))))))), parentAdj),
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.p + (', .' + (name + (' .' + (modifier + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.p)))))))))), textAdjustment)
			]);
	});
var $mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule = F3(
	function (fontToAdjust, _v0, otherFontName) {
		var full = _v0.a;
		var capital = _v0.b;
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_Utils_ap(
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.kV, capital),
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.jz, full)));
	});
var $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule = F2(
	function (fontToAdjust, otherFontName) {
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.kV + (', ' + ('.' + (name + (' .' + $mdgriffith$elm_ui$Internal$Style$classes.kV))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.kV + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.p + (', .' + (name + (' .' + ($mdgriffith$elm_ui$Internal$Style$classes.kV + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.p)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {gP: height / size, bp: size, ig: vertical};
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$convertAdjustment = function (adjustment) {
	var lines = _List_fromArray(
		[adjustment.i0, adjustment.iO, adjustment.ji, adjustment.j1]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.ji,
		$elm$core$List$minimum(lines));
	var newBaseline = A2(
		$elm$core$Maybe$withDefault,
		adjustment.iO,
		$elm$core$List$minimum(
			A2(
				$elm$core$List$filter,
				function (x) {
					return !_Utils_eq(x, descender);
				},
				lines)));
	var base = lineHeight;
	var ascender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.i0,
		$elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		i0: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		gJ: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
	};
};
var $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules = function (converted) {
	return _Utils_Tuple2(
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'block')
			]),
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'inline-block'),
				_Utils_Tuple2(
				'line-height',
				$elm$core$String$fromFloat(converted.gP)),
				_Utils_Tuple2(
				'vertical-align',
				$elm$core$String$fromFloat(converted.ig) + 'em'),
				_Utils_Tuple2(
				'font-size',
				$elm$core$String$fromFloat(converted.bp) + 'em')
			]));
};
var $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function (typefaces) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (face, found) {
				if (found.$ === 1) {
					if (face.$ === 5) {
						var _with = face.a;
						var _v2 = _with.iu;
						if (_v2.$ === 1) {
							return found;
						} else {
							var adjustment = _v2.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.gJ;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment))),
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.i0;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment)))));
						}
					} else {
						return found;
					}
				} else {
					return found;
				}
			}),
		$elm$core$Maybe$Nothing,
		typefaces);
};
var $mdgriffith$elm_ui$Internal$Model$renderTopLevelValues = function (rules) {
	var withImport = function (font) {
		if (font.$ === 4) {
			var url = font.b;
			return $elm$core$Maybe$Just('@import url(\'' + (url + '\');'));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	var fontImports = function (_v2) {
		var name = _v2.a;
		var typefaces = _v2.b;
		var imports = A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$filterMap, withImport, typefaces));
		return imports;
	};
	var allNames = A2($elm$core$List$map, $elm$core$Tuple$first, rules);
	var fontAdjustments = function (_v1) {
		var name = _v1.a;
		var typefaces = _v1.b;
		var _v0 = $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment(typefaces);
		if (_v0.$ === 1) {
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule(name),
					allNames));
		} else {
			var adjustment = _v0.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule, name, adjustment),
					allNames));
		}
	};
	return _Utils_ap(
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontImports, rules)),
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontAdjustments, rules)));
};
var $mdgriffith$elm_ui$Internal$Model$topLevelValue = function (rule) {
	if (rule.$ === 1) {
		var name = rule.a;
		var typefaces = rule.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(name, typefaces));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$toStyleSheetString = F2(
	function (options, stylesheet) {
		var combine = F2(
			function (style, rendered) {
				return {
					d8: _Utils_ap(
						rendered.d8,
						A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing)),
					dl: function () {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style);
						if (_v1.$ === 1) {
							return rendered.dl;
						} else {
							var topLevel = _v1.a;
							return A2($elm$core$List$cons, topLevel, rendered.dl);
						}
					}()
				};
			});
		var _v0 = A3(
			$elm$core$List$foldl,
			combine,
			{d8: _List_Nil, dl: _List_Nil},
			stylesheet);
		var topLevel = _v0.dl;
		var rules = _v0.d8;
		return _Utils_ap(
			$mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
			$elm$core$String$concat(rules));
	});
var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		var _v0 = options.j6;
		switch (_v0) {
			case 0:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			case 1:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			default:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'elm-ui-rules',
					_List_fromArray(
						[
							A2(
							$elm$virtual_dom$VirtualDom$property,
							'rules',
							A2($mdgriffith$elm_ui$Internal$Model$encodeStyles, options, styleSheet))
						]),
					_List_Nil);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$embedKeyed = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.jw)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			_Utils_Tuple2(
				'static-stylesheet',
				$mdgriffith$elm_ui$Internal$Model$staticRoot(opts)),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
				children)) : A2(
			$elm$core$List$cons,
			_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
			children);
	});
var $mdgriffith$elm_ui$Internal$Model$embedWith = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.jw)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Internal$Model$staticRoot(opts),
			A2($elm$core$List$cons, dynamicStyleSheet, children)) : A2($elm$core$List$cons, dynamicStyleSheet, children);
	});
var $mdgriffith$elm_ui$Internal$Flag$heightBetween = $mdgriffith$elm_ui$Internal$Flag$flag(45);
var $mdgriffith$elm_ui$Internal$Flag$heightFill = $mdgriffith$elm_ui$Internal$Flag$flag(37);
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$p = _VirtualDom_node('p');
var $mdgriffith$elm_ui$Internal$Flag$present = F2(
	function (myFlag, _v0) {
		var fieldOne = _v0.a;
		var fieldTwo = _v0.b;
		if (!myFlag.$) {
			var first = myFlag.a;
			return _Utils_eq(first & fieldOne, first);
		} else {
			var second = myFlag.a;
			return _Utils_eq(second & fieldTwo, second);
		}
	});
var $elm$html$Html$s = _VirtualDom_node('s');
var $elm$html$Html$u = _VirtualDom_node('u');
var $mdgriffith$elm_ui$Internal$Flag$widthBetween = $mdgriffith$elm_ui$Internal$Flag$flag(44);
var $mdgriffith$elm_ui$Internal$Flag$widthFill = $mdgriffith$elm_ui$Internal$Flag$flag(39);
var $mdgriffith$elm_ui$Internal$Model$finalizeNode = F6(
	function (has, node, attributes, children, embedMode, parentContext) {
		var createNode = F2(
			function (nodeName, attrs) {
				if (children.$ === 1) {
					var keyed = children.a;
					return A3(
						$elm$virtual_dom$VirtualDom$keyedNode,
						nodeName,
						attrs,
						function () {
							switch (embedMode.$) {
								case 0:
									return keyed;
								case 2:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, false, opts, styles, keyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, true, opts, styles, keyed);
							}
						}());
				} else {
					var unkeyed = children.a;
					return A2(
						function () {
							switch (nodeName) {
								case 'div':
									return $elm$html$Html$div;
								case 'p':
									return $elm$html$Html$p;
								default:
									return $elm$virtual_dom$VirtualDom$node(nodeName);
							}
						}(),
						attrs,
						function () {
							switch (embedMode.$) {
								case 0:
									return unkeyed;
								case 2:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, false, opts, styles, unkeyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, true, opts, styles, unkeyed);
							}
						}());
				}
			});
		var html = function () {
			switch (node.$) {
				case 0:
					return A2(createNode, 'div', attributes);
				case 1:
					var nodeName = node.a;
					return A2(createNode, nodeName, attributes);
				default:
					var nodeName = node.a;
					var internal = node.b;
					return A3(
						$elm$virtual_dom$VirtualDom$node,
						nodeName,
						attributes,
						_List_fromArray(
							[
								A2(
								createNode,
								internal,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.iF + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.kU))
									]))
							]));
			}
		}();
		switch (parentContext) {
			case 0:
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignRight, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.iF, $mdgriffith$elm_ui$Internal$Style$classes.kU, $mdgriffith$elm_ui$Internal$Style$classes.dB, $mdgriffith$elm_ui$Internal$Style$classes.a0, $mdgriffith$elm_ui$Internal$Style$classes.iB])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerX, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.iF, $mdgriffith$elm_ui$Internal$Style$classes.kU, $mdgriffith$elm_ui$Internal$Style$classes.dB, $mdgriffith$elm_ui$Internal$Style$classes.a0, $mdgriffith$elm_ui$Internal$Style$classes.iz])))
						]),
					_List_fromArray(
						[html])) : html));
			case 1:
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerY, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.iF, $mdgriffith$elm_ui$Internal$Style$classes.kU, $mdgriffith$elm_ui$Internal$Style$classes.dB, $mdgriffith$elm_ui$Internal$Style$classes.iA])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignBottom, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.iF, $mdgriffith$elm_ui$Internal$Style$classes.kU, $mdgriffith$elm_ui$Internal$Style$classes.dB, $mdgriffith$elm_ui$Internal$Style$classes.iy])))
						]),
					_List_fromArray(
						[html])) : html));
			default:
				return html;
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.iF + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.p + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.gb + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eY)))));
var $mdgriffith$elm_ui$Internal$Model$textElement = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.iF + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.p + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.gc + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eZ)))));
var $mdgriffith$elm_ui$Internal$Model$textElementFill = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementFillClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$createElement = F3(
	function (context, children, rendered) {
		var gatherKeyed = F2(
			function (_v8, _v9) {
				var key = _v8.a;
				var child = _v8.b;
				var htmls = _v9.a;
				var existingStyles = _v9.b;
				switch (child.$) {
					case 0:
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles);
					case 1:
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.e_, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.h0 : _Utils_ap(styled.h0, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.e_, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.h0 : _Utils_ap(styled.h0, existingStyles));
					case 2:
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str)),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		var gather = F2(
			function (child, _v6) {
				var htmls = _v6.a;
				var existingStyles = _v6.b;
				switch (child.$) {
					case 0:
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles);
					case 1:
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.e_, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.h0 : _Utils_ap(styled.h0, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.e_, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.h0 : _Utils_ap(styled.h0, existingStyles));
					case 2:
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		if (children.$ === 1) {
			var keyedChildren = children.a;
			var _v1 = A3(
				$elm$core$List$foldr,
				gatherKeyed,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				keyedChildren);
			var keyed = _v1.a;
			var styles = _v1.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.h0 : _Utils_ap(rendered.h0, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.bh,
						rendered.hk,
						rendered.bb,
						$mdgriffith$elm_ui$Internal$Model$Keyed(
							A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.gr)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						e_: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.bh,
							rendered.hk,
							rendered.bb,
							$mdgriffith$elm_ui$Internal$Model$Keyed(
								A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.gr))),
						h0: allStyles
					});
			}
		} else {
			var unkeyedChildren = children.a;
			var _v3 = A3(
				$elm$core$List$foldr,
				gather,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				unkeyedChildren);
			var unkeyed = _v3.a;
			var styles = _v3.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.h0 : _Utils_ap(rendered.h0, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.bh,
						rendered.hk,
						rendered.bb,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.gr)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						e_: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.bh,
							rendered.hk,
							rendered.bb,
							$mdgriffith$elm_ui$Internal$Model$Unkeyed(
								A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.gr))),
						h0: allStyles
					});
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Single = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$Transform = function (a) {
	return {$: 10, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $mdgriffith$elm_ui$Internal$Flag$add = F2(
	function (myFlag, _v0) {
		var one = _v0.a;
		var two = _v0.b;
		if (!myFlag.$) {
			var first = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, first | one, two);
		} else {
			var second = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, one, second | two);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(
	function (location, elem) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					function () {
						switch (location) {
							case 0:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bS, $mdgriffith$elm_ui$Internal$Style$classes.kU, $mdgriffith$elm_ui$Internal$Style$classes.ir]));
							case 1:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bS, $mdgriffith$elm_ui$Internal$Style$classes.kU, $mdgriffith$elm_ui$Internal$Style$classes.iQ]));
							case 2:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bS, $mdgriffith$elm_ui$Internal$Style$classes.kU, $mdgriffith$elm_ui$Internal$Style$classes.ko]));
							case 3:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bS, $mdgriffith$elm_ui$Internal$Style$classes.kU, $mdgriffith$elm_ui$Internal$Style$classes.kl]));
							case 4:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bS, $mdgriffith$elm_ui$Internal$Style$classes.kU, $mdgriffith$elm_ui$Internal$Style$classes.jK]));
							default:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bS, $mdgriffith$elm_ui$Internal$Style$classes.kU, $mdgriffith$elm_ui$Internal$Style$classes.iP]));
						}
					}())
				]),
			_List_fromArray(
				[
					function () {
					switch (elem.$) {
						case 3:
							return $elm$virtual_dom$VirtualDom$text('');
						case 2:
							var str = elem.a;
							return $mdgriffith$elm_ui$Internal$Model$textElement(str);
						case 0:
							var html = elem.a;
							return html($mdgriffith$elm_ui$Internal$Model$asEl);
						default:
							var styled = elem.a;
							return A2(styled.e_, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
					}
				}()
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(
	function (location, elem, existing) {
		var nearby = A2($mdgriffith$elm_ui$Internal$Model$nearbyElement, location, elem);
		switch (existing.$) {
			case 0:
				if (location === 5) {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						_List_fromArray(
							[nearby]));
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						_List_fromArray(
							[nearby]));
				}
			case 1:
				var existingBehind = existing.a;
				if (location === 5) {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						A2($elm$core$List$cons, nearby, existingBehind));
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						_List_fromArray(
							[nearby]));
				}
			case 2:
				var existingInFront = existing.a;
				if (location === 5) {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						_List_fromArray(
							[nearby]),
						existingInFront);
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						A2($elm$core$List$cons, nearby, existingInFront));
				}
			default:
				var existingBehind = existing.a;
				var existingInFront = existing.b;
				if (location === 5) {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						A2($elm$core$List$cons, nearby, existingBehind),
						existingInFront);
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						A2($elm$core$List$cons, nearby, existingInFront));
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Embedded = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NodeName = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addNodeName = F2(
	function (newNode, old) {
		switch (old.$) {
			case 0:
				return $mdgriffith$elm_ui$Internal$Model$NodeName(newNode);
			case 1:
				var name = old.a;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, name, newNode);
			default:
				var x = old.a;
				var y = old.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, x, y);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$alignXName = function (align) {
	switch (align) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Style$classes.ev + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.gh);
		case 2:
			return $mdgriffith$elm_ui$Internal$Style$classes.ev + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.gi);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.ev + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.iw);
	}
};
var $mdgriffith$elm_ui$Internal$Model$alignYName = function (align) {
	switch (align) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Style$classes.ew + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.iC);
		case 2:
			return $mdgriffith$elm_ui$Internal$Style$classes.ew + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.iv);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.ew + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.ix);
	}
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Model$FullTransform = F4(
	function (a, b, c, d) {
		return {$: 2, a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$Moved = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(
	function (transform, component) {
		switch (transform.$) {
			case 0:
				switch (component.$) {
					case 0:
						var x = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, 0, 0));
					case 1:
						var y = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, y, 0));
					case 2:
						var z = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, 0, z));
					case 3:
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 4:
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var xyz = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							xyz,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			case 1:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				switch (component.$) {
					case 0:
						var newX = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(newX, y, z));
					case 1:
						var newY = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, newY, z));
					case 2:
						var newZ = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, y, newZ));
					case 3:
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 4:
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var scale = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							scale,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			default:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				var scaled = transform.b;
				var origin = transform.c;
				var angle = transform.d;
				switch (component.$) {
					case 0:
						var newX = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(newX, y, z),
							scaled,
							origin,
							angle);
					case 1:
						var newY = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, newY, z),
							scaled,
							origin,
							angle);
					case 2:
						var newZ = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, y, newZ),
							scaled,
							origin,
							angle);
					case 3:
						var newMove = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, newMove, scaled, origin, angle);
					case 4:
						var newOrigin = component.a;
						var newAngle = component.b;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, scaled, newOrigin, newAngle);
					default:
						var newScale = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, newScale, origin, angle);
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$height = $mdgriffith$elm_ui$Internal$Flag$flag(7);
var $mdgriffith$elm_ui$Internal$Flag$heightContent = $mdgriffith$elm_ui$Internal$Flag$flag(36);
var $mdgriffith$elm_ui$Internal$Flag$merge = F2(
	function (_v0, _v1) {
		var one = _v0.a;
		var two = _v0.b;
		var three = _v1.a;
		var four = _v1.b;
		return A2($mdgriffith$elm_ui$Internal$Flag$Field, one | three, two | four);
	});
var $mdgriffith$elm_ui$Internal$Flag$none = A2($mdgriffith$elm_ui$Internal$Flag$Field, 0, 0);
var $mdgriffith$elm_ui$Internal$Model$renderHeight = function (h) {
	switch (h.$) {
		case 0:
			var px = h.a;
			var val = $elm$core$String$fromInt(px);
			var name = 'height-px-' + val;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.gQ + (' ' + name),
				_List_fromArray(
					[
						A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 1:
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.eY,
				_List_Nil);
		case 2:
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.eZ,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.gR + (' height-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.iF + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.a$ + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'height-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 3:
			var minSize = h.a;
			var len = h.b;
			var cls = 'min-height-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-height',
				$elm$core$String$fromInt(minSize) + 'px !important');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = h.a;
			var len = h.b;
			var cls = 'max-height-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-height',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$widthContent = $mdgriffith$elm_ui$Internal$Flag$flag(38);
var $mdgriffith$elm_ui$Internal$Model$renderWidth = function (w) {
	switch (w.$) {
		case 0:
			var px = w.a;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.ik + (' width-px-' + $elm$core$String$fromInt(px)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						'width-px-' + $elm$core$String$fromInt(px),
						'width',
						$elm$core$String$fromInt(px) + 'px')
					]));
		case 1:
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.gb,
				_List_Nil);
		case 2:
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.gc,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.il + (' width-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.iF + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.kK + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'width-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 3:
			var minSize = w.a;
			var len = w.b;
			var cls = 'min-width-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-width',
				$elm$core$String$fromInt(minSize) + 'px');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = w.a;
			var len = w.b;
			var cls = 'max-width-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-width',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$borderWidth = $mdgriffith$elm_ui$Internal$Flag$flag(27);
var $mdgriffith$elm_ui$Internal$Model$skippable = F2(
	function (flag, style) {
		if (_Utils_eq(flag, $mdgriffith$elm_ui$Internal$Flag$borderWidth)) {
			if (style.$ === 3) {
				var val = style.c;
				switch (val) {
					case '0px':
						return true;
					case '1px':
						return true;
					case '2px':
						return true;
					case '3px':
						return true;
					case '4px':
						return true;
					case '5px':
						return true;
					case '6px':
						return true;
					default:
						return false;
				}
			} else {
				return false;
			}
		} else {
			switch (style.$) {
				case 2:
					var i = style.a;
					return (i >= 8) && (i <= 32);
				case 7:
					var name = style.a;
					var t = style.b;
					var r = style.c;
					var b = style.d;
					var l = style.e;
					return _Utils_eq(t, b) && (_Utils_eq(t, r) && (_Utils_eq(t, l) && ((t >= 0) && (t <= 24))));
				default:
					return false;
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$width = $mdgriffith$elm_ui$Internal$Flag$flag(6);
var $mdgriffith$elm_ui$Internal$Flag$xAlign = $mdgriffith$elm_ui$Internal$Flag$flag(30);
var $mdgriffith$elm_ui$Internal$Flag$yAlign = $mdgriffith$elm_ui$Internal$Flag$flag(29);
var $mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive = F8(
	function (classes, node, has, transform, styles, attrs, children, elementAttrs) {
		gatherAttrRecursive:
		while (true) {
			if (!elementAttrs.b) {
				var _v1 = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				if (_v1.$ === 1) {
					return {
						bb: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes),
							attrs),
						gr: children,
						bh: has,
						hk: node,
						h0: styles
					};
				} else {
					var _class = _v1.a;
					return {
						bb: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						gr: children,
						bh: has,
						hk: node,
						h0: A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$Transform(transform),
							styles)
					};
				}
			} else {
				var attribute = elementAttrs.a;
				var remaining = elementAttrs.b;
				switch (attribute.$) {
					case 0:
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 3:
						var flag = attribute.a;
						var exactClassName = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = exactClassName + (' ' + classes),
								$temp$node = node,
								$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					case 1:
						var actualAttribute = attribute.a;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = A2($elm$core$List$cons, actualAttribute, attrs),
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 4:
						var flag = attribute.a;
						var style = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							if (A2($mdgriffith$elm_ui$Internal$Model$skippable, flag, style)) {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							} else {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = A2($elm$core$List$cons, style, styles),
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							}
						}
					case 10:
						var flag = attribute.a;
						var component = attribute.b;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
							$temp$transform = A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, transform, component),
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 7:
						var width = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$width, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (width.$) {
								case 0:
									var px = width.a;
									var $temp$classes = ($mdgriffith$elm_ui$Internal$Style$classes.ik + (' width-px-' + $elm$core$String$fromInt(px))) + (' ' + classes),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3(
											$mdgriffith$elm_ui$Internal$Model$Single,
											'width-px-' + $elm$core$String$fromInt(px),
											'width',
											$elm$core$String$fromInt(px) + 'px'),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 1:
									var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.gb),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$widthContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 2:
									var portion = width.a;
									if (portion === 1) {
										var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.gc),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.il + (' width-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.iF + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.kK + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'width-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v4 = $mdgriffith$elm_ui$Internal$Model$renderWidth(width);
									var addToFlags = _v4.a;
									var newClass = _v4.b;
									var newStyles = _v4.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 8:
						var height = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$height, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (height.$) {
								case 0:
									var px = height.a;
									var val = $elm$core$String$fromInt(px) + 'px';
									var name = 'height-px-' + val;
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.gQ + (' ' + (name + (' ' + classes))),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height ', val),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 1:
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.eY + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$heightContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 2:
									var portion = height.a;
									if (portion === 1) {
										var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.eZ + (' ' + classes),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.gR + (' height-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.iF + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.a$ + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'height-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v6 = $mdgriffith$elm_ui$Internal$Model$renderHeight(height);
									var addToFlags = _v6.a;
									var newClass = _v6.b;
									var newStyles = _v6.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 2:
						var description = attribute.a;
						switch (description.$) {
							case 0:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'main', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 1:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'nav', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 2:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'footer', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 3:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'aside', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 4:
								var i = description.a;
								if (i <= 1) {
									var $temp$classes = classes,
										$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h1', node),
										$temp$has = has,
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								} else {
									if (i < 7) {
										var $temp$classes = classes,
											$temp$node = A2(
											$mdgriffith$elm_ui$Internal$Model$addNodeName,
											'h' + $elm$core$String$fromInt(i),
											node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes,
											$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h6', node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								}
							case 9:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 8:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'role', 'button'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 5:
								var label = description.a;
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-label', label),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 6:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'polite'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							default:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'assertive'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
						}
					case 9:
						var location = attribute.a;
						var elem = attribute.b;
						var newStyles = function () {
							switch (elem.$) {
								case 3:
									return styles;
								case 2:
									var str = elem.a;
									return styles;
								case 0:
									var html = elem.a;
									return styles;
								default:
									var styled = elem.a;
									return _Utils_ap(styles, styled.h0);
							}
						}();
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = newStyles,
							$temp$attrs = attrs,
							$temp$children = A3($mdgriffith$elm_ui$Internal$Model$addNearbyElement, location, elem, children),
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 6:
						var x = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignXName(x) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (x) {
									case 1:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerX, flags);
									case 2:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignRight, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					default:
						var y = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignYName(y) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (y) {
									case 1:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerY, flags);
									case 2:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignBottom, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Untransformed = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$untransformed = $mdgriffith$elm_ui$Internal$Model$Untransformed;
var $mdgriffith$elm_ui$Internal$Model$element = F4(
	function (context, node, attributes, children) {
		return A3(
			$mdgriffith$elm_ui$Internal$Model$createElement,
			context,
			children,
			A8(
				$mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive,
				$mdgriffith$elm_ui$Internal$Model$contextClasses(context),
				node,
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Model$untransformed,
				_List_Nil,
				_List_Nil,
				$mdgriffith$elm_ui$Internal$Model$NoNearbyChildren,
				$elm$core$List$reverse(attributes)));
	});
var $mdgriffith$elm_ui$Internal$Model$Height = function (a) {
	return {$: 8, a: a};
};
var $mdgriffith$elm_ui$Element$height = $mdgriffith$elm_ui$Internal$Model$Height;
var $mdgriffith$elm_ui$Internal$Model$Attr = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$htmlClass = function (cls) {
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(cls));
};
var $mdgriffith$elm_ui$Internal$Model$Content = {$: 1};
var $mdgriffith$elm_ui$Element$shrink = $mdgriffith$elm_ui$Internal$Model$Content;
var $mdgriffith$elm_ui$Internal$Model$Width = function (a) {
	return {$: 7, a: a};
};
var $mdgriffith$elm_ui$Element$width = $mdgriffith$elm_ui$Internal$Model$Width;
var $mdgriffith$elm_ui$Element$column = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.i6 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.cx)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $orus_io$elm_orus_ui$OUI$Text$Display = 0;
var $orus_io$elm_orus_ui$OUI$Text$displayMedium = A2($orus_io$elm_orus_ui$OUI$Text$textTypeSize, 0, 1);
var $mdgriffith$elm_ui$Element$el = F2(
	function (attrs, child) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					attrs)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[child])));
	});
var $mdgriffith$elm_ui$Internal$Model$Colored = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$bgColor = $mdgriffith$elm_ui$Internal$Flag$flag(8);
var $mdgriffith$elm_ui$Internal$Model$formatColorClass = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return $mdgriffith$elm_ui$Internal$Model$floatClass(red) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(green) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(blue) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(alpha))))));
};
var $mdgriffith$elm_ui$Element$Background$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$bgColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'background-color',
			clr));
};
var $mdgriffith$elm_ui$Internal$Flag$borderColor = $mdgriffith$elm_ui$Internal$Flag$flag(28);
var $mdgriffith$elm_ui$Element$Border$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'border-color',
			clr));
};
var $orus_io$elm_orus_ui$OUI$Material$Theme$colorscheme = function (_v0) {
	var t = _v0;
	return t.ct;
};
var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 7, a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Flag$padding = $mdgriffith$elm_ui$Internal$Flag$flag(2);
var $mdgriffith$elm_ui$Internal$Model$paddingName = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left)))))));
	});
var $mdgriffith$elm_ui$Element$paddingEach = function (_v0) {
	var top = _v0.dk;
	var right = _v0.c3;
	var bottom = _v0.cp;
	var left = _v0.cR;
	if (_Utils_eq(top, right) && (_Utils_eq(top, bottom) && _Utils_eq(top, left))) {
		var topFloat = top;
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				'p-' + $elm$core$String$fromInt(top),
				topFloat,
				topFloat,
				topFloat,
				topFloat));
	} else {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				A4($mdgriffith$elm_ui$Internal$Model$paddingName, top, right, bottom, left),
				top,
				right,
				bottom,
				left));
	}
};
var $mdgriffith$elm_ui$Internal$Model$Px = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Element$px = $mdgriffith$elm_ui$Internal$Model$Px;
var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Element$rgb255 = F3(
	function (red, green, blue) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, 1);
	});
var $mdgriffith$elm_ui$Internal$Flag$borderRound = $mdgriffith$elm_ui$Internal$Flag$flag(17);
var $mdgriffith$elm_ui$Element$Border$rounded = function (radius) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderRound,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			'br-' + $elm$core$String$fromInt(radius),
			'border-radius',
			$elm$core$String$fromInt(radius) + 'px'));
};
var $mdgriffith$elm_ui$Internal$Flag$fontColor = $mdgriffith$elm_ui$Internal$Flag$flag(14);
var $mdgriffith$elm_ui$Element$Font$color = function (fontColor) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(fontColor),
			'color',
			fontColor));
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $orus_io$elm_orus_ui$OUI$Material$Color$getColor = function (c) {
	switch (c.$) {
		case 0:
			return function ($) {
				return $.y;
			};
		case 1:
			return function ($) {
				return $.kx;
			};
		case 2:
			return function ($) {
				return $.ag;
			};
		case 3:
			return function ($) {
				return $.b2;
			};
		case 4:
			return function ($) {
				return $.Z;
			};
		case 5:
			return function ($) {
				return $.b8;
			};
		case 6:
			return function ($) {
				return $.kp;
			};
		case 7:
			return function ($) {
				return $.bY;
			};
		case 8:
			return function ($) {
				return $.jn;
			};
		case 9:
			return function ($) {
				return $.jo;
			};
		default:
			var color = c.a.bC;
			return $elm$core$Basics$always(color);
	}
};
var $mdgriffith$elm_ui$Element$fromRgb = function (clr) {
	return A4($mdgriffith$elm_ui$Internal$Model$Rgba, clr.fJ, clr.eU, clr.eD, clr.bx);
};
var $avh4$elm_color$Color$toRgba = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	return {bx: a, eD: b, eU: g, fJ: r};
};
var $orus_io$elm_orus_ui$OUI$Material$Color$toElementColor = A2($elm$core$Basics$composeR, $avh4$elm_color$Color$toRgba, $mdgriffith$elm_ui$Element$fromRgb);
var $orus_io$elm_orus_ui$OUI$Material$Color$getElementColor = function (c) {
	return A2(
		$elm$core$Basics$composeR,
		$orus_io$elm_orus_ui$OUI$Material$Color$getColor(c),
		$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor);
};
var $orus_io$elm_orus_ui$OUI$Material$Color$getOnColor = function (c) {
	switch (c.$) {
		case 0:
			return function ($) {
				return $.dW;
			};
		case 1:
			return function ($) {
				return $.bV;
			};
		case 2:
			return function ($) {
				return $.dX;
			};
		case 3:
			return function ($) {
				return $.bX;
			};
		case 4:
			return function ($) {
				return $.dY;
			};
		case 5:
			return function ($) {
				return $.bZ;
			};
		case 6:
			return function ($) {
				return $.k3;
			};
		case 7:
			return function ($) {
				return $.k3;
			};
		case 8:
			return function ($) {
				return $.kk;
			};
		case 9:
			return function ($) {
				return $.bT;
			};
		default:
			var onColor = c.a.hn;
			return $elm$core$Basics$always(onColor);
	}
};
var $orus_io$elm_orus_ui$OUI$Material$Color$getOnElementColor = function (c) {
	return A2(
		$elm$core$Basics$composeR,
		$orus_io$elm_orus_ui$OUI$Material$Color$getOnColor(c),
		$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor);
};
var $orus_io$elm_orus_ui$OUI$Material$Typography$getTypo = F2(
	function (type_, size) {
		return A2(
			$elm$core$Basics$composeR,
			function () {
				switch (type_) {
					case 0:
						return function ($) {
							return $.gA;
						};
					case 1:
						return function ($) {
							return $.gO;
						};
					case 2:
						return function ($) {
							return $.lo;
						};
					case 3:
						return function ($) {
							return $.bO;
						};
					default:
						return function ($) {
							return $.iS;
						};
				}
			}(),
			function () {
				switch (size) {
					case 0:
						return function ($) {
							return $.b3;
						};
					case 1:
						return function ($) {
							return $.hb;
						};
					default:
						return function ($) {
							return $.au;
						};
				}
			}());
	});
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$fontFamily = $mdgriffith$elm_ui$Internal$Flag$flag(5);
var $elm$core$String$toLower = _String_toLower;
var $elm$core$String$words = _String_words;
var $mdgriffith$elm_ui$Internal$Model$renderFontClassName = F2(
	function (font, current) {
		return _Utils_ap(
			current,
			function () {
				switch (font.$) {
					case 0:
						return 'serif';
					case 1:
						return 'sans-serif';
					case 2:
						return 'monospace';
					case 3:
						var name = font.a;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					case 4:
						var name = font.a;
						var url = font.b;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					default:
						var name = font.a.av;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
				}
			}());
	});
var $mdgriffith$elm_ui$Element$Font$family = function (families) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontFamily,
		A2(
			$mdgriffith$elm_ui$Internal$Model$FontFamily,
			A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'ff-', families),
			families));
};
var $mdgriffith$elm_ui$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$fontWeight = $mdgriffith$elm_ui$Internal$Flag$flag(13);
var $mdgriffith$elm_ui$Element$Font$medium = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontWeight, $mdgriffith$elm_ui$Internal$Style$classes.lh);
var $mdgriffith$elm_ui$Element$Font$regular = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontWeight, $mdgriffith$elm_ui$Internal$Style$classes.li);
var $mdgriffith$elm_ui$Internal$Model$FontSize = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$fontSize = $mdgriffith$elm_ui$Internal$Flag$flag(4);
var $mdgriffith$elm_ui$Element$Font$size = function (i) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontSize,
		$mdgriffith$elm_ui$Internal$Model$FontSize(i));
};
var $mdgriffith$elm_ui$Internal$Model$Typeface = function (a) {
	return {$: 3, a: a};
};
var $mdgriffith$elm_ui$Element$Font$typeface = $mdgriffith$elm_ui$Internal$Model$Typeface;
var $orus_io$elm_orus_ui$OUI$Material$Typography$typographyAttrs = function (typography) {
	return _List_fromArray(
		[
			$mdgriffith$elm_ui$Element$Font$family(
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$typeface(typography.jx)
				])),
			$mdgriffith$elm_ui$Element$Font$size(typography.bp),
			(typography.cc === 500) ? $mdgriffith$elm_ui$Element$Font$medium : $mdgriffith$elm_ui$Element$Font$regular
		]);
};
var $orus_io$elm_orus_ui$OUI$Material$Typography$attrs = F5(
	function (type_, size, color, typescale, colorscheme) {
		return _Utils_ap(
			$orus_io$elm_orus_ui$OUI$Material$Typography$typographyAttrs(
				A3($orus_io$elm_orus_ui$OUI$Material$Typography$getTypo, type_, size, typescale)),
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2(
					$elm$core$Maybe$map,
					A2($elm$core$Basics$composeR, $mdgriffith$elm_ui$Element$Font$color, $elm$core$List$singleton),
					function () {
						switch (color.$) {
							case 0:
								return $elm$core$Maybe$Nothing;
							case 1:
								var c = color.a;
								return $elm$core$Maybe$Just(
									A2($orus_io$elm_orus_ui$OUI$Material$Color$getElementColor, c, colorscheme));
							case 2:
								var c = color.a;
								return $elm$core$Maybe$Just(
									A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnElementColor, c, colorscheme));
							default:
								var c = color.a;
								return $elm$core$Maybe$Just(
									$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(c));
						}
					}())));
	});
var $orus_io$elm_orus_ui$OUI$Text$getColor = function (_v0) {
	var props = _v0;
	return props.bC;
};
var $orus_io$elm_orus_ui$OUI$Text$getSize = function (_v0) {
	var props = _v0;
	return props.bp;
};
var $orus_io$elm_orus_ui$OUI$Text$getText = function (_v0) {
	var props = _v0;
	return props.p;
};
var $orus_io$elm_orus_ui$OUI$Text$getType = function (_v0) {
	var props = _v0;
	return props.v;
};
var $mdgriffith$elm_ui$Internal$Model$Text = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Element$text = function (content) {
	return $mdgriffith$elm_ui$Internal$Model$Text(content);
};
var $orus_io$elm_orus_ui$OUI$Material$Typography$render = F3(
	function (typescale, colorscheme, text) {
		var props = {
			bC: $orus_io$elm_orus_ui$OUI$Text$getColor(text),
			bp: $orus_io$elm_orus_ui$OUI$Text$getSize(text),
			p: $orus_io$elm_orus_ui$OUI$Text$getText(text),
			v: $orus_io$elm_orus_ui$OUI$Text$getType(text)
		};
		return A2(
			$mdgriffith$elm_ui$Element$el,
			A5($orus_io$elm_orus_ui$OUI$Material$Typography$attrs, props.v, props.bp, props.bC, typescale, colorscheme),
			$mdgriffith$elm_ui$Element$text(props.p));
	});
var $orus_io$elm_orus_ui$OUI$Material$Theme$typescale = function (_v0) {
	var t = _v0;
	return t.dn;
};
var $orus_io$elm_orus_ui$OUI$Material$text = function (theme) {
	return A2(
		$orus_io$elm_orus_ui$OUI$Material$Typography$render,
		$orus_io$elm_orus_ui$OUI$Material$Theme$typescale(theme),
		$orus_io$elm_orus_ui$OUI$Material$Theme$colorscheme(theme));
};
var $avh4$elm_color$Color$RgbaSpace = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $avh4$elm_color$Color$fromRgba = function (components) {
	return A4($avh4$elm_color$Color$RgbaSpace, components.fJ, components.eU, components.eD, components.bx);
};
var $orus_io$elm_orus_ui$OUI$Material$Color$setAlpha = F2(
	function (value, color) {
		var rgba = $avh4$elm_color$Color$toRgba(color);
		return $avh4$elm_color$Color$fromRgba(
			_Utils_update(
				rgba,
				{bx: value}));
	});
var $avh4$elm_color$Color$hsla = F4(
	function (hue, sat, light, alpha) {
		var _v0 = _Utils_Tuple3(hue, sat, light);
		var h = _v0.a;
		var s = _v0.b;
		var l = _v0.c;
		var m2 = (l <= 0.5) ? (l * (s + 1)) : ((l + s) - (l * s));
		var m1 = (l * 2) - m2;
		var hueToRgb = function (h__) {
			var h_ = (h__ < 0) ? (h__ + 1) : ((h__ > 1) ? (h__ - 1) : h__);
			return ((h_ * 6) < 1) ? (m1 + (((m2 - m1) * h_) * 6)) : (((h_ * 2) < 1) ? m2 : (((h_ * 3) < 2) ? (m1 + (((m2 - m1) * ((2 / 3) - h_)) * 6)) : m1));
		};
		var b = hueToRgb(h - (1 / 3));
		var g = hueToRgb(h);
		var r = hueToRgb(h + (1 / 3));
		return A4($avh4$elm_color$Color$RgbaSpace, r, g, b, alpha);
	});
var $avh4$elm_color$Color$fromHsla = function (_v0) {
	var hue = _v0.gU;
	var saturation = _v0.hO;
	var lightness = _v0.g9;
	var alpha = _v0.bx;
	return A4($avh4$elm_color$Color$hsla, hue, saturation, lightness, alpha);
};
var $elm$core$Basics$isNaN = _Basics_isNaN;
var $avh4$elm_color$Color$toHsla = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	var minColor = A2(
		$elm$core$Basics$min,
		r,
		A2($elm$core$Basics$min, g, b));
	var maxColor = A2(
		$elm$core$Basics$max,
		r,
		A2($elm$core$Basics$max, g, b));
	var l = (minColor + maxColor) / 2;
	var s = _Utils_eq(minColor, maxColor) ? 0 : ((l < 0.5) ? ((maxColor - minColor) / (maxColor + minColor)) : ((maxColor - minColor) / ((2 - maxColor) - minColor)));
	var h1 = _Utils_eq(maxColor, r) ? ((g - b) / (maxColor - minColor)) : (_Utils_eq(maxColor, g) ? (2 + ((b - r) / (maxColor - minColor))) : (4 + ((r - g) / (maxColor - minColor))));
	var h2 = h1 * (1 / 6);
	var h3 = $elm$core$Basics$isNaN(h2) ? 0 : ((h2 < 0) ? (h2 + 1) : h2);
	return {bx: a, gU: h3, g9: l, hO: s};
};
var $orus_io$elm_orus_ui$OUI$Material$Color$tone = F2(
	function (light, color) {
		var hsla = $avh4$elm_color$Color$toHsla(color);
		var fLight = (light <= 0) ? 0.0 : ((light >= 100) ? 1.0 : (light / 100));
		return $avh4$elm_color$Color$fromHsla(
			_Utils_update(
				hsla,
				{g9: fLight}));
	});
var $orus_io$elm_orus_ui$OUI$Material$Color$darkFromKeyColors = function (keyColors) {
	return {
		ez: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 6, keyColors.i),
		jn: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 80, keyColors.jn),
		jo: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 30, keyColors.jn),
		e2: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 20, keyColors.i),
		e3: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 40, keyColors.y),
		e4: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 90, keyColors.i),
		cO: keyColors,
		fn: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 90, keyColors.i),
		kk: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 20, keyColors.jn),
		bT: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 90, keyColors.jn),
		dW: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 20, keyColors.y),
		bV: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 90, keyColors.y),
		dX: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 20, keyColors.ag),
		bX: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 90, keyColors.y),
		kp: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 90, keyColors.i),
		bY: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 80, keyColors.aC),
		dY: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 20, keyColors.Z),
		bZ: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 90, keyColors.Z),
		ku: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 60, keyColors.aC),
		hw: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 30, keyColors.aC),
		y: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 80, keyColors.y),
		kx: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 30, keyColors.y),
		fK: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 0, keyColors.i),
		ag: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 80, keyColors.ag),
		b2: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 30, keyColors.ag),
		kT: A2(
			$orus_io$elm_orus_ui$OUI$Material$Color$setAlpha,
			0.16,
			A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 100, keyColors.i)),
		k3: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 6, keyColors.i),
		fV: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 24, keyColors.i),
		b7: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 12, keyColors.i),
		k4: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 18, keyColors.i),
		eh: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 22, keyColors.i),
		k5: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 10, keyColors.i),
		ei: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 4, keyColors.i),
		fW: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 6, keyColors.i),
		fX: keyColors.y,
		ej: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 30, keyColors.aC),
		Z: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 80, keyColors.Z),
		b8: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 30, keyColors.Z)
	};
};
var $avh4$elm_color$Color$scaleFrom255 = function (c) {
	return c / 255;
};
var $avh4$elm_color$Color$rgb255 = F3(
	function (r, g, b) {
		return A4(
			$avh4$elm_color$Color$RgbaSpace,
			$avh4$elm_color$Color$scaleFrom255(r),
			$avh4$elm_color$Color$scaleFrom255(g),
			$avh4$elm_color$Color$scaleFrom255(b),
			1.0);
	});
var $orus_io$elm_orus_ui$OUI$Material$Color$defaultKeyColors = {
	jn: A3($avh4$elm_color$Color$rgb255, 179, 38, 30),
	i: A3($avh4$elm_color$Color$rgb255, 64, 64, 64),
	aC: A3($avh4$elm_color$Color$rgb255, 64, 64, 64),
	y: A3($avh4$elm_color$Color$rgb255, 103, 80, 164),
	ag: A3($avh4$elm_color$Color$rgb255, 98, 91, 113),
	Z: A3($avh4$elm_color$Color$rgb255, 125, 82, 96)
};
var $orus_io$elm_orus_ui$OUI$Material$Color$defaultDarkScheme = $orus_io$elm_orus_ui$OUI$Material$Color$darkFromKeyColors($orus_io$elm_orus_ui$OUI$Material$Color$defaultKeyColors);
var $orus_io$elm_orus_ui$OUI$Material$Theme$Theme = $elm$core$Basics$identity;
var $orus_io$elm_orus_ui$OUI$Material$Color$lightFromKeyColors = function (keyColors) {
	return {
		ez: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 98, keyColors.i),
		jn: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 40, keyColors.jn),
		jo: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 90, keyColors.jn),
		e2: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 95, keyColors.i),
		e3: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 80, keyColors.y),
		e4: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 20, keyColors.i),
		cO: keyColors,
		fn: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 10, keyColors.i),
		kk: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 100, keyColors.jn),
		bT: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 10, keyColors.jn),
		dW: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 100, keyColors.y),
		bV: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 10, keyColors.y),
		dX: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 100, keyColors.ag),
		bX: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 10, keyColors.ag),
		kp: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 10, keyColors.i),
		bY: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 30, keyColors.aC),
		dY: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 100, keyColors.Z),
		bZ: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 10, keyColors.Z),
		ku: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 50, keyColors.aC),
		hw: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 80, keyColors.aC),
		y: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 40, keyColors.y),
		kx: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 90, keyColors.y),
		fK: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 0, keyColors.i),
		ag: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 40, keyColors.ag),
		b2: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 90, keyColors.ag),
		kT: A2(
			$orus_io$elm_orus_ui$OUI$Material$Color$setAlpha,
			0.16,
			A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 0, keyColors.i)),
		k3: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 98, keyColors.i),
		fV: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 98, keyColors.i),
		b7: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 94, keyColors.i),
		k4: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 92, keyColors.i),
		eh: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 90, keyColors.i),
		k5: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 96, keyColors.i),
		ei: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 100, keyColors.i),
		fW: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 87, keyColors.i),
		fX: keyColors.y,
		ej: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 90, keyColors.aC),
		Z: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 40, keyColors.Z),
		b8: A2($orus_io$elm_orus_ui$OUI$Material$Color$tone, 90, keyColors.Z)
	};
};
var $orus_io$elm_orus_ui$OUI$Material$Color$defaultLightScheme = $orus_io$elm_orus_ui$OUI$Material$Color$lightFromKeyColors($orus_io$elm_orus_ui$OUI$Material$Color$defaultKeyColors);
var $orus_io$elm_orus_ui$OUI$Error = {$: 8};
var $orus_io$elm_orus_ui$OUI$Text$Label = 3;
var $orus_io$elm_orus_ui$OUI$Text$OnColor = function (a) {
	return {$: 2, a: a};
};
var $orus_io$elm_orus_ui$OUI$Text$Small = 0;
var $orus_io$elm_orus_ui$OUI$Material$Badge$defaultTheme = {
	bC: $orus_io$elm_orus_ui$OUI$Error,
	au: {
		ft: 4,
		d2: _Utils_Tuple2(6, 14),
		eg: 8,
		bp: 16,
		h3: $orus_io$elm_orus_ui$OUI$Text$OnColor($orus_io$elm_orus_ui$OUI$Error),
		h4: 0,
		h5: 3
	},
	b3: {
		d2: _Utils_Tuple2(6, 6),
		eg: 3,
		bp: 6
	}
};
var $orus_io$elm_orus_ui$OUI$Text$Large = 2;
var $orus_io$elm_orus_ui$OUI$Material$Button$defaultTheme = {
	l: {aN: 40, dC: 20, E: 18, dR: 16, dS: 24, d$: 8, d7: 16, h4: 2, h5: 3},
	ar: {
		dK: {aN: 56, dC: 16, E: 24, dR: 16, dS: 24, d$: 8, d7: 16, h4: 2, h5: 3},
		au: {aN: 96, cu: 28, cw: 96, E: 36},
		hb: {aN: 56, cu: 16, cw: 56, E: 24},
		b3: {aN: 40, cu: 12, cw: 40, E: 24}
	},
	gV: {cv: 40, E: 24}
};
var $orus_io$elm_orus_ui$OUI$Material$Checkbox$defaultTheme = {aN: 18, cu: 2, cw: 18, E: 18, db: 40};
var $orus_io$elm_orus_ui$OUI$Icon$Html = function (a) {
	return {$: 1, a: a};
};
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $orus_io$elm_orus_ui$OUI$Icon$Icon = $elm$core$Basics$identity;
var $orus_io$elm_orus_ui$OUI$Icon$fromRenderer = function (renderer) {
	return {bC: $elm$core$Maybe$Nothing, hK: renderer, bp: $elm$core$Maybe$Nothing};
};
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $avh4$elm_color$Color$toCssString = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	var roundTo = function (x) {
		return $elm$core$Basics$round(x * 1000) / 1000;
	};
	var pct = function (x) {
		return $elm$core$Basics$round(x * 10000) / 100;
	};
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'rgba(',
				$elm$core$String$fromFloat(
				pct(r)),
				'%,',
				$elm$core$String$fromFloat(
				pct(g)),
				'%,',
				$elm$core$String$fromFloat(
				pct(b)),
				'%,',
				$elm$core$String$fromFloat(
				roundTo(a)),
				')'
			]));
};
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $orus_io$elm_orus_ui$OUI$Icon$clear = $orus_io$elm_orus_ui$OUI$Icon$fromRenderer(
	$orus_io$elm_orus_ui$OUI$Icon$Html(
		F2(
			function (size, color) {
				var sizeAsString = $elm$core$String$fromInt(size);
				return A2(
					$elm$svg$Svg$svg,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$viewBox('0 0 24 24'),
							$elm$svg$Svg$Attributes$height(sizeAsString),
							$elm$svg$Svg$Attributes$width(sizeAsString)
						]),
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$g,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$fill(
									$avh4$elm_color$Color$toCssString(color))
								]),
							_List_fromArray(
								[
									A2(
									$elm$svg$Svg$path,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$d('M0 0h24v24H0V0z'),
											$elm$svg$Svg$Attributes$fill('none')
										]),
									_List_Nil),
									A2(
									$elm$svg$Svg$path,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$d('M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z')
										]),
									_List_Nil)
								]))
						]));
			})));
var $orus_io$elm_orus_ui$OUI$Material$Dialog$defaultTheme = {
	cu: 28,
	cw: {ha: 560, fh: 280},
	eS: $orus_io$elm_orus_ui$OUI$Icon$clear,
	E: 24,
	ft: 24,
	fu: 24,
	fv: 8,
	fy: 16,
	d0: 16
};
var $orus_io$elm_orus_ui$OUI$Material$Divider$defaultTheme = {f4: 1};
var $orus_io$elm_orus_ui$OUI$Material$Menu$defaultTheme = {E: 24, e5: 48, dS: 12, ff: 280, fi: 112, fB: 12, fI: 4, ep: 8};
var $orus_io$elm_orus_ui$OUI$Material$Navigation$defaultTheme = {
	r: {ay: 56, ce: 12, bw: 28, ap: 336, eA: 16, cw: 360, E: 24, bP: 28, d$: 0, d6: 28},
	u: {ay: 32, bw: 16, ap: 56, eB: $orus_io$elm_orus_ui$OUI$Material$Badge$defaultTheme, cw: 80, eL: 56, E: 24, d_: 12, fw: 12, fC: 4}
};
var $orus_io$elm_orus_ui$OUI$Material$Progress$defaultTheme = {
	ao: {f4: 4},
	be: 48,
	D: {f4: 4}
};
var $orus_io$elm_orus_ui$OUI$Material$RadioButton$defaultTheme = {dv: 2, aN: 20, cu: 10, cw: 20, dG: 10, db: 40};
var $orus_io$elm_orus_ui$OUI$Material$Slider$defaultTheme = {bN: 44, aB: 4, g4: 44, g5: 48, Y: 16};
var $orus_io$elm_orus_ui$OUI$Material$Switch$defaultTheme = {
	gV: {hX: 16, hY: 16},
	b6: {bp: 40},
	ln: {
		bp: {b0: 28, fL: 24, ia: 16, im: 24}
	},
	a9: {gv: 16, gP: 32, fs: 2, ij: 52}
};
var $orus_io$elm_orus_ui$OUI$Primary = {$: 0};
var $orus_io$elm_orus_ui$OUI$Text$Title = 2;
var $orus_io$elm_orus_ui$OUI$Material$Tabs$defaultTheme = {
	bC: {fL: $orus_io$elm_orus_ui$OUI$Primary},
	fx: 4,
	fz: 8,
	fA: 4,
	y: {ay: 3, ap: 36, aN: 64},
	ag: {ay: 2, aN: 48},
	p: {bp: 0, v: 2}
};
var $orus_io$elm_orus_ui$OUI$Material$TextField$defaultTheme = {
	bM: {ep: 8},
	gP: 56,
	E: 24,
	bj: 12,
	aQ: 16,
	c_: {jW: 8, fa: 4, eg: 4},
	fx: 16,
	hx: 16,
	fU: 4
};
var $orus_io$elm_orus_ui$OUI$Material$Theme$defaultTypescale = {
	iS: {
		au: {jx: 'Roboto', j0: 24, bp: 16, S: 0.5, cc: 400},
		hb: {jx: 'Roboto', j0: 20, bp: 14, S: 0.25, cc: 400},
		b3: {jx: 'Roboto', j0: 16, bp: 12, S: 0.4, cc: 400}
	},
	gA: {
		au: {jx: 'Roboto', j0: 54, bp: 47, S: -0.125, cc: 400},
		hb: {jx: 'Roboto', j0: 53, bp: 45, S: 0, cc: 400},
		b3: {jx: 'Roboto', j0: 44, bp: 36, S: 0, cc: 400}
	},
	gO: {
		au: {jx: 'Roboto', j0: 40, bp: 32, S: 0, cc: 400},
		hb: {jx: 'Roboto', j0: 36, bp: 28, S: 0, cc: 400},
		b3: {jx: 'Roboto', j0: 32, bp: 24, S: 0, cc: 400}
	},
	bO: {
		au: {jx: 'Roboto', j0: 20, bp: 14, S: 0.1, cc: 500},
		hb: {jx: 'Roboto', j0: 16, bp: 12, S: 0.5, cc: 500},
		b3: {jx: 'Roboto', j0: 16, bp: 11, S: 0.5, cc: 500}
	},
	lo: {
		au: {jx: 'Roboto', j0: 26, bp: 22, S: 0, cc: 400},
		hb: {jx: 'Roboto', j0: 24, bp: 16, S: 0.15, cc: 500},
		b3: {jx: 'Roboto', j0: 20, bp: 14, S: 0.1, cc: 500}
	}
};
var $orus_io$elm_orus_ui$OUI$Material$Theme$defaultTheme = {iN: $orus_io$elm_orus_ui$OUI$Material$Badge$defaultTheme, go: $orus_io$elm_orus_ui$OUI$Material$Button$defaultTheme, cr: $orus_io$elm_orus_ui$OUI$Material$Checkbox$defaultTheme, ct: $orus_io$elm_orus_ui$OUI$Material$Color$defaultLightScheme, cD: $orus_io$elm_orus_ui$OUI$Material$Dialog$defaultTheme, cE: $orus_io$elm_orus_ui$OUI$Material$Divider$defaultTheme, eR: 0, hc: $orus_io$elm_orus_ui$OUI$Material$Menu$defaultTheme, cV: $orus_io$elm_orus_ui$OUI$Material$Navigation$defaultTheme, c0: $orus_io$elm_orus_ui$OUI$Material$Progress$defaultTheme, c2: $orus_io$elm_orus_ui$OUI$Material$RadioButton$defaultTheme, c9: $orus_io$elm_orus_ui$OUI$Material$Slider$defaultTheme, dd: $orus_io$elm_orus_ui$OUI$Material$Switch$defaultTheme, df: $orus_io$elm_orus_ui$OUI$Material$Tabs$defaultTheme, dh: $orus_io$elm_orus_ui$OUI$Material$TextField$defaultTheme, dn: $orus_io$elm_orus_ui$OUI$Material$Theme$defaultTypescale};
var $author$project$UI$typescale = function () {
	var base = $orus_io$elm_orus_ui$OUI$Material$Theme$defaultTypescale;
	var display = base.gA;
	var displayMedium = display.hb;
	return _Utils_update(
		base,
		{
			gA: _Utils_update(
				display,
				{
					hb: _Utils_update(
						displayMedium,
						{jx: 'Expletus sans'})
				})
		});
}();
var $orus_io$elm_orus_ui$OUI$Material$Theme$withColorscheme = F2(
	function (value, _v0) {
		var t = _v0;
		return _Utils_update(
			t,
			{ct: value});
	});
var $orus_io$elm_orus_ui$OUI$Material$Theme$withTypescale = F2(
	function (value, _v0) {
		var t = _v0;
		return _Utils_update(
			t,
			{dn: value});
	});
var $author$project$UI$theme = A2(
	$orus_io$elm_orus_ui$OUI$Material$Theme$withColorscheme,
	$orus_io$elm_orus_ui$OUI$Material$Color$defaultDarkScheme,
	A2($orus_io$elm_orus_ui$OUI$Material$Theme$withTypescale, $author$project$UI$typescale, $orus_io$elm_orus_ui$OUI$Material$Theme$defaultTheme));
var $mdgriffith$elm_ui$Internal$Model$BorderWidth = F5(
	function (a, b, c, d, e) {
		return {$: 6, a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Element$Border$width = function (v) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + $elm$core$String$fromInt(v),
			v,
			v,
			v,
			v));
};
var $author$project$Main$infoPanel = function (model) {
	var scheme = $orus_io$elm_orus_ui$OUI$Material$Theme$colorscheme($author$project$UI$theme);
	var isOnline = function () {
		var _v0 = model.ef;
		if (_v0.$ === 1) {
			return false;
		} else {
			return true;
		}
	}();
	var panelAttr = isOnline ? _List_fromArray(
		[
			$mdgriffith$elm_ui$Element$Background$color(
			A3($mdgriffith$elm_ui$Element$rgb255, 27, 130, 47))
		]) : _List_fromArray(
		[
			$mdgriffith$elm_ui$Element$Background$color(
			$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(scheme.jo))
		]);
	return A2(
		$mdgriffith$elm_ui$Element$el,
		_Utils_ap(
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Border$rounded(10),
					$mdgriffith$elm_ui$Element$Border$color(
					$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(scheme.hw)),
					$mdgriffith$elm_ui$Element$Border$width(1),
					$mdgriffith$elm_ui$Element$paddingEach(
					{cp: 6, cR: 18, c3: 10, dk: 6}),
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(100))
				]),
			panelAttr),
		A2(
			$orus_io$elm_orus_ui$OUI$Material$text,
			$author$project$UI$theme,
			$orus_io$elm_orus_ui$OUI$Text$bodyMedium(
				isOnline ? 'Online' : 'Offline')));
};
var $mdgriffith$elm_ui$Internal$Model$Fill = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
var $mdgriffith$elm_ui$Internal$Model$FocusStyleOption = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Element$focusStyle = $mdgriffith$elm_ui$Internal$Model$FocusStyleOption;
var $mdgriffith$elm_ui$Element$htmlAttribute = $mdgriffith$elm_ui$Internal$Model$Attr;
var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$AllowHover = 1;
var $mdgriffith$elm_ui$Internal$Model$Layout = 0;
var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
	iK: $elm$core$Maybe$Nothing,
	iU: $elm$core$Maybe$Nothing,
	kT: $elm$core$Maybe$Just(
		{
			bB: 0,
			bC: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			e: _Utils_Tuple2(0, 0),
			bp: 3
		})
};
var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 0:
					var hoverable = opt.a;
					var _v4 = record.jG;
					if (_v4.$ === 1) {
						return _Utils_update(
							record,
							{
								jG: $elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 1:
					var focusStyle = opt.a;
					var _v5 = record.jw;
					if (_v5.$ === 1) {
						return _Utils_update(
							record,
							{
								jw: $elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _v6 = record.j6;
					if (_v6.$ === 1) {
						return _Utils_update(
							record,
							{
								j6: $elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			jw: function () {
				var _v0 = record.jw;
				if (_v0.$ === 1) {
					return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _v0.a;
					return focusable;
				}
			}(),
			jG: function () {
				var _v1 = record.jG;
				if (_v1.$ === 1) {
					return 1;
				} else {
					var hoverable = _v1.a;
					return hoverable;
				}
			}(),
			j6: function () {
				var _v2 = record.j6;
				if (_v2.$ === 1) {
					return 0;
				} else {
					var actualMode = _v2.a;
					return actualMode;
				}
			}()
		};
	};
	return andFinally(
		A3(
			$elm$core$List$foldr,
			combine,
			{jw: $elm$core$Maybe$Nothing, jG: $elm$core$Maybe$Nothing, j6: $elm$core$Maybe$Nothing},
			options));
};
var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 0:
				var html = el.a;
				return html($mdgriffith$elm_ui$Internal$Model$asEl);
			case 1:
				var styles = el.a.h0;
				var html = el.a.e_;
				return A2(
					html,
					mode(styles),
					$mdgriffith$elm_ui$Internal$Model$asEl);
			case 2:
				var text = el.a;
				return $mdgriffith$elm_ui$Internal$Model$textElement(text);
			default:
				return $mdgriffith$elm_ui$Internal$Model$textElement('');
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderRoot = F3(
	function (optionList, attributes, child) {
		var options = $mdgriffith$elm_ui$Internal$Model$optionsToRecord(optionList);
		var embedStyle = function () {
			var _v0 = options.j6;
			if (_v0 === 1) {
				return $mdgriffith$elm_ui$Internal$Model$OnlyDynamic(options);
			} else {
				return $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic(options);
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Internal$Model$toHtml,
			embedStyle,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				attributes,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[child]))));
	});
var $mdgriffith$elm_ui$Internal$Model$SansSerif = {$: 1};
var $mdgriffith$elm_ui$Internal$Model$rootStyle = function () {
	var families = _List_fromArray(
		[
			$mdgriffith$elm_ui$Internal$Model$Typeface('Open Sans'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Helvetica'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Verdana'),
			$mdgriffith$elm_ui$Internal$Model$SansSerif
		]);
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$bgColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)),
				'background-color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)),
				'color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontSize,
			$mdgriffith$elm_ui$Internal$Model$FontSize(20)),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontFamily,
			A2(
				$mdgriffith$elm_ui$Internal$Model$FontFamily,
				A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'font-', families),
				families))
		]);
}();
var $mdgriffith$elm_ui$Element$layoutWith = F3(
	function (_v0, attrs, child) {
		var options = _v0.ks;
		return A3(
			$mdgriffith$elm_ui$Internal$Model$renderRoot,
			options,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass(
					A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							[$mdgriffith$elm_ui$Internal$Style$classes.kJ, $mdgriffith$elm_ui$Internal$Style$classes.iF, $mdgriffith$elm_ui$Internal$Style$classes.kU]))),
				_Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)),
			child);
	});
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $author$project$UI$layout = function () {
	var scheme = $orus_io$elm_orus_ui$OUI$Material$Theme$colorscheme($author$project$UI$theme);
	return A2(
		$mdgriffith$elm_ui$Element$layoutWith,
		{
			ks: _List_fromArray(
				[
					$mdgriffith$elm_ui$Element$focusStyle(
					{iK: $elm$core$Maybe$Nothing, iU: $elm$core$Maybe$Nothing, kT: $elm$core$Maybe$Nothing})
				])
		},
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$Background$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(scheme.k3)),
				$mdgriffith$elm_ui$Element$Font$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(scheme.kp)),
				$mdgriffith$elm_ui$Element$htmlAttribute(
				A2($elm$html$Html$Attributes$style, '-webkit-tap-highlight-color', 'transparent'))
			]));
}();
var $author$project$Main$AtSea = 8;
var $mdgriffith$elm_animator$Internal$Interpolate$Specified = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_animator$Internal$Interpolate$Oscillate = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $mdgriffith$elm_animator$Internal$Interpolate$Position = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_animator$Internal$Interpolate$PartialDefault = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_animator$Internal$Interpolate$Default = {$: 0};
var $mdgriffith$elm_animator$Internal$Interpolate$emptyDefaults = {iH: $mdgriffith$elm_animator$Internal$Interpolate$Default, iI: $mdgriffith$elm_animator$Internal$Interpolate$Default, jg: $mdgriffith$elm_animator$Internal$Interpolate$Default, jh: $mdgriffith$elm_animator$Internal$Interpolate$Default, lz: $mdgriffith$elm_animator$Internal$Interpolate$Default};
var $mdgriffith$elm_animator$Animator$withDefault = F2(
	function (toDef, currentDefault) {
		if (!currentDefault.$) {
			return $mdgriffith$elm_animator$Internal$Interpolate$PartialDefault(
				toDef($mdgriffith$elm_animator$Internal$Interpolate$emptyDefaults));
		} else {
			var thing = currentDefault.a;
			return $mdgriffith$elm_animator$Internal$Interpolate$PartialDefault(
				toDef(thing));
		}
	});
var $mdgriffith$elm_animator$Animator$applyOption = F2(
	function (toOption, movement) {
		if (movement.$ === 1) {
			var personality = movement.a;
			var pos = movement.b;
			return A2(
				$mdgriffith$elm_animator$Internal$Interpolate$Position,
				A2($mdgriffith$elm_animator$Animator$withDefault, toOption, personality),
				pos);
		} else {
			var personality = movement.a;
			var dur = movement.b;
			var fn = movement.c;
			return A3(
				$mdgriffith$elm_animator$Internal$Interpolate$Oscillate,
				A2($mdgriffith$elm_animator$Animator$withDefault, toOption, personality),
				dur,
				fn);
		}
	});
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $mdgriffith$elm_animator$Animator$arriveSmoothly = F2(
	function (s, movement) {
		return A2(
			$mdgriffith$elm_animator$Animator$applyOption,
			function (def) {
				return _Utils_update(
					def,
					{
						iI: $mdgriffith$elm_animator$Internal$Interpolate$Specified(
							A3($elm$core$Basics$clamp, 0, 1, s))
					});
			},
			movement);
	});
var $mdgriffith$elm_animator$Internal$Interpolate$FullDefault = {$: 0};
var $mdgriffith$elm_animator$Animator$at = $mdgriffith$elm_animator$Internal$Interpolate$Position($mdgriffith$elm_animator$Internal$Interpolate$FullDefault);
var $mdgriffith$elm_animator$Animator$leaveSmoothly = F2(
	function (s, movement) {
		return A2(
			$mdgriffith$elm_animator$Animator$applyOption,
			function (def) {
				return _Utils_update(
					def,
					{
						jh: $mdgriffith$elm_animator$Internal$Interpolate$Specified(
							A3($elm$core$Basics$clamp, 0, 1, s))
					});
			},
			movement);
	});
var $avh4$elm_color$Color$darkGreen = A4($avh4$elm_color$Color$RgbaSpace, 78 / 255, 154 / 255, 6 / 255, 1.0);
var $elm$svg$Svg$Attributes$fillOpacity = _VirtualDom_attribute('fill-opacity');
var $elm$svg$Svg$Attributes$fontSize = _VirtualDom_attribute('font-size');
var $elm$svg$Svg$Attributes$points = _VirtualDom_attribute('points');
var $elm$svg$Svg$polygon = $elm$svg$Svg$trustedNode('polygon');
var $elm$svg$Svg$text = $elm$virtual_dom$VirtualDom$text;
var $elm$svg$Svg$text_ = $elm$svg$Svg$trustedNode('text');
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var $avh4$elm_color$Color$yellow = A4($avh4$elm_color$Color$RgbaSpace, 237 / 255, 212 / 255, 0 / 255, 1.0);
var $author$project$UI$vessel = F3(
	function (name, direction, pos) {
		var xForm = $elm$core$String$concat(
			_List_fromArray(
				[
					'translate (',
					$elm$core$String$fromInt(
					$elm$core$Basics$round(pos.$9 - 12)),
					' ',
					$elm$core$String$fromInt(
					$elm$core$Basics$round(pos.io - 12)),
					')'
				]));
		var points = function () {
			if (direction === 1) {
				return '2,2 22,12 2,22';
			} else {
				return '22,2 2,12 22,22';
			}
		}();
		return A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$transform(xForm)
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$polygon,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$points(points),
							$elm$svg$Svg$Attributes$fill(
							$avh4$elm_color$Color$toCssString($avh4$elm_color$Color$darkGreen)),
							$elm$svg$Svg$Attributes$fillOpacity('.8')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$text_,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$y('45'),
							$elm$svg$Svg$Attributes$x('-24'),
							$elm$svg$Svg$Attributes$fill(
							$avh4$elm_color$Color$toCssString($avh4$elm_color$Color$yellow)),
							$elm$svg$Svg$Attributes$fontSize('.6em')
						]),
					_List_fromArray(
						[
							$elm$svg$Svg$text(name)
						]))
				]));
	});
var $author$project$Main$AChamberHigh = 2;
var $author$project$Main$AChamberLow = 3;
var $author$project$Main$BChamberHigh = 4;
var $author$project$Main$BChamberLow = 5;
var $author$project$Main$LowerEntry = 7;
var $author$project$Main$LowerGate = 6;
var $author$project$Util$Position = F2(
	function (x, y) {
		return {$9: x, io: y};
	});
var $author$project$Main$UpperEntry = 0;
var $author$project$Main$UpperGate = 1;
var $author$project$Main$wetsTwo = {
	eN: _List_fromArray(
		[0, 1, 4, 5, 2, 3, 7]),
	f5: function (tstate) {
		switch (tstate) {
			case 7:
				return A2($author$project$Util$Position, 650.0, 120.0);
			case 6:
				return A2($author$project$Util$Position, 525.0, 120.0);
			case 3:
				return A2($author$project$Util$Position, 375.0, 120.0);
			case 2:
				return A2($author$project$Util$Position, 375.0, 80.0);
			case 5:
				return A2($author$project$Util$Position, 225.0, 80.0);
			case 4:
				return A2($author$project$Util$Position, 225.0, 40.0);
			case 1:
				return A2($author$project$Util$Position, 75.0, 40.0);
			case 0:
				return A2($author$project$Util$Position, -70.0, 40.0);
			default:
				return A2($author$project$Util$Position, 0.0, 0.0);
		}
	},
	f8: _List_fromArray(
		[7, 6, 3, 2, 5, 4, 0])
};
var $ianmackenzie$elm_units$Quantity$greaterThan = F2(
	function (_v0, _v1) {
		var y = _v0;
		var x = _v1;
		return _Utils_cmp(x, y) > 0;
	});
var $mdgriffith$elm_animator$Internal$Time$inMilliseconds = function (_v0) {
	var ms = _v0;
	return ms;
};
var $ianmackenzie$elm_units$Duration$seconds = function (numSeconds) {
	return numSeconds;
};
var $ianmackenzie$elm_units$Duration$milliseconds = function (numMilliseconds) {
	return $ianmackenzie$elm_units$Duration$seconds(0.001 * numMilliseconds);
};
var $mdgriffith$elm_animator$Internal$Time$duration = F2(
	function (one, two) {
		return A2($ianmackenzie$elm_units$Quantity$greaterThan, two, one) ? $ianmackenzie$elm_units$Duration$milliseconds(
			A2(
				$elm$core$Basics$max,
				0,
				$mdgriffith$elm_animator$Internal$Time$inMilliseconds(one) - $mdgriffith$elm_animator$Internal$Time$inMilliseconds(two))) : $ianmackenzie$elm_units$Duration$milliseconds(
			A2(
				$elm$core$Basics$max,
				0,
				$mdgriffith$elm_animator$Internal$Time$inMilliseconds(two) - $mdgriffith$elm_animator$Internal$Time$inMilliseconds(one)));
	});
var $mdgriffith$elm_animator$Internal$Timeline$adjustTime = F4(
	function (lookup, getPersonality, unmodified, upcomingOccurring) {
		var event = unmodified.a;
		var start = unmodified.b;
		var eventEnd = unmodified.c;
		if (!upcomingOccurring.b) {
			return unmodified;
		} else {
			var _v1 = upcomingOccurring.a;
			var next = _v1.a;
			var nextStartTime = _v1.b;
			var personality = getPersonality(
				lookup(event));
			if (!(!personality.jg)) {
				var totalDuration = A2($mdgriffith$elm_animator$Internal$Time$duration, eventEnd, nextStartTime);
				var nextPersonality = getPersonality(
					lookup(next));
				var totalPortions = A2($elm$core$Basics$max, personality.jg + nextPersonality.iH, 1);
				var lateBy = A2($ianmackenzie$elm_units$Quantity$multiplyBy, personality.jg / totalPortions, totalDuration);
				return A3(
					$mdgriffith$elm_animator$Internal$Timeline$Occurring,
					event,
					start,
					A2($mdgriffith$elm_animator$Internal$Time$advanceBy, lateBy, eventEnd));
			} else {
				return unmodified;
			}
		}
	});
var $ianmackenzie$elm_units$Quantity$minus = F2(
	function (_v0, _v1) {
		var y = _v0;
		var x = _v1;
		return x - y;
	});
var $mdgriffith$elm_animator$Internal$Time$rollbackBy = F2(
	function (dur, time) {
		return A2(
			$ianmackenzie$elm_units$Quantity$minus,
			$ianmackenzie$elm_units$Duration$inMilliseconds(dur),
			time);
	});
var $mdgriffith$elm_animator$Internal$Time$zeroDuration = function (_v0) {
	var dur = _v0;
	return !dur;
};
var $mdgriffith$elm_animator$Internal$Timeline$adjustTimeWithPrevious = F5(
	function (lookup, getPersonality, _v0, unmodified, upcomingOccurring) {
		var prev = _v0.a;
		var prevStart = _v0.b;
		var prevEnd = _v0.c;
		var event = unmodified.a;
		var start = unmodified.b;
		var eventEnd = unmodified.c;
		var totalPrevDuration = A2($mdgriffith$elm_animator$Internal$Time$duration, prevEnd, start);
		var prevPersonality = getPersonality(
			lookup(prev));
		var personality = getPersonality(
			lookup(event));
		var totalPrevPortions = A2($elm$core$Basics$max, prevPersonality.jg + personality.iH, 1);
		var earlyBy = A2($ianmackenzie$elm_units$Quantity$multiplyBy, personality.iH / totalPrevPortions, totalPrevDuration);
		if (!upcomingOccurring.b) {
			return $mdgriffith$elm_animator$Internal$Time$zeroDuration(earlyBy) ? unmodified : A3(
				$mdgriffith$elm_animator$Internal$Timeline$Occurring,
				event,
				A2($mdgriffith$elm_animator$Internal$Time$rollbackBy, earlyBy, start),
				eventEnd);
		} else {
			var _v2 = upcomingOccurring.a;
			var next = _v2.a;
			var nextStartTime = _v2.b;
			if (!(!personality.jg)) {
				var totalDuration = A2($mdgriffith$elm_animator$Internal$Time$duration, eventEnd, nextStartTime);
				var nextPersonality = getPersonality(
					lookup(next));
				var totalPortions = A2($elm$core$Basics$max, personality.jg + nextPersonality.iH, 1);
				var lateBy = A2($ianmackenzie$elm_units$Quantity$multiplyBy, personality.jg / totalPortions, totalDuration);
				return A3(
					$mdgriffith$elm_animator$Internal$Timeline$Occurring,
					event,
					A2($mdgriffith$elm_animator$Internal$Time$rollbackBy, earlyBy, start),
					A2($mdgriffith$elm_animator$Internal$Time$advanceBy, lateBy, eventEnd));
			} else {
				if ($mdgriffith$elm_animator$Internal$Time$zeroDuration(earlyBy)) {
					return unmodified;
				} else {
					return A3(
						$mdgriffith$elm_animator$Internal$Timeline$Occurring,
						event,
						A2($mdgriffith$elm_animator$Internal$Time$rollbackBy, earlyBy, start),
						eventEnd);
				}
			}
		}
	});
var $mdgriffith$elm_animator$Internal$Timeline$hasDwell = function (_v0) {
	var start = _v0.b;
	var end = _v0.c;
	return !(!(start - end));
};
var $mdgriffith$elm_animator$Internal$Timeline$createLookAhead = F4(
	function (fn, lookup, currentEvent, upcomingEvents) {
		if (!upcomingEvents.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var unadjustedUpcoming = upcomingEvents.a;
			var remain = upcomingEvents.b;
			var upcomingOccurring = A5($mdgriffith$elm_animator$Internal$Timeline$adjustTimeWithPrevious, lookup, fn.eu, currentEvent, unadjustedUpcoming, remain);
			return $elm$core$Maybe$Just(
				{
					iD: lookup(
						$mdgriffith$elm_animator$Internal$Timeline$getEvent(upcomingOccurring)),
					kF: $mdgriffith$elm_animator$Internal$Timeline$hasDwell(upcomingOccurring),
					h6: $mdgriffith$elm_animator$Internal$Time$inMilliseconds(
						$mdgriffith$elm_animator$Internal$Timeline$startTime(upcomingOccurring))
				});
		}
	});
var $mdgriffith$elm_animator$Internal$Timeline$overLines = F7(
	function (fn, lookup, details, maybePreviousEvent, _v0, futureLines, state) {
		overLines:
		while (true) {
			var lineStart = _v0.a;
			var unadjustedStartEvent = _v0.b;
			var lineRemain = _v0.c;
			var transition = function (newState) {
				if (!futureLines.b) {
					return newState;
				} else {
					var future = futureLines.a;
					var futureStart = future.a;
					var futureStartEv = future.b;
					var futureRemain = future.c;
					var restOfFuture = futureLines.b;
					return A2($mdgriffith$elm_animator$Internal$Time$thisBeforeOrEqualThat, futureStart, details.fk) ? A7($mdgriffith$elm_animator$Internal$Timeline$overLines, fn, lookup, details, $elm$core$Maybe$Nothing, future, restOfFuture, newState) : newState;
				}
			};
			var now = function () {
				if (!futureLines.b) {
					return details.fk;
				} else {
					var _v5 = futureLines.a;
					var futureStart = _v5.a;
					var futureStartEv = _v5.b;
					var futureRemain = _v5.c;
					var restOfFuture = futureLines.b;
					return A2($mdgriffith$elm_animator$Internal$Time$thisBeforeThat, futureStart, details.fk) ? futureStart : details.fk;
				}
			}();
			var lineStartEv = function () {
				if (maybePreviousEvent.$ === 1) {
					return A4($mdgriffith$elm_animator$Internal$Timeline$adjustTime, lookup, fn.eu, unadjustedStartEvent, lineRemain);
				} else {
					var prev = maybePreviousEvent.a;
					return A5($mdgriffith$elm_animator$Internal$Timeline$adjustTimeWithPrevious, lookup, fn.eu, prev, unadjustedStartEvent, lineRemain);
				}
			}();
			if (A2(
				$mdgriffith$elm_animator$Internal$Time$thisBeforeThat,
				now,
				$mdgriffith$elm_animator$Internal$Timeline$startTime(lineStartEv))) {
				return transition(
					A7(
						fn.fd,
						$mdgriffith$elm_animator$Internal$Time$inMilliseconds(lineStart),
						$elm$core$Maybe$Just(
							lookup(details.gX)),
						lookup(
							$mdgriffith$elm_animator$Internal$Timeline$getEvent(lineStartEv)),
						$mdgriffith$elm_animator$Internal$Time$inMilliseconds(
							$mdgriffith$elm_animator$Internal$Timeline$startTime(lineStartEv)),
						$mdgriffith$elm_animator$Internal$Time$inMilliseconds(now),
						A4($mdgriffith$elm_animator$Internal$Timeline$createLookAhead, fn, lookup, unadjustedStartEvent, lineRemain),
						state));
			} else {
				if (A2(
					$mdgriffith$elm_animator$Internal$Time$thisBeforeThat,
					now,
					$mdgriffith$elm_animator$Internal$Timeline$endTime(lineStartEv))) {
					return transition(
						A5(
							fn.ga,
							lookup,
							lineStartEv,
							now,
							A4($mdgriffith$elm_animator$Internal$Timeline$createLookAhead, fn, lookup, unadjustedStartEvent, lineRemain),
							state));
				} else {
					if (!lineRemain.b) {
						return transition(
							A5(fn.ga, lookup, lineStartEv, now, $elm$core$Maybe$Nothing, state));
					} else {
						var unadjustedNext = lineRemain.a;
						var lineRemain2 = lineRemain.b;
						var next = A5($mdgriffith$elm_animator$Internal$Timeline$adjustTimeWithPrevious, lookup, fn.eu, unadjustedStartEvent, unadjustedNext, lineRemain2);
						if (A2(
							$mdgriffith$elm_animator$Internal$Time$thisBeforeThat,
							now,
							$mdgriffith$elm_animator$Internal$Timeline$startTime(next))) {
							return transition(
								A7(
									fn.fd,
									$mdgriffith$elm_animator$Internal$Time$inMilliseconds(
										$mdgriffith$elm_animator$Internal$Timeline$endTime(lineStartEv)),
									$elm$core$Maybe$Just(
										lookup(
											$mdgriffith$elm_animator$Internal$Timeline$getEvent(lineStartEv))),
									lookup(
										$mdgriffith$elm_animator$Internal$Timeline$getEvent(next)),
									$mdgriffith$elm_animator$Internal$Time$inMilliseconds(
										$mdgriffith$elm_animator$Internal$Timeline$startTime(next)),
									$mdgriffith$elm_animator$Internal$Time$inMilliseconds(now),
									A4($mdgriffith$elm_animator$Internal$Timeline$createLookAhead, fn, lookup, unadjustedNext, lineRemain2),
									A5(
										fn.ga,
										lookup,
										lineStartEv,
										now,
										A4($mdgriffith$elm_animator$Internal$Timeline$createLookAhead, fn, lookup, unadjustedStartEvent, lineRemain),
										state)));
						} else {
							if (A2(
								$mdgriffith$elm_animator$Internal$Time$thisBeforeThat,
								now,
								$mdgriffith$elm_animator$Internal$Timeline$endTime(next))) {
								return transition(
									A5(
										fn.ga,
										lookup,
										next,
										now,
										A4($mdgriffith$elm_animator$Internal$Timeline$createLookAhead, fn, lookup, unadjustedNext, lineRemain2),
										state));
							} else {
								if (!lineRemain2.b) {
									return transition(
										A5(fn.ga, lookup, next, now, $elm$core$Maybe$Nothing, state));
								} else {
									var unadjustedNext2 = lineRemain2.a;
									var lineRemain3 = lineRemain2.b;
									var next2 = A5($mdgriffith$elm_animator$Internal$Timeline$adjustTimeWithPrevious, lookup, fn.eu, unadjustedNext, unadjustedNext2, lineRemain3);
									if (A2(
										$mdgriffith$elm_animator$Internal$Time$thisBeforeThat,
										now,
										$mdgriffith$elm_animator$Internal$Timeline$startTime(next2))) {
										var after = A5(
											fn.ga,
											lookup,
											next,
											now,
											A4($mdgriffith$elm_animator$Internal$Timeline$createLookAhead, fn, lookup, unadjustedNext, lineRemain2),
											state);
										return transition(
											A7(
												fn.fd,
												$mdgriffith$elm_animator$Internal$Time$inMilliseconds(
													$mdgriffith$elm_animator$Internal$Timeline$endTime(next)),
												$elm$core$Maybe$Just(
													lookup(
														$mdgriffith$elm_animator$Internal$Timeline$getEvent(next))),
												lookup(
													$mdgriffith$elm_animator$Internal$Timeline$getEvent(next2)),
												$mdgriffith$elm_animator$Internal$Time$inMilliseconds(
													$mdgriffith$elm_animator$Internal$Timeline$startTime(next2)),
												$mdgriffith$elm_animator$Internal$Time$inMilliseconds(now),
												A4($mdgriffith$elm_animator$Internal$Timeline$createLookAhead, fn, lookup, unadjustedNext2, lineRemain3),
												after));
									} else {
										if (A2(
											$mdgriffith$elm_animator$Internal$Time$thisBeforeThat,
											now,
											$mdgriffith$elm_animator$Internal$Timeline$endTime(next2))) {
											return transition(
												A5(
													fn.ga,
													lookup,
													next2,
													now,
													A4($mdgriffith$elm_animator$Internal$Timeline$createLookAhead, fn, lookup, unadjustedNext2, lineRemain3),
													state));
										} else {
											var after = A5(
												fn.ga,
												lookup,
												next2,
												now,
												A4($mdgriffith$elm_animator$Internal$Timeline$createLookAhead, fn, lookup, unadjustedNext2, lineRemain3),
												state);
											var $temp$fn = fn,
												$temp$lookup = lookup,
												$temp$details = details,
												$temp$maybePreviousEvent = $elm$core$Maybe$Just(next),
												$temp$_v0 = A3(
												$mdgriffith$elm_animator$Internal$Timeline$Line,
												$mdgriffith$elm_animator$Internal$Timeline$endTime(next),
												unadjustedNext2,
												lineRemain3),
												$temp$futureLines = futureLines,
												$temp$state = after;
											fn = $temp$fn;
											lookup = $temp$lookup;
											details = $temp$details;
											maybePreviousEvent = $temp$maybePreviousEvent;
											_v0 = $temp$_v0;
											futureLines = $temp$futureLines;
											state = $temp$state;
											continue overLines;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var $mdgriffith$elm_animator$Internal$Timeline$foldp = F3(
	function (lookup, fn, _v0) {
		var timelineDetails = _v0;
		var _v1 = timelineDetails.jp;
		var timetable = _v1;
		var start = fn.n(
			lookup(timelineDetails.gX));
		if (!timetable.b) {
			return start;
		} else {
			var firstLine = timetable.a;
			var remainingLines = timetable.b;
			return A7($mdgriffith$elm_animator$Internal$Timeline$overLines, fn, lookup, timelineDetails, $elm$core$Maybe$Nothing, firstLine, remainingLines, start);
		}
	});
var $mdgriffith$elm_animator$Internal$Interpolate$dwellPeriod = function (movement) {
	if (movement.$ === 1) {
		return $elm$core$Maybe$Nothing;
	} else {
		var period = movement.b;
		return $elm$core$Maybe$Just(period);
	}
};
var $mdgriffith$elm_animator$Internal$Interpolate$getPersonality = function (m) {
	if (!m.$) {
		var personality = m.a;
		return personality;
	} else {
		var personality = m.a;
		return personality;
	}
};
var $ianmackenzie$elm_units$Pixels$inPixels = function (_v0) {
	var numPixels = _v0;
	return numPixels;
};
var $ianmackenzie$elm_units$Pixels$inPixelsPerSecond = function (_v0) {
	var numPixelsPerSecond = _v0;
	return numPixelsPerSecond;
};
var $mdgriffith$elm_animator$Internal$Interpolate$Spline = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_animator$Internal$Interpolate$zeroPoint = {$9: 0, io: 0};
var $mdgriffith$elm_animator$Internal$Interpolate$createSpline = function (config) {
	var totalX = config.k.$9 - config.n.$9;
	var startVelScale = 1 / (config.b5.$9 / totalX);
	var startVelocity = (!config.cC.jh) ? {$9: 0, io: 0} : (((!(config.b5.$9 - $mdgriffith$elm_animator$Internal$Interpolate$zeroPoint.$9)) && (!(config.b5.io - $mdgriffith$elm_animator$Internal$Interpolate$zeroPoint.io))) ? {$9: totalX * (config.cC.jh * 3), io: 0} : {$9: (startVelScale * config.b5.$9) * (config.cC.jh * 3), io: (startVelScale * config.b5.io) * (config.cC.jh * 3)});
	var endVelScale = 1 / (config.bI.$9 / totalX);
	var endVelocity = (!config.ci.iI) ? {$9: 0, io: 0} : (((!(config.bI.$9 - $mdgriffith$elm_animator$Internal$Interpolate$zeroPoint.$9)) && (!(config.bI.io - $mdgriffith$elm_animator$Internal$Interpolate$zeroPoint.io))) ? {$9: totalX * (config.ci.iI * 3), io: 0} : {$9: (endVelScale * config.bI.$9) * (config.ci.iI * 3), io: (endVelScale * config.bI.io) * (config.ci.iI * 3)});
	return A4(
		$mdgriffith$elm_animator$Internal$Interpolate$Spline,
		config.n,
		{$9: config.n.$9 + ((1 / 3) * startVelocity.$9), io: config.n.io + ((1 / 3) * startVelocity.io)},
		{$9: config.k.$9 + (((-1) / 3) * endVelocity.$9), io: config.k.io + (((-1) / 3) * endVelocity.io)},
		config.k);
};
var $mdgriffith$elm_animator$Internal$Interpolate$findAtXOnSpline = F6(
	function (spline, desiredX, tolerance, jumpSize, t, depth) {
		findAtXOnSpline:
		while (true) {
			var p1 = spline.a;
			var p2 = spline.b;
			var p3 = spline.c;
			var p4 = spline.d;
			var point = function () {
				if (t <= 0.5) {
					var q3 = {$9: p3.$9 + (t * (p4.$9 - p3.$9)), io: p3.io + (t * (p4.io - p3.io))};
					var q2 = {$9: p2.$9 + (t * (p3.$9 - p2.$9)), io: p2.io + (t * (p3.io - p2.io))};
					var r2 = {$9: q2.$9 + (t * (q3.$9 - q2.$9)), io: q2.io + (t * (q3.io - q2.io))};
					var q1 = {$9: p1.$9 + (t * (p2.$9 - p1.$9)), io: p1.io + (t * (p2.io - p1.io))};
					var r1 = {$9: q1.$9 + (t * (q2.$9 - q1.$9)), io: q1.io + (t * (q2.io - q1.io))};
					return {$9: r1.$9 + (t * (r2.$9 - r1.$9)), io: r1.io + (t * (r2.io - r1.io))};
				} else {
					var q3 = {$9: p4.$9 + ((1 - t) * (p3.$9 - p4.$9)), io: p4.io + ((1 - t) * (p3.io - p4.io))};
					var q2 = {$9: p3.$9 + ((1 - t) * (p2.$9 - p3.$9)), io: p3.io + ((1 - t) * (p2.io - p3.io))};
					var r2 = {$9: q3.$9 + ((1 - t) * (q2.$9 - q3.$9)), io: q3.io + ((1 - t) * (q2.io - q3.io))};
					var q1 = {$9: p2.$9 + ((1 - t) * (p1.$9 - p2.$9)), io: p2.io + ((1 - t) * (p1.io - p2.io))};
					var r1 = {$9: q2.$9 + ((1 - t) * (q1.$9 - q2.$9)), io: q2.io + ((1 - t) * (q1.io - q2.io))};
					return {$9: r2.$9 + ((1 - t) * (r1.$9 - r2.$9)), io: r2.io + ((1 - t) * (r1.io - r2.io))};
				}
			}();
			if (depth === 10) {
				return {fG: point, fY: t};
			} else {
				if (($elm$core$Basics$abs(point.$9 - desiredX) < 1) && ($elm$core$Basics$abs(point.$9 - desiredX) >= 0)) {
					return {fG: point, fY: t};
				} else {
					if ((point.$9 - desiredX) > 0) {
						var $temp$spline = spline,
							$temp$desiredX = desiredX,
							$temp$tolerance = tolerance,
							$temp$jumpSize = jumpSize / 2,
							$temp$t = t - jumpSize,
							$temp$depth = depth + 1;
						spline = $temp$spline;
						desiredX = $temp$desiredX;
						tolerance = $temp$tolerance;
						jumpSize = $temp$jumpSize;
						t = $temp$t;
						depth = $temp$depth;
						continue findAtXOnSpline;
					} else {
						var $temp$spline = spline,
							$temp$desiredX = desiredX,
							$temp$tolerance = tolerance,
							$temp$jumpSize = jumpSize / 2,
							$temp$t = t + jumpSize,
							$temp$depth = depth + 1;
						spline = $temp$spline;
						desiredX = $temp$desiredX;
						tolerance = $temp$tolerance;
						jumpSize = $temp$jumpSize;
						t = $temp$t;
						depth = $temp$depth;
						continue findAtXOnSpline;
					}
				}
			}
		}
	});
var $mdgriffith$elm_animator$Internal$Interpolate$interpolateValue = F3(
	function (start, end, t) {
		return (t <= 0.5) ? (start + (t * (end - start))) : (end + ((1 - t) * (start - end)));
	});
var $mdgriffith$elm_animator$Internal$Interpolate$firstDerivativeOnSpline = F2(
	function (_v0, proportion) {
		var p1 = _v0.a;
		var p2 = _v0.b;
		var p3 = _v0.c;
		var p4 = _v0.d;
		var vy3 = p4.io - p3.io;
		var vy2 = p3.io - p2.io;
		var wy2 = A3($mdgriffith$elm_animator$Internal$Interpolate$interpolateValue, vy2, vy3, proportion);
		var vy1 = p2.io - p1.io;
		var wy1 = A3($mdgriffith$elm_animator$Internal$Interpolate$interpolateValue, vy1, vy2, proportion);
		var vx3 = p4.$9 - p3.$9;
		var vx2 = p3.$9 - p2.$9;
		var wx2 = A3($mdgriffith$elm_animator$Internal$Interpolate$interpolateValue, vx2, vx3, proportion);
		var vx1 = p2.$9 - p1.$9;
		var wx1 = A3($mdgriffith$elm_animator$Internal$Interpolate$interpolateValue, vx1, vx2, proportion);
		return {
			$9: 3 * A3($mdgriffith$elm_animator$Internal$Interpolate$interpolateValue, wx1, wx2, proportion),
			io: 3 * A3($mdgriffith$elm_animator$Internal$Interpolate$interpolateValue, wy1, wy2, proportion)
		};
	});
var $mdgriffith$elm_animator$Internal$Interpolate$guessTime = F2(
	function (now, _v0) {
		var one = _v0.a;
		var two = _v0.b;
		var three = _v0.c;
		var four = _v0.d;
		return (!(four.$9 - one.$9)) ? 0.5 : ((now - one.$9) / (four.$9 - one.$9));
	});
var $mdgriffith$elm_animator$Internal$Interpolate$linearDefault = {iH: 0, iI: 0, jg: 0, jh: 0, lz: 0};
var $ianmackenzie$elm_units$Quantity$divideBy = F2(
	function (divisor, _v0) {
		var value = _v0;
		return value / divisor;
	});
var $ianmackenzie$elm_units$Quantity$per = F2(
	function (_v0, _v1) {
		var independentValue = _v0;
		var dependentValue = _v1;
		return dependentValue / independentValue;
	});
var $ianmackenzie$elm_units$Pixels$pixels = function (numPixels) {
	return numPixels;
};
var $mdgriffith$elm_animator$Internal$Interpolate$derivativeOfEasing = F3(
	function (ease, period, target) {
		var targetPixels = $ianmackenzie$elm_units$Pixels$pixels(
			ease(target));
		var sampleSize = 16;
		var deltaSample = sampleSize / $ianmackenzie$elm_units$Duration$inMilliseconds(period);
		var next = $ianmackenzie$elm_units$Pixels$pixels(
			ease(target + deltaSample));
		var dx2 = A2($ianmackenzie$elm_units$Quantity$minus, targetPixels, next);
		var prev = $ianmackenzie$elm_units$Pixels$pixels(
			ease(target - deltaSample));
		var dx1 = A2($ianmackenzie$elm_units$Quantity$minus, prev, targetPixels);
		var dx = A2(
			$ianmackenzie$elm_units$Quantity$divideBy,
			2,
			A2($ianmackenzie$elm_units$Quantity$plus, dx1, dx2));
		return A2(
			$ianmackenzie$elm_units$Quantity$per,
			$ianmackenzie$elm_units$Duration$milliseconds(sampleSize),
			dx);
	});
var $mdgriffith$elm_animator$Internal$Time$millis = function (ms) {
	return ms;
};
var $ianmackenzie$elm_units$Pixels$pixelsPerSecond = function (numPixelsPerSecond) {
	return numPixelsPerSecond;
};
var $elm$core$Basics$isInfinite = _Basics_isInfinite;
var $ianmackenzie$elm_units$Quantity$isInfinite = function (_v0) {
	var value = _v0;
	return $elm$core$Basics$isInfinite(value);
};
var $ianmackenzie$elm_units$Quantity$isNaN = function (_v0) {
	var value = _v0;
	return $elm$core$Basics$isNaN(value);
};
var $ianmackenzie$elm_units$Quantity$zero = 0;
var $mdgriffith$elm_animator$Internal$Interpolate$velocityBetween = F4(
	function (one, oneTime, two, twoTime) {
		var duration = A2($mdgriffith$elm_animator$Internal$Time$duration, oneTime, twoTime);
		var distance = A2($ianmackenzie$elm_units$Quantity$minus, one, two);
		var vel = A2($ianmackenzie$elm_units$Quantity$per, duration, distance);
		return ($ianmackenzie$elm_units$Quantity$isNaN(vel) || $ianmackenzie$elm_units$Quantity$isInfinite(vel)) ? $ianmackenzie$elm_units$Quantity$zero : vel;
	});
var $mdgriffith$elm_animator$Internal$Interpolate$newVelocityAtTarget = F3(
	function (target, targetTime, maybeLookAhead) {
		if (maybeLookAhead.$ === 1) {
			if (target.$ === 1) {
				return $ianmackenzie$elm_units$Pixels$pixelsPerSecond(0);
			} else {
				var period = target.b;
				var toX = target.c;
				if (!period.$) {
					var periodDuration = period.a;
					return A3($mdgriffith$elm_animator$Internal$Interpolate$derivativeOfEasing, toX, periodDuration, 0);
				} else {
					var n = period.a;
					var periodDuration = period.b;
					return A3($mdgriffith$elm_animator$Internal$Interpolate$derivativeOfEasing, toX, periodDuration, 0);
				}
			}
		} else {
			var lookAhead = maybeLookAhead.a;
			var targetPosition = function () {
				if (!target.$) {
					var toX = target.c;
					return $ianmackenzie$elm_units$Pixels$pixels(
						toX(0));
				} else {
					var x = target.b;
					return $ianmackenzie$elm_units$Pixels$pixels(x);
				}
			}();
			var _v3 = lookAhead.iD;
			if (_v3.$ === 1) {
				var aheadPosition = _v3.b;
				return A4(
					$mdgriffith$elm_animator$Internal$Interpolate$velocityBetween,
					targetPosition,
					$mdgriffith$elm_animator$Internal$Time$millis(targetTime),
					$ianmackenzie$elm_units$Pixels$pixels(aheadPosition),
					$mdgriffith$elm_animator$Internal$Time$millis(lookAhead.h6));
			} else {
				var period = _v3.b;
				var toX = _v3.c;
				if (lookAhead.kF) {
					if (!period.$) {
						var periodDuration = period.a;
						return A3($mdgriffith$elm_animator$Internal$Interpolate$derivativeOfEasing, toX, periodDuration, 0);
					} else {
						var n = period.a;
						var periodDuration = period.b;
						return A3($mdgriffith$elm_animator$Internal$Interpolate$derivativeOfEasing, toX, periodDuration, 0);
					}
				} else {
					return A4(
						$mdgriffith$elm_animator$Internal$Interpolate$velocityBetween,
						targetPosition,
						$mdgriffith$elm_animator$Internal$Time$millis(targetTime),
						$ianmackenzie$elm_units$Pixels$pixels(
							toX(0)),
						$mdgriffith$elm_animator$Internal$Time$millis(lookAhead.h6));
				}
			}
		}
	});
var $mdgriffith$elm_animator$Internal$Interpolate$interpolateBetween = F7(
	function (startTimeInMs, maybePrevious, target, targetTimeInMs, now, maybeLookAhead, state) {
		var targetVelocity = $ianmackenzie$elm_units$Pixels$inPixelsPerSecond(
			A3($mdgriffith$elm_animator$Internal$Interpolate$newVelocityAtTarget, target, targetTimeInMs, maybeLookAhead));
		var targetPosition = function () {
			if (!target.$) {
				var toX = target.c;
				return $ianmackenzie$elm_units$Pixels$pixels(
					toX(0));
			} else {
				var x = target.b;
				return $ianmackenzie$elm_units$Pixels$pixels(x);
			}
		}();
		var curve = $mdgriffith$elm_animator$Internal$Interpolate$createSpline(
			{
				ci: function () {
					if (target.$ === 1) {
						var personality = target.a;
						return personality;
					} else {
						var personality = target.a;
						return personality;
					}
				}(),
				cC: function () {
					if (maybePrevious.$ === 1) {
						return $mdgriffith$elm_animator$Internal$Interpolate$linearDefault;
					} else {
						if (maybePrevious.a.$ === 1) {
							var _v2 = maybePrevious.a;
							var personality = _v2.a;
							return personality;
						} else {
							var _v3 = maybePrevious.a;
							var personality = _v3.a;
							return personality;
						}
					}
				}(),
				k: {
					$9: targetTimeInMs,
					io: $ianmackenzie$elm_units$Pixels$inPixels(targetPosition)
				},
				bI: {$9: 1000, io: targetVelocity},
				n: {
					$9: startTimeInMs,
					io: $ianmackenzie$elm_units$Pixels$inPixels(state.aV)
				},
				b5: {
					$9: 1000,
					io: $ianmackenzie$elm_units$Pixels$inPixelsPerSecond(state.ie)
				}
			});
		var current = A6(
			$mdgriffith$elm_animator$Internal$Interpolate$findAtXOnSpline,
			curve,
			now,
			1,
			0.25,
			A2($mdgriffith$elm_animator$Internal$Interpolate$guessTime, now, curve),
			0);
		var firstDerivative = A2($mdgriffith$elm_animator$Internal$Interpolate$firstDerivativeOnSpline, curve, current.fY);
		return {
			aV: $ianmackenzie$elm_units$Pixels$pixels(current.fG.io),
			ie: $ianmackenzie$elm_units$Pixels$pixelsPerSecond(1000 * (firstDerivative.io / firstDerivative.$9))
		};
	});
var $elm$core$Basics$sqrt = _Basics_sqrt;
var $mdgriffith$elm_animator$Internal$Spring$criticalDamping = F2(
	function (k, m) {
		return 2 * $elm$core$Basics$sqrt(k * m);
	});
var $elm$core$Basics$e = _Basics_e;
var $mdgriffith$elm_animator$Internal$Spring$toleranceForSpringSettleTimeCalculation = (-1) * A2($elm$core$Basics$logBase, $elm$core$Basics$e, 0.005);
var $mdgriffith$elm_animator$Internal$Spring$settlesAt = function (_v0) {
	var stiffness = _v0.dc;
	var damping = _v0.cB;
	var mass = _v0.cT;
	var m = mass;
	var k = stiffness;
	var springAspect = $elm$core$Basics$sqrt(k / m);
	var cCritical = A2($mdgriffith$elm_animator$Internal$Spring$criticalDamping, k, m);
	var c = damping;
	if (_Utils_eq(
		$elm$core$Basics$round(c),
		$elm$core$Basics$round(cCritical))) {
		return 1000 * (8.5 / springAspect);
	} else {
		if ((c - cCritical) > 0) {
			var dampingAspect = c / cCritical;
			return 1000 * ($mdgriffith$elm_animator$Internal$Spring$toleranceForSpringSettleTimeCalculation / (dampingAspect * springAspect));
		} else {
			var dampingAspect = c / cCritical;
			return 1000 * ($mdgriffith$elm_animator$Internal$Spring$toleranceForSpringSettleTimeCalculation / (dampingAspect * springAspect));
		}
	}
};
var $mdgriffith$elm_animator$Internal$Spring$mapToRange = F3(
	function (minimum, maximum, x) {
		var total = maximum - minimum;
		return minimum + (x * total);
	});
var $mdgriffith$elm_animator$Internal$Spring$wobble2Ratio = F2(
	function (wobble, duration) {
		var ms = $ianmackenzie$elm_units$Duration$inMilliseconds(duration);
		var scalingBelowDur = ms / 350;
		var top = A2(
			$elm$core$Basics$max,
			0.43,
			0.8 * A2($elm$core$Basics$min, 1, scalingBelowDur));
		var bounded = A2(
			$elm$core$Basics$min,
			1,
			A2($elm$core$Basics$max, 0, wobble));
		return A3($mdgriffith$elm_animator$Internal$Spring$mapToRange, 0.43, top, 1 - bounded);
	});
var $mdgriffith$elm_animator$Internal$Spring$wobble2Damping = F4(
	function (wobble, k, m, duration) {
		return A2($mdgriffith$elm_animator$Internal$Spring$wobble2Ratio, wobble, duration) * A2($mdgriffith$elm_animator$Internal$Spring$criticalDamping, k, m);
	});
var $mdgriffith$elm_animator$Internal$Spring$select = F2(
	function (wobbliness, duration) {
		var k = 150;
		var durMS = $ianmackenzie$elm_units$Duration$inMilliseconds(duration);
		var damping = A4($mdgriffith$elm_animator$Internal$Spring$wobble2Damping, wobbliness, k, 1, duration);
		var initiallySettlesAt = $mdgriffith$elm_animator$Internal$Spring$settlesAt(
			{cB: damping, cT: 1, dc: k});
		var newCritical = A2($mdgriffith$elm_animator$Internal$Spring$criticalDamping, k, durMS / initiallySettlesAt);
		return {cB: damping, cT: durMS / initiallySettlesAt, dc: k};
	});
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $mdgriffith$elm_animator$Internal$Spring$step = F4(
	function (target, _v0, dtms, motion) {
		var stiffness = _v0.dc;
		var damping = _v0.cB;
		var mass = _v0.cT;
		var fspring = stiffness * (target - motion.aV);
		var fdamper = ((-1) * damping) * motion.ie;
		var dt = dtms / 1000;
		var a = (fspring + fdamper) / mass;
		var newVelocity = motion.ie + (a * dt);
		var newPos = motion.aV + (newVelocity * dt);
		return {aV: newPos, ie: newVelocity};
	});
var $mdgriffith$elm_animator$Internal$Spring$stepOver = F4(
	function (duration, params, target, state) {
		var durMS = $ianmackenzie$elm_units$Duration$inMilliseconds(duration);
		var frames = durMS / 16;
		var remainder = 16 * (frames - $elm$core$Basics$floor(frames));
		var steps = (remainder > 0) ? A2(
			$elm$core$List$cons,
			remainder,
			A2(
				$elm$core$List$repeat,
				($elm$core$Basics$floor(durMS) / 16) | 0,
				16)) : A2(
			$elm$core$List$repeat,
			($elm$core$Basics$floor(durMS) / 16) | 0,
			16);
		return A3(
			$elm$core$List$foldl,
			A2($mdgriffith$elm_animator$Internal$Spring$step, target, params),
			state,
			steps);
	});
var $mdgriffith$elm_animator$Internal$Interpolate$springInterpolation = F7(
	function (prevEndTime, _v0, target, targetTime, now, _v1, state) {
		var wobble = function () {
			if (!target.$) {
				var personality = target.a;
				return personality.lz;
			} else {
				var personality = target.a;
				return personality.lz;
			}
		}();
		var targetPos = function () {
			if (!target.$) {
				var toX = target.c;
				return toX(0);
			} else {
				var x = target.b;
				return x;
			}
		}();
		var duration = A2(
			$mdgriffith$elm_animator$Internal$Time$duration,
			$mdgriffith$elm_animator$Internal$Time$millis(prevEndTime),
			$mdgriffith$elm_animator$Internal$Time$millis(targetTime));
		var params = A2($mdgriffith$elm_animator$Internal$Spring$select, wobble, duration);
		var _new = A4(
			$mdgriffith$elm_animator$Internal$Spring$stepOver,
			A2(
				$mdgriffith$elm_animator$Internal$Time$duration,
				$mdgriffith$elm_animator$Internal$Time$millis(prevEndTime),
				$mdgriffith$elm_animator$Internal$Time$millis(now)),
			params,
			targetPos,
			{
				aV: $ianmackenzie$elm_units$Pixels$inPixels(state.aV),
				ie: $ianmackenzie$elm_units$Pixels$inPixelsPerSecond(state.ie)
			});
		return {
			aV: $ianmackenzie$elm_units$Pixels$pixels(_new.aV),
			ie: $ianmackenzie$elm_units$Pixels$pixelsPerSecond(_new.ie)
		};
	});
var $mdgriffith$elm_animator$Internal$Interpolate$lerp = F7(
	function (prevEndTime, maybePrev, target, targetTime, now, maybeLookAhead, state) {
		var wobble = function () {
			if (!target.$) {
				var personality = target.a;
				return personality.lz;
			} else {
				var personality = target.a;
				return personality.lz;
			}
		}();
		var nothingHappened = function () {
			if (!target.$) {
				return false;
			} else {
				var x = target.b;
				return _Utils_eq(
					x,
					$ianmackenzie$elm_units$Pixels$inPixels(state.aV)) && (!$ianmackenzie$elm_units$Pixels$inPixelsPerSecond(state.ie));
			}
		}();
		if (nothingHappened) {
			return state;
		} else {
			if (maybeLookAhead.$ === 1) {
				return (!(!wobble)) ? A7($mdgriffith$elm_animator$Internal$Interpolate$springInterpolation, prevEndTime, maybePrev, target, targetTime, now, maybeLookAhead, state) : A7($mdgriffith$elm_animator$Internal$Interpolate$interpolateBetween, prevEndTime, maybePrev, target, targetTime, now, maybeLookAhead, state);
			} else {
				return A7($mdgriffith$elm_animator$Internal$Interpolate$interpolateBetween, prevEndTime, maybePrev, target, targetTime, now, maybeLookAhead, state);
			}
		}
	});
var $mdgriffith$elm_animator$Internal$Interpolate$startMoving = function (movement) {
	return {
		aV: function () {
			if (!movement.$) {
				var toX = movement.c;
				return $ianmackenzie$elm_units$Pixels$pixels(
					toX(0));
			} else {
				var x = movement.b;
				return $ianmackenzie$elm_units$Pixels$pixels(x);
			}
		}(),
		ie: $ianmackenzie$elm_units$Pixels$pixelsPerSecond(0)
	};
};
var $mdgriffith$elm_animator$Internal$Time$earliest = F2(
	function (oneQty, twoQty) {
		var one = oneQty;
		var two = twoQty;
		return ((one - two) >= 0) ? twoQty : oneQty;
	});
var $elm$core$Basics$modBy = _Basics_modBy;
var $mdgriffith$elm_animator$Internal$Interpolate$wrapUnitAfter = F2(
	function (dur, total) {
		var totalDuration = $elm$core$Basics$round(
			$ianmackenzie$elm_units$Duration$inMilliseconds(total));
		var periodDuration = $elm$core$Basics$round(
			$ianmackenzie$elm_units$Duration$inMilliseconds(dur));
		if ((!periodDuration) || (!totalDuration)) {
			return 0;
		} else {
			var remaining = A2($elm$core$Basics$modBy, periodDuration, totalDuration);
			return (!remaining) ? 1 : (remaining / periodDuration);
		}
	});
var $mdgriffith$elm_animator$Internal$Interpolate$visit = F5(
	function (lookup, occurring, now, maybeLookAhead, state) {
		var event = occurring.a;
		var start = occurring.b;
		var eventEnd = occurring.c;
		var dwellTime = function () {
			if (maybeLookAhead.$ === 1) {
				return A2($mdgriffith$elm_animator$Internal$Time$duration, start, now);
			} else {
				return A2(
					$mdgriffith$elm_animator$Internal$Time$duration,
					start,
					A2($mdgriffith$elm_animator$Internal$Time$earliest, now, eventEnd));
			}
		}();
		if ($mdgriffith$elm_animator$Internal$Time$zeroDuration(dwellTime)) {
			return {
				aV: function () {
					var _v0 = lookup(event);
					if (!_v0.$) {
						var period = _v0.b;
						var toX = _v0.c;
						return $ianmackenzie$elm_units$Pixels$pixels(
							toX(0));
					} else {
						var x = _v0.b;
						return $ianmackenzie$elm_units$Pixels$pixels(x);
					}
				}(),
				ie: A3(
					$mdgriffith$elm_animator$Internal$Interpolate$newVelocityAtTarget,
					lookup(event),
					$mdgriffith$elm_animator$Internal$Time$inMilliseconds(start),
					maybeLookAhead)
			};
		} else {
			var _v1 = lookup(event);
			if (_v1.$ === 1) {
				var pos = _v1.b;
				return {
					aV: $ianmackenzie$elm_units$Pixels$pixels(pos),
					ie: $ianmackenzie$elm_units$Pixels$pixelsPerSecond(0)
				};
			} else {
				var period = _v1.b;
				var toX = _v1.c;
				if (!period.$) {
					var periodDuration = period.a;
					var progress = A2($mdgriffith$elm_animator$Internal$Interpolate$wrapUnitAfter, periodDuration, dwellTime);
					return {
						aV: $ianmackenzie$elm_units$Pixels$pixels(
							toX(progress)),
						ie: A3($mdgriffith$elm_animator$Internal$Interpolate$derivativeOfEasing, toX, periodDuration, progress)
					};
				} else {
					var n = period.a;
					var periodDuration = period.b;
					var totalMS = $ianmackenzie$elm_units$Duration$inMilliseconds(dwellTime);
					var iterationTimeMS = $ianmackenzie$elm_units$Duration$inMilliseconds(periodDuration);
					var iteration = $elm$core$Basics$floor(totalMS / iterationTimeMS);
					if (_Utils_cmp(iteration, n) > -1) {
						return {
							aV: $ianmackenzie$elm_units$Pixels$pixels(
								toX(1)),
							ie: $ianmackenzie$elm_units$Pixels$pixelsPerSecond(0)
						};
					} else {
						var progress = A2($mdgriffith$elm_animator$Internal$Interpolate$wrapUnitAfter, periodDuration, dwellTime);
						return {
							aV: $ianmackenzie$elm_units$Pixels$pixels(
								toX(progress)),
							ie: A3($mdgriffith$elm_animator$Internal$Interpolate$derivativeOfEasing, toX, periodDuration, progress)
						};
					}
				}
			}
		}
	});
var $mdgriffith$elm_animator$Internal$Interpolate$moving = {eu: $mdgriffith$elm_animator$Internal$Interpolate$getPersonality, eP: $mdgriffith$elm_animator$Internal$Interpolate$dwellPeriod, fd: $mdgriffith$elm_animator$Internal$Interpolate$lerp, n: $mdgriffith$elm_animator$Internal$Interpolate$startMoving, ga: $mdgriffith$elm_animator$Internal$Interpolate$visit};
var $mdgriffith$elm_animator$Animator$unwrapUnits = function (_v0) {
	var position = _v0.aV;
	var velocity = _v0.ie;
	return {
		aV: function () {
			var val = position;
			return val;
		}(),
		ie: function () {
			var val = velocity;
			return val;
		}()
	};
};
var $mdgriffith$elm_animator$Internal$Interpolate$Osc = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $mdgriffith$elm_animator$Internal$Interpolate$Pos = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_animator$Internal$Interpolate$withDefault = F2(
	function (def, defaultOr) {
		if (!defaultOr.$) {
			return def;
		} else {
			var specified = defaultOr.a;
			return specified;
		}
	});
var $mdgriffith$elm_animator$Internal$Interpolate$fillDefaults = F2(
	function (builtInDefault, specified) {
		if (!specified.$) {
			return builtInDefault;
		} else {
			var partial = specified.a;
			return {
				iH: A2($mdgriffith$elm_animator$Internal$Interpolate$withDefault, builtInDefault.iH, partial.iH),
				iI: A2($mdgriffith$elm_animator$Internal$Interpolate$withDefault, builtInDefault.iI, partial.iI),
				jg: A2($mdgriffith$elm_animator$Internal$Interpolate$withDefault, builtInDefault.jg, partial.jg),
				jh: A2($mdgriffith$elm_animator$Internal$Interpolate$withDefault, builtInDefault.jh, partial.jh),
				lz: A2($mdgriffith$elm_animator$Internal$Interpolate$withDefault, builtInDefault.lz, partial.lz)
			};
		}
	});
var $mdgriffith$elm_animator$Internal$Interpolate$standardDefault = {iH: 0, iI: 0.8, jg: 0, jh: 0.4, lz: 0};
var $mdgriffith$elm_animator$Internal$Interpolate$withStandardDefault = function (defMovement) {
	if (!defMovement.$) {
		var specifiedPersonality = defMovement.a;
		var period = defMovement.b;
		var fn = defMovement.c;
		var personality = A2($mdgriffith$elm_animator$Internal$Interpolate$fillDefaults, $mdgriffith$elm_animator$Internal$Interpolate$standardDefault, specifiedPersonality);
		return A3($mdgriffith$elm_animator$Internal$Interpolate$Osc, personality, period, fn);
	} else {
		var specifiedPersonality = defMovement.a;
		var p = defMovement.b;
		var personality = A2($mdgriffith$elm_animator$Internal$Interpolate$fillDefaults, $mdgriffith$elm_animator$Internal$Interpolate$standardDefault, specifiedPersonality);
		return A2($mdgriffith$elm_animator$Internal$Interpolate$Pos, personality, p);
	}
};
var $mdgriffith$elm_animator$Animator$xy = F2(
	function (timeline, lookup) {
		return {
			$9: $mdgriffith$elm_animator$Animator$unwrapUnits(
				A3(
					$mdgriffith$elm_animator$Internal$Timeline$foldp,
					A2(
						$elm$core$Basics$composeR,
						lookup,
						A2(
							$elm$core$Basics$composeR,
							function ($) {
								return $.$9;
							},
							$mdgriffith$elm_animator$Internal$Interpolate$withStandardDefault)),
					$mdgriffith$elm_animator$Internal$Interpolate$moving,
					timeline)).aV,
			io: $mdgriffith$elm_animator$Animator$unwrapUnits(
				A3(
					$mdgriffith$elm_animator$Internal$Timeline$foldp,
					A2(
						$elm$core$Basics$composeR,
						lookup,
						A2(
							$elm$core$Basics$composeR,
							function ($) {
								return $.io;
							},
							$mdgriffith$elm_animator$Internal$Interpolate$withStandardDefault)),
					$mdgriffith$elm_animator$Internal$Interpolate$moving,
					timeline)).aV
		};
	});
var $author$project$Main$animVessel = F3(
	function (id, model, direction) {
		return A3(
			$author$project$UI$vessel,
			id,
			direction,
			A2(
				$mdgriffith$elm_animator$Animator$xy,
				model._,
				function (vStates) {
					var xypos = $author$project$Main$wetsTwo.f5(
						A2(
							$elm$core$Maybe$withDefault,
							8,
							A2($elm$core$Dict$get, id, vStates)));
					return {
						$9: $mdgriffith$elm_animator$Animator$at(xypos.$9),
						io: A2(
							$mdgriffith$elm_animator$Animator$arriveSmoothly,
							0,
							A2(
								$mdgriffith$elm_animator$Animator$leaveSmoothly,
								0,
								$mdgriffith$elm_animator$Animator$at(xypos.io)))
					};
				}));
	});
var $author$project$Main$allVessels = function (model) {
	return A2(
		$elm$core$List$map,
		function (t) {
			return A3($author$project$Main$animVessel, t.a3, model, t.bG);
		},
		model.L);
};
var $mdgriffith$elm_ui$Internal$Model$unstyled = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Unstyled, $elm$core$Basics$always);
var $mdgriffith$elm_ui$Element$html = $mdgriffith$elm_ui$Internal$Model$unstyled;
var $avh4$elm_color$Color$lightGray = A4($avh4$elm_color$Color$RgbaSpace, 238 / 255, 238 / 255, 236 / 255, 1.0);
var $avh4$elm_color$Color$lightBlue = A4($avh4$elm_color$Color$RgbaSpace, 114 / 255, 159 / 255, 207 / 255, 1.0);
var $elm$svg$Svg$rect = $elm$svg$Svg$trustedNode('rect');
var $author$project$UI$chamber = F3(
	function (width, xoffset, depth) {
		return A2(
			$elm$svg$Svg$rect,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$width(
					$elm$core$String$fromInt(width)),
					$elm$svg$Svg$Attributes$height(
					$elm$core$String$fromInt(200 - depth)),
					$elm$svg$Svg$Attributes$x(
					$elm$core$String$fromInt(xoffset)),
					$elm$svg$Svg$Attributes$y(
					$elm$core$String$fromInt(depth)),
					$elm$svg$Svg$Attributes$fill(
					$avh4$elm_color$Color$toCssString($avh4$elm_color$Color$lightBlue))
				]),
			_List_Nil);
	});
var $mdgriffith$elm_animator$Internal$Interpolate$unwrapUnits = function (_v0) {
	var position = _v0.aV;
	var velocity = _v0.ie;
	return {
		aV: function () {
			var val = position;
			return val;
		}(),
		ie: function () {
			var val = velocity;
			return val;
		}()
	};
};
var $mdgriffith$elm_animator$Internal$Interpolate$details = F2(
	function (timeline, lookup) {
		return $mdgriffith$elm_animator$Internal$Interpolate$unwrapUnits(
			A3($mdgriffith$elm_animator$Internal$Timeline$foldp, lookup, $mdgriffith$elm_animator$Internal$Interpolate$moving, timeline));
	});
var $mdgriffith$elm_animator$Internal$Interpolate$withLinearDefault = function (defMovement) {
	if (!defMovement.$) {
		var specifiedPersonality = defMovement.a;
		var period = defMovement.b;
		var fn = defMovement.c;
		var personality = A2($mdgriffith$elm_animator$Internal$Interpolate$fillDefaults, $mdgriffith$elm_animator$Internal$Interpolate$linearDefault, specifiedPersonality);
		return A3($mdgriffith$elm_animator$Internal$Interpolate$Osc, personality, period, fn);
	} else {
		var specifiedPersonality = defMovement.a;
		var p = defMovement.b;
		var personality = A2($mdgriffith$elm_animator$Internal$Interpolate$fillDefaults, $mdgriffith$elm_animator$Internal$Interpolate$linearDefault, specifiedPersonality);
		return A2($mdgriffith$elm_animator$Internal$Interpolate$Pos, personality, p);
	}
};
var $mdgriffith$elm_animator$Animator$linear = F2(
	function (timeline, lookup) {
		return A2(
			$mdgriffith$elm_animator$Internal$Interpolate$details,
			timeline,
			A2($elm$core$Basics$composeL, $mdgriffith$elm_animator$Internal$Interpolate$withLinearDefault, lookup)).aV;
	});
var $author$project$Main$animChamber = F4(
	function (id, model, width, xoffset) {
		var ySurface = (id === 'AChamber') ? 40.0 : 0.0;
		var chamberDepth = function (cstate) {
			if (!cstate) {
				return 40.0;
			} else {
				return 80.0;
			}
		};
		return A3(
			$author$project$UI$chamber,
			width,
			xoffset,
			$elm$core$Basics$round(
				A2(
					$mdgriffith$elm_animator$Animator$linear,
					model.a_,
					function (chamberStates) {
						return $mdgriffith$elm_animator$Animator$at(
							function () {
								var _v0 = A2($elm$core$Dict$get, id, chamberStates);
								if (!_v0.$) {
									var cs = _v0.a;
									return ySurface + chamberDepth(cs);
								} else {
									return 0.0;
								}
							}());
					})));
	});
var $avh4$elm_color$Color$darkBlue = A4($avh4$elm_color$Color$RgbaSpace, 32 / 255, 74 / 255, 135 / 255, 1.0);
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $author$project$UI$gate = F4(
	function (x, y, height, opacity) {
		return A2(
			$elm$svg$Svg$rect,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$width('12'),
					$elm$svg$Svg$Attributes$height(
					$elm$core$String$fromInt(height)),
					$elm$svg$Svg$Attributes$x(
					$elm$core$String$fromInt(x)),
					$elm$svg$Svg$Attributes$y(
					$elm$core$String$fromInt(y)),
					$elm$svg$Svg$Attributes$fill(
					$avh4$elm_color$Color$toCssString($avh4$elm_color$Color$darkBlue)),
					$elm$svg$Svg$Attributes$stroke(
					$avh4$elm_color$Color$toCssString($avh4$elm_color$Color$darkBlue)),
					$elm$svg$Svg$Attributes$fillOpacity(
					$elm$core$String$fromFloat(opacity))
				]),
			_List_Nil);
	});
var $author$project$Main$animGate = F5(
	function (id, model, x, y, height) {
		var gateOpacity = function (astate) {
			if (!astate) {
				return 0.25;
			} else {
				return 1.0;
			}
		};
		return A4(
			$author$project$UI$gate,
			x,
			y,
			height,
			A2(
				$mdgriffith$elm_animator$Animator$linear,
				model.aL,
				function (actuatorStates) {
					return $mdgriffith$elm_animator$Animator$at(
						function () {
							var _v0 = A2($elm$core$Dict$get, id, actuatorStates);
							if (!_v0.$) {
								var gstate = _v0.a;
								return gateOpacity(gstate);
							} else {
								return 0.0;
							}
						}());
				}));
	});
var $elm$core$Basics$pi = _Basics_pi;
var $avh4$elm_color$Color$darkPurple = A4($avh4$elm_color$Color$RgbaSpace, 92 / 255, 53 / 255, 102 / 255, 1.0);
var $ianmackenzie$elm_units$Angle$inRadians = function (_v0) {
	var numRadians = _v0;
	return numRadians;
};
var $ianmackenzie$elm_units$Angle$inDegrees = function (angle) {
	return 180 * ($ianmackenzie$elm_units$Angle$inRadians(angle) / $elm$core$Basics$pi);
};
var $elm$svg$Svg$polyline = $elm$svg$Svg$trustedNode('polyline');
var $ianmackenzie$elm_units$Angle$radians = function (numRadians) {
	return numRadians;
};
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $author$project$UI$vane = F3(
	function (x, y, radians) {
		var xForm = $elm$core$String$concat(
			_List_fromArray(
				[
					'translate (',
					$elm$core$String$fromInt(x),
					' ',
					$elm$core$String$fromInt(y),
					') rotate (',
					$elm$core$String$fromInt(
					$elm$core$Basics$round(
						$ianmackenzie$elm_units$Angle$inDegrees(
							$ianmackenzie$elm_units$Angle$radians(radians)))),
					')'
				]));
		return A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$transform(xForm)
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$polyline,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$points('0 20 0 -20'),
							$elm$svg$Svg$Attributes$strokeWidth('4'),
							$elm$svg$Svg$Attributes$stroke(
							$avh4$elm_color$Color$toCssString($avh4$elm_color$Color$darkPurple))
						]),
					_List_Nil)
				]));
	});
var $author$project$Main$animVane = F4(
	function (id, model, x, y) {
		var valveValue = function (astate) {
			if (!astate) {
				return $elm$core$Basics$pi / 2.0;
			} else {
				return 0.0;
			}
		};
		return A3(
			$author$project$UI$vane,
			x,
			y,
			A2(
				$mdgriffith$elm_animator$Animator$linear,
				model.aL,
				function (actuatorStates) {
					return $mdgriffith$elm_animator$Animator$at(
						function () {
							var _v0 = A2($elm$core$Dict$get, id, actuatorStates);
							if (!_v0.$) {
								var astate = _v0.a;
								return valveValue(astate);
							} else {
								return 0.0;
							}
						}());
				}));
	});
var $avh4$elm_color$Color$darkBrown = A4($avh4$elm_color$Color$RgbaSpace, 143 / 255, 89 / 255, 2 / 255, 1.0);
var $elm$svg$Svg$circle = $elm$svg$Svg$trustedNode('circle');
var $elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var $elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var $elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var $author$project$UI$hub = F2(
	function (x, y) {
		return A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$cx(
					$elm$core$String$fromInt(x)),
					$elm$svg$Svg$Attributes$cy(
					$elm$core$String$fromInt(y)),
					$elm$svg$Svg$Attributes$r('6'),
					$elm$svg$Svg$Attributes$fill(
					$avh4$elm_color$Color$toCssString($avh4$elm_color$Color$darkPurple))
				]),
			_List_Nil);
	});
var $author$project$Main$lockTwo = function (model) {
	return _List_fromArray(
		[
			A3($author$project$UI$chamber, 150, 0, 40),
			A4($author$project$Main$animChamber, 'BChamber', model, 150, 150),
			A4($author$project$Main$animChamber, 'AChamber', model, 150, 300),
			A3($author$project$UI$chamber, 450, 300, 120),
			A5($author$project$Main$animGate, 'Gate-M05', model, 144, 30, 90),
			A2($author$project$UI$hub, 150, 146),
			A4($author$project$Main$animVane, 'Valve-M05', model, 150, 146),
			A5($author$project$Main$animGate, 'Gate-M04', model, 294, 30, 110),
			A2($author$project$UI$hub, 300, 165),
			A4($author$project$Main$animVane, 'Valve-M04', model, 300, 165),
			A5($author$project$Main$animGate, 'Gate-M03', model, 444, 60, 90),
			A2($author$project$UI$hub, 450, 175),
			A4($author$project$Main$animVane, 'Valve-M03', model, 450, 175),
			A2(
			$elm$svg$Svg$polygon,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$points('0,150 150,170 300,188 450,200 0,200'),
					$elm$svg$Svg$Attributes$fill(
					$avh4$elm_color$Color$toCssString($avh4$elm_color$Color$darkBrown))
				]),
			_List_Nil)
		]);
};
var $author$project$Main$locks = function (model) {
	return $mdgriffith$elm_ui$Element$html(
		A2(
			$elm$svg$Svg$svg,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$viewBox('0 0 600 200'),
					$elm$svg$Svg$Attributes$width('600'),
					$elm$svg$Svg$Attributes$height('200')
				]),
			$elm$core$List$concat(
				_List_fromArray(
					[
						_List_fromArray(
						[
							A2(
							$elm$svg$Svg$rect,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$width('600'),
									$elm$svg$Svg$Attributes$height('200'),
									$elm$svg$Svg$Attributes$x('0'),
									$elm$svg$Svg$Attributes$y('0'),
									$elm$svg$Svg$Attributes$fill(
									$avh4$elm_color$Color$toCssString($avh4$elm_color$Color$lightGray))
								]),
							_List_Nil)
						]),
						$author$project$Main$lockTwo(model),
						$author$project$Main$allVessels(model)
					]))));
};
var $mdgriffith$elm_ui$Internal$Model$AsRow = 0;
var $mdgriffith$elm_ui$Internal$Model$asRow = 0;
var $mdgriffith$elm_ui$Element$row = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asRow,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.cx + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.a0)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(
	function (a, b, c) {
		return {$: 5, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Flag$spacing = $mdgriffith$elm_ui$Internal$Flag$flag(3);
var $mdgriffith$elm_ui$Internal$Model$spacingName = F2(
	function (x, y) {
		return 'spacing-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y)));
	});
var $mdgriffith$elm_ui$Element$spacing = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$spacing,
		A3(
			$mdgriffith$elm_ui$Internal$Model$SpacingStyle,
			A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, x),
			x,
			x));
};
var $author$project$Util$Downstream = 1;
var $author$project$Main$StartVessel = function (a) {
	return {$: 7, a: a};
};
var $author$project$Util$Upstream = 0;
var $orus_io$elm_orus_ui$OUI$Material$Theme$button = function (_v0) {
	var t = _v0;
	return t.go;
};
var $orus_io$elm_orus_ui$OUI$Button$getAction = function (_v0) {
	var props = _v0;
	return props.aY;
};
var $orus_io$elm_orus_ui$OUI$Button$getColor = function (_v0) {
	var props = _v0;
	return props.bC;
};
var $orus_io$elm_orus_ui$OUI$Button$getIcon = function (_v0) {
	var props = _v0;
	return props.gV;
};
var $orus_io$elm_orus_ui$OUI$Button$getText = function (_v0) {
	var props = _v0;
	return props.p;
};
var $orus_io$elm_orus_ui$OUI$Button$getType = function (_v0) {
	var props = _v0;
	return props.v;
};
var $orus_io$elm_orus_ui$OUI$Button$Disabled = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$Button = {$: 8};
var $mdgriffith$elm_ui$Internal$Model$Describe = function (a) {
	return {$: 2, a: a};
};
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $mdgriffith$elm_ui$Element$Input$enter = 'Enter';
var $mdgriffith$elm_ui$Internal$Model$NoAttribute = {$: 0};
var $mdgriffith$elm_ui$Element$Input$hasFocusStyle = function (attr) {
	if (((attr.$ === 4) && (attr.b.$ === 11)) && (!attr.b.a)) {
		var _v1 = attr.b;
		var _v2 = _v1.a;
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Element$Input$focusDefault = function (attrs) {
	return A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, attrs) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass('focusable');
};
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $mdgriffith$elm_ui$Element$Events$onClick = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Events$onClick);
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 2, a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $mdgriffith$elm_ui$Element$Input$onKeyLookup = function (lookup) {
	var decode = function (code) {
		var _v0 = lookup(code);
		if (_v0.$ === 1) {
			return $elm$json$Json$Decode$fail('No key matched');
		} else {
			var msg = _v0.a;
			return $elm$json$Json$Decode$succeed(msg);
		}
	};
	var isKey = A2(
		$elm$json$Json$Decode$andThen,
		decode,
		A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		A2(
			$elm$html$Html$Events$preventDefaultOn,
			'keydown',
			A2(
				$elm$json$Json$Decode$map,
				function (fired) {
					return _Utils_Tuple2(fired, true);
				},
				isKey)));
};
var $mdgriffith$elm_ui$Internal$Flag$cursor = $mdgriffith$elm_ui$Internal$Flag$flag(21);
var $mdgriffith$elm_ui$Element$pointer = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.i8);
var $mdgriffith$elm_ui$Element$Input$space = ' ';
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $mdgriffith$elm_ui$Element$Input$button = F2(
	function (attrs, _v0) {
		var onPress = _v0.kn;
		var label = _v0.bO;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dE + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.a0 + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.kR + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.hj)))))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$pointer,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$Input$focusDefault(attrs),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Button),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											$elm$html$Html$Attributes$tabindex(0)),
										function () {
											if (onPress.$ === 1) {
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Internal$Model$Attr(
														$elm$html$Html$Attributes$disabled(true)),
													attrs);
											} else {
												var msg = onPress.a;
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Element$Events$onClick(msg),
													A2(
														$elm$core$List$cons,
														$mdgriffith$elm_ui$Element$Input$onKeyLookup(
															function (code) {
																return _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$enter) ? $elm$core$Maybe$Just(msg) : (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$space) ? $elm$core$Maybe$Just(msg) : $elm$core$Maybe$Nothing);
															}),
														attrs));
											}
										}()))))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $mdgriffith$elm_ui$Internal$Model$AlignX = function (a) {
	return {$: 6, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$CenterX = 1;
var $mdgriffith$elm_ui$Element$centerX = $mdgriffith$elm_ui$Internal$Model$AlignX(1);
var $mdgriffith$elm_ui$Internal$Model$AlignY = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$CenterY = 1;
var $mdgriffith$elm_ui$Element$centerY = $mdgriffith$elm_ui$Internal$Model$AlignY(1);
var $elm$html$Html$Attributes$download = function (fileName) {
	return A2($elm$html$Html$Attributes$stringProperty, 'download', fileName);
};
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $mdgriffith$elm_ui$Element$download = F2(
	function (attrs, _v0) {
		var url = _v0.lx;
		var label = _v0.bO;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$NodeName('a'),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Attributes$href(url)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						$elm$html$Html$Attributes$download('')),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dE),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.a0),
									attrs)))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $mdgriffith$elm_ui$Element$downloadAs = F2(
	function (attrs, _v0) {
		var url = _v0.lx;
		var filename = _v0.jv;
		var label = _v0.bO;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$NodeName('a'),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Attributes$href(url)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						$elm$html$Html$Attributes$download(filename)),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dE),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.a0),
									attrs)))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $orus_io$elm_orus_ui$OUI$Button$Elevated = 0;
var $orus_io$elm_orus_ui$OUI$Material$Color$getOnSurfaceColor = function (c) {
	if (c.$ === 10) {
		var onSurface = c.a.kp;
		return $elm$core$Basics$always(onSurface);
	} else {
		return function ($) {
			return $.kp;
		};
	}
};
var $orus_io$elm_orus_ui$OUI$Material$Color$getSurfaceContainerLowColor = function (c) {
	if (c.$ === 10) {
		var surface = c.a.k3;
		return $elm$core$Basics$always(surface);
	} else {
		return function ($) {
			return $.k5;
		};
	}
};
var $orus_io$elm_orus_ui$OUI$Material$Button$btnColors = F4(
	function (colorscheme, type_, color, disabled) {
		var _v0 = _Utils_Tuple2(type_, disabled);
		if (_v0.b) {
			return _Utils_Tuple2(
				A2(
					$orus_io$elm_orus_ui$OUI$Material$Color$setAlpha,
					0.38,
					A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnSurfaceColor, color, colorscheme)),
				A2(
					$orus_io$elm_orus_ui$OUI$Material$Color$setAlpha,
					0.12,
					A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnSurfaceColor, color, colorscheme)));
		} else {
			switch (_v0.a) {
				case 0:
					var _v1 = _v0.a;
					return _Utils_Tuple2(
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme),
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getSurfaceContainerLowColor, color, colorscheme));
				case 1:
					var _v2 = _v0.a;
					return _Utils_Tuple2(
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnColor, color, colorscheme),
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme));
				case 8:
					var _v3 = _v0.a;
					return _Utils_Tuple2(
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnColor, color, colorscheme),
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme));
				case 4:
					var _v4 = _v0.a;
					return _Utils_Tuple2(
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnColor, color, colorscheme),
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme));
				case 5:
					var _v5 = _v0.a;
					return _Utils_Tuple2(
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnColor, color, colorscheme),
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme));
				case 6:
					var _v6 = _v0.a;
					return _Utils_Tuple2(
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnColor, color, colorscheme),
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme));
				case 7:
					var _v7 = _v0.a;
					return _Utils_Tuple2(
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnColor, color, colorscheme),
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme));
				default:
					return _Utils_Tuple2(
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme),
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getSurfaceContainerLowColor, color, colorscheme));
			}
		}
	});
var $orus_io$elm_orus_ui$OUI$Material$Color$focusStateLayerOpacity = 0.12;
var $mdgriffith$elm_ui$Internal$Model$Focus = 0;
var $mdgriffith$elm_ui$Internal$Model$PseudoSelector = F2(
	function (a, b) {
		return {$: 11, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$focus = $mdgriffith$elm_ui$Internal$Flag$flag(31);
var $mdgriffith$elm_ui$Internal$Model$Nearby = F2(
	function (a, b) {
		return {$: 9, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$TransformComponent = F2(
	function (a, b) {
		return {$: 10, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Empty = {$: 3};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $mdgriffith$elm_ui$Internal$Model$map = F2(
	function (fn, el) {
		switch (el.$) {
			case 1:
				var styled = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						e_: F2(
							function (add, context) {
								return A2(
									$elm$virtual_dom$VirtualDom$map,
									fn,
									A2(styled.e_, add, context));
							}),
						h0: styled.h0
					});
			case 0:
				var html = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A2(
						$elm$core$Basics$composeL,
						$elm$virtual_dom$VirtualDom$map(fn),
						html));
			case 2:
				var str = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Text(str);
			default:
				return $mdgriffith$elm_ui$Internal$Model$Empty;
		}
	});
var $elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var $mdgriffith$elm_ui$Internal$Model$mapAttrFromStyle = F2(
	function (fn, attr) {
		switch (attr.$) {
			case 0:
				return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
			case 2:
				var description = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Describe(description);
			case 6:
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$AlignX(x);
			case 5:
				var y = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$AlignY(y);
			case 7:
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Width(x);
			case 8:
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Height(x);
			case 3:
				var x = attr.a;
				var y = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Class, x, y);
			case 4:
				var flag = attr.a;
				var style = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$StyleClass, flag, style);
			case 9:
				var location = attr.a;
				var elem = attr.b;
				return A2(
					$mdgriffith$elm_ui$Internal$Model$Nearby,
					location,
					A2($mdgriffith$elm_ui$Internal$Model$map, fn, elem));
			case 1:
				var htmlAttr = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Attr(
					A2($elm$virtual_dom$VirtualDom$mapAttribute, fn, htmlAttr));
			default:
				var fl = attr.a;
				var trans = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$TransformComponent, fl, trans);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$removeNever = function (style) {
	return A2($mdgriffith$elm_ui$Internal$Model$mapAttrFromStyle, $elm$core$Basics$never, style);
};
var $mdgriffith$elm_ui$Internal$Model$unwrapDecsHelper = F2(
	function (attr, _v0) {
		var styles = _v0.a;
		var trans = _v0.b;
		var _v1 = $mdgriffith$elm_ui$Internal$Model$removeNever(attr);
		switch (_v1.$) {
			case 4:
				var style = _v1.b;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, style, styles),
					trans);
			case 10:
				var flag = _v1.a;
				var component = _v1.b;
				return _Utils_Tuple2(
					styles,
					A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, trans, component));
			default:
				return _Utils_Tuple2(styles, trans);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$unwrapDecorations = function (attrs) {
	var _v0 = A3(
		$elm$core$List$foldl,
		$mdgriffith$elm_ui$Internal$Model$unwrapDecsHelper,
		_Utils_Tuple2(_List_Nil, $mdgriffith$elm_ui$Internal$Model$Untransformed),
		attrs);
	var styles = _v0.a;
	var transform = _v0.b;
	return A2(
		$elm$core$List$cons,
		$mdgriffith$elm_ui$Internal$Model$Transform(transform),
		styles);
};
var $mdgriffith$elm_ui$Element$focused = function (decs) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$focus,
		A2(
			$mdgriffith$elm_ui$Internal$Model$PseudoSelector,
			0,
			$mdgriffith$elm_ui$Internal$Model$unwrapDecorations(decs)));
};
var $orus_io$elm_orus_ui$OUI$Material$Color$hoverStateLayerOpacity = 0.08;
var $mdgriffith$elm_ui$Internal$Model$Active = 2;
var $mdgriffith$elm_ui$Internal$Flag$active = $mdgriffith$elm_ui$Internal$Flag$flag(32);
var $mdgriffith$elm_ui$Element$mouseDown = function (decs) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$active,
		A2(
			$mdgriffith$elm_ui$Internal$Model$PseudoSelector,
			2,
			$mdgriffith$elm_ui$Internal$Model$unwrapDecorations(decs)));
};
var $mdgriffith$elm_ui$Internal$Model$Hover = 1;
var $mdgriffith$elm_ui$Internal$Flag$hover = $mdgriffith$elm_ui$Internal$Flag$flag(33);
var $mdgriffith$elm_ui$Element$mouseOver = function (decs) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$hover,
		A2(
			$mdgriffith$elm_ui$Internal$Model$PseudoSelector,
			1,
			$mdgriffith$elm_ui$Internal$Model$unwrapDecorations(decs)));
};
var $orus_io$elm_orus_ui$OUI$Material$Color$pressStateLayerOpacity = 0.12;
var $mdgriffith$elm_ui$Internal$Model$boxShadowClass = function (shadow) {
	return $elm$core$String$concat(
		_List_fromArray(
			[
				shadow.g_ ? 'box-inset' : 'box-',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.e.a) + 'px',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.e.b) + 'px',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.bB) + 'px',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.bp) + 'px',
				$mdgriffith$elm_ui$Internal$Model$formatColorClass(shadow.bC)
			]));
};
var $mdgriffith$elm_ui$Internal$Flag$shadows = $mdgriffith$elm_ui$Internal$Flag$flag(19);
var $mdgriffith$elm_ui$Element$Border$shadow = function (almostShade) {
	var shade = {bB: almostShade.bB, bC: almostShade.bC, g_: false, e: almostShade.e, bp: almostShade.bp};
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$shadows,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			$mdgriffith$elm_ui$Internal$Model$boxShadowClass(shade),
			'box-shadow',
			$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(shade)));
};
var $elm$core$Basics$cos = _Basics_cos;
var $noahzgordon$elm_color_extra$Color$Convert$labToXyz = function (_v0) {
	var l = _v0.e9;
	var a = _v0.es;
	var b = _v0.ey;
	var y = (l + 16) / 116;
	var c = function (ch) {
		var ch_ = (ch * ch) * ch;
		return (ch_ > 8.856e-3) ? ch_ : ((ch - (16 / 116)) / 7.787);
	};
	return {
		$9: c(y + (a / 500)) * 95.047,
		io: c(y) * 100,
		iq: c(y - (b / 200)) * 108.883
	};
};
var $elm$core$Basics$pow = _Basics_pow;
var $avh4$elm_color$Color$rgb = F3(
	function (r, g, b) {
		return A4($avh4$elm_color$Color$RgbaSpace, r, g, b, 1.0);
	});
var $noahzgordon$elm_color_extra$Color$Convert$xyzToColor = function (_v0) {
	var x = _v0.$9;
	var y = _v0.io;
	var z = _v0.iq;
	var z_ = z / 100;
	var y_ = y / 100;
	var x_ = x / 100;
	var r = ((x_ * 3.2404542) + (y_ * (-1.5371385))) + (z_ * (-0.4986));
	var g = ((x_ * (-0.969266)) + (y_ * 1.8760108)) + (z_ * 4.1556e-2);
	var c = function (ch) {
		var ch_ = (ch > 3.1308e-3) ? ((1.055 * A2($elm$core$Basics$pow, ch, 1 / 2.4)) - 5.5e-2) : (12.92 * ch);
		return A3($elm$core$Basics$clamp, 0, 1, ch_);
	};
	var b = ((x_ * 5.56434e-2) + (y_ * (-0.2040259))) + (z_ * 1.0572252);
	return A3(
		$avh4$elm_color$Color$rgb,
		c(r),
		c(g),
		c(b));
};
var $noahzgordon$elm_color_extra$Color$Convert$labToColor = A2($elm$core$Basics$composeR, $noahzgordon$elm_color_extra$Color$Convert$labToXyz, $noahzgordon$elm_color_extra$Color$Convert$xyzToColor);
var $elm$core$Basics$sin = _Basics_sin;
var $orus_io$elm_orus_ui$OUI$Material$Color$fromCIELCH = A2(
	$elm$core$Basics$composeR,
	function (_v0) {
		var l = _v0.e9;
		var c = _v0.cq;
		var h = _v0.cJ;
		return {
			es: c * $elm$core$Basics$cos(h),
			ey: c * $elm$core$Basics$sin(h),
			e9: l
		};
	},
	$noahzgordon$elm_color_extra$Color$Convert$labToColor);
var $elm$core$Basics$atan2 = _Basics_atan2;
var $noahzgordon$elm_color_extra$Color$Convert$colorToXyz = function (cl) {
	var c = function (ch) {
		var ch_ = (ch > 4.045e-2) ? A2($elm$core$Basics$pow, (ch + 5.5e-2) / 1.055, 2.4) : (ch / 12.92);
		return ch_ * 100;
	};
	var _v0 = $avh4$elm_color$Color$toRgba(cl);
	var red = _v0.fJ;
	var green = _v0.eU;
	var blue = _v0.eD;
	var b = c(blue);
	var g = c(green);
	var r = c(red);
	return {$9: ((r * 0.4124) + (g * 0.3576)) + (b * 0.1805), io: ((r * 0.2126) + (g * 0.7152)) + (b * 7.22e-2), iq: ((r * 1.93e-2) + (g * 0.1192)) + (b * 0.9505)};
};
var $noahzgordon$elm_color_extra$Color$Convert$xyzToLab = function (_v0) {
	var x = _v0.$9;
	var y = _v0.io;
	var z = _v0.iq;
	var c = function (ch) {
		return (ch > 8.856e-3) ? A2($elm$core$Basics$pow, ch, 1 / 3) : ((7.787 * ch) + (16 / 116));
	};
	var x_ = c(x / 95.047);
	var y_ = c(y / 100);
	var z_ = c(z / 108.883);
	return {es: 500 * (x_ - y_), ey: 200 * (y_ - z_), e9: (116 * y_) - 16};
};
var $noahzgordon$elm_color_extra$Color$Convert$colorToLab = A2($elm$core$Basics$composeR, $noahzgordon$elm_color_extra$Color$Convert$colorToXyz, $noahzgordon$elm_color_extra$Color$Convert$xyzToLab);
var $orus_io$elm_orus_ui$OUI$Material$Color$toCIELCH = A2(
	$elm$core$Basics$composeR,
	$noahzgordon$elm_color_extra$Color$Convert$colorToLab,
	function (_v0) {
		var l = _v0.e9;
		var a = _v0.es;
		var b = _v0.ey;
		return {
			cq: $elm$core$Basics$sqrt((a * a) + (b * b)),
			cJ: A2($elm$core$Basics$atan2, b, a),
			e9: l
		};
	});
var $orus_io$elm_orus_ui$OUI$Material$Color$withShade = F3(
	function (c2, amount, c1) {
		var fun = F2(
			function (a, b) {
				return {cq: (a.cq * (1 - amount)) + (b.cq * amount), cJ: (a.cJ * (1 - amount)) + (b.cJ * amount), e9: (a.e9 * (1 - amount)) + (b.e9 * amount)};
			});
		var alpha = $avh4$elm_color$Color$toRgba(c1).bx;
		return $avh4$elm_color$Color$fromRgba(
			function (color) {
				return _Utils_update(
					color,
					{bx: alpha});
			}(
				$avh4$elm_color$Color$toRgba(
					$orus_io$elm_orus_ui$OUI$Material$Color$fromCIELCH(
						A2(
							fun,
							$orus_io$elm_orus_ui$OUI$Material$Color$toCIELCH(c1),
							$orus_io$elm_orus_ui$OUI$Material$Color$toCIELCH(c2))))));
	});
var $orus_io$elm_orus_ui$OUI$Material$Button$elevatedAttrs = F4(
	function (_v0, colorscheme, _v1, color) {
		var _v2 = A4($orus_io$elm_orus_ui$OUI$Material$Button$btnColors, colorscheme, 0, color, false);
		var frontColor = _v2.a;
		var backColor = _v2.b;
		return _List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Border$shadow(
				{
					bB: 1,
					bC: $orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(colorscheme.kT),
					e: _Utils_Tuple2(1, 1),
					bp: 1
				}),
				$mdgriffith$elm_ui$Element$Background$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(backColor)),
				$mdgriffith$elm_ui$Element$Font$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(frontColor)),
				$mdgriffith$elm_ui$Element$focused(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A3(
								$orus_io$elm_orus_ui$OUI$Material$Color$withShade,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme),
								$orus_io$elm_orus_ui$OUI$Material$Color$focusStateLayerOpacity,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getSurfaceContainerLowColor, color, colorscheme))))
					])),
				$mdgriffith$elm_ui$Element$mouseDown(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A3(
								$orus_io$elm_orus_ui$OUI$Material$Color$withShade,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme),
								$orus_io$elm_orus_ui$OUI$Material$Color$pressStateLayerOpacity,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getSurfaceContainerLowColor, color, colorscheme))))
					])),
				$mdgriffith$elm_ui$Element$mouseOver(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A3(
								$orus_io$elm_orus_ui$OUI$Material$Color$withShade,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme),
								$orus_io$elm_orus_ui$OUI$Material$Color$hoverStateLayerOpacity,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getSurfaceContainerLowColor, color, colorscheme))))
					]))
			]);
	});
var $orus_io$elm_orus_ui$OUI$Material$Button$elevatedDisabledAttrs = F4(
	function (_v0, colorscheme, color, _v1) {
		var _v2 = A4($orus_io$elm_orus_ui$OUI$Material$Button$btnColors, colorscheme, 0, $orus_io$elm_orus_ui$OUI$Primary, true);
		var frontColor = _v2.a;
		var backColor = _v2.b;
		return _List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Background$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(backColor)),
				$mdgriffith$elm_ui$Element$Font$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(frontColor)),
				$mdgriffith$elm_ui$Element$focused(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A2(
								$orus_io$elm_orus_ui$OUI$Material$Color$setAlpha,
								0.12 + $orus_io$elm_orus_ui$OUI$Material$Color$hoverStateLayerOpacity,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnSurfaceColor, color, colorscheme))))
					]))
			]);
	});
var $orus_io$elm_orus_ui$OUI$Button$SmallFAB = 4;
var $orus_io$elm_orus_ui$OUI$Material$Button$fabColorsAttrs = F2(
	function (colorscheme, color) {
		var _v0 = A4($orus_io$elm_orus_ui$OUI$Material$Button$btnColors, colorscheme, 4, color, false);
		var frontColor = _v0.a;
		var bgColor = _v0.b;
		var stateLayerColor = frontColor;
		return _List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Border$shadow(
				{
					bB: 1,
					bC: $orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(colorscheme.kT),
					e: _Utils_Tuple2(1, 1),
					bp: 1
				}),
				$mdgriffith$elm_ui$Element$Background$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(bgColor)),
				$mdgriffith$elm_ui$Element$Font$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(frontColor)),
				$mdgriffith$elm_ui$Element$focused(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A3($orus_io$elm_orus_ui$OUI$Material$Color$withShade, stateLayerColor, $orus_io$elm_orus_ui$OUI$Material$Color$focusStateLayerOpacity, bgColor)))
					])),
				$mdgriffith$elm_ui$Element$mouseDown(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A3($orus_io$elm_orus_ui$OUI$Material$Color$withShade, stateLayerColor, $orus_io$elm_orus_ui$OUI$Material$Color$pressStateLayerOpacity, bgColor)))
					])),
				$mdgriffith$elm_ui$Element$mouseOver(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A3($orus_io$elm_orus_ui$OUI$Material$Color$withShade, stateLayerColor, $orus_io$elm_orus_ui$OUI$Material$Color$hoverStateLayerOpacity, bgColor)))
					]))
			]);
	});
var $orus_io$elm_orus_ui$OUI$Material$Button$fabLayoutAttrs = function (layout) {
	return _List_fromArray(
		[
			$mdgriffith$elm_ui$Element$Border$rounded(layout.cu),
			$mdgriffith$elm_ui$Element$height(
			$mdgriffith$elm_ui$Element$px(layout.aN)),
			$mdgriffith$elm_ui$Element$width(
			$mdgriffith$elm_ui$Element$px(layout.cw))
		]);
};
var $orus_io$elm_orus_ui$OUI$Button$Filled = 1;
var $orus_io$elm_orus_ui$OUI$Material$Button$filledAttrs = F4(
	function (_v0, colorscheme, _v1, color) {
		var _v2 = A4($orus_io$elm_orus_ui$OUI$Material$Button$btnColors, colorscheme, 1, color, false);
		var frontColor = _v2.a;
		var backColor = _v2.b;
		return _List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Background$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(backColor)),
				$mdgriffith$elm_ui$Element$Font$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(frontColor)),
				$mdgriffith$elm_ui$Element$focused(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A3(
								$orus_io$elm_orus_ui$OUI$Material$Color$withShade,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnColor, color, colorscheme),
								$orus_io$elm_orus_ui$OUI$Material$Color$focusStateLayerOpacity,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme))))
					])),
				$mdgriffith$elm_ui$Element$mouseDown(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A3(
								$orus_io$elm_orus_ui$OUI$Material$Color$withShade,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnColor, color, colorscheme),
								$orus_io$elm_orus_ui$OUI$Material$Color$pressStateLayerOpacity,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme))))
					])),
				$mdgriffith$elm_ui$Element$mouseOver(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A3(
								$orus_io$elm_orus_ui$OUI$Material$Color$withShade,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnColor, color, colorscheme),
								$orus_io$elm_orus_ui$OUI$Material$Color$hoverStateLayerOpacity,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme))))
					]))
			]);
	});
var $orus_io$elm_orus_ui$OUI$Material$Button$filledDisabledAttrs = F4(
	function (_v0, colorscheme, color, _v1) {
		var _v2 = A4($orus_io$elm_orus_ui$OUI$Material$Button$btnColors, colorscheme, 1, $orus_io$elm_orus_ui$OUI$Primary, true);
		var frontColor = _v2.a;
		var backColor = _v2.b;
		return _List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Background$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(backColor)),
				$mdgriffith$elm_ui$Element$Font$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(frontColor)),
				$mdgriffith$elm_ui$Element$focused(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A2(
								$orus_io$elm_orus_ui$OUI$Material$Color$setAlpha,
								0.12 + $orus_io$elm_orus_ui$OUI$Material$Color$hoverStateLayerOpacity,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnSurfaceColor, color, colorscheme))))
					]))
			]);
	});
var $orus_io$elm_orus_ui$OUI$Material$Button$iconButtonAttrs = function (layout) {
	return _List_fromArray(
		[
			$mdgriffith$elm_ui$Element$width(
			$mdgriffith$elm_ui$Element$px(layout.cv)),
			$mdgriffith$elm_ui$Element$height(
			$mdgriffith$elm_ui$Element$px(layout.cv)),
			$mdgriffith$elm_ui$Element$Border$rounded((layout.cv / 2) | 0)
		]);
};
var $orus_io$elm_orus_ui$OUI$Material$Button$iconOnly = function (t) {
	switch (t) {
		case 10:
			return true;
		case 8:
			return true;
		case 9:
			return true;
		case 4:
			return true;
		case 5:
			return true;
		case 6:
			return true;
		default:
			return false;
	}
};
var $orus_io$elm_orus_ui$OUI$Material$Button$iconSizeColor = F5(
	function (colorscheme, theme, type_, color, disabled) {
		var _v0 = A4($orus_io$elm_orus_ui$OUI$Material$Button$btnColors, colorscheme, type_, color, disabled);
		var frontColor = _v0.a;
		switch (type_) {
			case 4:
				return _Utils_Tuple2(theme.ar.b3.E, frontColor);
			case 5:
				return _Utils_Tuple2(theme.ar.hb.E, frontColor);
			case 6:
				return _Utils_Tuple2(theme.ar.au.E, frontColor);
			case 7:
				return _Utils_Tuple2(theme.ar.dK.E, frontColor);
			case 10:
				return _Utils_Tuple2(theme.gV.E, frontColor);
			case 8:
				return _Utils_Tuple2(theme.gV.E, frontColor);
			case 9:
				return _Utils_Tuple2(theme.gV.E, frontColor);
			default:
				return _Utils_Tuple2(theme.l.E, frontColor);
		}
	});
var $mdgriffith$elm_ui$Element$paddingXY = F2(
	function (x, y) {
		if (_Utils_eq(x, y)) {
			var f = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + $elm$core$String$fromInt(x),
					f,
					f,
					f,
					f));
		} else {
			var yFloat = y;
			var xFloat = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y))),
					yFloat,
					xFloat,
					yFloat,
					xFloat));
		}
	});
var $orus_io$elm_orus_ui$OUI$Material$Button$layoutAttrs = F4(
	function (typescale, colorscheme, layout, hasIcon) {
		var padding = hasIcon ? $mdgriffith$elm_ui$Element$paddingEach(
			{cp: 0, cR: layout.dR, c3: layout.d7, dk: 0}) : A2($mdgriffith$elm_ui$Element$paddingXY, layout.dS, 0);
		return A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Element$height(
				$mdgriffith$elm_ui$Element$px(layout.aN)),
			_Utils_ap(
				A5($orus_io$elm_orus_ui$OUI$Material$Typography$attrs, layout.h5, layout.h4, $orus_io$elm_orus_ui$OUI$Text$NoColor, typescale, colorscheme),
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Border$rounded(layout.dC),
						padding
					])));
	});
var $elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var $mdgriffith$elm_ui$Element$link = F2(
	function (attrs, _v0) {
		var url = _v0.lx;
		var label = _v0.bO;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$NodeName('a'),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Attributes$href(url)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						$elm$html$Html$Attributes$rel('noopener noreferrer')),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dE + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.a0 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.fe)))),
								attrs))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $mdgriffith$elm_ui$Element$newTabLink = F2(
	function (attrs, _v0) {
		var url = _v0.lx;
		var label = _v0.bO;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$NodeName('a'),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Attributes$href(url)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						$elm$html$Html$Attributes$rel('noopener noreferrer')),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$Attr(
							$elm$html$Html$Attributes$target('_blank')),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dE + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.a0 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.fe)))),
									attrs)))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $orus_io$elm_orus_ui$OUI$Material$Color$getSurfaceColor = function (c) {
	if (c.$ === 10) {
		var surface = c.a.k3;
		return $elm$core$Basics$always(surface);
	} else {
		return function ($) {
			return $.k3;
		};
	}
};
var $orus_io$elm_orus_ui$OUI$Material$Button$outlinedAttrs = F4(
	function (_v0, colorscheme, _v1, color) {
		return _List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Border$width(1),
				$mdgriffith$elm_ui$Element$Border$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(colorscheme.ku)),
				$mdgriffith$elm_ui$Element$Font$color(
				A2($orus_io$elm_orus_ui$OUI$Material$Color$getElementColor, color, colorscheme)),
				$mdgriffith$elm_ui$Element$focused(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A3(
								$orus_io$elm_orus_ui$OUI$Material$Color$withShade,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme),
								$orus_io$elm_orus_ui$OUI$Material$Color$focusStateLayerOpacity,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getSurfaceColor, color, colorscheme))))
					])),
				$mdgriffith$elm_ui$Element$mouseDown(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A3(
								$orus_io$elm_orus_ui$OUI$Material$Color$withShade,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme),
								$orus_io$elm_orus_ui$OUI$Material$Color$pressStateLayerOpacity,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getSurfaceColor, color, colorscheme))))
					])),
				$mdgriffith$elm_ui$Element$mouseOver(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A3(
								$orus_io$elm_orus_ui$OUI$Material$Color$withShade,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme),
								$orus_io$elm_orus_ui$OUI$Material$Color$hoverStateLayerOpacity,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getSurfaceColor, color, colorscheme))))
					]))
			]);
	});
var $orus_io$elm_orus_ui$OUI$Material$Button$outlinedDisabledAttrs = F4(
	function (_v0, colorscheme, color, _v1) {
		return _List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Border$width(1),
				$mdgriffith$elm_ui$Element$Border$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
					A2(
						$orus_io$elm_orus_ui$OUI$Material$Color$setAlpha,
						0.12,
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnSurfaceColor, color, colorscheme)))),
				$mdgriffith$elm_ui$Element$Font$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
					A2(
						$orus_io$elm_orus_ui$OUI$Material$Color$setAlpha,
						0.38,
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnSurfaceColor, color, colorscheme)))),
				$mdgriffith$elm_ui$Element$focused(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A2(
								$orus_io$elm_orus_ui$OUI$Material$Color$setAlpha,
								$orus_io$elm_orus_ui$OUI$Material$Color$hoverStateLayerOpacity,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnSurfaceColor, color, colorscheme))))
					]))
			]);
	});
var $orus_io$elm_orus_ui$OUI$Icon$getColor = function (_v0) {
	var props = _v0;
	return props.bC;
};
var $orus_io$elm_orus_ui$OUI$Icon$getRenderer = function (_v0) {
	var props = _v0;
	return props.hK;
};
var $orus_io$elm_orus_ui$OUI$Icon$getSize = function (_v0) {
	var props = _v0;
	return props.bp;
};
var $mdgriffith$elm_ui$Element$map = $mdgriffith$elm_ui$Internal$Model$map;
var $orus_io$elm_orus_ui$OUI$Material$Icon$renderWithSizeColor = F4(
	function (size, color, attrs, icon) {
		var properties = {
			bC: $orus_io$elm_orus_ui$OUI$Icon$getColor(icon),
			hK: $orus_io$elm_orus_ui$OUI$Icon$getRenderer(icon),
			bp: $orus_io$elm_orus_ui$OUI$Icon$getSize(icon)
		};
		return A2(
			$mdgriffith$elm_ui$Element$el,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(size)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height(
						$mdgriffith$elm_ui$Element$px(size)),
					attrs)),
			function () {
				var _v0 = properties.hK;
				if (_v0.$ === 1) {
					var renderHtml = _v0.a;
					return A2(
						$mdgriffith$elm_ui$Element$map,
						$elm$core$Basics$never,
						$mdgriffith$elm_ui$Element$html(
							A2(renderHtml, size, color)));
				} else {
					var renderSvg = _v0.a;
					return A2(
						$mdgriffith$elm_ui$Element$map,
						$elm$core$Basics$never,
						$mdgriffith$elm_ui$Element$html(
							A2(
								$elm$svg$Svg$svg,
								_List_Nil,
								$elm$core$List$singleton(
									A2(renderSvg, size, color)))));
				}
			}());
	});
var $orus_io$elm_orus_ui$OUI$Utils$ARIA$RoleButton = {$: 0};
var $orus_io$elm_orus_ui$OUI$Utils$ARIA$fromRole = function (role) {
	return {bO: $elm$core$Maybe$Nothing, c4: role};
};
var $orus_io$elm_orus_ui$OUI$Utils$ARIA$roleButton = $orus_io$elm_orus_ui$OUI$Utils$ARIA$fromRole($orus_io$elm_orus_ui$OUI$Utils$ARIA$RoleButton);
var $orus_io$elm_orus_ui$OUI$Material$Button$textAttrs = F4(
	function (_v0, colorscheme, _v1, color) {
		return _List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Font$color(
				A2($orus_io$elm_orus_ui$OUI$Material$Color$getElementColor, color, colorscheme)),
				$mdgriffith$elm_ui$Element$focused(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A3(
								$orus_io$elm_orus_ui$OUI$Material$Color$withShade,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme),
								$orus_io$elm_orus_ui$OUI$Material$Color$focusStateLayerOpacity,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getSurfaceColor, color, colorscheme))))
					])),
				$mdgriffith$elm_ui$Element$mouseDown(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A3(
								$orus_io$elm_orus_ui$OUI$Material$Color$withShade,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme),
								$orus_io$elm_orus_ui$OUI$Material$Color$pressStateLayerOpacity,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getSurfaceColor, color, colorscheme))))
					])),
				$mdgriffith$elm_ui$Element$mouseOver(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A3(
								$orus_io$elm_orus_ui$OUI$Material$Color$withShade,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getColor, color, colorscheme),
								$orus_io$elm_orus_ui$OUI$Material$Color$hoverStateLayerOpacity,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getSurfaceColor, color, colorscheme))))
					]))
			]);
	});
var $orus_io$elm_orus_ui$OUI$Material$Button$textDisabledAttrs = F4(
	function (_v0, colorscheme, color, _v1) {
		return _List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Font$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
					A2(
						$orus_io$elm_orus_ui$OUI$Material$Color$setAlpha,
						0.38,
						A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnSurfaceColor, color, colorscheme)))),
				$mdgriffith$elm_ui$Element$focused(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Background$color(
						$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(
							A2(
								$orus_io$elm_orus_ui$OUI$Material$Color$setAlpha,
								$orus_io$elm_orus_ui$OUI$Material$Color$hoverStateLayerOpacity,
								A2($orus_io$elm_orus_ui$OUI$Material$Color$getOnSurfaceColor, color, colorscheme))))
					]))
			]);
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $orus_io$elm_orus_ui$OUI$Utils$ARIA$ifThenElse = F3(
	function (value, ifTrue, ifFalse) {
		return value ? ifTrue : ifFalse;
	});
var $orus_io$elm_orus_ui$OUI$Utils$ARIA$checkedAttr = function (value) {
	return $mdgriffith$elm_ui$Element$htmlAttribute(
		A2(
			$elm$html$Html$Attributes$attribute,
			'aria-checked',
			A3($orus_io$elm_orus_ui$OUI$Utils$ARIA$ifThenElse, value, 'true', 'false')));
};
var $orus_io$elm_orus_ui$OUI$Utils$ARIA$labelAttr = function (value) {
	return $mdgriffith$elm_ui$Element$htmlAttribute(
		A2($elm$html$Html$Attributes$attribute, 'aria-label', value));
};
var $orus_io$elm_orus_ui$OUI$Utils$ARIA$prependMaybe = A2(
	$elm$core$Basics$composeR,
	$elm$core$Maybe$map($elm$core$List$cons),
	$elm$core$Maybe$withDefault($elm$core$Basics$identity));
var $orus_io$elm_orus_ui$OUI$Utils$ARIA$pressedAttr = function (value) {
	return $mdgriffith$elm_ui$Element$htmlAttribute(
		A2(
			$elm$html$Html$Attributes$attribute,
			'aria-pressed',
			A3($orus_io$elm_orus_ui$OUI$Utils$ARIA$ifThenElse, value, 'true', 'false')));
};
var $orus_io$elm_orus_ui$OUI$Utils$ARIA$roleAttr = function (role) {
	return $mdgriffith$elm_ui$Element$htmlAttribute(
		A2($elm$html$Html$Attributes$attribute, 'role', role));
};
var $orus_io$elm_orus_ui$OUI$Utils$ARIA$selectedAttr = function (value) {
	return $mdgriffith$elm_ui$Element$htmlAttribute(
		A2(
			$elm$html$Html$Attributes$attribute,
			'aria-selected',
			A3($orus_io$elm_orus_ui$OUI$Utils$ARIA$ifThenElse, value, 'true', 'false')));
};
var $orus_io$elm_orus_ui$OUI$Utils$ARIA$toElementAttributes = function (_v0) {
	var role = _v0.c4;
	var label = _v0.bO;
	return A2(
		$orus_io$elm_orus_ui$OUI$Utils$ARIA$prependMaybe,
		A2($elm$core$Maybe$map, $orus_io$elm_orus_ui$OUI$Utils$ARIA$labelAttr, label),
		function () {
			switch (role.$) {
				case 0:
					return _List_fromArray(
						[
							$orus_io$elm_orus_ui$OUI$Utils$ARIA$roleAttr('button')
						]);
				case 9:
					var pressed = role.a;
					return _List_fromArray(
						[
							$orus_io$elm_orus_ui$OUI$Utils$ARIA$roleAttr('button'),
							$orus_io$elm_orus_ui$OUI$Utils$ARIA$pressedAttr(pressed)
						]);
				case 1:
					var checked = role.a;
					return _List_fromArray(
						[
							$orus_io$elm_orus_ui$OUI$Utils$ARIA$roleAttr('checkbox'),
							$orus_io$elm_orus_ui$OUI$Utils$ARIA$checkedAttr(checked)
						]);
				case 2:
					var checked = role.a;
					return _List_fromArray(
						[
							$orus_io$elm_orus_ui$OUI$Utils$ARIA$roleAttr('radio'),
							$orus_io$elm_orus_ui$OUI$Utils$ARIA$checkedAttr(checked)
						]);
				case 3:
					var state = role.a;
					return _List_fromArray(
						[
							$orus_io$elm_orus_ui$OUI$Utils$ARIA$roleAttr('switch'),
							$orus_io$elm_orus_ui$OUI$Utils$ARIA$checkedAttr(state)
						]);
				case 4:
					return _List_fromArray(
						[
							$orus_io$elm_orus_ui$OUI$Utils$ARIA$roleAttr('img')
						]);
				case 5:
					return _List_fromArray(
						[
							$orus_io$elm_orus_ui$OUI$Utils$ARIA$roleAttr('presentation')
						]);
				case 6:
					var checked = role.a;
					return _List_fromArray(
						[
							$orus_io$elm_orus_ui$OUI$Utils$ARIA$roleAttr('radio'),
							$orus_io$elm_orus_ui$OUI$Utils$ARIA$checkedAttr(checked)
						]);
				case 7:
					return _List_fromArray(
						[
							$orus_io$elm_orus_ui$OUI$Utils$ARIA$roleAttr('radiogroup')
						]);
				default:
					var selected = role.a;
					return _List_fromArray(
						[
							$orus_io$elm_orus_ui$OUI$Utils$ARIA$roleAttr('tab'),
							$orus_io$elm_orus_ui$OUI$Utils$ARIA$selectedAttr(selected)
						]);
			}
		}());
};
var $orus_io$elm_orus_ui$OUI$Utils$ARIA$withLabel = F2(
	function (label, semantics) {
		return _Utils_update(
			semantics,
			{
				bO: $elm$core$Maybe$Just(label)
			});
	});
var $orus_io$elm_orus_ui$OUI$Material$Button$renderProps = F6(
	function (typescale, colorscheme, theme, rightIcon, attrs, props) {
		var label = function () {
			var _v29 = A5(
				$orus_io$elm_orus_ui$OUI$Material$Button$iconSizeColor,
				colorscheme,
				theme,
				props.v,
				props.bC,
				_Utils_eq(props.aY, $orus_io$elm_orus_ui$OUI$Button$Disabled));
			var size = _v29.a;
			var color = _v29.b;
			var _v30 = _Utils_Tuple3(
				$orus_io$elm_orus_ui$OUI$Material$Button$iconOnly(props.v),
				props.gV,
				rightIcon);
			_v30$0:
			while (true) {
				_v30$1:
				while (true) {
					if (_v30.a) {
						if (_v30.b.$ === 1) {
							if (_v30.c.$ === 1) {
								break _v30$0;
							} else {
								break _v30$1;
							}
						} else {
							if (!_v30.c.$) {
								break _v30$1;
							} else {
								var icon = _v30.b.a;
								return A4(
									$orus_io$elm_orus_ui$OUI$Material$Icon$renderWithSizeColor,
									size,
									color,
									_List_fromArray(
										[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
									icon);
							}
						}
					} else {
						if ((_v30.b.$ === 1) && (_v30.c.$ === 1)) {
							break _v30$0;
						} else {
							var icon = _v30.b;
							var rIcon = _v30.c;
							return A2(
								$mdgriffith$elm_ui$Element$row,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$spacing(theme.l.d$)
									]),
								A2(
									$elm$core$List$filterMap,
									$elm$core$Basics$identity,
									_List_fromArray(
										[
											A2(
											$elm$core$Maybe$map,
											A3(
												$orus_io$elm_orus_ui$OUI$Material$Icon$renderWithSizeColor,
												size,
												color,
												_List_fromArray(
													[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY])),
											icon),
											$elm$core$Maybe$Just(
											$mdgriffith$elm_ui$Element$text(props.p)),
											A2(
											$elm$core$Maybe$map,
											A3(
												$orus_io$elm_orus_ui$OUI$Material$Icon$renderWithSizeColor,
												size,
												color,
												_List_fromArray(
													[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY])),
											rIcon)
										])));
						}
					}
				}
				var icon = _v30.c.a;
				return A4(
					$orus_io$elm_orus_ui$OUI$Material$Icon$renderWithSizeColor,
					size,
					color,
					_List_fromArray(
						[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
					icon);
			}
			var _v31 = _v30.b;
			var _v32 = _v30.c;
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
				$mdgriffith$elm_ui$Element$text(props.p));
		}();
		var hasIcon = !_Utils_eq(props.gV, $elm$core$Maybe$Nothing);
		var aria = $orus_io$elm_orus_ui$OUI$Utils$ARIA$toElementAttributes(
			A2($orus_io$elm_orus_ui$OUI$Utils$ARIA$withLabel, props.p, $orus_io$elm_orus_ui$OUI$Utils$ARIA$roleButton));
		var all_attrs = _Utils_ap(
			aria,
			_Utils_ap(
				attrs,
				function () {
					var _v1 = _Utils_Tuple2(props.v, props.aY);
					switch (_v1.a) {
						case 0:
							if (!_v1.b.$) {
								var _v2 = _v1.a;
								var _v3 = _v1.b;
								return _Utils_ap(
									A4($orus_io$elm_orus_ui$OUI$Material$Button$layoutAttrs, typescale, colorscheme, theme.l, hasIcon),
									A4($orus_io$elm_orus_ui$OUI$Material$Button$elevatedDisabledAttrs, typescale, colorscheme, props.bC, theme.l));
							} else {
								var _v4 = _v1.a;
								return _Utils_ap(
									A4($orus_io$elm_orus_ui$OUI$Material$Button$layoutAttrs, typescale, colorscheme, theme.l, hasIcon),
									A4($orus_io$elm_orus_ui$OUI$Material$Button$elevatedAttrs, typescale, colorscheme, theme.l, props.bC));
							}
						case 1:
							if (!_v1.b.$) {
								var _v5 = _v1.a;
								var _v6 = _v1.b;
								return _Utils_ap(
									A4($orus_io$elm_orus_ui$OUI$Material$Button$layoutAttrs, typescale, colorscheme, theme.l, hasIcon),
									A4($orus_io$elm_orus_ui$OUI$Material$Button$filledDisabledAttrs, typescale, colorscheme, props.bC, theme.l));
							} else {
								var _v7 = _v1.a;
								return _Utils_ap(
									A4($orus_io$elm_orus_ui$OUI$Material$Button$layoutAttrs, typescale, colorscheme, theme.l, hasIcon),
									A4($orus_io$elm_orus_ui$OUI$Material$Button$filledAttrs, typescale, colorscheme, theme.l, props.bC));
							}
						case 8:
							if (!_v1.b.$) {
								var _v8 = _v1.a;
								var _v9 = _v1.b;
								return _Utils_ap(
									$orus_io$elm_orus_ui$OUI$Material$Button$iconButtonAttrs(theme.gV),
									A4($orus_io$elm_orus_ui$OUI$Material$Button$filledDisabledAttrs, typescale, colorscheme, props.bC, theme.l));
							} else {
								var _v10 = _v1.a;
								return _Utils_ap(
									$orus_io$elm_orus_ui$OUI$Material$Button$iconButtonAttrs(theme.gV),
									A4($orus_io$elm_orus_ui$OUI$Material$Button$filledAttrs, typescale, colorscheme, theme.l, props.bC));
							}
						case 2:
							if (!_v1.b.$) {
								var _v11 = _v1.a;
								var _v12 = _v1.b;
								return _Utils_ap(
									A4($orus_io$elm_orus_ui$OUI$Material$Button$layoutAttrs, typescale, colorscheme, theme.l, hasIcon),
									A4($orus_io$elm_orus_ui$OUI$Material$Button$outlinedDisabledAttrs, typescale, colorscheme, props.bC, theme.l));
							} else {
								var _v13 = _v1.a;
								return _Utils_ap(
									A4($orus_io$elm_orus_ui$OUI$Material$Button$layoutAttrs, typescale, colorscheme, theme.l, hasIcon),
									A4($orus_io$elm_orus_ui$OUI$Material$Button$outlinedAttrs, typescale, colorscheme, theme.l, props.bC));
							}
						case 9:
							if (!_v1.b.$) {
								var _v14 = _v1.a;
								var _v15 = _v1.b;
								return _Utils_ap(
									$orus_io$elm_orus_ui$OUI$Material$Button$iconButtonAttrs(theme.gV),
									A4($orus_io$elm_orus_ui$OUI$Material$Button$outlinedDisabledAttrs, typescale, colorscheme, props.bC, theme.l));
							} else {
								var _v16 = _v1.a;
								return _Utils_ap(
									$orus_io$elm_orus_ui$OUI$Material$Button$iconButtonAttrs(theme.gV),
									A4($orus_io$elm_orus_ui$OUI$Material$Button$outlinedAttrs, typescale, colorscheme, theme.l, props.bC));
							}
						case 3:
							if (!_v1.b.$) {
								var _v17 = _v1.a;
								var _v18 = _v1.b;
								return _Utils_ap(
									A4($orus_io$elm_orus_ui$OUI$Material$Button$layoutAttrs, typescale, colorscheme, theme.l, hasIcon),
									A4($orus_io$elm_orus_ui$OUI$Material$Button$textDisabledAttrs, typescale, colorscheme, props.bC, theme.l));
							} else {
								var _v19 = _v1.a;
								return _Utils_ap(
									A4($orus_io$elm_orus_ui$OUI$Material$Button$layoutAttrs, typescale, colorscheme, theme.l, hasIcon),
									A4($orus_io$elm_orus_ui$OUI$Material$Button$textAttrs, typescale, colorscheme, theme.l, props.bC));
							}
						case 10:
							if (!_v1.b.$) {
								var _v20 = _v1.a;
								var _v21 = _v1.b;
								return _Utils_ap(
									$orus_io$elm_orus_ui$OUI$Material$Button$iconButtonAttrs(theme.gV),
									A4($orus_io$elm_orus_ui$OUI$Material$Button$textDisabledAttrs, typescale, colorscheme, props.bC, theme.l));
							} else {
								var _v22 = _v1.a;
								return _Utils_ap(
									$orus_io$elm_orus_ui$OUI$Material$Button$iconButtonAttrs(theme.gV),
									A4($orus_io$elm_orus_ui$OUI$Material$Button$textAttrs, typescale, colorscheme, theme.l, props.bC));
							}
						case 4:
							var _v23 = _v1.a;
							return _Utils_ap(
								$orus_io$elm_orus_ui$OUI$Material$Button$fabLayoutAttrs(theme.ar.b3),
								A2($orus_io$elm_orus_ui$OUI$Material$Button$fabColorsAttrs, colorscheme, props.bC));
						case 5:
							var _v24 = _v1.a;
							return _Utils_ap(
								$orus_io$elm_orus_ui$OUI$Material$Button$fabLayoutAttrs(theme.ar.hb),
								A2($orus_io$elm_orus_ui$OUI$Material$Button$fabColorsAttrs, colorscheme, props.bC));
						case 6:
							var _v25 = _v1.a;
							return _Utils_ap(
								$orus_io$elm_orus_ui$OUI$Material$Button$fabLayoutAttrs(theme.ar.au),
								A2($orus_io$elm_orus_ui$OUI$Material$Button$fabColorsAttrs, colorscheme, props.bC));
						default:
							if (!_v1.b.$) {
								var _v26 = _v1.a;
								var _v27 = _v1.b;
								return _Utils_ap(
									A4($orus_io$elm_orus_ui$OUI$Material$Button$layoutAttrs, typescale, colorscheme, theme.ar.dK, hasIcon),
									A2($orus_io$elm_orus_ui$OUI$Material$Button$fabColorsAttrs, colorscheme, props.bC));
							} else {
								var _v28 = _v1.a;
								return _Utils_ap(
									A4($orus_io$elm_orus_ui$OUI$Material$Button$layoutAttrs, typescale, colorscheme, theme.ar.dK, hasIcon),
									A2($orus_io$elm_orus_ui$OUI$Material$Button$fabColorsAttrs, colorscheme, props.bC));
							}
					}
				}()));
		var _v0 = props.aY;
		switch (_v0.$) {
			case 2:
				var url = _v0.a;
				return A2(
					$mdgriffith$elm_ui$Element$link,
					all_attrs,
					{bO: label, lx: url});
			case 3:
				var url = _v0.a;
				return A2(
					$mdgriffith$elm_ui$Element$newTabLink,
					all_attrs,
					{bO: label, lx: url});
			case 4:
				var url = _v0.a;
				return A2(
					$mdgriffith$elm_ui$Element$download,
					all_attrs,
					{bO: label, lx: url});
			case 5:
				var url = _v0.a;
				var filename = _v0.b;
				return A2(
					$mdgriffith$elm_ui$Element$downloadAs,
					all_attrs,
					{jv: filename, bO: label, lx: url});
			case 1:
				var msg = _v0.a;
				return A2(
					$mdgriffith$elm_ui$Element$Input$button,
					all_attrs,
					{
						bO: label,
						kn: $elm$core$Maybe$Just(msg)
					});
			default:
				return A2(
					$mdgriffith$elm_ui$Element$Input$button,
					all_attrs,
					{bO: label, kn: $elm$core$Maybe$Nothing});
		}
	});
var $orus_io$elm_orus_ui$OUI$Material$Button$render = F6(
	function (typescale, colorscheme, theme, rightIcon, attrs, button) {
		var props = {
			aY: $orus_io$elm_orus_ui$OUI$Button$getAction(button),
			bC: $orus_io$elm_orus_ui$OUI$Button$getColor(button),
			gV: $orus_io$elm_orus_ui$OUI$Button$getIcon(button),
			p: $orus_io$elm_orus_ui$OUI$Button$getText(button),
			v: $orus_io$elm_orus_ui$OUI$Button$getType(button)
		};
		return A6($orus_io$elm_orus_ui$OUI$Material$Button$renderProps, typescale, colorscheme, theme, rightIcon, attrs, props);
	});
var $orus_io$elm_orus_ui$OUI$Material$button = function (theme) {
	return A4(
		$orus_io$elm_orus_ui$OUI$Material$Button$render,
		$orus_io$elm_orus_ui$OUI$Material$Theme$typescale(theme),
		$orus_io$elm_orus_ui$OUI$Material$Theme$colorscheme(theme),
		$orus_io$elm_orus_ui$OUI$Material$Theme$button(theme),
		$elm$core$Maybe$Nothing);
};
var $orus_io$elm_orus_ui$OUI$Button$Button = $elm$core$Basics$identity;
var $orus_io$elm_orus_ui$OUI$Button$new = function (label) {
	return {aY: $orus_io$elm_orus_ui$OUI$Button$Disabled, bC: $orus_io$elm_orus_ui$OUI$Primary, gV: $elm$core$Maybe$Nothing, p: label, v: 0};
};
var $orus_io$elm_orus_ui$OUI$Button$OnClick = function (a) {
	return {$: 1, a: a};
};
var $orus_io$elm_orus_ui$OUI$Button$onClick = F2(
	function (msg, _v0) {
		var props = _v0;
		return _Utils_update(
			props,
			{
				aY: $orus_io$elm_orus_ui$OUI$Button$OnClick(msg)
			});
	});
var $mdgriffith$elm_ui$Element$padding = function (x) {
	var f = x;
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$padding,
		A5(
			$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
			'p-' + $elm$core$String$fromInt(x),
			f,
			f,
			f,
			f));
};
var $author$project$Main$startPanel = function () {
	var scheme = $orus_io$elm_orus_ui$OUI$Material$Theme$colorscheme($author$project$UI$theme);
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Border$rounded(12),
				$mdgriffith$elm_ui$Element$Border$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(scheme.hw)),
				$mdgriffith$elm_ui$Element$Border$width(1),
				$mdgriffith$elm_ui$Element$Background$color(
				$orus_io$elm_orus_ui$OUI$Material$Color$toElementColor(scheme.kx)),
				$mdgriffith$elm_ui$Element$padding(20),
				$mdgriffith$elm_ui$Element$spacing(20),
				$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
			]),
		_List_fromArray(
			[
				A2(
				$orus_io$elm_orus_ui$OUI$Material$text,
				$author$project$UI$theme,
				$orus_io$elm_orus_ui$OUI$Text$bodyMedium('Start Vessel')),
				A3(
				$orus_io$elm_orus_ui$OUI$Material$button,
				$author$project$UI$theme,
				_List_Nil,
				A2(
					$orus_io$elm_orus_ui$OUI$Button$onClick,
					$author$project$Main$StartVessel(1),
					$orus_io$elm_orus_ui$OUI$Button$new('Downstream'))),
				A3(
				$orus_io$elm_orus_ui$OUI$Material$button,
				$author$project$UI$theme,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
					]),
				A2(
					$orus_io$elm_orus_ui$OUI$Button$onClick,
					$author$project$Main$StartVessel(0),
					$orus_io$elm_orus_ui$OUI$Button$new('Upstream')))
			]));
}();
var $author$project$Main$view = function (model) {
	return {
		iS: _List_fromArray(
			[
				$author$project$UI$layout(
				A2(
					$mdgriffith$elm_ui$Element$column,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$paddingEach(
							{cp: 0, cR: 80, c3: 0, dk: 40})
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$spacing(20),
									$mdgriffith$elm_ui$Element$paddingEach(
									{cp: 0, cR: 30, c3: 0, dk: 0})
								]),
							_List_fromArray(
								[
									A2(
									$orus_io$elm_orus_ui$OUI$Material$text,
									$author$project$UI$theme,
									$orus_io$elm_orus_ui$OUI$Text$displayMedium('WETS'))
								])),
							A2(
							$mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$paddingEach(
									{cp: 60, cR: 20, c3: 0, dk: 20}),
									$mdgriffith$elm_ui$Element$spacing(20)
								]),
							_List_fromArray(
								[
									$author$project$Main$startPanel,
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$width(
											$mdgriffith$elm_ui$Element$px(600)),
											$mdgriffith$elm_ui$Element$height(
											$mdgriffith$elm_ui$Element$px(200))
										]),
									$author$project$Main$locks(model))
								])),
							A2(
							$mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$paddingEach(
									{cp: 0, cR: 20, c3: 0, dk: 0}),
									$mdgriffith$elm_ui$Element$spacing(20)
								]),
							_List_fromArray(
								[
									$author$project$Main$infoPanel(model),
									A2(
									$orus_io$elm_orus_ui$OUI$Material$text,
									$author$project$UI$theme,
									$orus_io$elm_orus_ui$OUI$Text$bodyMedium(model.G))
								]))
						])))
			]),
		lo: 'Sim Proto'
	};
};
var $orus_io$elm_nats$Nats$Socket$Closed = {$: 6};
var $orus_io$elm_nats$Nats$Internal$SocketState$OnClosing = {$: 1};
var $orus_io$elm_nats$Nats$Protocol$SUB = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var $orus_io$elm_nats$Nats$Protocol$UNSUB = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $elm$core$Dict$filter = F2(
	function (isGood, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, d) {
					return A2(isGood, k, v) ? A3($elm$core$Dict$insert, k, v, d) : d;
				}),
			$elm$core$Dict$empty,
			dict);
	});
var $orus_io$elm_nats$Nats$Internal$SocketState$getSubscriptionByID = F2(
	function (id, state) {
		return $elm$core$List$head(
			A2(
				$elm$core$List$filter,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.ad;
					},
					$elm$core$Basics$eq(id)),
				state.is));
	});
var $orus_io$elm_nats$Nats$Internal$SocketState$isActiveRequest = function (sub) {
	var _v0 = _Utils_Tuple2(sub.z, sub.k1);
	if ((!_v0.a) && (_v0.b.$ === 1)) {
		var _v1 = _v0.a;
		return true;
	} else {
		return false;
	}
};
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $orus_io$elm_nats$Nats$Internal$SocketState$finalizeSubscriptions = function (state) {
	var _v0 = state.kZ;
	if (_v0.$ === 4) {
		var nextSubscriptions = $elm$core$Dict$values(state.A);
		return _Utils_Tuple2(
			_Utils_update(
				state,
				{
					is: nextSubscriptions,
					A: A2(
						$elm$core$Dict$filter,
						function (_v1) {
							return $orus_io$elm_nats$Nats$Internal$SocketState$isActiveRequest;
						},
						state.A)
				}),
			_Utils_ap(
				A2(
					$elm$core$List$filterMap,
					function (sub) {
						var _v2 = A2($orus_io$elm_nats$Nats$Internal$SocketState$getSubscriptionByID, sub.ad, state);
						if (_v2.$ === 1) {
							return $elm$core$Maybe$Just(
								A3($orus_io$elm_nats$Nats$Protocol$SUB, sub.W, sub.gN, sub.ad));
						} else {
							return $elm$core$Maybe$Nothing;
						}
					},
					nextSubscriptions),
				A2(
					$elm$core$List$filterMap,
					function (sub) {
						var _v3 = _Utils_Tuple2(
							sub.z,
							$elm$core$List$head(
								A2(
									$elm$core$List$filter,
									function (next) {
										return _Utils_eq(next.ad, sub.ad);
									},
									nextSubscriptions)));
						_v3$0:
						while (true) {
							if (!_v3.b.$) {
								if (_v3.a === 2) {
									break _v3$0;
								} else {
									return $elm$core$Maybe$Nothing;
								}
							} else {
								if (_v3.a === 2) {
									break _v3$0;
								} else {
									var _v5 = _v3.b;
									return $elm$core$Maybe$Just(
										A2($orus_io$elm_nats$Nats$Protocol$UNSUB, sub.ad, 0));
								}
							}
						}
						var _v4 = _v3.a;
						return $elm$core$Maybe$Nothing;
					},
					state.is)));
	} else {
		return _Utils_Tuple2(state, _List_Nil);
	}
};
var $orus_io$elm_nats$Nats$Events$RequestCancel = function (a) {
	return {$: 3, a: a};
};
var $orus_io$elm_nats$Nats$Internal$SocketState$SubscriptionCanceled = 2;
var $orus_io$elm_nats$Nats$Internal$SocketState$getSubscriptionByMarker = F2(
	function (reqMarker, state) {
		return $elm$core$List$head(
			A2(
				$elm$core$List$filter,
				function (sub) {
					var _v0 = sub.k1;
					if (_v0.$ === 1) {
						var marker = _v0.a.j2;
						return _Utils_eq(
							marker,
							$elm$core$Maybe$Just(reqMarker));
					} else {
						return false;
					}
				},
				state.is));
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === -1) {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === -1) {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $orus_io$elm_nats$Nats$Internal$SocketState$subTypeKey = function (subType) {
	if (!subType.$) {
		return 'sub';
	} else {
		return 'req';
	}
};
var $orus_io$elm_nats$Nats$Internal$SocketState$subscriptionKey = function (sub) {
	return _Utils_Tuple3(
		$orus_io$elm_nats$Nats$Internal$SocketState$subTypeKey(sub.k1),
		sub.W,
		sub.gN);
};
var $orus_io$elm_nats$Nats$Internal$SocketState$cancelRequest = F2(
	function (marker, state) {
		var _v0 = A2($orus_io$elm_nats$Nats$Internal$SocketState$getSubscriptionByMarker, marker, state);
		if (!_v0.$) {
			var sub = _v0.a;
			var _v1 = sub.k1;
			if (_v1.$ === 1) {
				var request = _v1.a;
				var newSub = _Utils_update(
					sub,
					{z: 2});
				var newKey = $orus_io$elm_nats$Nats$Internal$SocketState$subscriptionKey(newSub);
				var key = $orus_io$elm_nats$Nats$Internal$SocketState$subscriptionKey(sub);
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							A: A3(
								$elm$core$Dict$insert,
								newKey,
								newSub,
								A2($elm$core$Dict$remove, key, state.A))
						}),
					_List_fromArray(
						[
							state.bU(
							$orus_io$elm_nats$Nats$Events$RequestCancel(
								{ad: sub.ad, gW: sub.W, j2: request.j2, c8: state.fN.ad, W: request.W}))
						]),
					_List_fromArray(
						[
							A2($orus_io$elm_nats$Nats$Protocol$UNSUB, sub.ad, 0)
						]));
			} else {
				return _Utils_Tuple3(state, _List_Nil, _List_Nil);
			}
		} else {
			return _Utils_Tuple3(state, _List_Nil, _List_Nil);
		}
	});
var $orus_io$elm_nats$Nats$Internal$SocketState$finalizeTrackers = function (state) {
	var _v0 = state.kZ;
	if (_v0.$ === 4) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (marker, _v1) {
					var st = _v1.a;
					var msgs = _v1.b;
					var ops = _v1.c;
					var _v2 = A2($orus_io$elm_nats$Nats$Internal$SocketState$cancelRequest, marker, st);
					var nextSt = _v2.a;
					var nextMsgs = _v2.b;
					var nextOps = _v2.c;
					return _Utils_Tuple3(
						nextSt,
						_Utils_ap(msgs, nextMsgs),
						_Utils_ap(nextOps, ops));
				}),
			_Utils_Tuple3(
				_Utils_update(
					state,
					{dr: state.bl, bl: _List_Nil}),
				_List_Nil,
				_List_Nil),
			A2(
				$elm$core$List$filter,
				function (marker) {
					return $elm$core$List$isEmpty(
						A2(
							$elm$core$List$filter,
							$elm$core$Basics$eq(marker),
							state.bl));
				},
				state.dr));
	} else {
		return _Utils_Tuple3(state, _List_Nil, _List_Nil);
	}
};
var $orus_io$elm_nats$Nats$Internal$SocketStateCollection$fromList = $elm$core$Basics$identity;
var $orus_io$elm_nats$Nats$Internal$SocketState$Sub = function (a) {
	return {$: 0, a: a};
};
var $orus_io$elm_nats$Nats$Internal$SocketState$SubscriptionActive = 0;
var $orus_io$elm_nats$Nats$Internal$SocketState$getSubscriptionBySubjectGroup = F2(
	function (_v0, state) {
		var subject = _v0.a;
		var group = _v0.b;
		return $elm$core$List$head(
			A2(
				$elm$core$List$filter,
				function (sub) {
					return _Utils_eq(
						_Utils_Tuple2(sub.W, sub.gN),
						_Utils_Tuple2(subject, group));
				},
				state.is));
	});
var $orus_io$elm_nats$Nats$Internal$SocketState$nextID = function (state) {
	return state.cQ + 1;
};
var $orus_io$elm_nats$Nats$Internal$SocketState$subTypeMerge = F2(
	function (sub1, sub2) {
		var _v0 = _Utils_Tuple2(sub1, sub2);
		if ((!_v0.a.$) && (!_v0.b.$)) {
			var list1 = _v0.a.a;
			var list2 = _v0.b.a;
			return $orus_io$elm_nats$Nats$Internal$SocketState$Sub(
				_Utils_ap(list1, list2));
		} else {
			return sub1;
		}
	});
var $orus_io$elm_nats$Nats$Internal$SocketState$addSubscriptionHelper = F4(
	function (subType, subject, group, state) {
		var key = _Utils_Tuple3(
			$orus_io$elm_nats$Nats$Internal$SocketState$subTypeKey(subType),
			subject,
			group);
		var _v0 = A2($elm$core$Dict$get, key, state.A);
		if (!_v0.$) {
			var sub = _v0.a;
			return _Utils_update(
				state,
				{
					A: A3(
						$elm$core$Dict$insert,
						key,
						_Utils_update(
							sub,
							{
								k1: A2($orus_io$elm_nats$Nats$Internal$SocketState$subTypeMerge, sub.k1, subType)
							}),
						state.A)
				});
		} else {
			var _v1 = function () {
				var _v2 = A2(
					$orus_io$elm_nats$Nats$Internal$SocketState$getSubscriptionBySubjectGroup,
					_Utils_Tuple2(subject, group),
					state);
				if (!_v2.$) {
					var sub = _v2.a;
					return _Utils_Tuple2(sub.ad, state.cQ);
				} else {
					return _Utils_Tuple2(
						$elm$core$String$fromInt(
							$orus_io$elm_nats$Nats$Internal$SocketState$nextID(state)),
						$orus_io$elm_nats$Nats$Internal$SocketState$nextID(state));
				}
			}();
			var subID = _v1.a;
			var lastSubID = _v1.b;
			return _Utils_update(
				state,
				{
					cQ: lastSubID,
					A: A3(
						$elm$core$Dict$insert,
						key,
						{gN: group, ad: subID, z: 0, k1: subType, W: subject},
						state.A)
				});
		}
	});
var $orus_io$elm_nats$Nats$Internal$SocketState$addSubscription = F3(
	function (subject, group, onMessage) {
		return A3(
			$orus_io$elm_nats$Nats$Internal$SocketState$addSubscriptionHelper,
			$orus_io$elm_nats$Nats$Internal$SocketState$Sub(
				_List_fromArray(
					[onMessage])),
			subject,
			group);
	});
var $orus_io$elm_nats$Nats$Internal$SocketStateCollection$findByID = F2(
	function (sid, _v0) {
		var list = _v0;
		return $elm$core$List$head(
			A2(
				$elm$core$List$filter,
				function (_v1) {
					var socket = _v1.fN;
					return _Utils_eq(socket.ad, sid);
				},
				list));
	});
var $orus_io$elm_nats$Nats$Socket$Undefined = {$: 0};
var $orus_io$elm_nats$Nats$Internal$SocketState$init = F4(
	function (options, onEvent, _v0, time) {
		var socket = _v0;
		return {is: _List_Nil, dr: _List_Nil, eG: options, cQ: 0, A: $elm$core$Dict$empty, bl: _List_Nil, bU: onEvent, c$: $orus_io$elm_nats$Nats$Protocol$initialParseState, ef: $elm$core$Maybe$Nothing, fN: socket, kZ: $orus_io$elm_nats$Nats$Socket$Undefined, h6: time};
	});
var $orus_io$elm_nats$Nats$Internal$SocketStateCollection$internalRemove = function (sid) {
	return $elm$core$List$filter(
		function (_v0) {
			var socket = _v0.fN;
			return !_Utils_eq(socket.ad, sid);
		});
};
var $orus_io$elm_nats$Nats$Internal$SocketStateCollection$insert = F2(
	function (socket, _v0) {
		var list = _v0;
		return A2(
			$elm$core$List$cons,
			socket,
			A2($orus_io$elm_nats$Nats$Internal$SocketStateCollection$internalRemove, socket.fN.ad, list));
	});
var $orus_io$elm_nats$Nats$logError = F2(
	function (_v0, err) {
		var cfg = _v0;
		return A2(
			$elm$core$Maybe$withDefault,
			$elm$core$Platform$Cmd$none,
			A2(
				$elm$core$Maybe$map,
				function (onError) {
					return A2(
						$elm$core$Task$perform,
						$elm$core$Basics$identity,
						$elm$core$Task$succeed(
							onError(err)));
				},
				cfg.kk));
	});
var $elm$core$Platform$Cmd$map = _Platform_map;
var $orus_io$elm_nats$Nats$Internal$Ports$open = function (socket) {
	return {
		gt: $elm$core$Maybe$Nothing,
		hs: $elm$core$Maybe$Just(socket),
		hT: $elm$core$Maybe$Nothing
	};
};
var $orus_io$elm_nats$Nats$Internal$SocketState$track = F2(
	function (marker, state) {
		return _Utils_update(
			state,
			{
				bl: A2($elm$core$List$cons, marker, state.bl)
			});
	});
var $orus_io$elm_nats$Nats$Internal$SocketStateCollection$removeByID = F2(
	function (sid, _v0) {
		var list = _v0;
		return A2($orus_io$elm_nats$Nats$Internal$SocketStateCollection$internalRemove, sid, list);
	});
var $orus_io$elm_nats$Nats$updateSocket = F4(
	function (_v0, sid, fn, oState) {
		var state = oState;
		var _v1 = A2($orus_io$elm_nats$Nats$Internal$SocketStateCollection$findByID, sid, state.R);
		if (_v1.$ === 1) {
			return _Utils_Tuple3(oState, _List_Nil, $elm$core$Platform$Cmd$none);
		} else {
			var socket = _v1.a;
			var _v2 = fn(socket);
			if (_v2.a.$ === 1) {
				var _v3 = _v2.a;
				var msgs = _v2.b;
				var cmd = _v2.c;
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							R: A2($orus_io$elm_nats$Nats$Internal$SocketStateCollection$removeByID, sid, state.R)
						}),
					msgs,
					cmd);
			} else {
				var newSocket = _v2.a.a;
				var msgs = _v2.b;
				var cmd = _v2.c;
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							R: A2($orus_io$elm_nats$Nats$Internal$SocketStateCollection$insert, newSocket, state.R)
						}),
					msgs,
					cmd);
			}
		}
	});
var $orus_io$elm_nats$Nats$handleSubHelper = F3(
	function (_v0, sub, oState) {
		var cfg = _v0;
		var state = oState;
		switch (sub.$) {
			case 0:
				var options = sub.a;
				var socket = sub.b;
				var props = socket;
				var onEvent = sub.c;
				var _v2 = A2($orus_io$elm_nats$Nats$Internal$SocketStateCollection$findByID, props.ad, state.R);
				if (_v2.$ === 1) {
					return _Utils_Tuple3(
						_Utils_update(
							state,
							{
								a1: function () {
									var _v3 = state.a1;
									if (_v3.$ === 1) {
										return $elm$core$Maybe$Just(props.ad);
									} else {
										var id = _v3.a;
										return props.je ? $elm$core$Maybe$Just(props.ad) : $elm$core$Maybe$Just(id);
									}
								}(),
								R: A2(
									$orus_io$elm_nats$Nats$Internal$SocketStateCollection$insert,
									A4($orus_io$elm_nats$Nats$Internal$SocketState$init, options, onEvent, socket, state.h6),
									state.R)
							}),
						$elm$core$Maybe$Just(props.ad),
						A2(
							$elm$core$Platform$Cmd$map,
							cfg.aT,
							cfg.b$.hT(
								$orus_io$elm_nats$Nats$Internal$Ports$open(
									{jc: props.jc || cfg.jc, j6: cfg.j6, c8: props.ad, lx: props.lx}))));
				} else {
					return _Utils_Tuple3(
						oState,
						$elm$core$Maybe$Just(props.ad),
						$elm$core$Platform$Cmd$none);
				}
			case 1:
				var sid = sub.a.c8;
				var subject = sub.a.W;
				var group = sub.a.gN;
				var onMessage = sub.a.hr;
				var _v4 = A2(
					$elm$core$Maybe$withDefault,
					A2($elm$core$Maybe$withDefault, '', state.a1),
					sid);
				if (_v4 === '') {
					return _Utils_Tuple3(
						oState,
						$elm$core$Maybe$Nothing,
						A2($orus_io$elm_nats$Nats$logError, cfg, 'cannot subscribe: Could not determine the sid'));
				} else {
					var s = _v4;
					var _v5 = A4(
						$orus_io$elm_nats$Nats$updateSocket,
						cfg,
						s,
						function (socket) {
							return _Utils_Tuple3(
								$elm$core$Maybe$Just(
									A4($orus_io$elm_nats$Nats$Internal$SocketState$addSubscription, subject, group, onMessage, socket)),
								_List_Nil,
								$elm$core$Platform$Cmd$none);
						},
						oState);
					var newState = _v5.a;
					return _Utils_Tuple3(newState, $elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
				}
			default:
				var sid = sub.a.c8;
				var marker = sub.a.j2;
				var _v6 = A2(
					$elm$core$Maybe$withDefault,
					A2($elm$core$Maybe$withDefault, '', state.a1),
					sid);
				if (_v6 === '') {
					return _Utils_Tuple3(
						oState,
						$elm$core$Maybe$Nothing,
						A2($orus_io$elm_nats$Nats$logError, cfg, 'cannot subscribe: Could not determine the sid'));
				} else {
					var s = _v6;
					var _v7 = A4(
						$orus_io$elm_nats$Nats$updateSocket,
						cfg,
						s,
						function (socket) {
							return _Utils_Tuple3(
								$elm$core$Maybe$Just(
									A2($orus_io$elm_nats$Nats$Internal$SocketState$track, marker, socket)),
								_List_Nil,
								$elm$core$Platform$Cmd$none);
						},
						oState);
					var newState = _v7.a;
					return _Utils_Tuple3(newState, $elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
				}
		}
	});
var $elm$core$Tuple$mapBoth = F3(
	function (funcA, funcB, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			funcA(x),
			funcB(y));
	});
var $orus_io$elm_nats$Nats$Internal$SocketStateCollection$mapWithEffect = F2(
	function (fn, _v0) {
		var list = _v0;
		return A2(
			$elm$core$Tuple$mapFirst,
			$elm$core$Basics$identity,
			A3(
				$elm$core$List$foldr,
				F2(
					function (socket, _v1) {
						var newList = _v1.a;
						var effectList = _v1.b;
						var _v2 = fn(socket);
						var newSocket = _v2.a;
						var effect = _v2.b;
						return _Utils_Tuple2(
							A2($elm$core$List$cons, newSocket, newList),
							A2($elm$core$List$cons, effect, effectList));
					}),
				_Utils_Tuple2(_List_Nil, _List_Nil),
				list));
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $orus_io$elm_nats$Nats$Internal$Ports$send = function (msg) {
	return {
		gt: $elm$core$Maybe$Nothing,
		hs: $elm$core$Maybe$Nothing,
		hT: $elm$core$Maybe$Just(msg)
	};
};
var $orus_io$elm_nats$Nats$doSend = F2(
	function (_v0, message) {
		var cfg = _v0;
		return cfg.b$.hT(
			$orus_io$elm_nats$Nats$Internal$Ports$send(
				{
					dq: message.dq,
					G: cfg.lq(message.G),
					c8: message.c8
				}));
	});
var $orus_io$elm_nats$Nats$operationToCmd = F3(
	function (_v0, sid, op) {
		var cfg = _v0;
		return A2(
			$orus_io$elm_nats$Nats$doSend,
			cfg,
			{
				dq: function () {
					if (op.$ === 1) {
						return $elm$core$Maybe$Just('CONNECT');
					} else {
						return $elm$core$Maybe$Nothing;
					}
				}(),
				G: cfg.ge(op),
				c8: sid
			});
	});
var $orus_io$elm_nats$Nats$Internal$SocketStateCollection$toList = function (_v0) {
	var list = _v0;
	return list;
};
var $elm$core$List$unzip = function (pairs) {
	var step = F2(
		function (_v0, _v1) {
			var x = _v0.a;
			var y = _v0.b;
			var xs = _v1.a;
			var ys = _v1.b;
			return _Utils_Tuple2(
				A2($elm$core$List$cons, x, xs),
				A2($elm$core$List$cons, y, ys));
		});
	return A3(
		$elm$core$List$foldr,
		step,
		_Utils_Tuple2(_List_Nil, _List_Nil),
		pairs);
};
var $orus_io$elm_nats$Nats$Socket$Closing = {$: 5};
var $orus_io$elm_nats$Nats$Socket$Error = function (a) {
	return {$: 7, a: a};
};
var $orus_io$elm_nats$Nats$Socket$Opened = {$: 2};
var $orus_io$elm_nats$Nats$Events$SocketClose = {$: 1};
var $orus_io$elm_nats$Nats$Events$SocketError = function (a) {
	return {$: 2, a: a};
};
var $orus_io$elm_nats$Nats$Events$SocketOpen = function (a) {
	return {$: 0, a: a};
};
var $orus_io$elm_nats$Nats$Socket$Connected = {$: 4};
var $orus_io$elm_nats$Nats$Internal$SocketState$setStatus = F2(
	function (status, state) {
		return _Utils_update(
			state,
			{kZ: status});
	});
var $orus_io$elm_nats$Nats$Internal$SocketState$ackCONNECT = $orus_io$elm_nats$Nats$Internal$SocketState$setStatus($orus_io$elm_nats$Nats$Socket$Connected);
var $orus_io$elm_nats$Nats$Internal$Ports$close = function (sid) {
	return {
		gt: $elm$core$Maybe$Just(sid),
		hs: $elm$core$Maybe$Nothing,
		hT: $elm$core$Maybe$Nothing
	};
};
var $orus_io$elm_nats$Nats$Internal$SocketState$SubscriptionTimeout = 3;
var $orus_io$elm_nats$Nats$Internal$SocketState$handleTimeouts = F2(
	function (time, state) {
		var _v0 = A3(
			$elm$core$Dict$foldl,
			F3(
				function (key, sub, _v1) {
					var d = _v1.a;
					var msg = _v1.b;
					var _v2 = _Utils_Tuple2(sub.z, sub.k1);
					if ((!_v2.a) && (_v2.b.$ === 1)) {
						var _v3 = _v2.a;
						var deadline = _v2.b.a.eJ;
						var onTimeout = _v2.b.a.b_;
						return (_Utils_cmp(deadline, time) < 0) ? _Utils_Tuple2(
							A3(
								$elm$core$Dict$insert,
								key,
								_Utils_update(
									sub,
									{z: 3}),
								d),
							A2(
								$elm$core$List$cons,
								onTimeout(
									$elm$time$Time$millisToPosix(time)),
								msg)) : _Utils_Tuple2(
							A3($elm$core$Dict$insert, key, sub, d),
							msg);
					} else {
						return _Utils_Tuple2(
							A3($elm$core$Dict$insert, key, sub, d),
							msg);
					}
				}),
			_Utils_Tuple2($elm$core$Dict$empty, _List_Nil),
			state.A);
		var subs = _v0.a;
		var msgList = _v0.b;
		return _Utils_Tuple2(
			_Utils_update(
				state,
				{A: subs, h6: time}),
			_Utils_Tuple2(msgList, _List_Nil));
	});
var $orus_io$elm_nats$Nats$Internal$SocketState$parse = F3(
	function (_v0, data, state) {
		var cfg = _v0;
		var _v1 = A2(cfg.fE, state.c$, data);
		if (!_v1.$) {
			var _v2 = _v1.a;
			var ops = _v2.a;
			var parseState = _v2.b;
			return _Utils_Tuple2(
				_Utils_update(
					state,
					{c$: parseState}),
				ops);
		} else {
			var err = _v1.a;
			return _Utils_Tuple2(
				_Utils_update(
					state,
					{
						c$: $orus_io$elm_nats$Nats$Protocol$initialParseState,
						kZ: $orus_io$elm_nats$Nats$Socket$Error(err)
					}),
				_List_Nil);
		}
	});
var $orus_io$elm_nats$Nats$Protocol$CONNECT = function (a) {
	return {$: 1, a: a};
};
var $orus_io$elm_nats$Nats$Socket$Connecting = {$: 3};
var $orus_io$elm_nats$Nats$Internal$SocketState$Req = function (a) {
	return {$: 1, a: a};
};
var $orus_io$elm_nats$Nats$Internal$SocketState$SubscriptionClosed = 1;
var $orus_io$elm_nats$Nats$Internal$SocketState$operationToPortCommand = F3(
	function (_v0, sid, op) {
		var ncfg = _v0;
		return $orus_io$elm_nats$Nats$Internal$Ports$send(
			{
				dq: function () {
					if (op.$ === 1) {
						return $elm$core$Maybe$Just('CONNECT');
					} else {
						return $elm$core$Maybe$Nothing;
					}
				}(),
				G: ncfg.lq(
					ncfg.ge(op)),
				c8: sid
			});
	});
var $orus_io$elm_nats$Nats$Internal$SocketState$receiveOperation = F3(
	function (cfg, operation, state) {
		switch (operation.$) {
			case 0:
				var serverInfo = operation.a;
				return _Utils_Tuple2(
					A2(
						$orus_io$elm_nats$Nats$Internal$SocketState$setStatus,
						$orus_io$elm_nats$Nats$Socket$Connecting,
						_Utils_update(
							state,
							{
								ef: $elm$core$Maybe$Just(serverInfo)
							})),
					_Utils_Tuple2(
						_List_Nil,
						_List_fromArray(
							[
								A3(
								$orus_io$elm_nats$Nats$Internal$SocketState$operationToPortCommand,
								cfg,
								state.fN.ad,
								$orus_io$elm_nats$Nats$Protocol$CONNECT(state.eG))
							])));
			case 6:
				return _Utils_Tuple2(
					state,
					_Utils_Tuple2(
						_List_Nil,
						_List_fromArray(
							[
								A3($orus_io$elm_nats$Nats$Internal$SocketState$operationToPortCommand, cfg, state.fN.ad, $orus_io$elm_nats$Nats$Protocol$PONG)
							])));
			case 5:
				var id = operation.a;
				var message = operation.b;
				var _v1 = A2($orus_io$elm_nats$Nats$Internal$SocketState$getSubscriptionByID, id, state);
				if (_v1.$ === 1) {
					return _Utils_Tuple2(
						state,
						_Utils_Tuple2(_List_Nil, _List_Nil));
				} else {
					var sub = _v1.a;
					var _v2 = function () {
						var _v3 = sub.z;
						if (!_v3) {
							var _v4 = sub.k1;
							if (_v4.$ === 1) {
								var onMessage = _v4.a.hr;
								return A2(
									$elm$core$Tuple$mapFirst,
									A2(
										$elm$core$Basics$composeR,
										$elm$core$Maybe$map($elm$core$List$singleton),
										$elm$core$Maybe$withDefault(_List_Nil)),
									onMessage(message));
							} else {
								var handlers = _v4.a;
								return _Utils_Tuple2(
									A2(
										$elm$core$List$map,
										function (onMsg) {
											return onMsg(message);
										},
										handlers),
									true);
							}
						} else {
							return _Utils_Tuple2(_List_Nil, false);
						}
					}();
					var msgList = _v2.a;
					var _continue = _v2.b;
					var nextState = function () {
						var key = $orus_io$elm_nats$Nats$Internal$SocketState$subscriptionKey(sub);
						if (_continue) {
							var _v5 = sub.k1;
							if (_v5.$ === 1) {
								var req = _v5.a;
								return _Utils_update(
									state,
									{
										A: A3(
											$elm$core$Dict$insert,
											key,
											_Utils_update(
												sub,
												{
													k1: $orus_io$elm_nats$Nats$Internal$SocketState$Req(
														_Utils_update(
															req,
															{eJ: state.h6 + req.b9}))
												}),
											state.A)
									});
							} else {
								return state;
							}
						} else {
							var newSub = _Utils_update(
								sub,
								{z: 1});
							var newKey = $orus_io$elm_nats$Nats$Internal$SocketState$subscriptionKey(newSub);
							return _Utils_update(
								state,
								{
									A: A3(
										$elm$core$Dict$insert,
										newKey,
										newSub,
										A2($elm$core$Dict$remove, key, state.A))
								});
						}
					}();
					return _Utils_Tuple2(
						nextState,
						_Utils_Tuple2(msgList, _List_Nil));
				}
			default:
				return _Utils_Tuple2(
					state,
					_Utils_Tuple2(_List_Nil, _List_Nil));
		}
	});
var $orus_io$elm_nats$Nats$Internal$SocketState$receive = F3(
	function (cfg, data, state) {
		var _v0 = A3($orus_io$elm_nats$Nats$Internal$SocketState$parse, cfg, data, state);
		var parseState = _v0.a;
		var ops = _v0.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (op, _v1) {
					var st = _v1.a;
					var _v2 = _v1.b;
					var msgs = _v2.a;
					var cmds = _v2.b;
					var _v3 = A3($orus_io$elm_nats$Nats$Internal$SocketState$receiveOperation, cfg, op, st);
					var newSt = _v3.a;
					var _v4 = _v3.b;
					var opMsgs = _v4.a;
					var opCmds = _v4.b;
					return _Utils_Tuple2(
						newSt,
						_Utils_Tuple2(
							_Utils_ap(opMsgs, msgs),
							_Utils_ap(opCmds, cmds)));
				}),
			_Utils_Tuple2(
				parseState,
				_Utils_Tuple2(_List_Nil, _List_Nil)),
			ops);
	});
var $orus_io$elm_nats$Nats$Internal$SocketState$update = F3(
	function (cfg, msg, state) {
		switch (msg.$) {
			case 0:
				return _Utils_Tuple2(
					A2($orus_io$elm_nats$Nats$Internal$SocketState$setStatus, $orus_io$elm_nats$Nats$Socket$Opened, state),
					_Utils_Tuple2(_List_Nil, _List_Nil));
			case 1:
				return _Utils_Tuple2(
					A2($orus_io$elm_nats$Nats$Internal$SocketState$setStatus, $orus_io$elm_nats$Nats$Socket$Closing, state),
					_Utils_Tuple2(
						_List_Nil,
						_List_fromArray(
							[
								$orus_io$elm_nats$Nats$Internal$Ports$close(state.fN.ad)
							])));
			case 2:
				return _Utils_Tuple2(
					A2($orus_io$elm_nats$Nats$Internal$SocketState$setStatus, $orus_io$elm_nats$Nats$Socket$Closed, state),
					_Utils_Tuple2(
						_List_fromArray(
							[
								state.bU($orus_io$elm_nats$Nats$Events$SocketClose)
							]),
						_List_Nil));
			case 3:
				var err = msg.a;
				return _Utils_Tuple2(
					A2(
						$orus_io$elm_nats$Nats$Internal$SocketState$setStatus,
						$orus_io$elm_nats$Nats$Socket$Error(err),
						state),
					_Utils_Tuple2(
						_List_fromArray(
							[
								state.bU(
								$orus_io$elm_nats$Nats$Events$SocketError(err))
							]),
						_List_Nil));
			case 4:
				var message = msg.a;
				return A3($orus_io$elm_nats$Nats$Internal$SocketState$receive, cfg, message, state);
			case 5:
				var ack = msg.a;
				if (ack === 'CONNECT') {
					return _Utils_Tuple2(
						$orus_io$elm_nats$Nats$Internal$SocketState$ackCONNECT(state),
						_Utils_Tuple2(
							function () {
								var _v2 = state.ef;
								if (!_v2.$) {
									var info = _v2.a;
									return _List_fromArray(
										[
											state.bU(
											$orus_io$elm_nats$Nats$Events$SocketOpen(info))
										]);
								} else {
									return _List_Nil;
								}
							}(),
							_List_Nil));
				} else {
					return _Utils_Tuple2(
						state,
						_Utils_Tuple2(_List_Nil, _List_Nil));
				}
			default:
				var time = msg.a;
				return A2($orus_io$elm_nats$Nats$Internal$SocketState$handleTimeouts, time, state);
		}
	});
var $orus_io$elm_nats$Nats$handleSub = F3(
	function (_v0, _v1, state) {
		var cfg = _v0;
		var subList = _v1;
		var _v2 = A3(
			$elm$core$List$foldl,
			F2(
				function (innerSub, _v3) {
					var st = _v3.a;
					var socketList = _v3.b;
					var cmdList = _v3.c;
					var _v4 = A3($orus_io$elm_nats$Nats$handleSubHelper, cfg, innerSub, st);
					var newState = _v4.a;
					var socketId = _v4.b;
					var newCmd = _v4.c;
					return _Utils_Tuple3(
						newState,
						function () {
							if (socketId.$ === 1) {
								return socketList;
							} else {
								var id = socketId.a;
								return A2($elm$core$List$cons, id, socketList);
							}
						}(),
						A2($elm$core$List$cons, newCmd, cmdList));
				}),
			_Utils_Tuple3(state, _List_Nil, _List_Nil),
			subList);
		var nState = _v2.a;
		var socketIds = _v2.b;
		var cmds = _v2.c;
		var _v6 = A2(
			$elm$core$Tuple$mapSecond,
			$elm$core$List$concat,
			A2(
				$orus_io$elm_nats$Nats$Internal$SocketStateCollection$mapWithEffect,
				function (socket) {
					return A2(
						$elm$core$Tuple$mapSecond,
						$elm$core$List$map(
							A2(
								$elm$core$Basics$composeR,
								A2($orus_io$elm_nats$Nats$operationToCmd, cfg, socket.fN.ad),
								$elm$core$Platform$Cmd$map(cfg.aT))),
						$orus_io$elm_nats$Nats$Internal$SocketState$finalizeSubscriptions(socket));
				},
				nState.R));
		var sockets = _v6.a;
		var opsCmds = _v6.b;
		var _v7 = A2(
			$elm$core$Tuple$mapSecond,
			$elm$core$List$concat,
			A2(
				$orus_io$elm_nats$Nats$Internal$SocketStateCollection$mapWithEffect,
				function (socket) {
					var _v8 = $orus_io$elm_nats$Nats$Internal$SocketState$finalizeTrackers(socket);
					var nextSocket = _v8.a;
					var nextMsgs = _v8.b;
					var nextOps = _v8.c;
					return _Utils_Tuple2(
						nextSocket,
						_Utils_ap(
							A2(
								$elm$core$List$map,
								A2(
									$elm$core$Basics$composeR,
									$elm$core$Task$succeed,
									$elm$core$Task$perform($elm$core$Basics$identity)),
								nextMsgs),
							A2(
								$elm$core$List$map,
								A2(
									$elm$core$Basics$composeR,
									A2($orus_io$elm_nats$Nats$operationToCmd, cfg, socket.fN.ad),
									$elm$core$Platform$Cmd$map(cfg.aT)),
								nextOps)));
				},
				sockets));
		var nextSockets = _v7.a;
		var trackersCmds = _v7.b;
		var _v9 = A2(
			$elm$core$Tuple$mapSecond,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$List$unzip,
				A2(
					$elm$core$Basics$composeR,
					A2(
						$elm$core$Tuple$mapBoth,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$List$concat,
							$elm$core$List$map(
								A2(
									$elm$core$Basics$composeR,
									$elm$core$Task$succeed,
									$elm$core$Task$perform($elm$core$Basics$identity)))),
						A2(
							$elm$core$Basics$composeR,
							$elm$core$List$concat,
							$elm$core$List$map(
								A2(
									$elm$core$Basics$composeR,
									cfg.b$.hT,
									$elm$core$Platform$Cmd$map(cfg.aT))))),
					function (_v10) {
						var a = _v10.a;
						var b = _v10.b;
						return A2($elm$core$List$append, a, b);
					})),
			A2(
				$elm$core$Tuple$mapFirst,
				$orus_io$elm_nats$Nats$Internal$SocketStateCollection$fromList,
				$elm$core$List$unzip(
					A2(
						$elm$core$List$map,
						function (socket) {
							return A2($elm$core$List$member, socket.fN.ad, socketIds) ? _Utils_Tuple2(
								socket,
								_Utils_Tuple2(_List_Nil, _List_Nil)) : A3($orus_io$elm_nats$Nats$Internal$SocketState$update, cfg, $orus_io$elm_nats$Nats$Internal$SocketState$OnClosing, socket);
						},
						A2(
							$elm$core$List$filter,
							function (socket) {
								return !_Utils_eq(socket.kZ, $orus_io$elm_nats$Nats$Socket$Closed);
							},
							$orus_io$elm_nats$Nats$Internal$SocketStateCollection$toList(nextSockets))))));
		var finalSockets = _v9.a;
		var closeCmds = _v9.b;
		return _Utils_Tuple2(
			_Utils_update(
				nState,
				{R: finalSockets}),
			$elm$core$Platform$Cmd$batch(
				_Utils_ap(
					cmds,
					_Utils_ap(
						opsCmds,
						_Utils_ap(closeCmds, trackersCmds)))));
	});
var $orus_io$elm_nats$Nats$Protocol$PUB = function (a) {
	return {$: 2, a: a};
};
var $orus_io$elm_nats$Nats$Internal$SocketState$addRequest = F3(
	function (_v0, req, state) {
		var cfg = _v0;
		return _Utils_Tuple2(
			A4(
				$orus_io$elm_nats$Nats$Internal$SocketState$addSubscriptionHelper,
				$orus_io$elm_nats$Nats$Internal$SocketState$Req(
					{eJ: req.h6 + req.b9, j2: req.j2, hr: req.bW, b_: req.b_, W: req.W, b9: req.b9}),
				req.gW,
				'',
				state),
			_List_fromArray(
				[
					$orus_io$elm_nats$Nats$Protocol$PUB(
					{
						jb: req.G,
						aW: req.gW,
						bp: cfg.bp(req.G),
						W: req.W
					})
				]));
	});
var $orus_io$elm_nats$Nats$nextInbox = function (_v0) {
	var state = _v0;
	var _v1 = $orus_io$elm_nats$Nats$Nuid$next(state.fl);
	var postfix = _v1.a;
	var nuid = _v1.b;
	return _Utils_Tuple2(
		_Utils_ap(state.e0, postfix),
		_Utils_update(
			state,
			{fl: nuid}));
};
var $orus_io$elm_nats$Nats$toCmd = F3(
	function (_v0, effect, oState) {
		var cfg = _v0;
		var state = oState;
		switch (effect.$) {
			case 0:
				var sid = effect.a.c8;
				var subject = effect.a.W;
				var replyTo = effect.a.aW;
				var message = effect.a.G;
				var _v2 = A2(
					$elm$core$Maybe$withDefault,
					A2($elm$core$Maybe$withDefault, '', state.a1),
					sid);
				if (_v2 === '') {
					return _Utils_Tuple2(
						oState,
						A2($orus_io$elm_nats$Nats$logError, cfg, 'cannot publish message: Could not determine the sid'));
				} else {
					var s = _v2;
					return _Utils_Tuple2(
						oState,
						A2(
							$elm$core$Platform$Cmd$map,
							cfg.aT,
							A2(
								$orus_io$elm_nats$Nats$doSend,
								cfg,
								{
									dq: $elm$core$Maybe$Nothing,
									G: cfg.ge(
										$orus_io$elm_nats$Nats$Protocol$PUB(
											{
												jb: message,
												aW: A2($elm$core$Maybe$withDefault, '', replyTo),
												bp: cfg.bp(message),
												W: subject
											})),
									c8: s
								})));
				}
			case 1:
				var sid = effect.a.c8;
				var marker = effect.a.j2;
				var subject = effect.a.W;
				var replyTo = effect.a.aW;
				var message = effect.a.G;
				var onTimeout = effect.a.b_;
				var onResponse = effect.a.bW;
				var timeout = effect.a.b9;
				var _v3 = A2(
					$elm$core$Maybe$withDefault,
					A2($elm$core$Maybe$withDefault, '', state.a1),
					sid);
				if (_v3 === '') {
					return _Utils_Tuple2(
						oState,
						A2($orus_io$elm_nats$Nats$logError, cfg, 'cannot publish request: Could not determine the sid'));
				} else {
					var s = _v3;
					var _v4 = function () {
						if (!replyTo.$) {
							var inboxSubject = replyTo.a;
							return _Utils_Tuple2(inboxSubject, oState);
						} else {
							return $orus_io$elm_nats$Nats$nextInbox(oState);
						}
					}();
					var inbox = _v4.a;
					var state1 = _v4.b;
					var _v6 = A4(
						$orus_io$elm_nats$Nats$updateSocket,
						cfg,
						s,
						function (socket) {
							var _v7 = A3(
								$orus_io$elm_nats$Nats$Internal$SocketState$addRequest,
								cfg,
								{
									gW: inbox,
									j2: marker,
									G: message,
									bW: onResponse,
									b_: onTimeout,
									W: subject,
									h6: state.h6,
									b9: A2($elm$core$Maybe$withDefault, 5, timeout) * 1000
								},
								socket);
							var newSocket = _v7.a;
							var ops = _v7.b;
							return _Utils_Tuple3(
								$elm$core$Maybe$Just(newSocket),
								_List_Nil,
								$elm$core$Platform$Cmd$batch(
									A2(
										$elm$core$List$map,
										function (op) {
											return A2(
												$orus_io$elm_nats$Nats$doSend,
												cfg,
												{
													dq: function () {
														if (op.$ === 1) {
															return $elm$core$Maybe$Just('CONNECT');
														} else {
															return $elm$core$Maybe$Nothing;
														}
													}(),
													G: cfg.ge(op),
													c8: s
												});
										},
										ops)));
						},
						state1);
					var nextState = _v6.a;
					var cmd = _v6.c;
					return _Utils_Tuple2(
						nextState,
						A2($elm$core$Platform$Cmd$map, cfg.aT, cmd));
				}
			case 2:
				var sid = effect.a.c8;
				var marker = effect.a.j2;
				var _v9 = A2(
					$elm$core$Maybe$withDefault,
					A2($elm$core$Maybe$withDefault, '', state.a1),
					sid);
				if (_v9 === '') {
					return _Utils_Tuple2(
						oState,
						A2($orus_io$elm_nats$Nats$logError, cfg, 'cannot cancel request: Could not determine the sid'));
				} else {
					var s = _v9;
					var _v10 = A4(
						$orus_io$elm_nats$Nats$updateSocket,
						cfg,
						s,
						function (socket) {
							var _v11 = A2($orus_io$elm_nats$Nats$Internal$SocketState$cancelRequest, marker, socket);
							var newSocket = _v11.a;
							var msgs = _v11.b;
							var ops = _v11.c;
							return _Utils_Tuple3(
								$elm$core$Maybe$Just(newSocket),
								msgs,
								$elm$core$Platform$Cmd$batch(
									A2(
										$elm$core$List$map,
										A2($orus_io$elm_nats$Nats$operationToCmd, cfg, socket.fN.ad),
										ops)));
						},
						oState);
					var nextState = _v10.a;
					var cmd = _v10.c;
					return _Utils_Tuple2(
						nextState,
						A2($elm$core$Platform$Cmd$map, cfg.aT, cmd));
				}
			case 4:
				var list = effect.a;
				return A2(
					$elm$core$Tuple$mapSecond,
					$elm$core$Platform$Cmd$batch,
					A3(
						$elm$core$List$foldl,
						F2(
							function (eff, _v12) {
								var st = _v12.a;
								var cmd = _v12.b;
								var _v13 = A3($orus_io$elm_nats$Nats$toCmd, cfg, eff, st);
								var newState = _v13.a;
								var newCmd = _v13.b;
								return _Utils_Tuple2(
									newState,
									A2($elm$core$List$cons, newCmd, cmd));
							}),
						_Utils_Tuple2(oState, _List_Nil),
						list));
			default:
				return _Utils_Tuple2(oState, $elm$core$Platform$Cmd$none);
		}
	});
var $orus_io$elm_nats$Nats$applyEffectAndSub = F4(
	function (_v0, effect, sub, state) {
		var cfg = _v0;
		var _v1 = A3($orus_io$elm_nats$Nats$toCmd, cfg, effect, state);
		var s1 = _v1.a;
		var cmd1 = _v1.b;
		var _v2 = A3($orus_io$elm_nats$Nats$handleSub, cfg, sub, s1);
		var s2 = _v2.a;
		var cmd2 = _v2.b;
		return _Utils_Tuple2(
			s2,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[cmd1, cmd2])));
	});
var $author$project$Main$OnSocketEvent = function (a) {
	return {$: 9, a: a};
};
var $orus_io$elm_nats$Nats$Internal$Sub$Sub = $elm$core$Basics$identity;
var $elm$core$List$sortBy = _List_sortBy;
var $orus_io$elm_nats$Nats$Internal$Sub$sortPriority = function (sub) {
	switch (sub.$) {
		case 0:
			return 1;
		case 1:
			return 2;
		default:
			return 3;
	}
};
var $orus_io$elm_nats$Nats$Internal$Sub$sort = $elm$core$List$sortBy($orus_io$elm_nats$Nats$Internal$Sub$sortPriority);
var $orus_io$elm_nats$Nats$Internal$Sub$batch = A2(
	$elm$core$Basics$composeR,
	A2(
		$elm$core$List$foldl,
		function (_v0) {
			var l = _v0;
			return $elm$core$List$append(l);
		},
		_List_Nil),
	A2($elm$core$Basics$composeR, $orus_io$elm_nats$Nats$Internal$Sub$sort, $elm$core$Basics$identity));
var $orus_io$elm_nats$Nats$Sub$batch = $orus_io$elm_nats$Nats$Internal$Sub$batch;
var $orus_io$elm_nats$Nats$Internal$Sub$Connect = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $orus_io$elm_nats$Nats$Internal$Sub$connect = F3(
	function (options, socket_, onEvent) {
		return _List_fromArray(
			[
				A3($orus_io$elm_nats$Nats$Internal$Sub$Connect, options, socket_, onEvent)
			]);
	});
var $orus_io$elm_nats$Nats$connect = $orus_io$elm_nats$Nats$Internal$Sub$connect;
var $orus_io$elm_nats$Nats$Socket$connectOptions = F2(
	function (name, version) {
		return {
			gl: $elm$core$Maybe$Nothing,
			g7: 'elm',
			av: $elm$core$Maybe$Just(name),
			hz: $elm$core$Maybe$Nothing,
			hB: false,
			hG: 0,
			ib: $elm$core$Maybe$Nothing,
			$8: false,
			f9: version
		};
	});
var $author$project$Main$ReceiveProg = function (a) {
	return {$: 10, a: a};
};
var $author$project$Main$receiveProg = function (natsMessage) {
	return $author$project$Main$ReceiveProg(natsMessage.jb);
};
var $orus_io$elm_nats$Nats$Internal$Sub$Subscribe = function (a) {
	return {$: 1, a: a};
};
var $orus_io$elm_nats$Nats$Internal$Sub$subscribe = function (props) {
	return _List_fromArray(
		[
			$orus_io$elm_nats$Nats$Internal$Sub$Subscribe(props)
		]);
};
var $orus_io$elm_nats$Nats$groupSubscribe = F3(
	function (subject, group, onMessage) {
		return $orus_io$elm_nats$Nats$Internal$Sub$subscribe(
			{gN: group, hr: onMessage, c8: $elm$core$Maybe$Nothing, W: subject});
	});
var $orus_io$elm_nats$Nats$subscribe = function (subject) {
	return A2($orus_io$elm_nats$Nats$groupSubscribe, subject, '');
};
var $orus_io$elm_nats$Nats$Socket$withUserPass = F3(
	function (user, pass, options) {
		return _Utils_update(
			options,
			{
				hz: $elm$core$Maybe$Just(pass),
				ib: $elm$core$Maybe$Just(user)
			});
	});
var $author$project$Main$natsSubscriptions = function (model) {
	return $orus_io$elm_nats$Nats$Sub$batch(
		_List_fromArray(
			[
				A3(
				$orus_io$elm_nats$Nats$connect,
				A3(
					$orus_io$elm_nats$Nats$Socket$withUserPass,
					'test',
					'test',
					A2($orus_io$elm_nats$Nats$Socket$connectOptions, 'PWets UI', '0.1')),
				model.fN,
				$author$project$Main$OnSocketEvent),
				A2($orus_io$elm_nats$Nats$subscribe, 'PWets.client', $author$project$Main$receiveProg)
			]));
};
var $author$project$Main$MoveVessel = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Main$VesselFinished = function (a) {
	return {$: 2, a: a};
};
var $author$project$PWets$actuatorMoveDone = function (name) {
	return A2(
		$elm$json$Json$Encode$encode,
		0,
		$elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'object',
					$elm$json$Json$Encode$string('MotorCompleted')),
					_Utils_Tuple2(
					'name',
					$elm$json$Json$Encode$string(name))
				])));
};
var $elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _v0) {
				var trues = _v0.a;
				var falses = _v0.b;
				return pred(x) ? _Utils_Tuple2(
					A2($elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2($elm$core$List$cons, x, falses));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var $author$project$Main$adjustSequence = F2(
	function (license, vlist) {
		var _v0 = A2(
			$elm$core$List$partition,
			function (v) {
				return _Utils_eq(v.a3, license);
			},
			vlist);
		if (!_v0.a.b) {
			return vlist;
		} else {
			var target = _v0.a;
			var rest = _v0.b;
			if (!target.b) {
				return vlist;
			} else {
				var vessel = target.a;
				return A2(
					$elm$core$List$cons,
					_Utils_update(
						vessel,
						{
							a8: A2($elm$core$List$drop, 1, vessel.a8)
						}),
					rest);
			}
		}
	});
var $elm$core$Process$sleep = _Process_sleep;
var $andrewMacmurray$elm_delay$Delay$after = F2(
	function (time, msg) {
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$always(msg),
			$elm$core$Process$sleep(time));
	});
var $author$project$PWets$allMoored = function (name) {
	return A2(
		$elm$json$Json$Encode$encode,
		0,
		$elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'object',
					$elm$json$Json$Encode$string('AllMoored')),
					_Utils_Tuple2(
					'name',
					$elm$json$Json$Encode$string(name))
				])));
};
var $mdgriffith$elm_animator$Internal$Timeline$linearDefault = {iH: 0, iI: 0, jg: 0, jh: 0, lz: 0};
var $mdgriffith$elm_animator$Internal$Timeline$current = function (timeline) {
	var details = timeline;
	return A3(
		$mdgriffith$elm_animator$Internal$Timeline$foldp,
		$elm$core$Basics$identity,
		{
			eu: function (_v0) {
				return $mdgriffith$elm_animator$Internal$Timeline$linearDefault;
			},
			eP: function (_v1) {
				return $elm$core$Maybe$Nothing;
			},
			fd: F7(
				function (_v2, _v3, target, _v4, _v5, _v6, _v7) {
					return target;
				}),
			n: function (_v8) {
				return details.gX;
			},
			ga: F5(
				function (lookup, target, targetTime, maybeLookAhead, state) {
					return $mdgriffith$elm_animator$Internal$Timeline$getEvent(target);
				})
		},
		timeline);
};
var $mdgriffith$elm_animator$Animator$current = $mdgriffith$elm_animator$Internal$Timeline$current;
var $author$project$PWets$flowEqualized = function (name) {
	return A2(
		$elm$json$Json$Encode$encode,
		0,
		$elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'object',
					$elm$json$Json$Encode$string('FlowEqualized')),
					_Utils_Tuple2(
					'name',
					$elm$json$Json$Encode$string(name))
				])));
};
var $author$project$PWets$gateCleared = function (name) {
	return A2(
		$elm$json$Json$Encode$encode,
		0,
		$elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'object',
					$elm$json$Json$Encode$string('GateCleared')),
					_Utils_Tuple2(
					'name',
					$elm$json$Json$Encode$string(name))
				])));
};
var $mdgriffith$elm_animator$Animator$TransitionTo = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_animator$Animator$event = $mdgriffith$elm_animator$Animator$TransitionTo;
var $mdgriffith$elm_animator$Animator$initializeSchedule = F2(
	function (waiting, steps) {
		initializeSchedule:
		while (true) {
			if (!steps.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				if (!steps.a.$) {
					var additionalWait = steps.a.a;
					var moreSteps = steps.b;
					var $temp$waiting = A2($ianmackenzie$elm_units$Quantity$plus, waiting, additionalWait),
						$temp$steps = moreSteps;
					waiting = $temp$waiting;
					steps = $temp$steps;
					continue initializeSchedule;
				} else {
					var _v1 = steps.a;
					var dur = _v1.a;
					var checkpoint = _v1.b;
					var moreSteps = steps.b;
					return $elm$core$Maybe$Just(
						_Utils_Tuple2(
							A3(
								$mdgriffith$elm_animator$Internal$Timeline$Schedule,
								waiting,
								A3($mdgriffith$elm_animator$Internal$Timeline$Event, dur, checkpoint, $elm$core$Maybe$Nothing),
								_List_Nil),
							moreSteps));
				}
			}
		}
	});
var $mdgriffith$elm_animator$Animator$millis = $ianmackenzie$elm_units$Duration$milliseconds;
var $mdgriffith$elm_animator$Internal$Timeline$addToDwell = F2(
	function (duration, maybeDwell) {
		if (!$ianmackenzie$elm_units$Duration$inMilliseconds(duration)) {
			return maybeDwell;
		} else {
			if (maybeDwell.$ === 1) {
				return $elm$core$Maybe$Just(duration);
			} else {
				var existing = maybeDwell.a;
				return $elm$core$Maybe$Just(
					A2($ianmackenzie$elm_units$Quantity$plus, duration, existing));
			}
		}
	});
var $mdgriffith$elm_animator$Internal$Timeline$extendEventDwell = F2(
	function (extendBy, thisEvent) {
		var at = thisEvent.a;
		var ev = thisEvent.b;
		var maybeDwell = thisEvent.c;
		return (!$ianmackenzie$elm_units$Duration$inMilliseconds(extendBy)) ? thisEvent : A3(
			$mdgriffith$elm_animator$Internal$Timeline$Event,
			at,
			ev,
			A2($mdgriffith$elm_animator$Internal$Timeline$addToDwell, extendBy, maybeDwell));
	});
var $mdgriffith$elm_animator$Animator$stepsToEvents = F2(
	function (currentStep, _v0) {
		var delay = _v0.a;
		var startEvent = _v0.b;
		var events = _v0.c;
		if (!events.b) {
			if (!currentStep.$) {
				var waiting = currentStep.a;
				return A3(
					$mdgriffith$elm_animator$Internal$Timeline$Schedule,
					delay,
					A2($mdgriffith$elm_animator$Internal$Timeline$extendEventDwell, waiting, startEvent),
					events);
			} else {
				var dur = currentStep.a;
				var checkpoint = currentStep.b;
				return A3(
					$mdgriffith$elm_animator$Internal$Timeline$Schedule,
					delay,
					startEvent,
					_List_fromArray(
						[
							A3($mdgriffith$elm_animator$Internal$Timeline$Event, dur, checkpoint, $elm$core$Maybe$Nothing)
						]));
			}
		} else {
			var _v3 = events.a;
			var durationTo = _v3.a;
			var recentEvent = _v3.b;
			var maybeDwell = _v3.c;
			var remaining = events.b;
			if (!currentStep.$) {
				var dur = currentStep.a;
				return A3(
					$mdgriffith$elm_animator$Internal$Timeline$Schedule,
					delay,
					startEvent,
					A2(
						$elm$core$List$cons,
						A3(
							$mdgriffith$elm_animator$Internal$Timeline$Event,
							durationTo,
							recentEvent,
							A2($mdgriffith$elm_animator$Internal$Timeline$addToDwell, dur, maybeDwell)),
						remaining));
			} else {
				var dur = currentStep.a;
				var checkpoint = currentStep.b;
				return _Utils_eq(checkpoint, recentEvent) ? A3(
					$mdgriffith$elm_animator$Internal$Timeline$Schedule,
					delay,
					startEvent,
					A2(
						$elm$core$List$cons,
						A3(
							$mdgriffith$elm_animator$Internal$Timeline$Event,
							durationTo,
							recentEvent,
							A2($mdgriffith$elm_animator$Internal$Timeline$addToDwell, dur, maybeDwell)),
						remaining)) : A3(
					$mdgriffith$elm_animator$Internal$Timeline$Schedule,
					delay,
					startEvent,
					A2(
						$elm$core$List$cons,
						A3($mdgriffith$elm_animator$Internal$Timeline$Event, dur, checkpoint, $elm$core$Maybe$Nothing),
						events));
			}
		}
	});
var $mdgriffith$elm_animator$Animator$interrupt = F2(
	function (steps, _v0) {
		var tl = _v0;
		return _Utils_update(
			tl,
			{
				cN: function () {
					var _v1 = A2(
						$mdgriffith$elm_animator$Animator$initializeSchedule,
						$mdgriffith$elm_animator$Animator$millis(0),
						steps);
					if (_v1.$ === 1) {
						return tl.cN;
					} else {
						var _v2 = _v1.a;
						var schedule = _v2.a;
						var otherSteps = _v2.b;
						return A2(
							$elm$core$List$cons,
							A3($elm$core$List$foldl, $mdgriffith$elm_animator$Animator$stepsToEvents, schedule, otherSteps),
							tl.cN);
					}
				}(),
				ea: true
			});
	});
var $mdgriffith$elm_animator$Animator$go = F3(
	function (duration, ev, timeline) {
		return A2(
			$mdgriffith$elm_animator$Animator$interrupt,
			_List_fromArray(
				[
					A2($mdgriffith$elm_animator$Animator$event, duration, ev)
				]),
			timeline);
	});
var $mdgriffith$elm_animator$Animator$immediately = $mdgriffith$elm_animator$Animator$millis(0);
var $author$project$Main$newVessel = F2(
	function (id, dir) {
		var makeVessel = function (strategy) {
			return {
				bv: false,
				bG: dir,
				a3: id,
				a8: function () {
					if (!dir) {
						return strategy.f8;
					} else {
						return strategy.eN;
					}
				}()
			};
		};
		return makeVessel($author$project$Main$wetsTwo);
	});
var $elm$core$String$filter = _String_filter;
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $elm$regex$Regex$never = _Regex_never;
var $elm_community$string_extra$String$Extra$regexFromString = A2(
	$elm$core$Basics$composeR,
	$elm$regex$Regex$fromString,
	$elm$core$Maybe$withDefault($elm$regex$Regex$never));
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $elm$core$String$cons = _String_cons;
var $elm_community$string_extra$String$Extra$changeCase = F2(
	function (mutator, word) {
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (_v0) {
					var head = _v0.a;
					var tail = _v0.b;
					return A2(
						$elm$core$String$cons,
						mutator(head),
						tail);
				},
				$elm$core$String$uncons(word)));
	});
var $elm$core$Char$toUpper = _Char_toUpper;
var $elm_community$string_extra$String$Extra$toSentenceCase = function (word) {
	return A2($elm_community$string_extra$String$Extra$changeCase, $elm$core$Char$toUpper, word);
};
var $elm_community$string_extra$String$Extra$toTitleCase = function (ws) {
	var uppercaseMatch = A2(
		$elm$regex$Regex$replace,
		$elm_community$string_extra$String$Extra$regexFromString('\\w+'),
		A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.cU;
			},
			$elm_community$string_extra$String$Extra$toSentenceCase));
	return A3(
		$elm$regex$Regex$replace,
		$elm_community$string_extra$String$Extra$regexFromString('^([a-z])|\\s+([a-z])'),
		A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.cU;
			},
			uppercaseMatch),
		ws);
};
var $ohanhi$lorem$Lorem$source = _List_fromArray(
	['Lorem ipsum dolor sit amet, his viris voluptaria ut. Sea ad iusto labitur constituam, viris persius nonumes pro at, detraxit expetendis eu sed. Ut perpetua consequat complectitur sea, eam reque graeci et. Dignissim euripidis intellegat sed ex.', 'Ei legere accumsan sit. Id meis intellegat nec, modo habeo error cum eu. Illud ubique in ius. Meliore nostrum eos an, facilisis reformidans quo in. Ne eruditi assueverit vix, graece eleifend mandamus ut usu. Vis nulla splendide ad.', 'Officiis tractatos at sed. Vim ad ipsum ceteros. Posse adolescens ei eos, meliore albucius facilisi id vel, et vel tractatos partiendo. Cu has insolens constituam, sint ubique sit te, vim an legimus elaboraret. Omnes possim mei et. Equidem contentiones vituperatoribus ut vel, duis veri platonem vel ei, an integre consequat democritum qui.', 'No iudico electram vituperatoribus ius, ex mea laudem iisque. Utroque tacimates qui ne. Est natum similique an. His te nostro disputando, vis debet aeterno ne, ex mea velit mazim.', 'Suas augue no nam. Ex vel timeam offendit eleifend, ea epicurei insolens mel. Ex aperiam inimicus consequuntur per, reque errem veritus ex sed. Est cu omnis iusto scripserit, ullum timeam percipitur mei eu.']);
var $ohanhi$lorem$Lorem$appendUntilAtLeast = F2(
	function (n, stringList) {
		appendUntilAtLeast:
		while (true) {
			if (_Utils_cmp(
				$elm$core$List$length(stringList),
				n) > -1) {
				return stringList;
			} else {
				var $temp$n = n,
					$temp$stringList = _Utils_ap($ohanhi$lorem$Lorem$source, stringList);
				n = $temp$n;
				stringList = $temp$stringList;
				continue appendUntilAtLeast;
			}
		}
	});
var $ohanhi$lorem$Lorem$words = function (n) {
	return A2(
		$elm$core$List$take,
		n,
		A2(
			$ohanhi$lorem$Lorem$appendUntilAtLeast,
			n,
			$elm$core$String$words(
				A2($elm$core$String$join, ' ', $ohanhi$lorem$Lorem$source))));
};
var $author$project$Util$newVesselName = function (index) {
	var nmax = 50;
	var n = A2($elm$core$Basics$modBy, nmax, index);
	var wordpair = A2(
		$elm$core$List$take,
		2,
		A2(
			$elm$core$List$drop,
			n,
			$ohanhi$lorem$Lorem$words(nmax + 1)));
	return $elm_community$string_extra$String$Extra$toTitleCase(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$String$filter($elm$core$Char$isAlphaNum),
				A2(
					$elm$core$List$append,
					wordpair,
					$elm$core$List$singleton(
						$elm$core$String$fromInt(index))))));
};
var $author$project$Main$nextTransition = F2(
	function (license, vlist) {
		var _v0 = A2(
			$elm$core$List$filter,
			function (v) {
				return _Utils_eq(v.a3, license);
			},
			vlist);
		if (!_v0.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var x = _v0.a;
			return $elm$core$List$head(x.a8);
		}
	});
var $orus_io$elm_nats$Nats$Internal$Types$NoEffect = {$: 3};
var $orus_io$elm_nats$Nats$Effect$none = $orus_io$elm_nats$Nats$Internal$Types$NoEffect;
var $orus_io$elm_nats$Nats$Internal$Types$Pub = function (a) {
	return {$: 0, a: a};
};
var $orus_io$elm_nats$Nats$publish = F2(
	function (subject, message) {
		return $orus_io$elm_nats$Nats$Internal$Types$Pub(
			{G: message, aW: $elm$core$Maybe$Nothing, c8: $elm$core$Maybe$Nothing, W: subject});
	});
var $author$project$PWets$startVessel = F2(
	function (license, direction) {
		return A2(
			$elm$json$Json$Encode$encode,
			0,
			$elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'object',
						$elm$json$Json$Encode$string('VesselArrived')),
						_Utils_Tuple2(
						'license',
						$elm$json$Json$Encode$string(license)),
						_Utils_Tuple2(
						'direction',
						$elm$json$Json$Encode$string(direction))
					])));
	});
var $author$project$Util$toString = function (d) {
	if (!d) {
		return 'Upstream';
	} else {
		return 'Downstream';
	}
};
var $mdgriffith$elm_animator$Animator$update = F3(
	function (newTime, _v0, model) {
		var updateModel = _v0.b;
		return A2(updateModel, newTime, model);
	});
var $orus_io$elm_nats$Nats$Internal$SocketState$OnAck = function (a) {
	return {$: 5, a: a};
};
var $orus_io$elm_nats$Nats$Internal$SocketState$OnClose = {$: 2};
var $orus_io$elm_nats$Nats$Internal$SocketState$OnError = function (a) {
	return {$: 3, a: a};
};
var $orus_io$elm_nats$Nats$Internal$SocketState$OnMessage = function (a) {
	return {$: 4, a: a};
};
var $orus_io$elm_nats$Nats$Internal$SocketState$OnOpen = {$: 0};
var $orus_io$elm_nats$Nats$Internal$SocketState$OnTime = function (a) {
	return {$: 6, a: a};
};
var $orus_io$elm_nats$Nats$doUpdateAllSockets = F3(
	function (cfg, msg, _v0) {
		var ncfg = cfg;
		var state = _v0;
		var _v1 = A2(
			$orus_io$elm_nats$Nats$Internal$SocketStateCollection$mapWithEffect,
			A2($orus_io$elm_nats$Nats$Internal$SocketState$update, cfg, msg),
			state.R);
		var sockets = _v1.a;
		var effects = _v1.b;
		return _Utils_Tuple3(
			_Utils_update(
				state,
				{R: sockets}),
			A2($elm$core$List$concatMap, $elm$core$Tuple$first, effects),
			$elm$core$Platform$Cmd$batch(
				A2(
					$elm$core$List$map,
					ncfg.b$.hT,
					A2($elm$core$List$concatMap, $elm$core$Tuple$second, effects))));
	});
var $orus_io$elm_nats$Nats$Internal$SocketStateCollection$update = F4(
	function (cfg, sid, msg, collection) {
		var _v0 = A2($orus_io$elm_nats$Nats$Internal$SocketStateCollection$findByID, sid, collection);
		if (!_v0.$) {
			var state = _v0.a;
			var _v1 = A3($orus_io$elm_nats$Nats$Internal$SocketState$update, cfg, msg, state);
			var newState = _v1.a;
			var effect = _v1.b;
			return _Utils_Tuple2(
				A2($orus_io$elm_nats$Nats$Internal$SocketStateCollection$insert, newState, collection),
				effect);
		} else {
			return _Utils_Tuple2(
				collection,
				_Utils_Tuple2(_List_Nil, _List_Nil));
		}
	});
var $orus_io$elm_nats$Nats$doUpdateSocket = F4(
	function (cfg, sid, msg, _v0) {
		var ncfg = cfg;
		var state = _v0;
		var _v1 = A4($orus_io$elm_nats$Nats$Internal$SocketStateCollection$update, cfg, sid, msg, state.R);
		var sockets = _v1.a;
		var _v2 = _v1.b;
		var msgs = _v2.a;
		var ops = _v2.b;
		return _Utils_Tuple3(
			_Utils_update(
				state,
				{R: sockets}),
			msgs,
			$elm$core$Platform$Cmd$batch(
				A2($elm$core$List$map, ncfg.b$.hT, ops)));
	});
var $orus_io$elm_nats$Nats$updateWithEffects = F3(
	function (cfg, msg, oState) {
		var state = oState;
		switch (msg.$) {
			case 1:
				var sid = msg.a;
				return A4($orus_io$elm_nats$Nats$doUpdateSocket, cfg, sid, $orus_io$elm_nats$Nats$Internal$SocketState$OnOpen, oState);
			case 2:
				var sid = msg.a;
				return A4($orus_io$elm_nats$Nats$doUpdateSocket, cfg, sid, $orus_io$elm_nats$Nats$Internal$SocketState$OnClose, oState);
			case 3:
				var sid = msg.a.c8;
				var message = msg.a.G;
				return A4(
					$orus_io$elm_nats$Nats$doUpdateSocket,
					cfg,
					sid,
					$orus_io$elm_nats$Nats$Internal$SocketState$OnError(message),
					oState);
			case 4:
				var sid = msg.a.c8;
				var message = msg.a.G;
				return A4(
					$orus_io$elm_nats$Nats$doUpdateSocket,
					cfg,
					sid,
					$orus_io$elm_nats$Nats$Internal$SocketState$OnMessage(message),
					oState);
			case 0:
				var sid = msg.a.c8;
				var ack = msg.a.dq;
				return A4(
					$orus_io$elm_nats$Nats$doUpdateSocket,
					cfg,
					sid,
					$orus_io$elm_nats$Nats$Internal$SocketState$OnAck(ack),
					oState);
			default:
				var time = msg.a;
				var msTime = $elm$time$Time$posixToMillis(time);
				return A3(
					$orus_io$elm_nats$Nats$doUpdateAllSockets,
					cfg,
					$orus_io$elm_nats$Nats$Internal$SocketState$OnTime(msTime),
					_Utils_update(
						state,
						{h6: msTime}));
		}
	});
var $orus_io$elm_nats$Nats$update = F3(
	function (_v0, msg, state) {
		var cfg = _v0;
		var _v1 = A3($orus_io$elm_nats$Nats$updateWithEffects, cfg, msg, state);
		var newState = _v1.a;
		var msgs = _v1.b;
		var cmds = _v1.c;
		return _Utils_Tuple2(
			newState,
			$elm$core$Platform$Cmd$batch(
				A2(
					$elm$core$List$cons,
					A2($elm$core$Platform$Cmd$map, cfg.aT, cmds),
					A2(
						$elm$core$List$map,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Task$succeed,
							$elm$core$Task$perform($elm$core$Basics$identity)),
						msgs))));
	});
var $author$project$PWets$FlowCommand = F3(
	function (object, operation, name) {
		return {av: name, dV: object, fq: operation};
	});
var $elm$json$Json$Decode$map3 = _Json_map3;
var $author$project$PWets$flowDecoder = A4(
	$elm$json$Json$Decode$map3,
	$author$project$PWets$FlowCommand,
	A2($elm$json$Json$Decode$field, 'object', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'operation', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string));
var $author$project$PWets$GCDCommand = F3(
	function (object, operation, name) {
		return {av: name, dV: object, fq: operation};
	});
var $author$project$PWets$gcdDecoder = A4(
	$elm$json$Json$Decode$map3,
	$author$project$PWets$GCDCommand,
	A2($elm$json$Json$Decode$field, 'object', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'operation', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string));
var $author$project$Main$FlowComplete = function (a) {
	return {$: 4, a: a};
};
var $author$project$Main$Low = 1;
var $author$project$Main$chamberMoves = function (sensor) {
	return $elm$core$Dict$fromList(
		function () {
			switch (sensor) {
				case 'Sensor-F03':
					return _List_fromArray(
						[
							_Utils_Tuple2('AChamber', 1)
						]);
				case 'Sensor-F04':
					return _List_fromArray(
						[
							_Utils_Tuple2('AChamber', 0),
							_Utils_Tuple2('BChamber', 1)
						]);
				case 'Sensor-F05':
					return _List_fromArray(
						[
							_Utils_Tuple2('BChamber', 0)
						]);
				default:
					return _List_Nil;
			}
		}());
};
var $andrewMacmurray$elm_delay$Delay$addOffset = F2(
	function (previousTotal, time) {
		var total = previousTotal + time;
		return (_Utils_cmp(total, previousTotal + 6) < 1) ? (total + 6) : total;
	});
var $andrewMacmurray$elm_delay$Delay$collectDelays = F2(
	function (_v0, _v1) {
		var time = _v0.a;
		var msg = _v0.b;
		var previousTotal = _v1.a;
		var cmds = _v1.b;
		var newTotal = A2($andrewMacmurray$elm_delay$Delay$addOffset, previousTotal, time);
		return _Utils_Tuple2(
			newTotal,
			_Utils_ap(
				cmds,
				_List_fromArray(
					[
						A2($andrewMacmurray$elm_delay$Delay$after, newTotal, msg)
					])));
	});
var $andrewMacmurray$elm_delay$Delay$sequence = A2(
	$elm$core$Basics$composeR,
	A2(
		$elm$core$List$foldl,
		$andrewMacmurray$elm_delay$Delay$collectDelays,
		_Utils_Tuple2(0, _List_Nil)),
	A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $elm$core$Platform$Cmd$batch));
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $author$project$Main$inChamberP = function (tstate) {
	switch (tstate) {
		case 2:
			return true;
		case 3:
			return true;
		case 4:
			return true;
		case 5:
			return true;
		default:
			return false;
	}
};
var $author$project$Main$vesselInFlowP = F2(
	function (sensor, vessel) {
		var _v0 = $elm$core$List$head(vessel.a8);
		if (_v0.$ === 1) {
			return false;
		} else {
			var tstate = _v0.a;
			switch (sensor) {
				case 'Sensor-F03':
					var _v2 = vessel.bG;
					if (_v2 === 1) {
						return tstate === 3;
					} else {
						return tstate === 2;
					}
				case 'Sensor-F05':
					var _v3 = vessel.bG;
					if (_v3 === 1) {
						return tstate === 5;
					} else {
						return tstate === 4;
					}
				default:
					return $author$project$Main$inChamberP(tstate);
			}
		}
	});
var $author$project$Main$handleFlow = F2(
	function (model, cmd) {
		var vmoves = function (vlist) {
			var _v0 = A2(
				$elm$core$List$filter,
				function (v) {
					return v.bv;
				},
				vlist);
			if (_v0.b) {
				var v = _v0.a;
				return A2($author$project$Main$vesselInFlowP, cmd.av, v) ? $elm$core$List$singleton(
					_Utils_Tuple2(
						0,
						A2($author$project$Main$MoveVessel, v.a3, 2000))) : _List_Nil;
			} else {
				return _List_Nil;
			}
		};
		var updateChambers = function (sensor) {
			return A2(
				$elm$core$Dict$union,
				$author$project$Main$chamberMoves(sensor),
				$mdgriffith$elm_animator$Animator$current(model.a_));
		};
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{
					a_: A3(
						$mdgriffith$elm_animator$Animator$go,
						$mdgriffith$elm_animator$Animator$millis(2000),
						updateChambers(cmd.av),
						model.a_),
					G: 'Handling flow for ' + (cmd.av + (' ' + $elm$core$String$fromInt(
						$elm$core$List$length(
							vmoves(model.L)))))
				}),
			$andrewMacmurray$elm_delay$Delay$sequence(
				A2(
					$elm$core$List$append,
					vmoves(model.L),
					_List_fromArray(
						[
							_Utils_Tuple2(
							2000,
							$author$project$Main$FlowComplete(cmd.av))
						]))));
	});
var $author$project$Main$GateCleared = function (a) {
	return {$: 3, a: a};
};
var $author$project$Main$startNext = F2(
	function (dir, vlist) {
		if (!vlist.b) {
			return vlist;
		} else {
			var v = vlist.a;
			var rest = vlist.b;
			return _Utils_eq(v.bG, dir) ? A2(
				$elm$core$List$cons,
				_Utils_update(
					v,
					{bv: true}),
				rest) : A2(
				$elm$core$List$cons,
				v,
				A2($author$project$Main$startNext, dir, rest));
		}
	});
var $author$project$Main$handleGCD = F2(
	function (model, cmd) {
		var vlist = A2(
			$elm$core$List$any,
			function (v) {
				return v.bv;
			},
			model.L) ? model.L : A2(
			$author$project$Main$startNext,
			(cmd.av === 'GCD-05') ? 1 : 0,
			model.L);
		var seq = A2(
			$elm$core$List$map,
			function (vid) {
				return _Utils_Tuple2(
					0,
					A2($author$project$Main$MoveVessel, vid.a3, 1000));
			},
			A2(
				$elm$core$List$filter,
				function (v) {
					return v.bv;
				},
				vlist));
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{L: vlist, G: cmd.fq + (' for ' + cmd.av)}),
			$andrewMacmurray$elm_delay$Delay$sequence(
				A2(
					$elm$core$List$append,
					seq,
					_List_fromArray(
						[
							_Utils_Tuple2(
							1000,
							$author$project$Main$GateCleared(cmd.av))
						]))));
	});
var $author$project$Main$AllMoored = function (a) {
	return {$: 6, a: a};
};
var $author$project$Main$handleMooring = F2(
	function (model, cmd) {
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{G: cmd.fq + (' for ' + cmd.av)}),
			A2(
				$andrewMacmurray$elm_delay$Delay$after,
				1000,
				$author$project$Main$AllMoored(cmd.av)));
	});
var $author$project$Main$ActuatorMoveDone = function (a) {
	return {$: 5, a: a};
};
var $author$project$Main$Opened = 0;
var $author$project$Main$handleMotor = F2(
	function (model, cmd) {
		var setActuator = F2(
			function (id, newState) {
				return A3(
					$elm$core$Dict$insert,
					id,
					newState,
					$mdgriffith$elm_animator$Animator$current(model.aL));
			});
		var opAsState = function (op) {
			return (op === 'RUN_IN') ? 1 : 0;
		};
		var actState = opAsState(cmd.fq);
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{
					aL: A3(
						$mdgriffith$elm_animator$Animator$go,
						$mdgriffith$elm_animator$Animator$millis(1000),
						A2(setActuator, cmd.av, actState),
						model.aL)
				}),
			A2(
				$andrewMacmurray$elm_delay$Delay$after,
				1000,
				$author$project$Main$ActuatorMoveDone(cmd.av)));
	});
var $author$project$PWets$FlowMsg = 3;
var $author$project$PWets$GCDMsg = 1;
var $author$project$PWets$MooringMsg = 2;
var $author$project$PWets$MotorMsg = 0;
var $author$project$PWets$messageType = function (s) {
	var _v0 = A2(
		$elm$json$Json$Decode$decodeString,
		A2($elm$json$Json$Decode$field, 'object', $elm$json$Json$Decode$string),
		s);
	if (!_v0.$) {
		var cmd = _v0.a;
		switch (cmd) {
			case 'Motor':
				return $elm$core$Maybe$Just(0);
			case 'GCD':
				return $elm$core$Maybe$Just(1);
			case 'MooringMonitor':
				return $elm$core$Maybe$Just(2);
			case 'FlowSensor':
				return $elm$core$Maybe$Just(3);
			default:
				return $elm$core$Maybe$Nothing;
		}
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$PWets$MooringCommand = F3(
	function (object, operation, name) {
		return {av: name, dV: object, fq: operation};
	});
var $author$project$PWets$mooringDecoder = A4(
	$elm$json$Json$Decode$map3,
	$author$project$PWets$MooringCommand,
	A2($elm$json$Json$Decode$field, 'object', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'operation', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string));
var $author$project$PWets$MotorCommand = F3(
	function (object, operation, name) {
		return {av: name, dV: object, fq: operation};
	});
var $author$project$PWets$motorDecoder = A4(
	$elm$json$Json$Decode$map3,
	$author$project$PWets$MotorCommand,
	A2($elm$json$Json$Decode$field, 'object', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'operation', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string));
var $author$project$Main$wetsHandler = F2(
	function (data, model) {
		var _v0 = $author$project$PWets$messageType(data);
		if (!_v0.$) {
			switch (_v0.a) {
				case 0:
					var _v1 = _v0.a;
					var _v2 = A2($elm$json$Json$Decode$decodeString, $author$project$PWets$motorDecoder, data);
					if (!_v2.$) {
						var cmd = _v2.a;
						return A2($author$project$Main$handleMotor, model, cmd);
					} else {
						var e = _v2.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									G: $elm$json$Json$Decode$errorToString(e)
								}),
							$elm$core$Platform$Cmd$none);
					}
				case 1:
					var _v3 = _v0.a;
					var _v4 = A2($elm$json$Json$Decode$decodeString, $author$project$PWets$gcdDecoder, data);
					if (!_v4.$) {
						var cmd = _v4.a;
						return A2($author$project$Main$handleGCD, model, cmd);
					} else {
						var e = _v4.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									G: $elm$json$Json$Decode$errorToString(e)
								}),
							$elm$core$Platform$Cmd$none);
					}
				case 2:
					var _v5 = _v0.a;
					var _v6 = A2($elm$json$Json$Decode$decodeString, $author$project$PWets$mooringDecoder, data);
					if (!_v6.$) {
						var cmd = _v6.a;
						return A2($author$project$Main$handleMooring, model, cmd);
					} else {
						var e = _v6.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									G: $elm$json$Json$Decode$errorToString(e)
								}),
							$elm$core$Platform$Cmd$none);
					}
				default:
					var _v7 = _v0.a;
					var _v8 = A2($elm$json$Json$Decode$decodeString, $author$project$PWets$flowDecoder, data);
					if (!_v8.$) {
						var cmd = _v8.a;
						return A2($author$project$Main$handleFlow, model, cmd);
					} else {
						var e = _v8.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									G: $elm$json$Json$Decode$errorToString(e)
								}),
							$elm$core$Platform$Cmd$none);
					}
			}
		} else {
			return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var tick = msg.a;
				return _Utils_Tuple3(
					A3($mdgriffith$elm_animator$Animator$update, tick, $author$project$Main$animator, model),
					$orus_io$elm_nats$Nats$Effect$none,
					$elm$core$Platform$Cmd$none);
			case 1:
				var license = msg.a;
				var millis = msg.b;
				var _v1 = A2($author$project$Main$nextTransition, license, model.L);
				if (_v1.$ === 1) {
					return _Utils_Tuple3(
						_Utils_update(
							model,
							{G: 'handleVessel: No next transit state for ' + license}),
						$orus_io$elm_nats$Nats$Effect$none,
						$elm$core$Platform$Cmd$none);
				} else {
					var nextState = _v1.a;
					var setVesselState = function (newState) {
						return A3(
							$elm$core$Dict$insert,
							license,
							newState,
							$mdgriffith$elm_animator$Animator$current(model._));
					};
					return _Utils_Tuple3(
						_Utils_update(
							model,
							{
								L: A2($author$project$Main$adjustSequence, license, model.L),
								_: A3(
									$mdgriffith$elm_animator$Animator$go,
									$mdgriffith$elm_animator$Animator$millis(millis),
									setVesselState(nextState),
									model._)
							}),
						$orus_io$elm_nats$Nats$Effect$none,
						((nextState === 7) || (!nextState)) ? A2(
							$andrewMacmurray$elm_delay$Delay$after,
							millis,
							$author$project$Main$VesselFinished(license)) : $elm$core$Platform$Cmd$none);
				}
			case 2:
				var id = msg.a;
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{
							L: A2(
								$elm$core$List$filter,
								function (v) {
									return !_Utils_eq(v.a3, id);
								},
								model.L),
							G: 'Finished \"' + (id + '\"'),
							_: A3(
								$mdgriffith$elm_animator$Animator$go,
								$mdgriffith$elm_animator$Animator$immediately,
								A2(
									$elm$core$Dict$remove,
									id,
									$mdgriffith$elm_animator$Animator$current(model._)),
								model._)
						}),
					$orus_io$elm_nats$Nats$Effect$none,
					$elm$core$Platform$Cmd$none);
			case 3:
				var id = msg.a;
				return _Utils_Tuple3(
					model,
					A2(
						$orus_io$elm_nats$Nats$publish,
						'PWets.1',
						$author$project$PWets$gateCleared(id)),
					$elm$core$Platform$Cmd$none);
			case 4:
				var id = msg.a;
				return _Utils_Tuple3(
					model,
					A2(
						$orus_io$elm_nats$Nats$publish,
						'PWets.1',
						$author$project$PWets$flowEqualized(id)),
					$elm$core$Platform$Cmd$none);
			case 5:
				var id = msg.a;
				return _Utils_Tuple3(
					model,
					A2(
						$orus_io$elm_nats$Nats$publish,
						'PWets.1',
						$author$project$PWets$actuatorMoveDone(id)),
					$elm$core$Platform$Cmd$none);
			case 6:
				var id = msg.a;
				return _Utils_Tuple3(
					model,
					A2(
						$orus_io$elm_nats$Nats$publish,
						'PWets.1',
						$author$project$PWets$allMoored(id)),
					$elm$core$Platform$Cmd$none);
			case 7:
				var direction = msg.a;
				var popState = function (v) {
					var _v3 = v.a8;
					if (!_v3.b) {
						return _Utils_Tuple2(v, 8);
					} else {
						var x = _v3.a;
						var rest = _v3.b;
						return _Utils_Tuple2(
							_Utils_update(
								v,
								{a8: rest}),
							x);
					}
				};
				var license = $author$project$Util$newVesselName(model.dp);
				var _v2 = popState(
					A2($author$project$Main$newVessel, license, direction));
				var vessel = _v2.a;
				var startState = _v2.b;
				var startVessel = A3(
					$elm$core$Dict$insert,
					license,
					startState,
					$mdgriffith$elm_animator$Animator$current(model._));
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{
							L: A2(
								$elm$core$List$append,
								model.L,
								$elm$core$List$singleton(vessel)),
							G: 'Starting vessel \"' + (license + '\"'),
							dp: model.dp + 1,
							_: A3($mdgriffith$elm_animator$Animator$go, $mdgriffith$elm_animator$Animator$immediately, startVessel, model._)
						}),
					A2(
						$orus_io$elm_nats$Nats$publish,
						'PWets.1',
						A2(
							$author$project$PWets$startVessel,
							license,
							$author$project$Util$toString(direction))),
					A2(
						$andrewMacmurray$elm_delay$Delay$after,
						100,
						A2($author$project$Main$MoveVessel, license, 1000)));
			case 8:
				var natsMsg = msg.a;
				var _v4 = A3($orus_io$elm_nats$Nats$update, $author$project$Main$natsConfig, natsMsg, model.bk);
				var nats = _v4.a;
				var natsCmd = _v4.b;
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{bk: nats}),
					$orus_io$elm_nats$Nats$Effect$none,
					natsCmd);
			case 9:
				var event = msg.a;
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{
							ef: function () {
								if (!event.$) {
									var info = event.a;
									return $elm$core$Maybe$Just(info);
								} else {
									return $elm$core$Maybe$Nothing;
								}
							}()
						}),
					$orus_io$elm_nats$Nats$Effect$none,
					$elm$core$Platform$Cmd$none);
			default:
				var data = msg.a;
				var _v6 = A2($author$project$Main$wetsHandler, data, model);
				var new_model = _v6.a;
				var cmd = _v6.b;
				return _Utils_Tuple3(new_model, $orus_io$elm_nats$Nats$Effect$none, cmd);
		}
	});
var $author$project$Main$wrappedUpdate = F2(
	function (msg, model) {
		var _v0 = A2($author$project$Main$update, msg, model);
		var newModel = _v0.a;
		var natsEffect = _v0.b;
		var cmd = _v0.c;
		var _v1 = A4(
			$orus_io$elm_nats$Nats$applyEffectAndSub,
			$author$project$Main$natsConfig,
			natsEffect,
			$author$project$Main$natsSubscriptions(model),
			newModel.bk);
		var nats = _v1.a;
		var natsCmd = _v1.b;
		return _Utils_Tuple2(
			_Utils_update(
				newModel,
				{bk: nats}),
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[cmd, natsCmd])));
	});
var $author$project$Main$main = $elm$browser$Browser$document(
	{jL: $author$project$Main$init, k2: $author$project$Main$subscriptions, lw: $author$project$Main$wrappedUpdate, ly: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (now) {
			return $elm$json$Json$Decode$succeed(
				{fk: now});
		},
		A2($elm$json$Json$Decode$field, 'now', $elm$json$Json$Decode$int)))(0)}});}(this));