import { component$ } from '@builder.io/qwik';

interface Props {
  title: string;
}
export default component$<Props>(({ title }) => {
  return (
    <div>
      <h2 class="font-azonix text-teal-500 text-3xl">{title}</h2>
      <hr class="w-40 border-t-2 mt-4 border-teal-500" />
    </div>
  );
});
