import { BigNumber } from "ethers";

export default function convertFiat(
	fiat: BigNumber
) {
	try {
		if (fiat)
			return fiat.toNumber() / 10 ** 8
	} catch (e) {
		console.log(e)
	}
}