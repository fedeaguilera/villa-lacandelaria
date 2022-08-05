import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/index/header/Header";
import { Dispatch, SetStateAction, useState } from "react";
import { ToastContainer } from "react-toastify";
import Hero from "../components/index/main/hero/Hero";
import Introduction from "../components/index/main/presentation/Introduction";
import "react-toastify/dist/ReactToastify.css";
import AsideResponsive from "../components/index/header/AsideResponsiveMenu";
import Services from "../components/index/main/services/Services";
import ContactForm from "../components/index/main/ContactForm/ContactForm";
import Loading from "../components/index/main/loading/Loading";
import Around from "../components/index/main/around/Around";

import MapSection from "../components/index/main/Map/MapSection";

export interface MenuProps {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const Home: NextPage = () => {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	return (
		<>
			<Head>
				<title>Villa La Candelaria - Sierra de Los Padres</title>
			</Head>
			<main className="">
				<ToastContainer />
				<Header open={open} setOpen={setOpen} />
				<AsideResponsive open={open} setOpen={setOpen} />
				<Hero />
				<Introduction />
				<Services />
				<Around />
				<ContactForm loading={loading} setLoading={setLoading} />
				<MapSection />
				{loading ? <Loading /> : null}
			</main>
		</>
	);
};

export default Home;
