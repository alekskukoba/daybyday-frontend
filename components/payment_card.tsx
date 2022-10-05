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
    <div className="w-full rounded-2xl p-6 bg-[#eef0f3] space-y-4">
      <div className="flex items-center gap-6">
        <div className="basis-[88px] shrink-0">
          <Image src={imgUrl} width={88} height={88} alt={title} />
        </div>
        <div>
          <p className="leading-[32px] uppercase">{title}</p>
          <p className="text-[22px] leading-[32px] font-bold">{value}</p>
        </div>
      </div>
      {showDetails && (
        <ul className="space-y-3">
          {details?.map((d, idx) => (
            <li key={idx}>
              <p className="text-[#222222] font-semibold uppercase">{d.key}</p>
              <p className="text-sm text-[#686868]">{d.value}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

PaymentCard.defaultProps = {
  details: [],
}

export default PaymentCard
