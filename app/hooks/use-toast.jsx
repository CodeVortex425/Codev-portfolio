import { useState, useEffect, useRef } from "react";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 5000;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

export function useToast() {
  const [toasts, setToasts] = useState([]);
  const timeouts = useRef({});

  function toast({ title, description }) {
    const id = genId();

    setToasts((current) => {
      const newToasts = [{ id, title, description, open: true }, ...current];
      return newToasts.slice(0, TOAST_LIMIT);
    });

    timeouts.current[id] = setTimeout(() => {
      dismiss(id);
    }, TOAST_REMOVE_DELAY);

    return {
      id,
      dismiss: () => dismiss(id),
    };
  }

  function dismiss(id) {
    setToasts((current) =>
      current.map((t) => (t.id === id ? { ...t, open: false } : t))
    );

    setTimeout(() => {
      setToasts((current) => current.filter((t) => t.id !== id));
      if (timeouts.current[id]) {
        clearTimeout(timeouts.current[id]);
        delete timeouts.current[id];
      }
    }, 300);
  }

  useEffect(() => {
    return () => {
      Object.values(timeouts.current).forEach(clearTimeout);
    };
  }, []);

  return { toasts, toast, dismiss };
}
