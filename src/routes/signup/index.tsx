import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const store = useStore({
    email: "",
    password: "",
  });
  return (
    <div>
      <h1 class="text-5xl font-azonix text-white mt-40 text-center">Sign Up</h1>
      <div class="bg-white/10 mx-auto backdrop-blur-md h-96 shadow-xl rounded-lg w-1/2 border-white p-10">
        <form class="flex flex-col w-1/2 mx-auto justify-center">
          <label class="text-white">Email</label>
          <input
            name="email"
            type="text"
            class="bg-white/30 backdrop-blur-md rounded-md text-white px-4 py-2 my-2"
            value={store.email}
            onChange$={(e) =>
              (store.email = (e.target as HTMLInputElement).value)
            }
          />
          <label class="text-white">Password</label>
          <input
            name="password"
            type="password"
            class="bg-white/30 backdrop-blur-md rounded-md text-white px-4 py-2 my-2"
            value={store.password}
            onChange$={(e) =>
              (store.password = (e.target as HTMLInputElement).value)
            }
          />
          <button
            class="bg-teal-500 hover:bg-teal-300 duration-200 mt-10 rounded-md text-black py-2 px-10 font-space font-bold"
            onClick$={() => {}}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "SSN Invente - Sign Up",
};
