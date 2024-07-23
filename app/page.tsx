import { Game } from "./_features/game/Game";

export const metadata = {
  title: "Bowling Kata",
};

export default function Page() {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-4xl pb-4">React bowling score</h1>
      <Game />
    </div>
  );
}
