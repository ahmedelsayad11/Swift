import React from "react";
import styles from "./CartDropDownItem.module.scss";
import Cart from "../../../svg/cart.svg";
import Image from "next/image";
import Man from "../../../../public/man.png";
import CartSquare from "@/shared/CartSquare/CartSquare";
import { theChosenPrice } from "src/helper/functions";
export default function CartDropDownItem({ product }) {
	console.log(product, "product");

	const data = {
		name: `${product?.name}`,
		brand: `${product?.brand}`,
		image: `${product?.gallery[0]}`,
		price: theChosenPrice(product),
	};
	return (
		<>
			<div className={styles["cart-dropdown-item"]}>
				<div className={styles["information"]}>
					<h5 className={styles["name"]}>
						<span>{data?.brand}</span>
						<span>{data?.name}</span>
					</h5>
					<span className={styles["price"]}>{data?.price}</span>
					<div className={styles["sizes"]}>
						<CartSquare symbol={"S"} />
						<CartSquare symbol={"M"} disabled />
					</div>
				</div>
				<div className={styles["quantity"]}>
					<CartSquare symbol={"+"} />
					<span>5</span>
					<CartSquare symbol={"-"} />
				</div>
				<div className={styles["image"]}>
					<Image
						src={data?.image}
						alt="image"
						width={105}
						height={137}
						layout="fixed"
						objectFit="cover"
					/>
				</div>
			</div>
		</>
	);
}
