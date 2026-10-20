import Patinhas from "../assets/Patinhas.jpeg"

const Home = () => {
  return (

     <section className='flex px-16 pt-30 pb-1 flex-col-reverse items-center text-center md:flex-row md:text-left gap-10 max-w-9xl mx-auto' id='hero-section'>
                <div className='flex flex-col gap-2 items-center md:items-start'>
                    <h1 className='text-black dark:text-(--primary-color-dark)'>Bem Vindo à <span className='text-blue-500'>PetCode!</span></h1>
                    <p className='text-gray-500'>A melhor loja de artigos para o seu pet.</p>
              
                </div>

                <div>
                    <img src={Patinhas}></img>
                </div>
            </section>

    
  )
}

export default Home
