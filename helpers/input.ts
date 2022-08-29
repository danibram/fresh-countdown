export const filterInvalidKey =
  (fn: (e: KeyboardEvent) => void) => (e: KeyboardEvent) => {
    console.log(e.key);
    return !/[0-9]/.test(e.key) &&
      e.key !== "Enter" &&
      e.key !== "Escape" &&
      e.key !== "Backspace" &&
      e.key !== " "
      ? null
      : fn(e);
  };

export const keySelector =
  ({
    onEnter,
    onEscapeBackspace,
    onSpaceBar,
    onNumber,
  }: {
    onEnter: () => void;
    onEscapeBackspace: () => void;
    onSpaceBar: () => void;
    onNumber: (n: string) => void;
  }) =>
  (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Enter") {
      onEnter();
    } else if (e.key === "Escape" || e.key === "Backspace") {
      onEscapeBackspace();
    } else if (e.key === " ") {
      onSpaceBar();
    } else {
      onNumber(e.key);
    }
  };
