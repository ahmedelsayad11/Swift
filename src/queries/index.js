import { gql } from "@apollo/client";

export const GET_NAV_CURRENCIES_DATA = gql`
	query GetNavcurrencies {
		currencies {
			label
			symbol
		}
	}
`;

export const GET_NAV_CATEGORIES_DATA = gql`
	query GetNavCategories {
		categories {
			name
		}
	}
`;
export const GET_CATEGORIES_DATA = gql`
	query GetCategories {
		categories {
			name
			products {
				name
			}
		}
	}
`;
export const GET_CATEGORY_INFO = gql`
	query GetSingleCategoryInfo($name: String!) {
		category(input: { title: $name }) {
			name
			products {
				id
				inStock
				name
				gallery
				prices {
					currency {
						label
						symbol
					}
					amount
				}
			}
		}
	}
`;

export const GET_SINGLE_PRODUCT = gql`
	query GetSingleProductInfo($id: String!) {
		product(id: $id) {
			name
			inStock
			gallery
			description
			category
			attributes {
				id
				name
				type
				items {
					displayValue
					value
					id
				}
			}
			prices {
				currency {
					label
					symbol
				}
				amount
			}
			brand
		}
	}
`;
