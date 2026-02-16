import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useTheme, Box } from '@mui/material';

interface AnimatedIconProps {
    children: ReactNode;
    color?: string;
    hoverColor?: string;
}

const AnimatedIcon = ({ children, color, hoverColor }: AnimatedIconProps) => {
    const theme = useTheme();

    // Default colors if not provided
    const defaultColor = color || theme.palette.text.secondary;
    const activeColor = hoverColor || theme.palette.primary.main;

    return (
        <Box
            component={motion.div}
            whileHover={{
                scale: 1.2,
                rotate: 15,
                color: activeColor
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ color: defaultColor }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
            }}
        >
            {children}
        </Box>
    );
};

export default AnimatedIcon;
