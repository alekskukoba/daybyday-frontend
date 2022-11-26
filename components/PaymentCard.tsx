import Image from 'next/image'
import React from 'react'
import { Square2StackIcon } from '@heroicons/react/24/outline'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast from 'react-hot-toast'
import { useTranslation } from 'next-i18next'

export interface PaymentDetails {
  key: string
  value: string
}

type Props = {
  imgUrl: string
  title: string
  value: string
  details?: PaymentDetails[]
}

const PaymentCard: React.FC<Props> = ({ imgUrl, title, value, details }) => {
  const showDetails = details && details.length > 0
  const { t } = useTranslation()

  return (
    <div className="w-full rounded-2xl p-6 bg-[#eef0f3] relative">
      <div className="space-y-4">
        <div className="flex items-center gap-6">
          <div className=" basis-[88px] h-[88px] shrink-0 bg-white rounded-lg p-4">
            <div className="relative w-full h-full ">
              <Image src={imgUrl} layout="fill" alt={title} />
            </div>
          </div>
          <div>
            <p className="leading-[24px] uppercase">{title}</p>
            <p className="leading-[24px] font-bold">{value}</p>
          </div>
        </div>

        {showDetails && (
          <ul className="space-y-3">
            {details?.map((d, idx) => {
              const key = t(d.key)
              const value = t(`payment.value.${d.value}`, d.value)

              return (
                <li
                  key={idx}
                  className="flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-[#222222] font-semibold ">{key}</p>
                    <p className="text-sm text-[#686868]">{value}</p>
                  </div>
                  <CopyToClipboard
                    text={d.value}
                    onCopy={() => toast(t('message.copied', { text: key }))}
                  >
                    <button className="flex items-center justify-center flex-none w-12 h-12 bg-white rounded">
                      <Square2StackIcon className="w-6 h-6" />
                    </button>
                  </CopyToClipboard>
                </li>
              )
            })}
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