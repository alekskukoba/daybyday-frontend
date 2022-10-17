import Image from 'next/image'
import React from 'react'

type Details = {
  key: string
  value: string
}

type Props = {
  imgUrl: string
  title: string
  value: string
  details?: Details[]
}

const PaymentCard: React.FC<Props> = ({ imgUrl, title, value, details }) => {
  const showDetails = details && details.length > 0

  return (
    <div className="w-full rounded-2xl p-6 bg-[#eef0f3] relative">
      <div className="space-y-4">
        <div className="flex items-center gap-6">
          <div className="basis-[48px] shrink-0">
            <Image src={imgUrl} width={88} height={88} alt={title} />
          </div>
          <div>
            <p className="leading-[24px] uppercase">{title}</p>
            <p className="leading-[24px] font-bold">{value}</p>
          </div>
        </div>

        {showDetails && (
          <ul className="space-y-3">
            {details?.map((d, idx) => (
              <li key={idx}>
                <p className="text-[#222222] font-semibold uppercase">
                  {d.key}
                </p>
                <p className="text-sm text-[#686868]">{d.value}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

PaymentCard.defaultProps = {
  details: [],
}

export default PaymentCard
