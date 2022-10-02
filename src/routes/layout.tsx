import {
  component$,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import BlurryCircle from "~/components/blurry-circle";
import GridBg from "~/components/grid-bg";
import { AppContext } from "~/context";
import Header from "../components/header/header";

export default component$(() => {
  useContextProvider(AppContext, useStore({}));

  return (
    <div class="bg-background min-h-screen">
      <main>
        <Header />
        <GridBg />
        <BlurryCircle />
        <section>
          <Slot />
        </section>
      </main>
      <footer></footer>
    </div>
  );
});
