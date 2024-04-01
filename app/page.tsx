"use client";
import React from "react";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";

const page = () => {
  // type data = {
  //   CardData: {
  //     id: number;
  //     title: string;
  //     totalEvents: number;
  //     sport: string;
  //     imgURL: string;
  //   };
  //   ticketCardData: {
  //     id: number;
  //     title: string;
  //     date: string;
  //     day: string;
  //     time: string;
  //     addres: string;
  //     imgURL: string;
  //   };
  //   adsdata: {
  //     title: string;
  //     disc: string;
  //     img: string;
  //   };
  // };

  // const data: any = {
  //   ticketCardData: [
  //     {
  //       id: 1,
  //       title: "Las Vegas Aviators",
  //       date: "OCT 15",
  //       day: "SUN",
  //       time: "4:30 PM",
  //       addres: "Las Vegas Ballpark, Las Vegas, Nevada",
  //       imgURL:
  //         "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMcy78xquYbaN8LDV49nkGXXnYs6VzJ5LHDiCoZHdvTnvdmhJEgHiu4-QkzPxG1IxGfnAoKtD9zDv-jhFQqpi7wNJlIiAspvtA7Wp4RNHO7nRxid5NLwFXYPjabVtQrN8AQv7b7uNBsxg8ikgHUxAY0~A6LEmTyJfJsfM3ke8c2TOlT3jIfkx6KKZQ2fry3wskWhztiE~B2XjvOJlE417Ld8WIUWo6xCE-E0u1MVjqGqP8s~g0hMbqjZFh2JvEpbh1cWjTimArviIO6RbPEhfjMEdC6zo7LtCuE-XEanZFycRZ1gBXrnfoiLBDoeCkq6lRCYVeMHAngb8~0wbKgGUw__",
  //     },
  //     {
  //       id: 2,
  //       title: "Sacramento River Cats",
  //       date: "OCT 15",
  //       day: "SUN",
  //       time: "4:30 PM",
  //       addres: "Sutter Health Park, Sacramento, california",
  //       imgURL:
  //         "https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EZo-HQ4yJRY~dUhQcMhA~35ZvUBoWGsttz-dbuwWCwNS-iagfxSXy8D0wUbI7E0DtSys0IP8ys-zbJuneStuL89zYqwmiiGVmsdfbrviRd6~-DGtSY7jg9VG35saVyEF3V~BTigA4UsAzQEEkcd7ssgXdLgzvSXbjHkkD6JEvWERD5g2nyW5VhZrl2r2c451ij7Z3hZ6tp6eC9J-Ld638EcfKZDBYQt5iGlni8bR8zqaj4JSsszlF5aJkYBI0ldvKZIGpVnBoHqM0813dNDn7gMb~NO7LRoH0DSqjqp6BgcRPG37D07lph~ZABSka-tuFZeA8LfLOvJ2yX06qmNe1A__",
  //     },
  //     {
  //       id: 3,
  //       title: "Las Vegas Aviators",
  //       date: "OCT 15",
  //       day: "SUN",
  //       time: "4:30 PM",
  //       addres: "Las Vegas Ballpark, Las Vegas, Nevada",
  //       imgURL:
  //         "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMcy78xquYbaN8LDV49nkGXXnYs6VzJ5LHDiCoZHdvTnvdmhJEgHiu4-QkzPxG1IxGfnAoKtD9zDv-jhFQqpi7wNJlIiAspvtA7Wp4RNHO7nRxid5NLwFXYPjabVtQrN8AQv7b7uNBsxg8ikgHUxAY0~A6LEmTyJfJsfM3ke8c2TOlT3jIfkx6KKZQ2fry3wskWhztiE~B2XjvOJlE417Ld8WIUWo6xCE-E0u1MVjqGqP8s~g0hMbqjZFh2JvEpbh1cWjTimArviIO6RbPEhfjMEdC6zo7LtCuE-XEanZFycRZ1gBXrnfoiLBDoeCkq6lRCYVeMHAngb8~0wbKgGUw__",
  //     },
  //     {
  //       id: 4,
  //       title: "Las Vegas Aviators",
  //       date: "OCT 15",
  //       day: "SUN",
  //       time: "4:30 PM",
  //       addres: "Las Vegas Ballpark, Las Vegas, Nevada",
  //       imgURL:
  //         "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMcy78xquYbaN8LDV49nkGXXnYs6VzJ5LHDiCoZHdvTnvdmhJEgHiu4-QkzPxG1IxGfnAoKtD9zDv-jhFQqpi7wNJlIiAspvtA7Wp4RNHO7nRxid5NLwFXYPjabVtQrN8AQv7b7uNBsxg8ikgHUxAY0~A6LEmTyJfJsfM3ke8c2TOlT3jIfkx6KKZQ2fry3wskWhztiE~B2XjvOJlE417Ld8WIUWo6xCE-E0u1MVjqGqP8s~g0hMbqjZFh2JvEpbh1cWjTimArviIO6RbPEhfjMEdC6zo7LtCuE-XEanZFycRZ1gBXrnfoiLBDoeCkq6lRCYVeMHAngb8~0wbKgGUw__",
  //     },
  //     {
  //       id: 5,
  //       title: "Sacramento River Cats",
  //       date: "OCT 15",
  //       day: "SUN",
  //       time: "4:30 PM",
  //       addres: "Sutter Health Park, Sacramento, california",
  //       imgURL:
  //         "https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EZo-HQ4yJRY~dUhQcMhA~35ZvUBoWGsttz-dbuwWCwNS-iagfxSXy8D0wUbI7E0DtSys0IP8ys-zbJuneStuL89zYqwmiiGVmsdfbrviRd6~-DGtSY7jg9VG35saVyEF3V~BTigA4UsAzQEEkcd7ssgXdLgzvSXbjHkkD6JEvWERD5g2nyW5VhZrl2r2c451ij7Z3hZ6tp6eC9J-Ld638EcfKZDBYQt5iGlni8bR8zqaj4JSsszlF5aJkYBI0ldvKZIGpVnBoHqM0813dNDn7gMb~NO7LRoH0DSqjqp6BgcRPG37D07lph~ZABSka-tuFZeA8LfLOvJ2yX06qmNe1A__",
  //     },
  //     {
  //       id: 6,
  //       title: "Las Vegas Aviators",
  //       date: "OCT 15",
  //       day: "SUN",
  //       time: "4:30 PM",
  //       addres: "Las Vegas Ballpark, Las Vegas, Nevada",
  //       imgURL:
  //         "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMcy78xquYbaN8LDV49nkGXXnYs6VzJ5LHDiCoZHdvTnvdmhJEgHiu4-QkzPxG1IxGfnAoKtD9zDv-jhFQqpi7wNJlIiAspvtA7Wp4RNHO7nRxid5NLwFXYPjabVtQrN8AQv7b7uNBsxg8ikgHUxAY0~A6LEmTyJfJsfM3ke8c2TOlT3jIfkx6KKZQ2fry3wskWhztiE~B2XjvOJlE417Ld8WIUWo6xCE-E0u1MVjqGqP8s~g0hMbqjZFh2JvEpbh1cWjTimArviIO6RbPEhfjMEdC6zo7LtCuE-XEanZFycRZ1gBXrnfoiLBDoeCkq6lRCYVeMHAngb8~0wbKgGUw__",
  //     },
  //   ],
  //   adsdata: [
  //     {
  //       title: "Advertisement title",
  //       disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //       img: "https://s3-alpha-sig.figma.com/img/c724/731e/f71497e0e3af85c77fa47046bb1f23cb?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hcDBsK4weZt8Xn5qj6nW8PTyWjQF1Ymo3AzKkf3fCp6fQb7wmw~4sv-jZgjj2REupfgw5yS-SwfYk3A4t0wrVY1tVvRCH7F4OzJ5wQ83JakPCLZPqzn6Ynqmue2ZJZDvWgdj1CrL866iG-pQEEe1XhvAxxI3UJHKlaf73ywWPaE-x8h1u1KVKYrv8FQrWpykUFhPezF~CbfHlogCgsbE3V5xX1CIefiL~TlA3Xen2NReAER6Vcu59wxu3JDwvdgTxHZcDF02o9B4tBOCcoD~XwQa~pdiYueAL9IDyTG4Nt~U4fyuD75ahnDhmZMr2syPwmukRa-XkKhA87TRNz5~tQ__",
  //     },
  //   ],
  // };

  return (
    <div className="w-full min-h-screen px-[3%] py-[7%] lg:py-[3%] xl:px-[5%] bg-zinc-50 dark:bg-darkMC dark:text-white">
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default page;
