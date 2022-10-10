import React from 'react'
import Image from 'next/image'
import Breadcrumbs from '../../../components/breadcrumbs'
import Layout from '../../../components/layout'
import PaymentCard from '../../../components/payment_card'

const EventPage: React.FC = () => {
  return (
    <Layout title="Mission">
      <div className="container">
        <section className="mb-6">
          <Breadcrumbs />
        </section>

        <section className="w-full h-[480] mb-6">
          <Image
            src={'/military-details.png'}
            alt={'Допомога'}
            width={1200}
            height={480}
            layout="responsive"
          />
        </section>

        <section className="mb-10 space-y-2">
          <h1 className="font-semibold text-[#222222] text-[40px] leading-[56px]">
            Авто для ЗСУ (Nissan X-Trail)
          </h1>
          <p className="text-[#929292]">Опубліковано: 24.04.22</p>
        </section>

        <section className="mb-10 space-y-6 text-lg leading-8">
          <p>Друзі!</p>
          <p>
            Ми продовжуємо підтримувати наших воїнів-спец призначенців із ЗСУ.
            На жаль вони віддають свої життя, за для того, щоб зберегти життя
            нам-українцям. Їм також вкрай необхідна наша допомога.
          </p>
          <p>
            Ми на постійній основі допомагаємо бійцям автівками, генераторами,
            їжею, цигарками та ін. Як всім вам відомо, автівки на передку -
            росхідний матеріал, але вкрай необхідний для роботи.
          </p>
          <p>
            Ми знайшли ще одну автівку в Німеччині, зробили передоплату,
            подивилися її і готові рушати за нею. З дорогою і розхідниками
            потрібно 162 тис грн.
          </p>
          <p>
            Долучайтеся і давайте разом швиденько наповнимо банку! Кожні 50,
            100+ грн важливі, поїхали!
          </p>
        </section>

        <section className="grid grid-cols-2 gap-10 mb-20">
          <div>
            <PaymentCard
              imgUrl={'/monobanka.png'}
              title={'Банка Monobank'}
              value={'https://send.monoba...M8eL'}
            />
          </div>
          <div>
            <PaymentCard
              imgUrl={'/monocard.png'}
              title={'Карта Monobank'}
              value={'5375 4112 0232 0862'}
            />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default EventPage
