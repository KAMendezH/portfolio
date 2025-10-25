// MOTION
import { motion } from 'framer-motion'

// REACT
import type { ReactNode } from 'react'

// TYPES
interface Props{
    children: ReactNode
}

function PageTransition({ children }: Props){
    return(
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity:0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;