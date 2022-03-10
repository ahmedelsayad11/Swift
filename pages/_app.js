import TopBarProgress from "react-topbar-progress-indicator";
import { useState } from "react";
import Router from "next/router";
import Layout from "../src/components/Layout/Layout";
import client from "@/api/client";
import { ApolloProvider, gql } from "@apollo/client";
// import { AppWrapper } from "src/context/AppContext";
import { AppWrapper } from "../src/context/AppContext";

// import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	const [progress, setProgress] = useState(false);
	const { currencies } = pageProps;
	TopBarProgress.config({
		barColors: {
			0: "#5ece7b",
			"1.0": "#fff",
		},
		shadowBlur: 5,
		barThickness: 7,
	});

	Router.events.on("routeChangeStart", () => {
		setProgress(true);
	});

	Router.events.on("routeChangeComplete", () => {
		setProgress(false);
	});

	return (
		<ApolloProvider client={client}>
			{progress && <TopBarProgress />}
			<AppWrapper>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AppWrapper>
		</ApolloProvider>
	);
}

export default MyApp;
