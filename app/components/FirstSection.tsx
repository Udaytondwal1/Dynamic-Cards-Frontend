import React, { FC } from "react";
import Card from "./Card";
import AdCard from "./AdCard";


const FirstSection: FC = () => {
  const CardData = [
    {
      id: 1,
      title: "Sacramento River Cats",
      totalEvents: 48,
      sport: "Baseball",
      imgURL:
        "https://s3-alpha-sig.figma.com/img/ceed/8067/dc33760174d3f67737f6e318d0f118ff?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R2IDtoTWwq630UlH0sKNg~PU50LNXExnhu5Lby1e1aLdOkwydkRY~HXB-V6cSPffJGRhDXSNxxlK-fhzp6oCJw4AMxMfrGYV7h4Ab12AafygPq3SNS7OE3WojSpsi6bD5ExlN-8qRgly1WcKMHSBoEw3u3FniJkrJ0w2ImgmjNYHWah-pXfm~a9T48AtxmKebamaJpr2xn36RUYW78500AjVkEPB6zySkuRUXbT3H98tztlw6dsNDkPqQlf15BAyQy9kSllufmh3lJ1feLC8QlXTwq4hqY~A9xr4tQBa3bN7Dy1OVBs-yFpo3a-qV2hwLo72kDN2Wsbn5ZDyANVrIQ__",
    },
    {
      id: 2,
      title: "Las Vegas Aviators",
      totalEvents: 28,
      sport: "Baseball",
      imgURL:
        "https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TK4llJT2pgcu3ilu6zcGbJNMPy6WZ2BCQ3HuVKG51H1q7sxA7SeuaVkAvOX6VIvYUE2Ojd8xIg0-fOZA1fMbGaNc2FnbVB3Ns3k1Zr4WFToAe1QvcU8UpVmc-Hl2lvznD07nJjYwjW9k5CJhDOnvQOXpqXcOKyrwbTU8BF2am3kQ51jM9Wl74B9OpgcTDMLJZBJxbcd8SE4Uy5vWcJAfgXMbz~jU8xojWH6omeDS37Hdb1moRma8i0SvodDH5fjTRgwuGL7gFwCD7~83Sfu6i2FQIrkKpMo6hRwsC-BEHL1XzJc~EAYnxuCSsf~9WlUkH~jNtemUeuTd4lDQsYTFYA__",
    },
    {
      id: 3,
      title: "New Jersey Devils",
      totalEvents: 15,
      sport: "Ice Hockey",
      imgURL:
        "https://s3-alpha-sig.figma.com/img/b290/2f7a/b2fcf21c696811f745109da24a740d73?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aOIL0vbL-m9iT5zk9QgIMAuvKeb743mI79NOZ~ml1KEP~5ktJekjebnlUp7PiGpZqtcwxLdfAvTLnIph0yxbxyo-vmObi3f8KCiIqKqbJkdTzrv8KaYp8~ftNfuIyohzBck2tHl0WaPSeh1uFvI~9edGXYdE6oiGv8tB1qM7hWcahtigUHRLEs0QA5HsQbSgw9e~fmORNmgRU1fD3fC8vlKMm-hHSUOE6zaL15rcTYR5uFgIt~HDJk2wippN6nlRelBTireM66ciiK1nsNx~jP8W8UFom6sdt-RwQvPKSPVdcENCEY2X7Zj2DOJHW7yLu6nLlN3xgctknE0yAy0HjA__",
    },
    {
      id: 4,
      title: "Las Vegas Aviators",
      totalEvents: 28,
      sport: "Baseball",
      imgURL:
        "https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TK4llJT2pgcu3ilu6zcGbJNMPy6WZ2BCQ3HuVKG51H1q7sxA7SeuaVkAvOX6VIvYUE2Ojd8xIg0-fOZA1fMbGaNc2FnbVB3Ns3k1Zr4WFToAe1QvcU8UpVmc-Hl2lvznD07nJjYwjW9k5CJhDOnvQOXpqXcOKyrwbTU8BF2am3kQ51jM9Wl74B9OpgcTDMLJZBJxbcd8SE4Uy5vWcJAfgXMbz~jU8xojWH6omeDS37Hdb1moRma8i0SvodDH5fjTRgwuGL7gFwCD7~83Sfu6i2FQIrkKpMo6hRwsC-BEHL1XzJc~EAYnxuCSsf~9WlUkH~jNtemUeuTd4lDQsYTFYA__",
    },
    {
      "title": "Advertisement title",
      "disc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "imgURL": "https://s3-alpha-sig.figma.com/img/c724/731e/f71497e0e3af85c77fa47046bb1f23cb?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hcDBsK4weZt8Xn5qj6nW8PTyWjQF1Ymo3AzKkf3fCp6fQb7wmw~4sv-jZgjj2REupfgw5yS-SwfYk3A4t0wrVY1tVvRCH7F4OzJ5wQ83JakPCLZPqzn6Ynqmue2ZJZDvWgdj1CrL866iG-pQEEe1XhvAxxI3UJHKlaf73ywWPaE-x8h1u1KVKYrv8FQrWpykUFhPezF~CbfHlogCgsbE3V5xX1CIefiL~TlA3Xen2NReAER6Vcu59wxu3JDwvdgTxHZcDF02o9B4tBOCcoD~XwQa~pdiYueAL9IDyTG4Nt~U4fyuD75ahnDhmZMr2syPwmukRa-XkKhA87TRNz5~tQ__"
    },
  ];
  return (
    <section className="first-section relative w-full 2xl:max-w-[80rem] h-[42rem] m-auto mb-[3rem] flex flex-col justify-between">
      <span className="w-fit font-bold text-xl border-b-2 border-blue-500 pb-1 font-poppins">
        Sports
      </span>
      <div className="flex gap-5 min-w-full h-[79%] py-4 mb-10 overflow-x-auto overflow-y-hidden snap-x">
        {
        CardData.map((item: any, index: any) => ( 
          item.id ? <Card key={index} items={item} /> : <AdCard items={item}/>
        ))
        }
      </div>
      <div className="flex items-center justify-center ">
        <button className="w-32 h-10 rounded-sm font-semibold text-white bg-buttonC text-sm font-inter">
          See More
        </button>
      </div>
    </section>
  );
};

export default FirstSection;
