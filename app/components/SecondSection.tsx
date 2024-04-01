import React, { FC, useRef } from "react";
import TicketCard from "./TicketCard";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const SecondSection: FC = () => {

  const ticketCardData = [
    {
      "id": 1,
      "title": "Las Vegas Aviators",
      "date": "OCT 15",
      "day": "SUN",
      "time": "4:30 PM",
      "addres": "Las Vegas Ballpark, Las Vegas, Nevada",
      "imgURL": "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMcy78xquYbaN8LDV49nkGXXnYs6VzJ5LHDiCoZHdvTnvdmhJEgHiu4-QkzPxG1IxGfnAoKtD9zDv-jhFQqpi7wNJlIiAspvtA7Wp4RNHO7nRxid5NLwFXYPjabVtQrN8AQv7b7uNBsxg8ikgHUxAY0~A6LEmTyJfJsfM3ke8c2TOlT3jIfkx6KKZQ2fry3wskWhztiE~B2XjvOJlE417Ld8WIUWo6xCE-E0u1MVjqGqP8s~g0hMbqjZFh2JvEpbh1cWjTimArviIO6RbPEhfjMEdC6zo7LtCuE-XEanZFycRZ1gBXrnfoiLBDoeCkq6lRCYVeMHAngb8~0wbKgGUw__"
    },
    {
      "id": 2,
      "title": "Sacramento River Cats",
      "date": "OCT 15",
      "day": "SUN",
      "time": "4:30 PM",
      "addres": "Sutter Health Park, Sacramento, california",
      "imgURL": "https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EZo-HQ4yJRY~dUhQcMhA~35ZvUBoWGsttz-dbuwWCwNS-iagfxSXy8D0wUbI7E0DtSys0IP8ys-zbJuneStuL89zYqwmiiGVmsdfbrviRd6~-DGtSY7jg9VG35saVyEF3V~BTigA4UsAzQEEkcd7ssgXdLgzvSXbjHkkD6JEvWERD5g2nyW5VhZrl2r2c451ij7Z3hZ6tp6eC9J-Ld638EcfKZDBYQt5iGlni8bR8zqaj4JSsszlF5aJkYBI0ldvKZIGpVnBoHqM0813dNDn7gMb~NO7LRoH0DSqjqp6BgcRPG37D07lph~ZABSka-tuFZeA8LfLOvJ2yX06qmNe1A__"
    },
    {
      "id": 3,
      "title": "Las Vegas Aviators",
      "date": "OCT 15",
      "day": "SUN",
      "time": "4:30 PM",
      "addres": "Las Vegas Ballpark, Las Vegas, Nevada",
      "imgURL": "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMcy78xquYbaN8LDV49nkGXXnYs6VzJ5LHDiCoZHdvTnvdmhJEgHiu4-QkzPxG1IxGfnAoKtD9zDv-jhFQqpi7wNJlIiAspvtA7Wp4RNHO7nRxid5NLwFXYPjabVtQrN8AQv7b7uNBsxg8ikgHUxAY0~A6LEmTyJfJsfM3ke8c2TOlT3jIfkx6KKZQ2fry3wskWhztiE~B2XjvOJlE417Ld8WIUWo6xCE-E0u1MVjqGqP8s~g0hMbqjZFh2JvEpbh1cWjTimArviIO6RbPEhfjMEdC6zo7LtCuE-XEanZFycRZ1gBXrnfoiLBDoeCkq6lRCYVeMHAngb8~0wbKgGUw__"
    },
    {
      "id": 4,
      "title": "Las Vegas Aviators",
      "date": "OCT 15",
      "day": "SUN",
      "time": "4:30 PM",
      "addres": "Las Vegas Ballpark, Las Vegas, Nevada",
      "imgURL": "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMcy78xquYbaN8LDV49nkGXXnYs6VzJ5LHDiCoZHdvTnvdmhJEgHiu4-QkzPxG1IxGfnAoKtD9zDv-jhFQqpi7wNJlIiAspvtA7Wp4RNHO7nRxid5NLwFXYPjabVtQrN8AQv7b7uNBsxg8ikgHUxAY0~A6LEmTyJfJsfM3ke8c2TOlT3jIfkx6KKZQ2fry3wskWhztiE~B2XjvOJlE417Ld8WIUWo6xCE-E0u1MVjqGqP8s~g0hMbqjZFh2JvEpbh1cWjTimArviIO6RbPEhfjMEdC6zo7LtCuE-XEanZFycRZ1gBXrnfoiLBDoeCkq6lRCYVeMHAngb8~0wbKgGUw__"
    },
    {
      "id": 5,
      "title": "Sacramento River Cats",
      "date": "OCT 15",
      "day": "SUN",
      "time": "4:30 PM",
      "addres": "Sutter Health Park, Sacramento, california",
      "imgURL": "https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EZo-HQ4yJRY~dUhQcMhA~35ZvUBoWGsttz-dbuwWCwNS-iagfxSXy8D0wUbI7E0DtSys0IP8ys-zbJuneStuL89zYqwmiiGVmsdfbrviRd6~-DGtSY7jg9VG35saVyEF3V~BTigA4UsAzQEEkcd7ssgXdLgzvSXbjHkkD6JEvWERD5g2nyW5VhZrl2r2c451ij7Z3hZ6tp6eC9J-Ld638EcfKZDBYQt5iGlni8bR8zqaj4JSsszlF5aJkYBI0ldvKZIGpVnBoHqM0813dNDn7gMb~NO7LRoH0DSqjqp6BgcRPG37D07lph~ZABSka-tuFZeA8LfLOvJ2yX06qmNe1A__"
    },
    {
      "id": 6,
      "title": "Las Vegas Aviators",
      "date": "OCT 15",
      "day": "SUN",
      "time": "4:30 PM",
      "addres": "Las Vegas Ballpark, Las Vegas, Nevada",
      "imgURL": "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMcy78xquYbaN8LDV49nkGXXnYs6VzJ5LHDiCoZHdvTnvdmhJEgHiu4-QkzPxG1IxGfnAoKtD9zDv-jhFQqpi7wNJlIiAspvtA7Wp4RNHO7nRxid5NLwFXYPjabVtQrN8AQv7b7uNBsxg8ikgHUxAY0~A6LEmTyJfJsfM3ke8c2TOlT3jIfkx6KKZQ2fry3wskWhztiE~B2XjvOJlE417Ld8WIUWo6xCE-E0u1MVjqGqP8s~g0hMbqjZFh2JvEpbh1cWjTimArviIO6RbPEhfjMEdC6zo7LtCuE-XEanZFycRZ1gBXrnfoiLBDoeCkq6lRCYVeMHAngb8~0wbKgGUw__"
    }
  ]


  const ref: any = useRef();

  const scroll = (direction: String) => {
    if (direction === "left") {
      ref ? (ref.current.scrollLeft -= 300) : null;
    } else {
      ref ? (ref.current.scrollLeft += 300) : null;
    }
  };
  return (
    <section className="first-section relative w-full 2xl:max-w-[80rem] bg-blue-50 h-[55rem] b pt-8 flex flex-col items-center mx-auto dark:bg-gradient-to-t from-gredientB to-gredientT">
      <div className="mx-auto text-center mb-10 mt-10 xl:mt-4 xl:mb-5 md:px-20 lg:px-8 xl:px-44">
        <h1 className="text-3xl font-bold mb-7 lg:text-5xl font-poppins">
          Collection Spotlight
        </h1>
        <p className="text-sm xl:text-base font-inter dark:text-zinc-200">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>
      <div
        className="flex items-center px-2 md:px-0 gap-10 py-2 w-[16rem] md:w-[68%] lg:w-[85%] xl:w-[69%] h-[70%] xl:h-[77%] overflow-x-auto overflow-y-hidden snap-x scroll-smooth"
        ref={ref}
      >
        {ticketCardData.map((item: any, index: any) => (
          <TicketCard key={index} items={item} />
        ))}
      </div>
      <div className="w-full h-12 text-xl font-bold bottom-80 absolute flex justify-between text-blue-500 md:px-8 lg:px-4 xl:px-24">
        <button
          className="w-7 h-10 xl:w-8 xl:h-12 border-2 border-blue-500"
          onClick={() => scroll("left")}
        >
          <IoIosArrowBack className="mx-auto"/>
        </button>
        <button
          className="w-7 h-10 xl:w-8 xl:h-12 border-2 border-blue-500"
          onClick={() => scroll("right")}
        >
          <IoIosArrowForward className="mx-auto"/>
        </button>
      </div>
    </section>
  );
};

export default SecondSection;
