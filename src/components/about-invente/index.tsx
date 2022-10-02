import { component$ } from '@builder.io/qwik';
import Heading from '../heading';
export default component$(() => {
  return (
    <div class="my-20">
      <Heading title="About Invente" />
      <p class="text-white text-xl font-space my-8">
        While the present can be considered as unprecedented at its best, SSN
        offers a platform to showcase your talents as a surety. Presenting to
        you the 6th edition of the annual techfest - Invente.
        <br />
        <br />
        Invente - a nexus of Innovation, Creativity and Entertainment, is a
        2-day Intercollegiate technical fest which aims to encourage students to
        think beyond academics and helps them discover their hidden passions and
        talents. This technical extravaganza gives space for students to flaunt
        their skills in various domains and caters to their adrenaline surges.
        <br />
        <br />
        October 4 & 5 - Save the dates, reinvent yourself in this Realm of
        Virtuality!
      </p>
    </div>
  );
});
