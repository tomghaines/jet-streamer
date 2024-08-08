import React from 'react'

interface Props {
  icon: React.ReactNode
  title: string
  isLiveSVG?: React.ReactNode
  isLiveTxt?: string
}

const MenuBtn = ({ icon, title, isLiveSVG, isLiveTxt }: Props) => {
  return (
    <div className="gap-3 flex p-3 rounded-lg bg-black-pr">
      <div>{icon}</div>
      <span className="text-primary">{title}</span>
      <div className="flex">
        <div>{isLiveSVG}</div>
        <span className="text-primary">{isLiveTxt}</span>
      </div>
    </div>
  )
}

export default MenuBtn
