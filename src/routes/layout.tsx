import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <div class="bg-background min-h-screen">
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer></footer>
    </div>
  );
});
