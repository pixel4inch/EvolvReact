import './css/style.css';
import './css/custome.css';
import './css/form.css';
import { useState } from 'react';

// PLUGINS
import { Route, Routes } from "react-router-dom"

// PAGES 
import {
  Home, Profile, Initiatives, Data, InnovatorSynergies, Sustainability, IndianInfluencer, DiversityEquityInclusion, Calender, Login, Insider, MemberShip, Recognitions, DataDashboard, Volunteer, Sponsors, Media,
  PrivacyPolicy, ServiceAggrement, Partner, Contact, CalEvents, NextTech, Error, Magic, Forgetpassword, Registration, Admin
} from './pages'

// COMPONENTS
import { Header, Footer, EventcommonStrip, AdminHeader } from './components'

function App() {

  const [showNavbar, setShowNavbar] = useState(true);
  const [showFooter, setFooter] = useState(true);
  const [showAdminNavbar, setAdminNavbar] = useState(false)

  return (
    <div className="App h-100">
      <div className='d-flex flex-column h-100'>
        
        {showNavbar && <Header/>}
        {showAdminNavbar && <AdminHeader/>}

        <EventcommonStrip/>
        <div className='body-content'>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/initiatives" exact element={<Initiatives />} />
            <Route path="/data" exact element={<Data />} />
            {/*PROGARM*/}
            <Route path="/innovatorSynergies" exact element={<InnovatorSynergies />} />
            <Route path="/stainability" exact element={<Sustainability />} />
            <Route path="/indianinfluencer" exact element={<IndianInfluencer />} />
            <Route path="/diversityequityinclusion" exact element={<DiversityEquityInclusion />} />
            <Route path="/recognitions" exact element={<Recognitions />} />
            <Route path="/memberShip" exact element={<MemberShip />} />
            <Route path="/insider" exact element={<Insider />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/nexttech" exact element={<NextTech />} />
            <Route path="/magic" exact element={<Magic />} />
            <Route path='/forgetpassword' exact element={<Forgetpassword />} />
            {/*FOOTER*/}
            <Route path="/datadashboard" exact element={<DataDashboard />} />
            <Route path="/volunteer" exact element={<Volunteer />} />
            <Route path="/sponsors" exact element={<Sponsors />} />
            <Route path="/media" exact element={<Media />} />
            <Route path="/privacypolicy" exact element={<PrivacyPolicy />} />
            <Route path="/serviceaggrement" exact element={<ServiceAggrement />} />
            <Route path="/Partner" exact element={<Partner />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path='/registration' exact element={<Registration />} />
            <Route path='/admin' exact element={<Admin setShowNavbar={setShowNavbar} setAdminNavbar={setAdminNavbar}  setFooter={setFooter}/>}/>  
            {/* ERROR */}
            <Route path="*" element={<Error/>} />
            {/* INNER PAGES */}
            <Route path="/calender/calevents/:EventId" exact element={<CalEvents/>}/>
          </Routes>
        </div>
        {showFooter && <Footer/>}
      </div>
    </div>
  );
}
export default App;
