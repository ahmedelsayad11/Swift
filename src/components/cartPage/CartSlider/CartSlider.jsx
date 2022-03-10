import React from "react";
import styles from "./CartSlider.module.scss";
import Cart from "../../../svg/cart.svg";
import Image from "next/image";
import man from "../../../../public/man.png";
import carwash from "../../../../public/carwash.png";
import img1 from "../../../../public/img1.png";
import { useState } from "react";
export default function CartSlider({}) {
	const data = [
		{
			id: Math.random(),
			image: man.src,
		},
		{
			id: Math.random(),
			image: carwash.src,
		},
		{
			id: Math.random(),
			image: img1.src,
		},
	];

	const [selected, setSelected] = useState(0);

	const handleNextArrow = () => {
		if (selected === data.length - 1) {
			setSelected(s => (s = 0));
		} else {
			setSelected(s => s + 1);
		}
	};
	const handlePreviousArrow = () => {
		if (selected === 0) {
			setSelected(data.length - 1);
		} else {
			setSelected(s => s - 1);
		}
	};

	return (
		<>
			<div className={styles["wrapper"]}>
				{data?.map((image, index) => (
					<div
						className={`${styles["cart-slider"]} ${
							index === selected ? styles["selected"] : ""
						}`}
						key={index}
					>
						<div className={styles["image"]}>
							<Image
								src={image.image}
								alt="image"
								layout="fill"
								objectFit="cover"
							/>
							<div className={styles["arrows"]}>
								<span onClick={handlePreviousArrow}>{"<"}</span>
								<span onClick={handleNextArrow}>{">"}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
