import React, { useEffect, useState } from "react";
import styles from "./GalleryImages.module.scss";
import Image from "next/image";
import product from "@/images/product.jpeg";
export default function GalleryImages() {
	const [mainImage, setMainImage] = useState();
	return (
		<>
			<div className={styles["image-gallery"]}>
				<div className={styles["all-images"]}>
					<div className={styles["gallery-image"]}>
						<Image
							src={product}
							layout="fill"
							objectFit="cover"
							alt="gallery-image"
						/>
					</div>
					<div className={styles["gallery-image"]}>
						<Image
							src={product}
							layout="fill"
							objectFit="cover"
							alt="gallery-image"
						/>
					</div>
					<div className={styles["gallery-image"]}>
						<Image
							src={product}
							layout="fill"
							objectFit="cover"
							alt="gallery-image"
						/>
					</div>
				</div>
				<div className={styles["selected-image"]}>
					<Image
						src={product}
						layout="fill"
						objectFit="cover"
						alt="selected-image"
					/>
				</div>
			</div>
		</>
	);
}
