import React from 'react'
import PaymentCard from './payment_card'

enum PaymentType {
  Card,
  Requisites,
  Swift,
  Other,
}

interface Payment {
  type: PaymentType
  name: string
  imgUrl: string
}

interface CardPayment extends Payment {
  number: string
  recipient: string
}

interface RequisitesPayment extends Payment {
  currency: string
  recipient: string
  iban: string
  edrpou: string
  recipientBank: string
}

const Card: CardPayment = {
  type: PaymentType.Card,
  name: 'Monobank',
  number: 'ХХХХ ХХХХ ХХХХ ХХХХ',
  recipient: 'Олег К.',
  imgUrl: '/payments/monobank.png',
}

const Requisites: RequisitesPayment = {
  type: PaymentType.Requisites,
  name: 'ПЕРЕКАЗИ ПО УКРАЇНІ',
  currency: 'UAH',
  recipient: 'БО МБФ «ДЕНЬ ЗА ДНЕМ»',
  iban: 'UA673052990000026004006236350',
  edrpou: '44879802',
  recipientBank: 'АТ КБ «ПРИВАТБАНК», КИЇВ, УКРАЇНА',
  imgUrl: '/payments/privatbank.png',
}

type Swift = {
  type: PaymentType
  currency: string
  beneficiary: string
  account: string
  bankOfBeneficiary: string
  correspondentAccount: string
  intermediaryBank: string
  iban: string
}

const SwiftAccounts: Swift[] = [
  {
    type: PaymentType.Swift,
    currency: 'USD',
    beneficiary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna',
    account: 'XXXXXXXXXXXXXXXX',
    bankOfBeneficiary:
      'Lorem ipsum dolor sit amet, consecteturadipiscing elit ut aliquam, purus sit amet luctus venenatis,lectus magna',
    correspondentAccount: 'XXXXXXXXXX',
    intermediaryBank:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
    iban: 'UAXXXXXXXXXXXXXXXXXXXXXXX',
  },
  {
    type: PaymentType.Swift,
    currency: 'EUR',
    beneficiary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna',
    account: 'XXXXXXXXXXXXXXXX',
    bankOfBeneficiary:
      'Lorem ipsum dolor sit amet, consecteturadipiscing elit ut aliquam, purus sit amet luctus venenatis,lectus magna',
    correspondentAccount: 'XXXXXXXXXX',
    intermediaryBank:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
    iban: 'UAXXXXXXXXXXXXXXXXXXXXXXX',
  },
  {
    type: PaymentType.Swift,
    currency: 'CHF',
    beneficiary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna',
    account: 'XXXXXXXXXXXXXXXX',
    bankOfBeneficiary:
      'Lorem ipsum dolor sit amet, consecteturadipiscing elit ut aliquam, purus sit amet luctus venenatis,lectus magna',
    correspondentAccount: 'XXXXXXXXXX',
    intermediaryBank:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
    iban: 'UAXXXXXXXXXXXXXXXXXXXXXXX',
  },
  {
    type: PaymentType.Swift,
    currency: 'PLN',
    beneficiary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna',
    account: 'XXXXXXXXXXXXXXXX',
    bankOfBeneficiary:
      'Lorem ipsum dolor sit amet, consecteturadipiscing elit ut aliquam, purus sit amet luctus venenatis,lectus magna',
    correspondentAccount: 'XXXXXXXXXX',
    intermediaryBank:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
    iban: 'UAXXXXXXXXXXXXXXXXXXXXXXX',
  },
]

interface Other extends Payment {
  value: string
}

const PayPal: Other = {
  type: PaymentType.Other,
  name: 'PAYPAL',
  value: 'daybydayukr@gmail.com',
  imgUrl: '/payments/paypal.png',
}

const Crypo: Other[] = [
  {
    type: PaymentType.Other,
    name: 'BITCOIN',
    value: 'e4v56f55ef5v43bgh...5g3',
    imgUrl: '/payments/crypto.png',
  },
  {
    type: PaymentType.Other,
    name: 'ETHEREUM',
    value: 'fdbm3m5pkojm34m...5h7',
    imgUrl: '/payments/crypto.png',
  },
]

const Tabs: React.FC = () => {
  const [openTab, setOpenTab] = React.useState(1)
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex items-center gap-20 border-b" role="tablist">
            <li>
              <a
                className="text-xl font-semibold text-[#222222] "
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                In Ukraine
              </a>
              <div
                className={
                  'w-6 h-1 mt-3 ' +
                  (openTab === 1 ? 'bg-[#F2C94C]' : 'bg-transparent')
                }
              ></div>
            </li>
            <li>
              <a
                className="text-xl font-semibold text-[#222222] "
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                SWIFT
              </a>
              <div
                className={
                  'w-6 h-1 mt-3 ' +
                  (openTab === 2 ? 'bg-[#F2C94C]' : 'bg-transparent')
                }
              ></div>
            </li>
            <li>
              <a
                className="text-xl font-semibold text-[#222222] "
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(3)
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                PayPal
              </a>
              <div
                className={
                  'w-6 h-1 mt-3 ' +
                  (openTab === 3 ? 'bg-[#F2C94C]' : 'bg-transparent')
                }
              ></div>
            </li>
            <li>
              <a
                className="text-xl font-semibold text-[#222222]"
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(4)
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Crypto
              </a>
              <div
                className={
                  'w-6 h-1 mt-3 ' +
                  (openTab === 4 ? 'bg-[#F2C94C]' : 'bg-transparent')
                }
              ></div>
            </li>
          </ul>
          <div className="pt-6">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <PaymentCard
                      imgUrl={Card.imgUrl}
                      title={Card.name}
                      value={Card.number}
                      details={[{ key: 'Одержувач', value: Card.recipient }]}
                    />
                  </div>
                  <div>
                    <PaymentCard
                      imgUrl={Requisites.imgUrl}
                      title={Requisites.name}
                      value={Requisites.currency}
                      details={[
                        { key: 'Одержувач', value: Requisites.recipient },
                        { key: 'IBAN', value: Requisites.iban },
                        {
                          key: 'ЄДРПОУ одержувача',
                          value: Requisites.edrpou,
                        },
                        {
                          key: 'Банк одержувача',
                          value: Requisites.recipientBank,
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div
                className={'space-y-6 ' + (openTab === 2 ? 'block' : 'hidden')}
                id="link2"
              >
                <p className="text-lg text-[#6D6D6D]">
                  Send money by bank transfer from abroad
                </p>
                <div className="grid grid-cols-2 gap-10">
                  {SwiftAccounts.map((s, idx) => (
                    <div key={idx}>
                      <PaymentCard
                        imgUrl={'/payments/swift.png'}
                        title={'Swift'}
                        value={s.currency}
                        details={[
                          {
                            key: 'BENEFICIARY',
                            value: s.beneficiary,
                          },
                          {
                            key: 'ACCOUNT',
                            value: s.account,
                          },
                          {
                            key: 'BANK OF BENEFICIARY',
                            value: s.bankOfBeneficiary,
                          },
                          {
                            key: 'CORRESPONDENT ACCOUNT',
                            value: s.correspondentAccount,
                          },
                          {
                            key: 'INTERMEDIARY BANK',
                            value: s.intermediaryBank,
                          },
                          {
                            key: 'IBAN',
                            value: s.iban,
                          },
                        ]}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <PaymentCard
                      imgUrl={PayPal.imgUrl}
                      title={PayPal.name}
                      value={PayPal.value}
                    />
                  </div>
                </div>
              </div>
              <div className={openTab === 4 ? 'block' : 'hidden'} id="link4">
                <div className="grid grid-cols-2 gap-10">
                  {Crypo.map((c, idx) => (
                    <div key={idx}>
                      <PaymentCard
                        imgUrl={c.imgUrl}
                        title={c.name}
                        value={c.value}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tabs
