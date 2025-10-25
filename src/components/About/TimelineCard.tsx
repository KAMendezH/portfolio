import { motion } from "framer-motion";
import "./CSS/TimelineCard.css"; // Estilos personalizados

interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  quote?: string;
}

function TimelineCard({ year, title, description, quote }: TimelineCardProps) {
  return (
    <motion.div
      className="TimelineCard"
      initial={{  y: 50 }}
      whileInView={{  y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="TimelineCard__year">{year}</div>
      <h3 className="TimelineCard__title">{title}</h3>
      <p className="TimelineCard__description">{description}</p>
      {quote && <blockquote className="TimelineCard__quote">“{quote}”</blockquote>}
    </motion.div>
  );
}

export default TimelineCard;