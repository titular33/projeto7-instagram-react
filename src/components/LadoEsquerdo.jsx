import Stories from "./Stories";
import Posts from "./Posts";

export default function LadoEsquerdo() {
  return (
    <div className="esquerda">
      <Stories />
      <Posts />
    </div>
  );
}