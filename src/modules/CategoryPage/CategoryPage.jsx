import ProductItem from "@/components/ProductItem/ProductItem";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { theChosenPrice } from "src/helper/functions";
import { GET_CATEGORY_INFO } from "src/queries";
import styles from "./CategoryPage.module.scss";
const CategoryPage = () => {
	const router = useRouter();
	const {
		query: { category },
	} = router;

	const {
		loading: categoriesLoading,
		error: categoriesError,
		data: categoriesData,
	} = useQuery(GET_CATEGORY_INFO, {
		variables: { name: category ?? "all" },
	});
	const products = categoriesData?.category?.products;

	return (
		<div className={styles["container"]}>
			{categoriesLoading ? (
				"loading"
			) : categoriesError ? (
				"error"
			) : (
				<>
					<div>
						<h1 className={styles["products-header"]}>
							{categoriesData?.category?.name}
						</h1>
					</div>
					<div className={styles["products-layout"]}>
						{products?.map(product => (
							<ProductItem
								name={product?.name}
								price={theChosenPrice(product)}
								key={product?.id}
								inStock={product?.inStock}
								gallery={product?.gallery}
								id={product?.id}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default CategoryPage;
