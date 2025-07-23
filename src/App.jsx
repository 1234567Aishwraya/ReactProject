import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/navbar'
import Home from './navbar/home'
import Contact from './navbar/contact'
import About from './navbar/about'
import Login from './navbar/login';
import Register from './navbar/register';
import Footer from './footer_section/footer.jsx';
import Delivery from './footer_section/delivary.jsx';
import CancellationRefund from './footer_section/refund.jsx';
import PrivacyPolicy from './footer_section/privacy.jsx';
import TermsConditions from './footer_section/conditions.jsx';
import WhoWeAre from './footer_section/whoweare.jsx';
import OurMission from './footer_section/ourmission.jsx';
import CustomerReviews from './footer_section/customer.jsx';
import TravelAssistance from './footer_section/travel.jsx';
import ExclusiveDeals from './footer_section/exclusive.jsx';
import HotelReservations from './footer_section/reservations.jsx';
import { Provider } from "react-redux";
import Store from './searchbar/store';
import HotelCards from './hotels/HotelCards.jsx';
import BookingForm from './hotels/BookingForm.jsx';
import HotelDetails from './hotels/HotelDetails.jsx';
import Bookingcard from './cards/Bookingcard.jsx';



function App() {
 

  return (
    <>
   
    <Router>
    <Provider store={Store}>
      <Navbar/>
     
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/delivary' element={<Delivery/>}/>
    <Route path='/refund' element={<CancellationRefund/>}/>
    <Route path='/privacy' element={<PrivacyPolicy/>}/>
    <Route path='/conditions' element={<TermsConditions/>}/>
    <Route path='/whoweare' element={<WhoWeAre/>}/>
    <Route path='/ourmission' element={<OurMission/>}/>
    <Route path='/customer' element={<CustomerReviews/>}/>
    <Route path='/travel' element={<TravelAssistance/>}/>
    <Route path='/exclusive' element={<ExclusiveDeals/>}/>
    <Route path='/reservations' element={<HotelReservations/>}/>
    <Route path="/hotels" element={<HotelCards />} />
    <Route path="/hotel-details" element={<HotelDetails />} />
   <Route path="/book" element={<BookingForm />} />
   <Route path="/bookcard" element={<Bookingcard />} />
      </Routes>
      </Provider>
    
      <Footer/>
    </Router>
 
    </>
  )
}

export default App
