import type { NextPage } from "next";
import Header from "../components/index/header/Header";
import { Dispatch, SetStateAction, useState } from "react";

import Hero from "../components/index/main/hero/Hero";
import Introduction from "../components/index/main/presentation/Introduction";

import AsideResponsive from "../components/index/header/AsideResponsiveMenu";
import Services from "../components/index/main/services/Services";

export interface MenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <main className="">
      <Header open={open} setOpen={setOpen} />
      <AsideResponsive open={open} setOpen={setOpen} />
      <Hero />
      <Introduction />
      <Services />
    </main>
  );
};

export default Home;
