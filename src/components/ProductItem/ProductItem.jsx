import React, { useEffect, useState } from "react";
import styles from "./ProductItem.module.scss";
import Image from "next/image";
import product from "../../../src/assests/images/product.jpeg";
import Cart from "../../svg/cart.svg";
import Link from "next/link";
export default function ProductItem({ inStock, price, name, gallery, id }) {
	return (
		<Link href={{ pathname: `/products/${id}`, query: { id: id } }}>
			<div
				className={`${styles["product-item"]} 
				${!inStock ? styles["out-of-stock"] : ""}  `}
			>
				<div className={styles["product-image"]}>
					<Image
						src={gallery[0]}
						height={338}
						width={356}
						layout="fixed"
						objectFit="cover"
						alt="product-image"
					/>
					<div className={styles["cart-icon"]}>
						<Cart />
					</div>
				</div>
				<div className={styles["product-info"]}>
					<p>{name}</p>
					<span>{price}</span>
				</div>
			</div>
		</Link>
	);
}
