import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const Footer = () => {
  const year = new Date().getFullYear()
  const { t } = useTranslation()
  const router = useRouter()
  const phoneNumber = '+380 (93) 197 03 77'

  return (
    <footer>
      <section className="py-12 lg:py-16 bg-dbd-footer-primary-bg">
        {router.pathname === '/404' ? (
          <div className="container text-center h-[200px]">
            <p className="font-montserrat font-semibold text-[24px] leading-[28px] lg:text-[32px] lg:leading-[40px] mb-2">
              {t('section.404.title')}
            </p>
            <p>{t('section.404.body')}</p>
          </div>
        ) : (
          <div className="container flex flex-col items-stretch divide-y divide-dbd-dark-grey divide-opacity-20 gap-y-6 lg:flex-row lg:divide-none lg:items-start lg:justify-between">
            <ul className="flex flex-col items-center space-y-6 lg:items-start">
              <li>
                <a href="/articles-of-association.pdf" target={'_blank'}>
                  {t('footer.legalInformation')}
                </a>
              </li>
            </ul>

            <div className="flex flex-col items-center pt-8 space-y-4 lg:pt-0 lg:items-start">
              <div className="space-y-1 text-center lg:text-left">
                <p className="text-sm text-dbd-mid-grey">
                  {t('footer.phone')}:
                </p>
                <Link href={`tel:${phoneNumber}`}>
                  <a className="font-bold font-montserrat">{phoneNumber}</a>
                </Link>
              </div>
              <div className="space-y-1 text-center lg:text-left">
                <p className="text-sm text-dbd-mid-grey">
                  {t('footer.email')}:
                </p>
                <Link href="mailto:help@daybyday.com.ua">
                  <a className="font-bold font-montserrat">
                    help@daybyday.com.ua
                  </a>
                </Link>
              </div>
            </div>

            <ul className="flex justify-center gap-8 pt-8 lg:gap-10 lg:pt-5 lg:w-80">
              <li className="lg:basis-1/2">
                <Link href="https://www.facebook.com/daybydayfoundation/">
                  <a className="flex items-center gap-3" target="_blank">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dbd-dark-grey text-dbd-footer-primary-bg">
                      <FaFacebookF size={24} />
                    </div>
                    <span className="hidden lg:block">Facebook</span>
                  </a>
                </Link>
              </li>
              <li className="lg:basis-1/2">
                <Link href="https://www.instagram.com/day_by_day_fund/">
                  <a className="flex items-center gap-3" target="_blank">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dbd-dark-grey text-dbd-footer-primary-bg">
                      <FaInstagram size={24} />
                    </div>
                    <span className="hidden lg:block">Instagram</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </section>
      <section className="py-4 text-xs bg-footer-secondary-bg font-montserrat lg:text-base">
        <div className="container flex items-center justify-between">
          <p>
            ©{year} DAYBYDAY. {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">Design by</div>
            <Image
              loader={() => '/design-by.svg'}
              src="/design-by.svg"
              alt="Design by Anton Tymoshenko"
              width={90}
              height={32}
              unoptimized
              priority
            />
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
