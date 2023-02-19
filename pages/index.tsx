import Head from "next/head";
import NavBar from "components/NavBar";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "../store";
import { Provider } from "react-redux";

export default function Home() {
	return (
		<>
			<Provider store={store}>
				<Head>
					<title>Home</title>
					<meta name="description" content="Generated by create next app" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link href="/styles/tailwind.css" rel="stylesheet"></link>
				</Head>
				<NavBar />
				<h1 className="text-3xl font-bold underline">Hello world!</h1>
				<main className="">
					<ul>
						<li>use redux: store data in a central place</li>
						<li>reactquery: optimizes quieries kinda like memoization</li>
						<li>tailwindcss or materialui. probably tailwindcss</li>
						<li>nextjs</li>
						<li>nivo for charts</li>
						<li>react-testing-library for integration testing</li>
						<li>
							better because it is closer to user experience. cypress for end to
							end testing e2e
						</li>
						<li>Sentry for error help</li>
						<li>react icons</li>
					</ul>
					<AboutMe />
					<Projects />
				</main>
			</Provider>
		</>
	);
}
