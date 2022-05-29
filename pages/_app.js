import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden'>
   
      <div className="max-w-7xl mx-auto lg:px-8 bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
            <div className="flex items-center w-full justify-between py-5 px-4">
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0 flex items-center cursor-pointer">
                  <div className="inline-flex items-center">
                    <img src='/logo.jpeg' className='h-16 w-16 rounded-lg' />
                  </div>
                  <p className='text-4xl font-sans  mx-4'>Gullak Movr</p>
                </div>
              </div>
            </div>
          </div>

    
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
