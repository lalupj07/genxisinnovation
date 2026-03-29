import type { ReactNode } from 'react';

// Page-level Framer Motion wrapper removed — caused opacity:0 freeze on production.
// Individual section animations (Hero stagger, whileInView cards, etc.) are unaffected.
const AnimatedPage = ({ children }: { children: ReactNode }) => (
    <>{children}</>
);

export default AnimatedPage;
