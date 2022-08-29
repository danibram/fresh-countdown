/** @jsx h */
import { Head } from "https://deno.land/x/fresh@1.0.0-rc.2/runtime.ts";
import { h } from "preact";

export function NesCss() {
  return (
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Press+Start+2P"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/nes.css@latest/css/nes.min.css"
        rel="stylesheet"
      />
    </Head>
  );
}
