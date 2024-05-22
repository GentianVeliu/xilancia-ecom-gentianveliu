import Hero from "../components/hero";

function MaisonFrancis() {
  return (
    <div id="maison-francis">
      <Hero
        title={"MAISON FRANCIS KURKDJIAN"}
        description={
          "Entdecke die Welt von Maison Francis Kurkdjian mit unseren edlen Duftproben. Erlebe die einzigartigen Düfte und die Exklusivität unserer Marke in kompakten Proben. Genieße den Luxus und die Kunst der Parfümherstellung, bevor du dich für deinen Favoriten entscheidest."
        }
        imageUrl="/assets/maison-francis.jpg"
        from={"maison-francis"}
        buttonText={"ZU MFK"}
      />
    </div>
  );
}
export default MaisonFrancis;
