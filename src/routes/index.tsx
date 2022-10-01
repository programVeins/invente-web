import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';

export default component$(() => {
  const depts = [
    {
      name: 'CSE',
      img: '/images/cse.png',
      link: '/events/cse',
    },
    {
      name: 'IT',
      img: '/images/it.png',
      link: '/events/it',
    },
    {
      name: 'ECE',
      img: '/images/ece.png',
      link: '/events/ece',
    },
    {
      name: 'EEE',
      img: '/images/eee.png',
      link: '/events/eee',
    },
  ];
  return (
    <div class="">
      <div class="flex justify-center items-center gap-10 pt-40">
        <img src="/images/particles.png" />
        <h1 class="text-7xl text-center text-white font-azonix">Invente 6.0</h1>
        <img src="/images/particles.png" />
      </div>

      <div class="w-3/4 mx-auto">
        <h2 class="font-space text-teal-500 text-3xl">Events</h2>
        <hr class="w-40 border-t-2 mt-4 border-teal-500" />

        <div class="grid grid-cols-4 gap-10 place-items-center mt-10">
          {depts.map((dept, i) => (
            <Link href={dept.link}>
              <div
                key={i}
                class="relative hover:scale-110 transition-all ease-out cursor-pointer duration-300"
              >
                <img class="m-0 p-0" src={dept.img} />
                <div class="absolute text-white bottom-5 justify-center flex items-center left-0 right-0 mx-auto z-10 bg-black/30 backdrop-blur-md w-3/4 rounded-full  h-10">
                  <p class="text-2xl font-bold">{dept.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'SSN Invente',
};
