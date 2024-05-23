
import { useState } from 'react'


function App() {

  const [color, setColor] = useState("pink")

  return (

    <div className="w-full h-screen duration-200"

      style={{ backgroundColor: color }}>\
      <div className=' py-48 px-96 text-center text-5xl font-sans italic text-white'>
        <h1>React js Background Changer</h1>

      </div>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2 mt-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2 mt-2 ml-2'>
          <button onClick={() => setColor("#707af0")}
            type="button" class="text-white bg-gradient-to-r from-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("#af164a")}
            type="button" class="text-white bg-gradient-to-r from-red-500  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" style={{ backgroundColor: "red" }}>red</button>
          <button onClick={() => setColor("#126514")}
            type="button" class="text-white bg-gradient-to-r from-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("pink")}
            type="button" class="text-white bg-gradient-to-r from-red-500  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" style={{ backgroundColor: "pink" }} >Refresh</button>


        </div>
      </div>

    </div>
  )
}

export default App
