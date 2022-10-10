import React from 'react'

interface Props {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

const Checkbox: React.FC<Props> = ({ label, checked, onChange }) => {
  const defaultChecked = checked || false

  return (
    <div>
      <label className="flex items-center gap-3">
        <input
          className="hidden peer"
          type="checkbox"
          checked={defaultChecked}
          onChange={(event) => onChange(event.target.checked)}
        />
        <div className="w-5 h-5 rounded-sm border border-[#222222] border-opacity-20 flex items-center justify-center before:w-[10px] before:h-[10px] before:rounded-sm before:bg-[#222222] before:hidden peer-checked:before:block"></div>
        <span className="leading-5">{label}</span>
      </label>
    </div>
  )
}

export default Checkbox
