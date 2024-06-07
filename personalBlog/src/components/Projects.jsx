import Navbar from "./Navbar"

const Projects = () => {
  return (
    <div className="bg-background text-text h-screen w-full flex flex-col items-center p-4 ">
      <div className="xl:w-2/5 xsm:w-full">
        <Navbar navtext={'projects'}/>
        <div className="flex flex-col">
          <div className="py-8">
            <div className="flex flex-row items-center gap-4">
                <img src="/nerd.jpg" className="w-20 h-20 rounded-xl"/>
                <h1 className="font-bold md:text-5xl xsm:text-3xl xsm:leading-10 xl:leading-relaxed">My <span className="bg-highlight px-4 drop-shadow-glow">Projects</span>.</h1>
            </div>
          </div>
          <div className="py-4">
            <p className="font-medium tracking-wider mb-4 xsm:textbase md:text-lg xl:text-xl">Welcome to my project page, here I will display my most recent projects.</p>
          </div>
          <div className="py-4 flex flex-col">
            <div>
              <div className="flex flex-row justify-between py-2 items-center">
                <h1 className="tracking-wider xsm:text-3xl font-bold text-highlight underline underline-offset-4">fastType.net</h1>
                <a href="https://fast-type-net.vercel.app/" className="tracking-wider xsm:text-3xl font-semibold underline underline-offset-4 transition-all duration-300 hover:text-highlight hover:drop-shadow-glow">Visit site</a>
              </div>
              <hr />
              <p className="py-2 font-medium tracking-wider">
              Typemonkey style website for training typing speed and find your WPM. Also has a realtime updating leaderboard made with Firebase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects