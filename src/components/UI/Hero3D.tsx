import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TorusKnot, Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { useTheme } from '@mui/material';
import * as THREE from 'three';

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
                    color={isDark ? '#00e5ff' : '#2979ff'} // Cyan/Blue
                    emissive={isDark ? '#00e5ff' : '#2979ff'}
                    emissiveIntensity={0.5}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    metalness={0.9}
                    roughness={0.1}
                    distort={0.4} // Wobbly effect
                    speed={2}
                    wireframe={isDark} // Wireframe in dark mode for tech look
                />
            </TorusKnot>
        </Float>
    );
};

const Hero3D = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <div style={{ width: '100%', height: '100%', minHeight: '500px' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Geometry isDark={isDark} />
                <Environment preset="city" />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
