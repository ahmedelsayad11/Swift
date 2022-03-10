import React from "react";
import styles from "./NavCart.module.scss";
import Cart from "../../../svg/cart.svg";
import { useState } from "react";
import Link from "next/link";
import CartDropDownItem from "../CartDropDownItem/CartDropDownItem";
import { useAppContext } from "src/context/AppContext";

export default function NavCart({ text, icon }) {
	const [open, setOpen] = useState();
	const handleCartClick = () => {
		setOpen(!open);
	};
	const handleViewBagClick = () => {
		setOpen(!open);
		console.log("true");
	};
	const handleCheckOutClick = () => {
		console.log("true");
	};

	const [state, dispatch] = useAppContext();

	const products = state?.products;
	const cartCounter = state?.products?.length;

	return (
		<>
			<div className={styles["cart"]}>
				<div className={styles["cart-icon"]} onClick={handleCartClick}>
					<Cart />
					<div className={styles["cart-counter"]}>{cartCounter}</div>
				</div>
				{open && (
					<>
						<div className={styles["cart-dropdown"]}>
							<p>
								My Bag, <span> {cartCounter} items</span>
							</p>
							{products?.map(product => (
								<CartDropDownItem key={product?.id} product={product} />
							))}

							<div className={styles["cart-total"]}>
								<p>Total</p>
								<span>$100,00</span>
							</div>

							<div className={styles["cart-button"]}>
								<button
									className={styles["viewbag-button"]}
									// onClick={handleViewBagClick}
								>
									<Link href="/cart">
										<a onClick={handleViewBagClick}>VIEW BAG</a>
									</Link>
								</button>
								<button
									className={styles["checkout-button"]}
									onClick={handleCheckOutClick}
								>
									CHECK OUT
								</button>
							</div>
						</div>
					</>
				)}
			</div>
			{open && <div className={styles["overlay"]}></div>}
		</>
	);
}
