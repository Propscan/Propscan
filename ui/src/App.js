import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/App.css";
import Home from "./pages/Home";
import Property from "./pages/Property";
import PropertyListingHome from "./pages/PropertyListingHome";
import Login from "./pages/Login";
import PropertyForm from "./pages/propertyForm";
import DashBoardHome from "./pages/DashboardHome";
import DashBoardListing from "./pages/DashboardListing";
import DashBoardCrm from "./pages/DashboardCrm";
import DashBoardCma from "./pages/DashboardCma";
import DashboardMeeting from "./pages/DashboardMeeting";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import CrmListed from "./pages/CrmListed";
import CrmEnquiryReceived from "./pages/CrmEnquiryreceived";
import CrmQualified from "./pages/CrmQualified";
import CrmCallScheduled from "./pages/CrmCallScheduled";
import CrmMeetingScheduled from "./pages/CrmMeetingScheduled";
import CrmQuotationSent from "./pages/CrmQuotationSent";
import CrmNegotiation from "./pages/CrmNegotiation";
import CrmSold from "./pages/CrmSold";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertyListingHome />} />
        <Route path="/property" element={<Property />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-property-form" element={<PropertyForm />} />
        <Route path="/properties-dashboard/home" element={<DashBoardHome />} />
        <Route
          path="/properties-dashboard/listings"
          element={<DashBoardListing />}
        />
        <Route path="/properties-dashboard/crm" element={<DashBoardCrm />} />
        <Route path="/properties-dashboard/cma" element={<DashBoardCma />} />
        <Route
          path="/properties-dashboard/meeting"
          element={<DashboardMeeting />}
        />
        <Route
          path="/properties-dashboard/analytics"
          element={<DashboardAnalytics />}
        />
        <Route
          path="/properties-dashboard/crm/listed"
          element={<CrmListed />}
        />
        <Route
          path="/properties-dashboard/crm/enquiry-received"
          element={<CrmEnquiryReceived />}
        />
        <Route
          path="/properties-dashboard/crm/qualified"
          element={<CrmQualified />}
        />
        <Route
          path="/properties-dashboard/crm/call-scheduled"
          element={<CrmCallScheduled />}
        />
        <Route
          path="/properties-dashboard/crm/meeting-scheduled"
          element={<CrmMeetingScheduled />}
        />
        <Route
          path="/properties-dashboard/crm/quotationsent"
          element={<CrmQuotationSent />}
        />
        <Route
          path="/properties-dashboard/crm/negotiation"
          element={<CrmNegotiation />}
        />
        <Route
          path="/properties-dashboard/crm/sold"
          element={<CrmSold />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
