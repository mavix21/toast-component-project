import * as React from "react";

export function useEscapeKey(cb) {
  const onKeyDown = React.useEffectEvent((event) => {
    if (event.code === "Escape") {
      cb();
    }
  });

  React.useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);
}
