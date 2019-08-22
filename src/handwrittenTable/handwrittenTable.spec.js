import { parse } from '.'

describe('cat.js', () => {
	it('recognizes cat', () => {
		const result = parse('cat')
		expect(result).toEqual(true)
	})

	it('does not recognize dog', () => {
		const result = parse('dog')
		expect(result).toEqual(false)
	})
})
