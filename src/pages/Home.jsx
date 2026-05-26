import { movies } from "../data/movies"; // Importa a lista de filmes falsos
import Header from "../components/Header"; // Importa o componente do topo da página
import FeaturedMovie from "../components/FeaturedMovie"; // Importa o componente do filme em destaque
import MovieRow from "../components/MovieRow"; // Importa o componente das fileiras de filmes

function Home() {
  const featuredMovie = movies.find((movie) => movie.featured === true); // Procura o filme marcado como destaque

  const categories = ["Lançamentos", "Ação", "Séries", "Documentários"]; // Lista das categorias que vão aparecer na tela

  return (
    <div> {/* Container principal da página home */}
      <Header /> {/* Mostra o menu superior */}

      <FeaturedMovie movie={featuredMovie} /> {/* Mostra o filme em destaque */}

      <main className="content"> {/* Área principal onde ficam as categorias */}
        {categories.map((category) => { // Percorre cada categoria da lista
          const filteredMovies = movies.filter( // Cria uma lista apenas com filmes da categoria atual
            (movie) => movie.category === category // Verifica se a categoria do filme é igual à categoria atual
          );

          return (
            <MovieRow
              key={category} // Identificação única para cada fileira
              title={category} // Envia o nome da categoria para a fileira
              movies={filteredMovies} // Envia os filmes filtrados para a fileira
            />
          );
        })}
      </main>
    </div>
  );
}

export default Home; // Exporta o componente Home para ser usado nas rotas