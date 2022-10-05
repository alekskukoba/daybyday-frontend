import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <section className="py-20 bg-footer-primary-bg">
        <div className="container flex items-start justify-between">
          <ul className="space-y-6">
            <li>
              <Link href="/">
                <a>Політика конфіденційності</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Використання файлів Cookie</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Умови використання</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Юридична інформація</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>FAQ</a>
              </Link>
            </li>
          </ul>

          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm text-[#686868]">Телефон:</p>
              <p className="font-bold">+38 (XXX) XXX XX XX</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-[#686868]">Пошта:</p>
              <p className="font-bold">help@daybyday.com.ua</p>
            </div>
          </div>

          <ul className="flex flex-wrap gap-y-8 w-[380px]">
            <li className=" basis-1/2">
              <Link href="/">
                <a className="flex items-center">
                  <div className="flex items-center justify-center h-10 w-10 mr-3 rounded-full bg-[#222222] text-footer-primary-bg">
                    <FaFacebookF size={24} />
                  </div>
                  Facebook
                </a>
              </Link>
            </li>
            <li className=" basis-1/2">
              <Link href="/">
                <a className="flex items-center">
                  <div className="flex items-center justify-center h-10 w-10 mr-3 rounded-full bg-[#222222] text-footer-primary-bg">
                    <FaInstagram size={24} />
                  </div>
                  Instagram
                </a>
              </Link>
            </li>
            <li className=" basis-1/2">
              <Link href="/">
                <a className="flex items-center">
                  <div className="flex items-center justify-center h-10 w-10 mr-3 rounded-full bg-[#222222] text-footer-primary-bg">
                    <FaTwitter size={24} />
                  </div>
                  Twitter
                </a>
              </Link>
            </li>
            <li className=" basis-1/2">
              <Link href="/">
                <a className="flex items-center">
                  <div className="flex items-center justify-center h-10 w-10 mr-3 rounded-full bg-[#222222] text-footer-primary-bg">
                    <FaWhatsapp size={24} />
                  </div>
                  Whatsapp
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-4 bg-footer-secondary-bg">
        <div className="container flex items-center justify-between">
          <p>©2022 DayByDay. All rights reserved</p>
          <div className="flex items-center gap-4">
            <div>Design by</div>
            <Image
              src="/design-by.svg"
              alt="Vercel Logo"
              width={90}
              height={32}
            />
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
