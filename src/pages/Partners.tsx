import { Badge } from "@tremor/react"
import PartnerCard from "../components/PartnerCard"

const data = [
    "Academic institutions",
    "Government agencies",
    "Non-profit organizations",
    "Private companies",
    "Corporate sponsors",
    "Student organizations",
    "Research institutions",
    "Universities",
    "Other"
]

const Partners = () => {
    return (
        <div className='mx-16'>
            <h1 className="text-5xl text-slate-800 m-20 grid place-items-center">Our Partners:</h1>
            {data.map((item, index) => {
                return (
                    <Badge key={index} className="m-2 cursor-pointer" size="lg">
                        <h1 className="text-lg">
                            {item}
                        </h1>
                    </Badge>
                )
            })}
            <div className="flex flex-wrap">
                <PartnerCard type={data[0]} />
                <PartnerCard type={data[1]} />
                <PartnerCard type={data[2]} />
                <PartnerCard type={data[3]} />
                <PartnerCard type={data[4]} />
                <PartnerCard type={data[5]} />
                <PartnerCard type={data[6]} />
            </div>           
        </div>
    )
}

export default Partners