import { Canvas } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import { useMemo, type FC } from "react";

const Background: FC = () => {
  const sphere: Float32Array = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      const i3 = i * 3;
      positions[i3 + 0] = (Math.random() - 0.5) * 6;
      positions[i3 + 1] = (Math.random() - 0.5) * 6;
      positions[i3 + 2] = (Math.random() - 0.5) * 6;
    }
    return positions;
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Points positions={sphere} stride={3}>
          <PointMaterial
            color="#ACD4EA"
            size={0.02}
            sizeAttenuation
            depthWrite={false}
          />
        </Points>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}

export default Background;
