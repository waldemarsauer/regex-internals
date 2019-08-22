import * as stringStream from '@/stringStream'

function parse(input) {
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

	let stream = stringStream.read(input)
	let nextChar, state = 1
	while ((nextChar = stream.nextChar()) != -1) {
		console.log(`In state ${state}, seeing ${nextChar}`)
		if (!parseTable[state]) {
			throw new Error(`Unknown state ${state}`)
		}
		const nextState = parseTable[state][nextChar]
		if (!nextState) {
			console.log(`Unexpected character ${nextChar}`)
			return false
		}
	}
	return isAcceptState(state, acceptStates)
}

function isAcceptState(stateIndex, acceptStates) {
	return acceptStates.findIndex(acceptState => acceptState == stateIndex) >= 0
}

export { parse }
