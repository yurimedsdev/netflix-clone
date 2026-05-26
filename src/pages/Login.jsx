import { useState } from "react"; // Importa o useState para guardar valores que mudam na tela
import { useNavigate } from "react-router-dom"; // Importa o useNavigate para mudar de página pelo código
import "../index.css"; // Importa o arquivo CSS com os estilos da aplicação

function Login() {
  const [email, setEmail] = useState(""); // Guarda o email digitado pelo usuário
  const [password, setPassword] = useState(""); // Guarda a senha digitada pelo usuário

  const navigate = useNavigate(); // Cria a função navigate para redirecionar o usuário

  function handleLogin(event) { // Função executada quando o formulário é enviado
    event.preventDefault(); // Impede a página de recarregar ao enviar o formulário

    if (email === "user@devflix.com" && password === "123456") { // Verifica se email e senha estão corretos
      navigate("/home"); // Envia o usuário para a página home
    } else { // Caso email ou senha estejam errados
      alert("Email ou senha inválidos"); // Mostra uma mensagem de erro
    }
  }

  return (
    <div className="login-page"> {/* Container principal da tela de login */}
      <form className="login-box" onSubmit={handleLogin}> {/* Formulário de login */}

        <h1>DEVFLIX</h1> {/* Logo da plataforma */}
        <h2>Entrar</h2> {/* Título da tela */}

        <input
          type="email" // Define o campo como email
          placeholder="Digite seu email" // Texto que aparece antes do usuário digitar
          value={email} // Mostra no campo o valor salvo no estado email
          onChange={(event) => setEmail(event.target.value)} // Atualiza o email quando o usuário digita
        />

        <input
          type="password" // Define o campo como senha
          placeholder="Digite sua senha" // Texto que aparece antes do usuário digitar
          value={password} // Mostra no campo o valor salvo no estado password
          onChange={(event) => setPassword(event.target.value)} // Atualiza a senha quando o usuário digita
        />

        <button type="submit">Entrar</button> {/* Botão que envia o formulário */}

        <p className="login-help"> {/* Texto de ajuda com o login de teste */}
          Use: user@devflix.com / 123456
        </p>
      </form>
    </div>
  );
}

export default Login; // Exporta o componente Login para ser usado em outros arquivos