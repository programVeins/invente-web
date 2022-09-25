import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div> 
      <h1 class="text-3xl font-bold underline text-white">
        Invente 6.0
      </h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'SSN Invente',
};
