/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";

export default function Keyboard(props: {
  isStopped: boolean;
  isPaused: boolean;
  onPressNumber: (n: number) => void;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  onStart: () => void;
}) {
  const {
    isStopped,
    isPaused,
    onPressNumber,
    onPause,
    onPlay,
    onStop,
    onStart,
  } = props;

  return (
    <>
      <div class="tw`flex`">
        {isStopped ? (
          <>
            <div class="tw`flex`">
              {[1, 2, 3].map((n) => (
                <button
                  type="button"
                  class="nes-btn"
                  onClick={() => onPressNumber(n)}
                >
                  {n}
                </button>
              ))}
            </div>
            <div class="tw`flex`">
              {[4, 5, 6].map((n) => (
                <button
                  type="button"
                  class="nes-btn"
                  onClick={() => onPressNumber(n)}
                >
                  {n}
                </button>
              ))}
            </div>
            <div class="tw`flex`">
              {[7, 8, 9].map((n) => (
                <button
                  type="button"
                  class="nes-btn"
                  onClick={() => onPressNumber(n)}
                >
                  {n}
                </button>
              ))}
            </div>
            <div class="tw`flex`">
              <button type="button" class="nes-btn" onClick={() => onStart()}>
                &lt;
              </button>
              <button
                type="button"
                class="nes-btn"
                onClick={() => onPressNumber(0)}
              >
                0
              </button>
              <button type="button" class="nes-btn" onClick={() => onStop()}>
                X
              </button>
            </div>
          </>
        ) : (
          <div class="tw`flex`">
            {isPaused ? (
              <button type="button" class="nes-btn" onClick={() => onPlay()}>
                Play
              </button>
            ) : (
              <button type="button" class="nes-btn" onClick={() => onPause()}>
                Pause
              </button>
            )}

            <button type="button" class="nes-btn" onClick={() => onStop()}>
              Stop
            </button>
          </div>
        )}
      </div>
    </>
  );
}
