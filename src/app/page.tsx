import Image from "next/image";
import Header from "@/components/Header";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start ml-[122px] mb-20 gap-y-6">
          <h1 className="text-[40px] w-[496px] font-bold">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-[29.24px] w-[798.9px] font-medium text-[#787054]">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <Button />
        </div>
        <div className="w-1/2 flex justify-center items-center mr-96 mb-24">
          <Image
            src={"/images/rs-group-wrap ⏵ rs-group.svg"}
            alt="image_loading"
            width={421.38}
            height={573.59}
            
          />
        </div>
      </div>
    </div>
  );
}
