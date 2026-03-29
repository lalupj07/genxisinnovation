import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TorusKnot, Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useState, Component } from 'react';
import type { ReactNode } from 'react';
import { useTheme } from '@mui/material';
import * as THREE from 'three';

// ─── Error Boundary ───────────────────────────────────────────────────────────
class WebGLErrorBoundary extends Component<
    { children: ReactNode; fallback: ReactNode },
    { hasError: boolean }
> {
    constructor(props: { children: ReactNode; fallback: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) return this.props.fallback;
        return this.props.children;
    }
}

// ─── Animated Geometry ────────────────────────────────────────────────────────
const Geometry = ({ isDark }: { isDark: boolean }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <TorusKnot ref={meshRef} args={[1, 0.3, 128, 16]}>
                <MeshDistortMaterial
                    color={isDark ? '#00e5ff' : '#2979ff'}
                    emissive={isDark ? '#00e5ff' : '#2979ff'}
                    emissiveIntensity={0.5}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    metalness={0.9}
                    roughness={0.1}
                    distort={0.4}
                    speed={2}
                    wireframe={isDark}
                />
            </TorusKnot>
        </Float>
    );
};

// ─── CSS Fallback (shown when WebGL context is lost) ──────────────────────────
const FallbackOrb = ({ isDark }: { isDark: boolean }) => (
    <div
        style={{
            width: '100%',
            height: '100%',
            minHeight: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <div
            style={{
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                background: isDark
                    ? 'radial-gradient(circle at 35% 35%, #00e5ff 0%, #0057a8 50%, #001f3f 100%)'
                    : 'radial-gradient(circle at 35% 35%, #82cfff 0%, #2979ff 50%, #003c8f 100%)',
                boxShadow: isDark
                    ? '0 0 60px 20px rgba(0,229,255,0.35), 0 0 120px 40px rgba(0,87,168,0.2)'
                    : '0 0 60px 20px rgba(41,121,255,0.35), 0 0 120px 40px rgba(0,60,143,0.2)',
                animation: 'orb-float 4s ease-in-out infinite',
            }}
        />
        <style>{`
            @keyframes orb-float {
                0%, 100% { transform: translateY(0px) scale(1); }
                50%       { transform: translateY(-18px) scale(1.04); }
            }
        `}</style>
    </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const Hero3D = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [contextLost, setContextLost] = useState(false);

    if (contextLost) return <FallbackOrb isDark={isDark} />;

    return (
        <WebGLErrorBoundary fallback={<FallbackOrb isDark={isDark} />}>
            <div style={{ width: '100%', height: '100%', minHeight: '500px' }}>
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 45 }}
                    gl={{ powerPreference: 'high-performance', antialias: true, failIfMajorPerformanceCaveat: false }}
                    onCreated={({ gl }) => {
                        const canvas = gl.domElement;
                        canvas.addEventListener('webglcontextlost', (e) => {
                            e.preventDefault();
                            setContextLost(true);
                        });
                        canvas.addEventListener('webglcontextrestored', () => {
                            setContextLost(false);
                        });
                    }}
                >
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <Geometry isDark={isDark} />
                    <Environment preset="city" />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                </Canvas>
            </div>
        </WebGLErrorBoundary>
    );
};

export default Hero3D;
