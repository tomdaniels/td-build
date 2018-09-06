#!/usr/bin/env node

const meow = require('meow');

const cli = meow(`
	Usage
	  $ td-build <input>

	Options
	  --flag, -f  description

	Examples
	  $ td-build dummy --flag
	  with
`, {
	flags: {
		dummy: {
			type: 'boolean',
			alias: 'd'
		}
	}
});
/*
{
	input: ['dummy'],
	flags: {flag: true},
	...
}
*/

const foo = (input, flags) => {
	if (flags && flags.f) {
		console.log('with flag');
	} else if (flags && !flags.f) {
		console.log(cli.help);
	} else {
		console.log('without');
	}
}

foo(cli.input[0], cli.flags);
