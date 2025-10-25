import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  animate?: boolean;
}

export default function SectionWrapper({
  id,
  children,
}: SectionWrapperProps) {
  

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once:true}}
    >
      {children}
    </motion.section>
  );
}