import GalleryImages from "@/components/singleProdductPage/GalleryImages/GalleryImages";
import ProductItem from "@/components/ProductItem/ProductItem";
import React from "react";
import styles from "./SingleProductPage.module.scss";
import ProductsInfo from "@/components/singleProdductPage/ProductsInfo/ProductsInfo";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_PRODUCT } from "src/queries";

const SingleProductPage = () => {
	const router = useRouter();
	const {
		query: { id },
	} = router;

	const {
		loading: productLoading,
		error: productError,
		data: productData,
	} = useQuery(GET_SINGLE_PRODUCT, {
		variables: { id: id },
	});

	const gallery = productData?.product?.gallery;

	return (
		<div className={styles["wrapper"]}>
			{productLoading ? (
				"loading"
			) : productError ? (
				"error"
			) : (
				<>
					<div className={styles["gallery-images"]}>
						<GalleryImages gallery={gallery} />
					</div>
					<div>
						<ProductsInfo product={productData?.product} />
					</div>
				</>
			)}
		</div>
	);
};

export default SingleProductPage;
