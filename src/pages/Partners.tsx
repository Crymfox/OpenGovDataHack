import { Badge } from "@tremor/react"
import Card from "../components/Card"

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
                <Card type={data[0]} />
                <Card type={data[1]} />
                <Card type={data[2]} />
                <Card type={data[3]} />
                <Card type={data[4]} />
                <Card type={data[5]} />
                <Card type={data[6]} />
            </div>           
        </div>
    )
}

export default Partners