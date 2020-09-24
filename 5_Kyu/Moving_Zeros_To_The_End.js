let moveZeros = function (arr) {
	// TODO: Program me
	let count = 0;
	let temp = [];
	function Calc() {
		arr.map((x, i) => {
			if (x === 0) {
				count++;
			} else {
				temp.push(x);
			}
		});
		for (let i = 0; i < count; i++) {
			temp.push(0);
		}
		return temp;
	}
	return arr.filter((x) => x === 0) ? Calc() : arr;
};
