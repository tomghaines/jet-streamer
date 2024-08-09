import MenuBtn from './MenuBtn'

const Menu = () => {
  const airplaneTiltIcon = '../src/assets/icons/AirplaneTilt.svg'
  const cloudSunIcon = '../src/assets/icons/CloudSun.svg'
  const graphIcon = '../src/assets/icons/Graph.svg'
  const stackIcon = '../src/assets/icons/Stack.svg'
  const magnifyingGlassIcon = '../src/assets/icons/MagnifyingGlass.svg'
  const fadersHorizontalIcon = '../src/assets/icons/FadersHorizontal.svg'

  return (
    <div className="bg-[#17171795] p-4 justify-center flex flex-col w-96 items-stretch rounded-2xl m-4 backdrop-blur-lg">
      <div className="flex justify-between mb-4">
        <div className="text-[#d4d4d4]">
          <span className="font-medium">Jet</span>
          <span className="font-thin">Streamer</span>
        </div>
        <div>
          <span className="text-white font-medium">21:57</span>
          <span className="text-[#d4d4d4] font-thin text-sm"> UTC</span>
        </div>
      </div>

      <div className="w-auto flex flex-col gap-4">
        <label htmlFor="search-inp" className="sr-only"></label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <img
              src={magnifyingGlassIcon}
              alt="Search Icon"
              className="text-gray-500"
            />
          </span>
          <input
            name="search-inp"
            id="search-inp"
            className="bg-[#00000050] w-full border border-[#FFFFFF10] focus:border-[#FFFFFF25] focus:outline-none rounded-lg p-3 pl-10 placeholder-gray-500 font-thin"
            type="text"
            placeholder="Search flights, airports, and more"
          />
        </div>
        <MenuBtn
          icon={airplaneTiltIcon}
          title="Most tracked Flights"
          isLiveSVG="i"
          isLiveTxt=""
        />
        <MenuBtn
          icon={graphIcon}
          title="Statistics"
          isLiveSVG="i"
          isLiveTxt=""
        />
        <MenuBtn icon={cloudSunIcon} title="Weather" />
        <MenuBtn icon={stackIcon} title="Filters" />
      </div>
      <div className="mt-4 w-full">
        <MenuBtn icon={fadersHorizontalIcon} title="Settings" />
      </div>
    </div>
  )
}

export default Menu
