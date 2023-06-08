import classNames from 'classnames'
import React from 'react'

interface Properties extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  containerClassName?: string
  placeholder?: string
  values: string[] | Array<{ value: string; label: string }>
}

const Select: React.FC<Properties> = ({
  className,
  name,
  label,
  containerClassName,
  placeholder,
  values,
  required = false,
  ...rest
}) => {
  return (
    <div
      className={classNames('flex flex-col gap-0.5 w-full', containerClassName)}
    >
      <label className="select-label text-sm" htmlFor={name}>
        {label}
        {required && '*'}
      </label>
      <div className="relative">
        <select
          name={name}
          required={required}
          className={classNames('appearance-none w-full h-12 px-5 pb-px rounded-lg text-white placeholder:text-white bg-gray-dark border border-gray-dark !outline-0 focus:outline-none focus-visible:!outline-none focus:border transition-colors focus:!border-gray-light', className)}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {values.map((option) => {
            if (typeof option === 'string') {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              )
            }
            return (
              <option
                key={option.value}
                value={option.value}
                className="capitalize"
              >
                {option.label}
              </option>
            )
          })}
        </select>
        <svg
          width="13"
          height="8"
          viewBox="0 0 13 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-10 right-4 top-1/2 -translate-y-1/2"
        >
          <path d="M6.41016 7.19531C6.65625 7.44141 7.06641 7.44141 7.3125 7.19531L12.6445 1.89062C12.8906 1.61719 12.8906 1.20703 12.6445 0.960938L12.0156 0.332031C11.7695 0.0859375 11.3594 0.0859375 11.0859 0.332031L6.875 4.54297L2.63672 0.332031C2.36328 0.0859375 1.95312 0.0859375 1.70703 0.332031L1.07812 0.960938C0.832031 1.20703 0.832031 1.61719 1.07812 1.89062L6.41016 7.19531Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  )
}

export default Select
