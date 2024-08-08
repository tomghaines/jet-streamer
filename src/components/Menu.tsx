import MenuBtn from './MenuBtn'

const Menu = () => {
  return (
    <div className="bg-[#17171778] p-4 justify-center flex flex-col w-96 items-stretch rounded-2xl">
      <div className="flex justify-between mt-2 mb-5">
        <div>
          <span className="text-[#A8A8A8] font-thin">RADAR25</span>
        </div>
        <div>
          <span className="text-[#A8A8A8] font-medium">21:57</span>
          <span className="text-[#A8A8A8] font-thin text-sm"> UTC</span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        <label htmlFor="search-inp"></label>
        <input
          name="search-inp"
          id="search-inp"
          className="border border-[#FFFFFF10] focus:border-[#FFFFFF25] focus:outline-none rounded-lg p-3 bg-black-pr"
          type="text"
          placeholder="Search flights"
        />
        <MenuBtn
          icon="i"
          title="Most tracked Flights"
          isLiveSVG="i"
          isLiveTxt="LIVE"
        />
        <MenuBtn icon="i" title="Statistics" isLiveSVG="i" isLiveTxt="LIVE" />
        <MenuBtn icon="i" title="Weather" />
        <MenuBtn icon="i" title="Filters" />
      </div>
      <div className="w-full">
        <MenuBtn icon="i" title="Settings" />
      </div>
    </div>
  )
}

export default Menu
