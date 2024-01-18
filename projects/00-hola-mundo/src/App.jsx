import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing
        userName="midudev"
        name="Miguel Angel Duran"
      ></TwitterFollowCard>
      <TwitterFollowCard
        isFollowing={false}
        userName="elonmusk"
        name="Elon Musk"
      ></TwitterFollowCard>
      <TwitterFollowCard
        isFollowing
        userName="pheralb"
        name="Pablo Hernandez"
      ></TwitterFollowCard>
    </section>
  );
}
