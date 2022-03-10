import { CategoryPage } from "../src/modules/CategoryPage";

export default function Category() {
	return (
		<div>
			<CategoryPage />
		</div>
	);
}

export async function getStaticProps(context) {
	return {
		props: {},
	};
}
