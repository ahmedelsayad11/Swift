import { useRouter } from "next/router";
import React from "react";
import styles from "./DropDownItem.module.scss";

export default function DropDownItem({ text, icon }) {
	const router = useRouter();
	const handleCurrencyChangeClick = () => {
		if (typeof window !== "undefined") {
			localStorage.setItem("currency", text);
			router.reload(window.location.pathname);
		}
	};
	return (
		<div
			className={styles["dropdown-item"]}
			onClick={handleCurrencyChangeClick}
		>
			<span>{icon}</span>
			<p>{text}</p>
		</div>
	);
}
