import { CircleMinus, CirclePlus } from "lucide-react";

export default function GuestComponent(props: {index: Number}) {
    return (
        <div className={`absolute left-${props.index} z-1 mt-3 rounded-[32px] border shadow-md w-1/2 px-8 right-0 top-full`}>
          <section className="flex justify-between py-6 border-b-[1px]">
            <div className="flex flex-col">
              <span>Adults</span>
              <span className="text-sm text-[#6a6a6a]">Ages 13 or above</span>
            </div>
            <div className="flex items-center">
              <CircleMinus color="grey" size="32" strokeWidth="1" />
              <span className="mx-2">0</span>
              <CirclePlus color="grey" size="32" strokeWidth="1" />
            </div>
          </section>
          <section className="flex justify-between py-6 border-b-[1px]">
            <div className="flex flex-col">
              <span>Children</span>
              <span className="text-sm text-[#6a6a6a]">Ages 2-12</span>
            </div>
            <div className="flex items-center">
              <CircleMinus color="grey" size="32"  strokeWidth="1" />
              <span className="mx-2">0</span>
              <CirclePlus color="grey" size="32"  strokeWidth="1" />
            </div>
          </section>
          <section className="flex justify-between py-6 border-b-[1px]">
            <div className="flex flex-col">
              <span>Infants</span>
              <span className="text-sm text-[#6a6a6a]">Under 2</span>
            </div>
            <div className="flex items-center">
              <CircleMinus color="grey" size="32"  strokeWidth="1" />
              <span className="mx-2">0</span>
              <CirclePlus color="grey" size="32"  strokeWidth="1" />
            </div>
          </section>
          <section className="flex justify-between py-6">
            <div className="flex flex-col">
              <span>Pets</span>
              {/* <span className="">Ages 13 or above</span> */}
            </div>
            <div className="flex items-center">
              <CircleMinus color="grey" size="32"  strokeWidth="1" />
              <span className="mx-2">0</span>
              <CirclePlus color="grey" size="32"  strokeWidth="1" />
            </div>
          </section>
        </div>)
    }
    