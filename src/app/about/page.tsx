import React from 'react'
import NavBar from '../components/NavBar';
import Gitt from '../components/Gitt';
import Footer from '../components/Footer';
import WwoCards from '../components/WwoCards';
function PortfolioPage() {
  return (
    <>
    <NavBar/>

    <div className="flex flex-col items-start max-w-3xl p-6 bg-white shadow-md rounded-lg space-y-4">
      <h1 className="text-3xl font-bold text-gray-800">The Crimpbyte Difference</h1>
      <p className="text-gray-700 leading-relaxed">
        CRIMPBYTE is a leading tech company dedicated to providing innovative and high-quality Software development, UI/UX design, AI models, Mobile development, Marketing, IoT, Cloud computing, Renewable energy, Precision Agriculture, and general tech services. We strive to empower businesses by leveraging cutting-edge technology and creative solutions. At CRIMPBYTE, we are committed to delivering exceptional technology solutions that drive business success. We look forward to partnering with you and exceeding your expectations. For further inquiries, please contact us at <a href="tel:09015343134" className="text-blue-600 underline">09015343134</a>.
      </p>
    </div>


    <Gitt/>
    <Footer/>
    </>
  );
}

export default PortfolioPage