import React, { useEffect, useState } from "react";
import styles from "./PageHeader.module.scss";
import Logo from "../../../svg/logo.svg";
import Logo1 from "../../../../public/Logo.png";

import Head from "next/head";

import NavItem from "@/components/pageHeader/NavItem/NavItem";
import NavDropDown from "@/components/pageHeader/NavDropDown/NavDropDown";
import NavCart from "@/components/pageHeader/NavCart/NavCart";
import { GET_NAV_CATEGORIES_DATA } from "src/queries";
import { useQuery } from "@apollo/client";
export default function PageHeader() {
	const {
		loading: categoriesLoading,
		error: categoriesError,
		data: categoriesData,
	} = useQuery(GET_NAV_CATEGORIES_DATA);

	const renderNavItem = (
		<>
			{categoriesData?.categories?.map(category => (
				<>
					<NavItem text={category?.name} link="/" />
				</>
			))}
		</>
	);

	return (
		<>
			<Head>
				<link rel="shortcut icon" href={Logo1.src} type="image/png" />

				<title>{"SwiftX"}</title>
			</Head>
			<div className={styles["navbar"]}>
				<div className={styles["nav-items"]}>
					{categoriesLoading
						? "loading"
						: categoriesError
						? "error"
						: renderNavItem}
				</div>
				<div className={styles["nav-logo"]}>
					<Logo />
				</div>
				<div className={styles["nav-icons"]}>
					<NavDropDown />
					<NavCart />
				</div>
			</div>
		</>
	);
}
