import { parse } from '.'

describe('cat.js', () => {
	const parseTable = {
		1: {
			'c': 2
		},
		2: {
			'a': 3
		},
		3: {
			't': 4
		}
	}
	const acceptStates = [ 4 ]

	it('recognizes cat', () => {
		const result = parse('cat', parseTable, acceptStates)
		expect(result).toEqual(true)
	})

	it('does not recognize dog', () => {
		const result = parse('dog', parseTable, acceptStates)
		expect(result).toEqual(false)
	})
})
