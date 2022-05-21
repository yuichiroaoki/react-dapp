import numberWithCommas from "./numberWithCommas";

export default function roundNumber(
	x: number
): string {
	const roundNum = x.toFixed(2)

	return numberWithCommas(roundNum);
}