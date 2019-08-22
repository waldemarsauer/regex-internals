import * as stringStream from '@/stringStream'

function parse(inputString) {
	let stream = stringStream.read(inputString)
	let nextChar, state = 1
	while ((nextChar = stream.nextChar()) != -1) {
		console.log(`In state ${state}, seeing ${nextChar}`)
		switch (state) {
			case 1:
				if (nextChar === 'c') {
					state = 2
				} else {
					console.log(`Unexpected character ${nextChar}`)
					return false
				}
				break
			case 2:
				if (nextChar === 'a') {
					state = 3
				} else {
					console.log(`Unexpected character ${nextChar}`)
					return false
				}
				break
			case 3:
					if (nextChar === 't') {
						state = 4
					} else {
						console.log(`Unexpected character ${nextChar}`)
						return false
					}
					break
			default: {
				throw new Error(`Unknown state ${state}`)
			}
		}
	}
	return state === 4
}

export { parse }
