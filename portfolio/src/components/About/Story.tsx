import TimelineCard from "./TimelineCard";

function SobreMi() {
  return (
    <section className="SobreMi">
      <h2 className="SobreMi__title">Sobre mí</h2>
      <TimelineCard
        year="2020"
        title="Inicio de Ki-Store"
        description="La chispa del emprendimiento. De productos variados a PCs personalizadas."
        quote="Fue mi primer contacto con la idea de transformar habilidades en soluciones reales."
      />
      <TimelineCard
        year="2023"
        title="Inicio de Infinity Design"
        description="Expansión técnica y creativa. Desarrollo web, marketing y software."
        quote="Cada marca necesita su propio lenguaje visual y técnico."
      />
      <TimelineCard
        year="2025"
        title="Despedida de Infinity Design"
        description="Una lección difícil, pero necesaria. La marca quedó en malas manos y desapareció."
        quote="Perder una marca fue doloroso, pero me enseñó a proteger mi visión."
      />
      <TimelineCard
        year="2025"
        title="Inicio de Dreamux"
        description="Renacer con propósito. Dreamux amplía el catálogo de servicios digitales."
        quote="Dreamux no solo es una marca. Es la representación de mi avance desde que comencé hasta ahora."
      />
      <TimelineCard
        year="2025+"
        title="Próximos pasos"
        description="Pausa estratégica para reunir capital, mantener las marcas vivas y primer acercamiento a la ciberseguridad."
        quote="El destino decidirá el ritmo, pero yo decido seguir avanzando."
      />
    </section>
  );
}

export default SobreMi;