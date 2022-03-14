import Storie from "./Storie";
export default function Stories() {
  const usuarios = [
    { img: "../imagem/insta.png", nome: "instagram" },
    { img: "../imagem/aple.jpg", nome: "apple" },
    { img: "../imagem/ibm.svg", nome: "ibm" },
    { img: "../imagem/facebook.png", nome: "facebook" },
    { img: "../imagem/microsof.jpg", nome: "microsoft" },
    { img: "../imagem/nasa.jpg", nome: "nasa" },
    { img: "../imagem/amazon.jpeg", nome: "amazon" },
    { img: "../imagem/artemis.jpg", nome: "artemis" },
  ];

  return (
    <div className="stories">
      <Storie usuarios={usuarios} />
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}