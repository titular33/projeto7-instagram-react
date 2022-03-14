import Post from "./Post";
export default function Posts() {
  const dadosPostagens = [
    {
      nome: "Goku",
      nomeImagemTop: "../imagem/User.png",
      nomeImagemPost: "../imagem/Goku.png",
      curtidoPor: "respondeai",
    },
    {
      nome: "Luffy",
      nomeImagemTop: "../imagem/luffy.png",
      nomeImagemPost: "../imagem/crew.png",
      curtidoPor: "respondeai",
    },
  ];
  return (
    <div className="posts">
      <Post dadosPostagens={dadosPostagens} />
    </div>
  );
}