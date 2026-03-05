import React from 'react';
import { motion } from 'framer-motion';
import { useTheme, Box } from '@mui/material';
import type { ReactNode } from 'react';

interface AnimatedIconProps {
    children: ReactNode;
    color?: string;
    hoverColor?: string;
    onClick?: () => void;
    ariaLabel?: string;
}

const AnimatedIcon = ({ children, color, hoverColor, onClick, ariaLabel }: AnimatedIconProps) => {
    const theme = useTheme();

    const defaultColor = color || theme.palette.text.secondary;
    const activeColor = hoverColor || theme.palette.primary.main;

    return (
        <Box
            component={motion.div}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            aria-label={ariaLabel}
            onClick={onClick}
            onKeyDown={(e: React.KeyboardEvent) => {
                if (onClick && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onClick();
                }
            }}
            whileHover={{
                scale: 1.2,
                rotate: 15,
                color: activeColor
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ color: defaultColor }}
            transition={{ type: 'spring', stiffness: 300 }}
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
