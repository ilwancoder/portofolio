import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { random } from 'maath';

function Stars(props: any) {
  const ref = useRef<any>();
  const [sphere, A, B] = useMemo(() => {
    const sphere = new Float32Array(random.inSphere(new Float32Array(5000), { radius: 1.5 }));
    const A = random.inSphere(new Float32Array(5000), { radius: 1.5 });
    const B = random.inSphere(new Float32Array(5000), { radius: 1.5 });
    return [sphere, A, B];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      
      const t = state.clock.getElapsedTime() * 0.1;
      const mixedSphere = sphere.slice();
      for (let i = 0; i < sphere.length; i++) {
        mixedSphere[i] = THREE.MathUtils.lerp(A[i], B[i], Math.sin(t + i) * 0.5 + 0.5);
      }
      if (ref.current.geometry.attributes.position) {
        ref.current.geometry.attributes.position.array = mixedSphere;
        ref.current.geometry.attributes.position.needsUpdate = true;
      }
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#9E7FFF"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function WarpDrive() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
  );
}
