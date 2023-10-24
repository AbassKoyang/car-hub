"use client"
import { SHowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import { CustomButton } from ".";
import { updateSearhParams } from "@/utils";

const ShowMore = ({pageNumber, isNext} : SHowMoreProps) => {
    const router = useRouter();
    const handleNavigation= () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearhParams('limit', `${newLimit}`);
        router.push(newPathName, {scroll: false});
    };

  return (
    <div className="w-full flex-center gap-5 mt-10">
         {!isNext && (
            <CustomButton 
             title="Show More"
             btnType="button"
             containerStyles="bg-primary-blue rounded-full text-white"
             handleClick={handleNavigation}
            />
         )

         }
    </div>
  )
}

export default ShowMore