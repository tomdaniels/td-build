#!/usr/bin/env node

const meow = require('meow');

const cli = meow(`
	Usage
	  $ foo <input>

	Options
	  --flag, -f  description

	Examples
	  $ foo unicorns --flag
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
	input: ['unicorns'],
	flags: {rainbow: true},
	...
}
*/

const foo = (input, flags) => {
	if (flags && flags.d) {
		console.log('with flag');
	} else if (flags && !flags.d) {
		console.log(cli.help);
	} else {
		console.log('without');
	}
}

foo(cli.input[0], cli.flags);
