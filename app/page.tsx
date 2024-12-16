import { Auth, OurAdvantages, ServicesAndTechnologies, Slogan } from "./components";

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
      <section>
        <ServicesAndTechnologies />
      </section>
    </div>
  );
}
