import React from 'react';

import Blank from "../components/Blank";
import PropertyInfo from '../components/propertyInfo';
import PropertyExtras from '../components/propertyExtras';

export default function Property() {
    return (
        <div>
            <PropertyInfo />
            <PropertyExtras />
            <Blank />
        </div>
    )
}
