import Caminha from "../assets/Caminha.jpg"
import Pote from "../assets/Pote.jpg"
import Osso from "../assets/Osso.jpeg"
import Bolinha from "../assets/Bolinha.jpeg"
import Racao from "../assets/Racao.jpg"

const Produtos = () => {
  return (
    <>
       <section
        className="px-4 py-16 md:px-10 max-w-6xl mx-auto w-full text-center flex flex-col items-center gap-4"
        id="team"
      >
        <h2 className="text-3xl md:text-4xl font-bold dark:text-(--primary-color-dark)">
          Conheça os nossos <span className="text-blue-500">PetProdutos</span>
        </h2>
        <p className="mt-3 text-base md:text-lg text-(--secondary-color) max-w-xl mx-auto dark:text-(--secondary-color-dark)">
          Os melhores produtos para o seu pequeno companheiro.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-(--card-border-color1) bg-(--card-color1) p-6 flex flex-col justify-between items-center text-center gap-1 dark:bg-(--card-color1-dark) dark:border-(--card-border-color1-dark)">
            <h3 className="font-bold dark:text-(--primary-color-dark)">Caminha confort blue</h3>  
            <img src={Caminha}></img>               
            <span className="text-sm text-(--primary-color) font-medium">
            R$260,00
            </span>
          </div>
          <div className="rounded-2xl border border-(--card-border-color1) bg-(--card-color1) p-6 flex flex-col items-center text-center gap-1 dark:bg-(--card-color1-dark) dark:border-(--card-border-color1-dark)">
            <h3 className="font-bold dark:text-(--primary-color-dark)">Pote ração</h3>
            <img src={Pote}></img>
            <span className="text-sm text-(--primary-color) font-medium">
              R$24,90
            </span>
          </div>
          <div className="rounded-2xl border border-(--card-border-color1) bg-(--card-color1) p-6 flex flex-col items-center text-center gap-1 dark:bg-(--card-color1-dark) dark:border-(--card-border-color1-dark)">
            <h3 className="font-bold dark:text-(--primary-color-dark)">Brinquedo blue bone </h3>
            <img src={Osso}></img>
            <span className="text-sm text-(--primary-color) font-medium">
              R$60,00
            </span>
          </div>
          <div className="rounded-2xl border border-(--card-border-color1) bg-(--card-color1) p-6 flex flex-col items-center text-center gap-1 dark:bg-(--card-color1-dark) dark:border-(--card-border-color1-dark)">
            <h3 className="font-bold dark:text-(--primary-color-dark)">Bolinha cravo</h3>
            <img src={Bolinha}></img>
            <span className="text-sm text-(--primary-color) font-medium">
              R$35,00
            </span>
          </div>
          <div className="rounded-2xl border border-(--card-border-color1) bg-(--card-color1) p-6 flex flex-col items-center text-center gap-1 dark:bg-(--card-color1-dark) dark:border-(--card-border-color1-dark)">
            <h3 className="font-bold dark:text-(--primary-color-dark)">Ração Premier 7,5 kg</h3>
            <img src={Racao}></img>
            <span className="text-sm text-(--primary-color) font-medium">
              R$186,90
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Produtos
