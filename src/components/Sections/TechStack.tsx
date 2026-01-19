import { useEffect, useRef } from 'react';
import { Box, Container, Typography, useTheme, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const techs = [
    { name: 'Rust', color: '#DEA584', desc: 'Core Logic & Security' },
    { name: 'React', color: '#61DAFB', desc: 'UI & Interactions' },
    { name: 'Electron', color: '#47848F', desc: 'Cross-Platform Desktop' },
    { name: 'TypeScript', color: '#3178C6', desc: 'Type Safety' },
    { name: 'Node.js', color: '#339933', desc: 'Backend Services' },
    { name: 'WebAssembly', color: '#654FF0', desc: 'High Performance' }
];

const TechStack = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
        let height = canvas.height = 600;

        const particles: Particle[] = [];
        const particleCount = 60;
        const connectionDistance = 150;
        const mouseDistance = 200;

        let mouse = { x: 0, y: 0 };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 1;
                this.vy = (Math.random() - 0.5) * 1;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouseDistance - distance) / mouseDistance;
                    const directionX = forceDirectionX * force * 0.5;
                    const directionY = forceDirectionY * force * 0.5;
                    this.vx += directionX;
                    this.vy += directionY;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((a, index) => {
                for (let j = index + 1; j < particles.length; j++) {
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = isDark
                            ? `rgba(255, 255, 255, ${1 - distance / connectionDistance})`
                            : `rgba(0, 0, 0, ${1 - distance / connectionDistance})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
            height = canvas.height = 600;
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDark]);

    return (
        <Box id="stack" sx={{ position: 'relative', py: 15, overflow: 'hidden' }}>
            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '0.2em' }}>
                        Under The Hood
                    </Typography>
                    <Typography variant="h2" sx={{
                        mt: 1,
                        fontWeight: 800,
                        mb: 2,
                        background: isDark
                            ? 'linear-gradient(90deg, #FFFFFF 0%, #B0B8C4 100%)'
                            : `linear-gradient(90deg, ${theme.palette.text.primary} 0%, ${theme.palette.text.secondary} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        The Engine Room
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary' }}>
                        We build on bare metal using languages and frameworks designed for speed, safety, and scale.
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    {techs.map((tech, index) => (
                        <Grid size={{ xs: 6, md: 2 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        textAlign: 'center',
                                        bgcolor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.6)',
                                        backdropFilter: 'blur(10px)',
                                        border: `1px solid ${theme.palette.divider}`,
                                        borderRadius: 4,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            borderColor: tech.color,
                                            boxShadow: `0 10px 30px ${tech.color}30`
                                        }
                                    }}
                                >
                                    <Box sx={{
                                        display: 'inline-flex',
                                        p: 1.5,
                                        borderRadius: '50%',
                                        bgcolor: `${tech.color}15`,
                                        color: tech.color,
                                        mb: 2
                                    }}>
                                        {/* Simple Circle as Icon Placeholder for now */}
                                        <Box sx={{ width: 24, height: 24, borderRadius: '50%', border: `2px solid currentColor` }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{tech.name}</Typography>
                                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 0.5 }}>
                                        {tech.desc}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Canvas Background */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'auto', // Allow mouse interaction
                    zIndex: 1
                }}
            />
        </Box>
    );
};

export default TechStack;
