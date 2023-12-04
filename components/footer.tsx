import React from "react";
import Container from "./container";
import FooterList from "./footerList";
import Link from "next/link";
import {MdFacebook} from "react-icons/md"
import {AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"

export default function Footer() {
  return (
    <div className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#">Phone</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Tvs</Link>
            <Link href="#">Accessories</Link>
            <Link href="#">Watches</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Shop Offers</Link>
            <Link href="#">Terms & Conditions</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-base font-bold mb-2">About us</h3>
            <p>
              The best ecommerce marketplace in Kenya. We sell quality products
              ranging from electronics, fashion and more
            </p>
            <p>&copy; {new Date().getFullYear()} Duka. All rights reserved</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </div>
  );
}
