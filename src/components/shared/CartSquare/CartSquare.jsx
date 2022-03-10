import React from "react";
import styles from "./CartSquare.module.scss";
export default function CartSquare({
	symbol,
	disabled = false,
	onClick = () => true,
	large = false,
	selected = false,
}) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={` ${styles["square"]} ${large ? styles["large"] : ""}  ${
				selected ? styles["selected"] : ""
			}`}
		>
			{symbol}
		</button>
	);
}
