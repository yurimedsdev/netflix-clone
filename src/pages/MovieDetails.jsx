import { useParams, useNavigate } from "react-router-dom"; // Importa ferramentas para pegar dados da URL e navegar entre páginas
import { movies } from "../data/movies"; // Importa a lista de filmes falsos
import Header from "../components/Header"; // Importa o componente do cabeçalho

function MovieDetails() {
  const { id } = useParams(); // Pega o id do filme que veio pela URL
  const navigate = useNavigate(); // Cria a função navigate para redirecionar o usuário

  const movie = movies.find((item) => item.id === Number(id)); // Procura na lista o filme que tem o mesmo id da URL

  if (!movie) { // Verifica se o filme não foi encontrado
    return (
      <div> {/* Container principal da página */}
        <Header /> {/* Mostra o cabeçalho */}

        <div className="details-page"> {/* Área da página de detalhes */}
          <h2>Filme não encontrado</h2> {/* Mensagem de erro caso o filme não exista */}
          <button onClick={() => navigate("/home")}>Voltar</button> {/* Botão para voltar para a home */}
        </div>
      </div>
    );
  }

  return (
    <div> {/* Container principal da página */}
      <Header /> {/* Mostra o cabeçalho */}

      <section
        className="details-page" // Classe CSS da página de detalhes
        style={{
          backgroundImage: `linear-gradient(to right, #111 40%, transparent), url(${movie.bannerImage})` // Define a imagem de fundo com degradê escuro
        }}
      >
        <div className="details-content"> {/* Área com as informações do filme */}
          <h1>{movie.title}</h1> {/* Mostra o título do filme */}
          <p>{movie.description}</p> {/* Mostra a descrição do filme */}

          <span>Categoria: {movie.category}</span> {/* Mostra a categoria do filme */}
          <span>Tipo: {movie.type}</span> {/* Mostra o tipo do conteúdo */}

          <div className="details-buttons"> {/* Área dos botões */}
            <button>Assistir agora</button> {/* Botão visual de assistir */}
            <button onClick={() => navigate("/home")}>Voltar</button> {/* Botão para voltar para a home */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MovieDetails; // Exporta o componente MovieDetails para ser usado em outras páginas