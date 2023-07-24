import React from 'react';

import Blank from "../components/Blank";
import PropertySpecificInfo from '../components/property/PropertySpecificInfo';
import PropertySpecificExtras from '../components/property/PropertySpecificExtras';
import Footer from '../components/footer';

export default function SingleProperty() {
    return (
        <div>
            <PropertySpecificInfo />
            <PropertySpecificExtras />
            <Blank />
            <Footer />
        </div>
    )
}
