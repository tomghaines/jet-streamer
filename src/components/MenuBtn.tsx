import React from 'react'

interface Props {
  icon: React.ReactNode | string
  title: string
  isLiveSVG?: string
  isLiveTxt?: string
}

const MenuBtn = ({ icon, title, isLiveSVG, isLiveTxt }: Props) => {
  return (
    <div className="gap-3 flex p-3 rounded-lg bg-[#151515] items-center">
      <div>
        {typeof icon === 'string' ? (
          <img src={icon} alt={`${title} Icon`} />
        ) : (
          icon
        )}
      </div>
      <span className="text-white align-middle">{title}</span>
      {isLiveSVG && isLiveTxt && (
        <div className="flex">
          <div>
            <img src={isLiveSVG} alt="Live Indicator" />
          </div>
          <span className="text-white">{isLiveTxt}</span>
        </div>
      )}
    </div>
  )
}

export default MenuBtn
