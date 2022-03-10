import { CartPage } from "../src/modules/CartPage";

export default function Cart() {
	return (
		<div>
			<CartPage />
		</div>
	);
}

export async function getServerSideProps() {
	return {
		props: {},
	};
}
