import React from 'react';

import LoggedInHeader from '../components/header/LoggedInHeader';
import PropertyListingFilters from '../components/filters/PropertyListingFilters';
import PropertyListing from '../components/properties/PropertyListing'

export default function PropertyListingHome() {
  return (
    <div>
        <LoggedInHeader />
        <PropertyListingFilters />
        <PropertyListing />
    </div>
  )
}
