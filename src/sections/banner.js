import Hero from "../components/hero";

function Banner() {
  return (
    <div id="banner">
      <Hero
        title={"Ihr exklusiver Anbieter von Luxus- Parfümproben!"}
        description={
          "Bei Duft Samples verstehen wir, dass die Auswahl des perfekten Duftes eine zutiefst persönliche und einzigartige Erfahrung ist."
        }
        imageUrl="/assets/banner.png"
        from={"banner"}
        buttonText={"JETZT EINKAUFEN"}
      />
    </div>
  );
}
export default Banner;
