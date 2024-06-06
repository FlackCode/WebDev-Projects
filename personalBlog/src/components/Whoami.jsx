import Navbar from "./Navbar"

const Whoami = () => {
  

  return (
    <div className="bg-black text-text h-screen w-full flex flex-col items-center p-4 ">
      <div className="w-2/5">
        <Navbar navtext={'whoami'}/>
        <div className="flex flex-col">
            <div className="py-8">
                <div className="flex flex-row items-center gap-4">
                    <img src="/nerd.jpg" className="w-20 h-20 rounded-xl"/>
                    <h1 className="font-bold text-5xl">Hello, my name is <span className="bg-highlight px-4 drop-shadow-glow">Flack</span>.</h1>
                </div>
            </div>
            <div className="py-4">
                <p className="font-medium tracking-wider mb-4">I'm a <span className="text-highlight drop-shadow-glow">fullstack web-developer</span>!
                I love learning new things related to computers, technologies and programming languages!
                Besides that, I enjoy working out, playing guitar and listening to music. 
                Also, I really like coding in <span className="text-yellow-400">Javascript</span>, <span className="text-orange-400">Python</span> and <span className="text-sky-400">C++</span>.
                </p>
                <p className="font-medium tracking-wider">Here's a list of all my socials where you can find me:</p>
            </div>
            <div className="py-4 flex flex-col gap-4 tracking-wider font-semibold">
              <a className="text-sky-700 underline underline-offset-4">> Discord: flackkkk</a>
              <a className="text-blue-400 underline underline-offset-4">> Email: fl4ckc0de@gmail.com</a>
              <a href="https://www.instagram.com/flackcodes/" className="text-purple-400 underline underline-offset-4 w-32">> Instagram</a>
              <a href="https://x.com/flackjsx" className="underline underline-offset-4 w-32">> Twitter / X</a>
              <a href="https://www.youtube.com/channel/UCV5DS_mBLPdfjpyrTFWYVBg" className="text-red-600 underline underline-offset-4 w-32">> Youtube</a>
              <a href="https://github.com/FlackCode" className="underline underline-offset-4 w-32">> Github</a>
              <a href="https://www.last.fm/user/Flack1_" className="text-red-500 underline underline-offset-4 w-32">> Last.fm</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Whoami