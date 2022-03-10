import React from "react";
import styles from "./NavItem.module.scss";

import Link from "next/link";

export default function NavItem({ text, link }) {
	return (
		<div>
			<Link href={{ pathname: `/`, query: { category: text } }}>
				<a className={styles["link-item"]}>{text}</a>
			</Link>
		</div>
	);
}
