import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="con">
        <div className='f1 box'>
        <div>
          <h2 className="footertitle">
            <span className="">J</span>Royals
          </h2>
          <p className="text-gray-400 mt-4 description">
            We are a team of designers and developers that create high-quality
            WordPress, Magento, Prestashop, Opencart themes.
          </p>
          <h3 className="">Payment:</h3>
          {/* <div className="flex gap-2 mt-2">
            <img src="/visa.png" alt="Visa" className="w-12" />
            <img src="/mastercard.png" alt="MasterCard" className="w-12" />
            <img src="/paypal.png" alt="PayPal" className="w-12" />
            <img src="/skrill.png" alt="Skrill" className="w-12" />
            <img src="/maestro.png" alt="Maestro" className="w-12" />
            <img src="/visa-electron.png" alt="Visa Electron" className="w-12" />
          </div> */}
        </div>
        </div>
        <div className='f2 box'>
        <h3 className="text-lg font-semibold">Useful Links</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Men</li>
            <li>Women</li>
            <li>Kid</li>
            <li>Shoes</li>
            <li>Tops</li>
          </ul>
        </div>
        <div className='f3 box'>
        <h3 className="text-lg font-semibold">Information</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Cart</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Wishlist</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='f4 box'>
        <h3 className="text-lg font-semibold">Customer Service</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Testimonials</li>
            <li>Contact</li>
            <li>Location & Working Hours</li>
            <li>Our Guarantee</li>
            <li>Track Your Order</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className='copyright'>
          <h6>© Copyright 2025 Jaga - All Rights Reserved - Powered by JR Theme.</h6>
          <h6>Frequently QuestionsPrivacy Polic</h6>
      </div>
    </div>
  )
}

export default Footer
