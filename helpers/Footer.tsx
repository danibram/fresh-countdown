/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";
export function Footer() {
  return (
    <div
      class={tw`mt-16 flex justify-center items-center flex-col border-none bg-transparent text-black`}
    >
      <a
        class={tw`font-bold flex justify-start items-center cursor-pointer`}
        href="https://github.com/denoland/showcase_chat"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i class="nes-octocat animate"></i>
        <span class={tw`ml-6`}>Source</span>
      </a>
    </div>
  );
}
