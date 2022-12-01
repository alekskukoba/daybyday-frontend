import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import PaymentCard from '../components/PaymentCard'

interface InUkraine {
  imgUrl: string
  name: string
  cardNumber?: string
  recipient: string
  iban?: string
  edrpou?: string
  bankName?: string
}

interface CorrespondentBank {
  account: string
  swiftCode: string
  name: string
}

interface Swift {
  currency: string
  companyName: string
  iban: string
  bankName: string
  bankSwiftCode: string
  companyAddress?: string
  correspondentBanks: CorrespondentBank[]
}

interface Other {
  name: string
  imgUrl: string
  value: string
}

const InUkraineMethods: InUkraine[] = [
  {
    imgUrl: '/payments/privatbank.svg',
    name: 'Privatbank',
    recipient: 'CF CIF "DAY BY DAY"',
    iban: 'UA673052990000026004006236350',
    edrpou: '44879802',
    bankName: 'JSC CB "PRIVATBANK", KYIV, UKRAINE',
  },
  {
    imgUrl: '/payments/monobank.svg',
    name: 'Monobank',
    cardNumber: '5375 4114 1591 9971',
    recipient: 'Oleg K.',
  },
]

const SwiftAccounts: Swift[] = [
  {
    currency: 'USD',
    companyName: 'Charity International Foundation DAY BY DAY',
    iban: 'UA553052990000026003026240134',
    bankName: 'JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE',
    bankSwiftCode: 'PBANUA2X',
    correspondentBanks: [
      {
        account: '001-1-000080',
        swiftCode: 'CHASUS33',
        name: 'JP Morgan Chase Bank, New York, USA',
      },
      {
        account: '890-0085-754',
        swiftCode: 'IRVT US 3N',
        name: 'The Bank of New York Mellon, New York, USA',
      },
    ],
  },
  {
    currency: 'EUR',
    companyName: 'Charity International Foundation DAY BY DAY',
    iban: 'UA713052990000026007026227391',
    bankName: 'JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE',
    bankSwiftCode: 'PBANUA2X',
    correspondentBanks: [
      {
        account: '400886700401',
        swiftCode: 'COBADEFF',
        name: 'Commerzbank AG, Frankfurt am Main, Germany',
      },
      {
        account: '6231605145',
        swiftCode: 'CHASDEFX',
        name: 'J.P.MORGAN AG, FRANKFURT AM MAIN, GERMANY',
      },
    ],
  },
  {
    currency: 'CHF',
    companyName: 'Charity International Foundation DAY BY DAY',
    iban: 'UA693052990000026009026226486',
    bankName: 'JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE',
    bankSwiftCode: 'PBANUA2X',
    correspondentBanks: [
      {
        account: '10.602602.0.100',
        swiftCode: 'BPCPCHGG',
        name: 'Banque de Commerce et de Placements',
      },
    ],
  },
  {
    currency: 'PLN',
    companyName: 'Charity International Foundation DAY BY DAY',
    iban: 'UA233052990000026008016229461',
    bankName: 'JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE',
    bankSwiftCode: 'PBANUA2X',
    correspondentBanks: [
      {
        account: 'PL13124000013140533111120301',
        swiftCode: 'PKOPPLPW',
        name: 'Bank Pekao/Grupa Pekao S.A., Warsaw, Poland',
      },
    ],
  },
]

const OtherMethods: Other[] = [
  {
    name: 'PayPal',
    value: 'daybydayukr@gmail.com',
    imgUrl: '/payments/paypal.svg',
  },
  {
    name: 'Patreon',
    value: 'https://www.patreon.com/daybydayfoundation',
    imgUrl: '/payments/patreon.svg',
  },
]

const Crypo: Other[] = [
  {
    name: 'BITCOIN',
    value: 'bc1q7q9w0eu3l6k4kcawvwsv58t2y58q3flhtxegyr',
    imgUrl: '/payments/bitcoin.svg',
  },
  {
    name: 'ETHEREUM',
    value: '0xF8397A2698B255d27691d998EB3462A566Ea2736',
    imgUrl: '/payments/ethereum.svg',
  },
]

const Tabs = ['inUkraine', 'swift', 'crypto', 'other']

const RequisitesPage: NextPage = () => {
  const [openTab, setOpenTab] = useState(0)
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('page.requisites')}</title>
      </Head>

      <div className="container pb-20">
        <div className="mb-4">
          <Breadcrumbs />
        </div>

        <h1 className="mb-6 text-[28px] leading-[32px] font-montserrat font-semibold lg:text-[40px] lg:leading-[56px]">
          {t('page.requisites')}
        </h1>

        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex items-center gap-10 overflow-scroll border-b scrollbar-hide sm:overflow-auto"
              role="tablist"
            >
              {Tabs.map((tab, idx) => (
                <li key={idx}>
                  <a
                    className="text-lg whitespace-nowrap font-semibold text-[#222222]"
                    onClick={(e) => {
                      e.preventDefault()
                      setOpenTab(idx)
                    }}
                    data-toggle="tab"
                    href={`#tab-${idx}`}
                    role="tablist"
                  >
                    {t(`tabs.${tab}`)}
                  </a>
                  <div
                    className={
                      'w-6 h-1 mt-3 ' +
                      (openTab === idx ? 'bg-[#F2C94C]' : 'bg-transparent')
                    }
                  ></div>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <div className="tab-content tab-space">
                {Tabs.map((tab, idx) => (
                  <div
                    key={tab}
                    id={`tab-${idx}`}
                    className={
                      openTab === idx ? 'grid gap-4 lg:grid-cols-2' : 'hidden'
                    }
                  >
                    {tab === 'inUkraine' && (
                      <>
                        {InUkraineMethods.map((m, idx) => (
                          <div key={idx} className="overflow-hidden">
                            <PaymentCard
                              imgUrl={m.imgUrl}
                              title={m.name}
                              value={''}
                              details={[
                                ...(m.cardNumber
                                  ? [
                                      {
                                        key: 'payment.inUkraine.cardNumber',
                                        value: m.cardNumber,
                                      },
                                    ]
                                  : []),
                                {
                                  key: 'payment.inUkraine.recipient',
                                  value: m.recipient,
                                },
                                ...(m.iban
                                  ? [
                                      {
                                        key: 'payment.inUkraine.iban',
                                        value: m.iban,
                                      },
                                    ]
                                  : []),
                                ...(m.edrpou
                                  ? [
                                      {
                                        key: 'payment.inUkraine.edrpou',
                                        value: m.edrpou,
                                      },
                                    ]
                                  : []),
                                ...(m.bankName
                                  ? [
                                      {
                                        key: 'payment.inUkraine.bankName',
                                        value: m.bankName,
                                      },
                                    ]
                                  : []),
                              ]}
                            />
                          </div>
                        ))}
                      </>
                    )}

                    {tab === 'swift' && (
                      <>
                        {SwiftAccounts.map((s, idx) => (
                          <div key={idx} className="overflow-hidden">
                            <PaymentCard
                              imgUrl={'/payments/swift.svg'}
                              title={'Swift'}
                              value={s.currency}
                              details={[
                                {
                                  key: 'payment.swift.companyName',
                                  value: s.companyName,
                                },
                                {
                                  key: 'payment.swift.iban',
                                  value: s.iban,
                                },
                                {
                                  key: 'payment.swift.bankName',
                                  value: s.bankName,
                                },
                                {
                                  key: 'payment.swift.bankSwiftCode',
                                  value: s.bankSwiftCode,
                                },
                                ...(s.companyAddress
                                  ? [
                                      {
                                        key: 'payment.swift.companyAddress',
                                        value: s.companyAddress,
                                      },
                                    ]
                                  : []),
                                ...s.correspondentBanks.flatMap((b) => {
                                  return [
                                    {
                                      key: 'payment.swift.correspondentBank.account',
                                      value: b.account,
                                    },
                                    {
                                      key: 'payment.swift.correspondentBank.swiftCode',
                                      value: b.swiftCode,
                                    },
                                    {
                                      key: 'payment.swift.correspondentBank.name',
                                      value: b.name,
                                    },
                                  ]
                                }),
                              ]}
                            />
                          </div>
                        ))}
                      </>
                    )}

                    {tab === 'crypto' && (
                      <>
                        {Crypo.map((c, idx) => (
                          <div key={idx} className="overflow-hidden">
                            <PaymentCard
                              imgUrl={c.imgUrl}
                              title={c.name}
                              value={''}
                              details={[
                                {
                                  key: 'payment.crypto.walletAddress',
                                  value: c.value,
                                },
                              ]}
                            />
                          </div>
                        ))}
                      </>
                    )}

                    {tab === 'other' && (
                      <>
                        {OtherMethods.map((m, idx) => (
                          <div key={idx} className="overflow-hidden">
                            <PaymentCard
                              imgUrl={m.imgUrl}
                              title={m.name}
                              value={''}
                              details={[
                                {
                                  key: 'payment.other.account',
                                  value: m.value,
                                },
                              ]}
                            />
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}

export default RequisitesPage
