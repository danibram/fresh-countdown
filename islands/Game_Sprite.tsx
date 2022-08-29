/** @jsx h */

import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import GameTile from "./Game_Tile.tsx";

export default function GameSprite(props: {
  src: string;
  tile: { width: number; height: number; top?: number; speed?: number };
  states: number;
  scale: number;
  framesPerStep: number;
}) {
  const { framesPerStep, states, src, tile, scale } = props;
  const [state, setState] = useState(0);
  const tick = useRef(0);
  const frame = useRef(0);

  const animate = () => {
    if (tick.current === framesPerStep) {
      if (!tile.speed) {
        tick.current = 0;
        setState((state) => (state + 1) % states);
      } else {
        tick.current = 0;
        setState((state) => state + 1);
      }
    }

    tick.current += 1;

    frame.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();

    () => cancelAnimationFrame(frame.current);
  }, [framesPerStep]);

  return <GameTile src={src} state={state} tile={tile} scale={scale} />;
}
