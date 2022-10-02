import { component$ } from "@builder.io/qwik";

interface Props {
  text: string;
}
export default component$<Props>(({ text }) => {
  return (
    <div class="h-60 w-full border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 backdrop-blur-lg">
      <p class="text-white">{text}</p>
    </div>
  );
});
