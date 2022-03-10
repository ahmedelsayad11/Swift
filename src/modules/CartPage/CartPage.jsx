import React from "react";
import styles from "./CartPage.module.scss";
import CartSquare from "@/components/shared/CartSquare/CartSquare";
import CartSlider from "@/components/cartPage/CartSlider/CartSlider";

const CartPage = () => {
	const data = {
		brand: "addidas",
		name: "shoes",
		price: 500,
	};

	return (
		<div className={styles["container"]}>
			<h1 className={styles["cart-header"]}>CART</h1>

			<div className={styles["wrapper"]}>
				<div className={styles["left-cart-side"]}>
					<h2>{data?.brand}</h2>
					<h3>{data?.name}</h3>
					<h4>$ {data?.price}</h4>
					<div className={styles["sizes"]}>
						<CartSquare large symbol={"S"} />
						<CartSquare large selected symbol={"M"} />
					</div>
				</div>
				<div className={styles["right-cart-side"]}>
					<div className={styles["cart-counter"]}>
						<CartSquare symbol={"+"} />
						<span>1</span>
						<CartSquare selected symbol={"-"} />
					</div>
					<div className={styles["cart-slider"]}>
						<CartSlider />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
