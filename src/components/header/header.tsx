import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header class="flex gap-20 text-white w-full justify-between px-10 py-8 items-center">
      <Link href="/" class="w-1/4">
        <img src="/images/ssn.png" />
      </Link>
      <div class="flex gap-20 justify-center w-1/2">
        <Link href="/events">Events</Link>
        <Link href="/workshops">Workshops</Link>
        <Link href="/hackathon">Hackathon</Link>
        <Link href="/schedule">Schedule</Link>
        <Link href="/sponsors">Sponsors</Link>
        <Link href="/passes">Passes</Link>
      </div>
      <div class="flex gap-10 w-1/4 justify-end">
        <img class="" src="/images/invente.png" />
        <button class="bg-teal-500  rounded-md text-black py-2 px-10 font-space font-bold">
          Register
        </button>
      </div>
    </header>
  );
});
