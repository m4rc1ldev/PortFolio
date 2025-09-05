// Simple hook to lock/unlock body scroll
import { useEffect } from 'react';

export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (!locked) return;

    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevTouchAction = body.style.touchAction;

    body.style.overflow = 'hidden';
    body.style.touchAction = 'none';

    return () => {
      body.style.overflow = prevOverflow;
      body.style.touchAction = prevTouchAction;
    };
  }, [locked]);
}
