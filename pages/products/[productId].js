import server from "../../src/api/server";
import { SingleProductPage } from "../../src/modules/SingleProductPage";

export default function SingleProduct({ data }) {
	return (
		<div>
			<SingleProductPage />
		</div>
	);
}

export async function getServerSideProps(context) {
	// const { id } = context.params;
	// console.log(id);
	// const res = await server.get(`/api/posts/${id}`);
	// const serviceData = res?.data?.data;

	return {
		props: {}, // will be passed to the page component as props
	};
}
