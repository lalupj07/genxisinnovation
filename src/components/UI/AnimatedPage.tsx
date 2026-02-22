import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
        filter: 'blur(10px)',
    },
    in: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
    },
    out: {
        opacity: 0,
        y: -20,
        filter: 'blur(10px)',
    }
};

const AnimatedPage = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
            style={{ width: '100%' }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
