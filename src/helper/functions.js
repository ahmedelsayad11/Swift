export const theChosenPrice = product => {
	let currency;
	if (typeof window !== "undefined") {
		currency = localStorage.getItem("currency");
	}
	const price = product?.prices?.find(price => {
		if (price?.currency?.label === currency) return price?.amount;
	});
	return `${price?.currency?.symbol}${price?.amount}`;
};
