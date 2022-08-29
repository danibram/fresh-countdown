/** @jsx h */
/** @jsxFrag Fragment */
import { PageProps } from "$fresh/server.ts";
import { Footer } from "@/helpers/Footer.tsx";
import { tw } from "@twind";
import { Fragment, h } from "preact";
import { NesCss } from "../helpers/Ness.tsx";
import Countdown from "../islands/Countdown.tsx";

export default function Main({ url }: PageProps<Record<never, never>>) {
  return (
    <>
      <NesCss />
      <div class={tw`flex justify-center h-full text-gray-600 mb-6 mt-6`}>
        <div class="nes-container">
          <div class={tw`mx-8 text-center`}>
            <Countdown />
            <div class={tw`mb-6`} />
            <div class="nes-container with-title" style={{ textAlign: "left" }}>
              <p class="title">Readme</p>
              <div class="lists">
                <ul class="nes-list is-disc">
                  <li>Set timer</li>
                  <div class="lists">
                    <ul
                      class="nes-list is-circle"
                      style={{ marginLeft: "1.5rem" }}
                    >
                      <li>With keyboard numbers</li>
                      <li>With screen numbers</li>
                    </ul>
                  </div>
                  <li>Enter to start</li>
                  <li>Spacebar to pause/unpause</li>
                  <li>Escape/Backspace to stop</li>
                </ul>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
