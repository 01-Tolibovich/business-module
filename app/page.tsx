import { Auth, OurAdvantages, OurPartners, ServicesAndTechnologies, Slogan } from "./components";

export default function Home() {
  return (
    <div>
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
      <section>
        <OurPartners />
      </section>
    </div>
  );
}
