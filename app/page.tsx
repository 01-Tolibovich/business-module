import { Auth, OurAdvantages, Slogan } from "./components";

export default function Home() {
  return (
    <div className='container'>
      <section>
        <Slogan />
        <Auth />
      </section>
      <section>
        <OurAdvantages />
      </section>
    </div>
  );
}
