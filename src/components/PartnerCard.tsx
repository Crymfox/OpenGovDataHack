import { Badge } from "@tremor/react"

type Props = {
    type: string
}

const PartnerCard = ({type}: Props) => {
    return (
        <div className="rounded hover:shadow-lg cursor-pointer border-2 border-blue-800 p-5 grid place-items-center h-80 w-72 m-5">
            <img src="/assets/Partner.png" alt="" />
            <h1 className="text-2xl text-slate-800">Partner Title</h1>
            <p className="text-base text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <div className="flex flex-wrap">
                <Badge className="m-2" size="sm">{type}</Badge>
            </div>
        </div>
    )
}

export default PartnerCard