import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <section className="py-16 bg-footer-primary-bg">
        <div className="container flex flex-col items-stretch divide-y divide-[#222222] divide-opacity-20 gap-y-6 lg:flex-row lg:divide-none lg:items-start lg:justify-between">
          <div className="flex flex-col items-center space-y-4 lg:order-2 lg:items-start">
            <div className="space-y-1 text-center lg:text-left">
              <p className="text-sm text-[#686868]">Телефон:</p>
              <p className="font-bold">+38 (XXX) XXX XX XX</p>
            </div>
            <div className="space-y-1 text-center lg:text-left">
              <p className="text-sm text-[#686868]">Пошта:</p>
              <p className="font-bold">help@daybyday.com.ua</p>
            </div>
          </div>

          <ul className="flex justify-center gap-8 pt-8 lg:gap-10 lg:order-3 lg:pt-5 lg:w-80">
            <li className="lg:basis-1/2">
              <Link href="/">
                <a className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#222222] text-footer-primary-bg">
                    <FaFacebookF size={24} />
                  </div>
                  <span className="hidden lg:block">Facebook</span>
                </a>
              </Link>
            </li>
            <li className="lg:basis-1/2">
              <Link href="/">
                <a className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#222222] text-footer-primary-bg">
                    <FaInstagram size={24} />
                  </div>
                  <span className="hidden lg:block">Instagram</span>
                </a>
              </Link>
            </li>
          </ul>

          <ul className="flex flex-col items-center pt-8 space-y-6 lg:order-1 lg:pt-0 lg:items-start">
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
        </div>
      </section>
      <section className="py-4 bg-footer-secondary-bg">
        <div className="container flex items-center justify-between">
          <p className="text-xs lg:text-base">
            ©2022 DayByDay. All rights reserved
          </p>
          <div className="items-center hidden gap-4 lg:flex">
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
