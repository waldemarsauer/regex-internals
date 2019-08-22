
class stringStreamReader {

	constructor(string) {
		this.string = string
		this.index = 0
	}

	nextChar() {
		if (this.index < this.string.length) {
			this.index++
			return this.string[this.index-1]
		} else {
			return -1
		}
	}
}

function read(string) {
	return new stringStreamReader(string)
}

export {
	read
}
