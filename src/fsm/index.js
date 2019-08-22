import * as stringStream from '@/stringStream'

function parse(input, parseTable, acceptStates) {
	let stream = stringStream.read(input)
	let nextChar, state = 1
	while ((nextChar = stream.nextChar()) != -1) {
		console.log(`In state ${state}, seeing ${nextChar}`)
		if (!parseTable[state]) {
			throw new Error(`Unknown state ${state}`)
		}
		state = parseTable[state][nextChar]
		if (typeof state === 'undefined') {
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
