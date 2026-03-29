import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const pageVariants = {
    initial: { opacity: 0, y: 16 },
    in:      { opacity: 1, y: 0  },
    out:     { opacity: 0, y: -8 },
};

const pageTransition = {
    type: 'tween' as const,
    ease: 'easeOut' as const,
    duration: 0.4,
};

const AnimatedPage = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ width: '100%' }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
