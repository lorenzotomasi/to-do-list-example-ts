import { useEffect, useRef, useState } from "react";

interface Props<T> {
  initialState?: T;
  throttleTime?: number;
}
function useThrottleState<T>(
  props: Props<T>
): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>, T | undefined] {
  const [state, setState] = useState<T | undefined>(props.initialState);
  const [throttleValue, setThrottleValue] = useState(state);
  const timerRef = useRef<number>();

  useEffect(() => {
    if (!timerRef.current) {
      setTimeout(() => {
        setThrottleValue(state)
        return () => {
          clearTimeout(timerRef.current)
        }
      }, props.throttleTime ?? 1000);
    }
  }, [state]);

  return [throttleValue, setState, state];
}

export { useThrottleState };
