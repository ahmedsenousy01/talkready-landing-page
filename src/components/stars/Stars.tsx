import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline} from "@heroicons/react/24/outline";


// TODO: switch this to a client component
export default function Stars({rating}:{rating: number}) {
    const stars = [];
    const container_shared_classes = "relative w-5";
    const icon_shared_classes = "absolute w-full left-0 top-0";
    let i = 0;

    // skip full stars
    for (;i < Math.floor(rating); i++)
        stars.push(
            <div key={i} className={`${container_shared_classes}`}>
                <StarIconSolid className={`${icon_shared_classes}`}/>
            </div>
        )

    // half star
    if ((rating - i) > 0) {
        stars.push(
            <div key={i} className={`${container_shared_classes}`}>
                <StarIconSolid viewBox="0 0 12 24" overflow={"hidden"}
                    className={`${icon_shared_classes} !w-1/2`}/>
                <StarIconOutline className={`${icon_shared_classes}`}/>
            </div>
        )
        i++;
    }

    // empty stars
    for (;i < 5; i++)
        stars.push(
            <div key={i} className={`${container_shared_classes}`}>
                <StarIconOutline className={`${icon_shared_classes}`}/>
            </div>
        )

    return (
        <div className={"flex"}>
            {stars}
        </div>
    )
}
