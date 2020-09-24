const triangle = (row) => {
	if (row.length === 1) return row;
	let temp = "";
	for (let i = 0; i < row.length - 1; i++) {
		let a = row[i],
			b = row[i + 1];
		if (a === b) {
			temp = temp.concat(a);
		} else if ((a === "R" && b === "G") || (a === "G" && b === "R")) {
			temp = temp.concat("B");
		} else if ((a === "B" && b === "G") || (a === "G" && b === "B")) {
			temp = temp.concat("R");
		} else if ((a === "B" && b === "R") || (a === "R" && b === "B")) {
			temp = temp.concat("G");
		}
	}
	return triangle(temp);
};
