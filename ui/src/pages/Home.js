import React from 'react';

import Blank from "../components/Blank";
import Header from '../components/header';
import Metrics from '../components/metrics/Metrics';
import Properties from "../components/properties/Properties";
import Info from "../components/info/info";
import Features from "../components/features/features";
import Gallery from '../components/gallery/gallery';
import Clients from '../components/clients/clients';
import Experts from '../components/experts/experts';

import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <div>
        <Header />
        <Blank />
        <Blank />
        <Metrics />
        <Blank />
        <Properties />
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
