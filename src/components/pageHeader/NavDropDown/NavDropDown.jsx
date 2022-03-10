import React from "react";
import styles from "./NavDropDown.module.scss";
import { useState } from "react";
import DropDownArrow from "../../../../src/svg/dropDownArrow.svg";
import Dollar from "../../../../src/svg/dollar.svg";
import DropDownItem from "../DropDownItem/DropDownItem";
import { GET_NAV_CURRENCIES_DATA } from "src/queries";
import { useQuery } from "@apollo/client";

export default function NavDropDown({}) {
	// const [activeItem,setActiveItem] =  useState()
	const [open, setOpen] = useState(false);

	const handleDropDownClick = () => {
		setOpen(!open);
	};

	const {
		loading: currenciesLoading,
		error: currenciesError,
		data: currenciesData,
	} = useQuery(GET_NAV_CURRENCIES_DATA);

	const renderNavItem = (
		<>
			{currenciesData?.currencies?.map(currency => (
				<DropDownItem text={currency?.label} icon={currency?.symbol} />
			))}
		</>
	);

	return (
		<div className={styles["dropdown"]}>
			<div className={styles["dropdown-icons"]}>
				<Dollar />
				<div
					className={styles["dropdown-arrow"]}
					style={{ transform: !open ? "rotate(180deg)" : "" }}
					onClick={handleDropDownClick}
				>
					<DropDownArrow />
				</div>
			</div>

			{open && (
				<div className={styles["dropdown-content"]}>
					{currenciesLoading
						? "loading"
						: currenciesError
						? "error"
						: renderNavItem}
				</div>
			)}
		</div>
	);
}
