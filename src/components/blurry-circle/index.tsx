import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore({
    color: 4,
    isGoingUp: true,
  });

  useClientEffect$(() => {
    const timer = setInterval(() => {
      if (store.color > 8) {
        store.isGoingUp = false;
      }

      if (store.color < 2) {
        store.isGoingUp = true;
      }

      if (store.isGoingUp) {
        store.color++;
      } else {
        store.color--;
      }
    }, 100);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div class="w-screen flex justify-center">
      <div
        class={`rounded-full h-[400px] w-[400px] transition-colors duration-300 bg-sky-${store.color}00 blur-[500px] absolute -bottom-80`}
      ></div>
    </div>
  );
});
