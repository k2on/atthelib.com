const alphabet = "23456789CFGHJMPQRVWX".split(""); // uses alphabet from Plus Codes

export const codeToPosition = (code: string) => {
	let x = 0, y = 0;

	for (let i = 0; i < code.length; i += 2) {
		const alphabetIndex = alphabet.findIndex((x) => x === code[i]);

		x += alphabetIndex / Math.pow(alphabet.length, Math.ceil((i + 1) / 2));
	}

	for (let i = 1; i < code.length; i += 2) {
		const alphabetIndex = alphabet.findIndex((x) => x === code[i]);

		y += alphabetIndex / Math.pow(alphabet.length, Math.ceil((i + 1) / 2));
	}

	return [x, y];
}

export const positionToCode = (x: number, y: number, codeLength: number) => {
	const code = Array(codeLength).fill(null);

	for (let i = 0; i < Math.floor(codeLength / 2); i++) {
		const alphabetIndex = Math.floor(x * Math.pow(alphabet.length, i + 1));
		code[i * 2] = alphabet[alphabetIndex];

		x -= alphabetIndex / Math.pow(alphabet.length, i + 1);
	}

	for (let i = 0; i < Math.floor(codeLength / 2); i++) {
		const alphabetIndex = Math.floor(y * Math.pow(alphabet.length, i + 1));
		code[i * 2 + 1] = alphabet[alphabetIndex];

		y -= alphabetIndex / Math.pow(alphabet.length, i + 1);
	}

	return code.join("");
}
