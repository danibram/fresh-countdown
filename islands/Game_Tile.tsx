/** @jsx h */

import { h } from "preact";

export default function GameTile(props: {
  src: string;
  tile: { width: number; height: number; top?: number; speed?: number };
  state: number;
  scale: number;
}) {
  const { src, tile, state, scale } = props;

  const left = tile.speed ? tile.speed * state : tile.width * state;

  return (
    <div
      style={{
        position: "relative",
        width: tile.width < 0 ? "100%" : `${tile.width}px`,
        height: `${tile.height}px`,
        overflow: "hidden",
        transform: `scale(${scale}, ${scale})`,
        transformOrigin: "0 0",
        ...(tile.top ? { top: `${tile.top}px` } : {}),
      }}
    >
      <img
        style={{
          backgroundPosition: `-${left}px -0px`,
          background: `url(${src})`,
          overflow: "hidden",
          height: "100%",
          width: "100%",
          border: "0",
        }}
      />
    </div>
  );
}
