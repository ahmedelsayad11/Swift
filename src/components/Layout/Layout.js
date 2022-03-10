import PageHeader from "../shared/PageHeader/PageHeader";

export default function Layout({ children }) {
	return (
		<>
			<PageHeader />
			<main>{children}</main>
		</>
	);
}
