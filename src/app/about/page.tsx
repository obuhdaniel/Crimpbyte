import React from 'react'
import NavBar from '../components/NavBar';
import Gitt from '../components/Gitt';
import Footer from '../components/Footer';
import WwoCards from '../components/WwoCards';
import Wwo2 from '../components/Wwo2';
import Portfolio from '../components/Portfolio';
function PortfolioPage() {
  return (
    <>
    <NavBar/>

    <div className="flex flex-col items-start max-w-4xl p-6 bg-white  rounded-lg space-y-4">
      <h1 className="text-3xl font-bold text-gray-800">The Crimpbyte Difference</h1>
      <p className="text-gray-700 leading-relaxed">
        CRIMPBYTE is a leading tech company dedicated to providing innovative and high-quality Software development, UI/UX design, AI models, Mobile development, Marketing, IoT, Cloud computing, Renewable energy, Precision Agriculture, and general tech services. We strive to empower businesses by leveraging cutting-edge technology and creative solutions. At CRIMPBYTE, we are committed to delivering exceptional technology solutions that drive business success. We look forward to partnering with you and exceeding your expectations. For further inquiries, please contact us at <a href="tel:09015343134" className="text-blue-600 underline">09015343134</a>.
      </p>
    </div>

    <Wwo2/>
    <Portfolio/>
    <Gitt/>
    <Footer/>
    </>
  );
}

export default PortfolioPage