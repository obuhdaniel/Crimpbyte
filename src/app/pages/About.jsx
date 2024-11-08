import Footer from '../components/Footer';
import WwoCards from '../components/WwoCards';
import GITT from '../components/Gitt'
import React from 'react'
import Portfolio from '../components/Portfolio';
function AboutPage() {
  return (
    <>


    <div>
        <div>
            <h1>
                The Crimpbyte Difference
            </h1>
            <p>
            CRIMPBYTE is a leading tech company dedicated to providing innovative and high-quality Software development, UI/UX design, Ai models, Mobile development, Marketing, IOT, Cloud computing, Renewable energy, Precision Agriculture and  general tech services. We strive to empower businesses by leveraging cutting-edge technology and creative solutions. At CRIMPBYTE, we are committed to delivering exceptional technology solutions that drive business success. We look forward to partnering with you and exceeding your expectations. For further inquiries, please contact us at [09015343134].
            </p>
        </div>

        <WwoCards/>

        <Portfolio/>




        <GITT/>




    </div>
    
    
    <Footer/>
    </>
  )
}

export default AboutPage