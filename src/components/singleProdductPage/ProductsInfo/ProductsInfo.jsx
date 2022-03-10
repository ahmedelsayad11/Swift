import React, { useEffect, useState } from "react";
import styles from "./ProductsInfo.module.scss";
import CartSquare from "@/shared/CartSquare/CartSquare";
import { theChosenPrice } from "src/helper/functions";
import { useAppContext } from "src/context/AppContext";
export default function ProductsInfo({ product }) {
	const data = {
		brand: `${product?.brand}`,
		name: `${product?.name}`,
		price: theChosenPrice(product),
		description: `${product?.description}`,
	};
	const [state, dispatch] = useAppContext();
	console.log(state, "state");
	const handleAddToCartClick = () => {
		dispatch({ type: "add_product", value: product });
	};
	return (
		<div className={styles["wrapper"]}>
			<div className={styles["brand"]}>
				<h3>{data?.brand}</h3>
			</div>
			<div className={styles["name"]}>
				<h3>{data?.name}</h3>
			</div>
			<div className={styles["size"]}>
				<h4>SIZE:</h4>
				<div className={styles["sizes"]}>
					<CartSquare large symbol={"M"} selected />
					<CartSquare large symbol={"S"} disabled />
					<CartSquare large symbol={"M"} />
					<CartSquare large symbol={"L"} />
				</div>
			</div>
			<div className={styles["price"]}>
				<h4>PRICE:</h4>
				<span>{data?.price}</span>
			</div>
			<div className={styles["button"]}>
				<button onClick={handleAddToCartClick}>ADD TO CART</button>
			</div>
			<div className={styles["description"]}>
				<div
					contentEditable="true"
					dangerouslySetInnerHTML={{ __html: data?.description }}
				></div>
			</div>
		</div>
	);
}
