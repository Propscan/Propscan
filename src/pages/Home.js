import React from 'react';

import Blank from "../components/Blank";
import Header from '../components/header';
import Metrics from '../components/home/metrics/';
import HomeProperties from "../components/property/HomeProperties";
import Info from "../components/home/info";
import Features from "../components/home/features";
import Gallery from '../components/home/gallery';
import Clients from '../components/home/clients';
import Experts from '../components/home/experts';
import Footer from '../components/footer';


export default function Home() {
  return (
    <div>
        <Header />
        <Blank />
        <Blank />
        <Metrics />
        <Blank />
        <HomeProperties />
        <Blank />
        <Info />
        <Blank />
        <Features />
        <Blank />
        <Experts />
        <Blank />
        <Gallery />
        <Clients />
        <Blank />
        <Footer />
    </div>
  )
}
