import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const D20Dice = ({ result, onClose }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(200, 200);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1); // Aproximação para D20
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
    });
    const dice = new THREE.Mesh(geometry, material);
    scene.add(dice);

    const animate = () => {
      requestAnimationFrame(animate);
      dice.rotation.x += 0.01;
      dice.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return (
    <div ref={mountRef} className="flex flex-col items-center">
      <button onClick={onClose} className="text-red-500">
        Fechar
      </button>
      <p>Resultado: {result}</p>
    </div>
  );
};

export default D20Dice;
