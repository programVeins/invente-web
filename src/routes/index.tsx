import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import AboutInvente from "~/components/about-invente";
import BlurryJumbotron from "~/components/blurry-jumbotron";
import Countdown from "~/components/countdown";
import EventGrid from "~/components/event-grid";
import Heading from "~/components/heading";

export default component$(() => {
  const depts = [
    {
      name: "CSE",
      img: "/images/cse.png",
      link: "/events/cse",
    },
    {
      name: "IT",
      img: "/images/it.png",
      link: "/events/it",
    },
    {
      name: "ECE",
      img: "/images/ece.png",
      link: "/events/ece",
    },
    {
      name: "EEE",
      img: "/images/eee.png",
      link: "/events/eee",
    },
    {
      name: "CSE",
      img: "/images/cse.png",
      link: "/events/cse",
    },
    {
      name: "IT",
      img: "/images/it.png",
      link: "/events/it",
    },
    {
      name: "ECE",
      img: "/images/ece.png",
      link: "/events/ece",
    },
    {
      name: "EEE",
      img: "/images/eee.png",
      link: "/events/eee",
    },
  ];
  return (
    <div class="">
      <div class="flex justify-center items-center gap-10 my-40">
        <h1 class="text-7xl text-center text-white font-azonix">Invente 6.0</h1>
      </div>
      <Countdown />

      {/* <div class="w-3/4 mx-auto">
        <AboutInvente />
      </div> */}
      <div class="">
        <BlurryJumbotron text={"hi"} />
      </div>
      {/* <div class="w-3/4 mx-auto">
        <EventGrid depts={depts} />
      </div> */}
    </div>
  );
});

export const head: DocumentHead = {
  title: "SSN Invente",
};
