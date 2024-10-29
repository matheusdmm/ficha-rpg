import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/Addons.js';
import { TextGeometry } from 'three/examples/jsm/Addons.js';

interface D20DiceProps {
  result: number;
  onClose: () => void;
}

const D20Dice: React.FC<D20DiceProps> = ({ result, onClose }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [rolling, setRolling] = useState(true);

  useEffect(() => {
    const diceMaterialColor = 0xffffff;
    const lightColor = 0xffffff;
    const lightGroundColor = 0x444444;
    const backgroundColor = 0xffffff;
    const canvasSize = 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(canvasSize, canvasSize);
    renderer.setClearColor(backgroundColor, 1);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const diceMaterial = new THREE.MeshStandardMaterial({
      color: diceMaterialColor,
      transparent: true,
      opacity: 0.8,
    });

    const geometry = new THREE.IcosahedronGeometry(1);
    const dice = new THREE.Mesh(geometry, diceMaterial);
    scene.add(dice);

    const light = new THREE.HemisphereLight(lightColor, lightGroundColor);
    scene.add(light);

    const rollDuration = 3000;
    const timer = setTimeout(() => {
      setRolling(false);
    }, rollDuration);

    const fontLoader = new FontLoader();
    let textMesh: THREE.Mesh | null = null;

    const fontPath = '/fonts/helvetiker_regular.typeface.json';
    fontLoader.load(fontPath, (font) => {
      const textGeometry = new TextGeometry(result.toString(), {
        font: font,
        size: 0.5, // Tamanho do texto
        depth: 0.1,
        curveSegments: 12,
        bevelEnabled: false,
      });

      textGeometry.computeBoundingBox();
      const textWidth = textGeometry.boundingBox.getSize(new THREE.Vector3()).x;
      const textHeight = textGeometry.boundingBox.getSize(
        new THREE.Vector3()
      ).y;

      const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      textMesh = new THREE.Mesh(textGeometry, textMaterial);

      textMesh.position.set(-textWidth / 2, -textHeight / 2, 1); // Centraliza em X e Y
      scene.add(textMesh);
    });

    const animate = () => {
      requestAnimationFrame(animate);

      if (rolling) {
        dice.rotation.x += Math.random() * 0.2;
        dice.rotation.y += Math.random() * 0.2;
        dice.position.y = Math.sin(Date.now() * 0.001) * 0.1;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      clearTimeout(timer);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [rolling, result]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 text-3xl hover:text-red-600 transition-colors duration-200"
        >
          &times; {/*"X"*/}
        </button>
        <div ref={mountRef} className="flex flex-col items-center mb-4" />
      </div>
    </div>
  );
};

export default D20Dice;
