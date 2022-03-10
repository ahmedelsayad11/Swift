export const initialState = {
	products: [],
};
export const AppReducer = (state, { type, value }) => {
	console.log(type, value);
	switch (type) {
		case "add_product": {
			return {
				...state,
				products: [...state?.products, value],
			};
		}
		case "add_number": {
			return {
				...state,
				number: action.value + state.number,
			};
		}
	}
};
