'use client';

import { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Particles (reduced count for better performance)
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      transparent: true,
      opacity: 0.3,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Wave mesh (reduced geometry resolution for better performance)
    const planeGeometry = new THREE.PlaneGeometry(30, 30, 30, 30);
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0x183969,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });

    const mesh = new THREE.Mesh(planeGeometry, planeMaterial);
    mesh.rotation.x = -Math.PI / 4;
    mesh.position.y = -5;
    mesh.position.z = -10;
    scene.add(mesh);
    meshRef.current = mesh;

    // Animation
    let animationId: number;
    const clock = new THREE.Clock();
    let frameCount = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      frameCount++;

      const elapsedTime = clock.getElapsedTime();

      // Rotate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.001;
        particlesRef.current.rotation.y += 0.0015;
      }

      // Animate wave (update every 2 frames for better performance)
      if (meshRef.current && frameCount % 2 === 0) {
        const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
        const positions = geometry.attributes.position;

        for (let i = 0; i < positions.count; i++) {
          const x = positions.getX(i);
          const y = positions.getY(i);
          const wave1 = Math.sin(x * 0.5 + elapsedTime) * 0.5;
          const wave2 = Math.sin(y * 0.5 + elapsedTime * 0.8) * 0.5;
          positions.setZ(i, wave1 + wave2);
        }

        positions.needsUpdate = true;
        meshRef.current.rotation.z = elapsedTime * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      planeGeometry.dispose();
      planeMaterial.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}
