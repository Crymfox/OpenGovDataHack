import { Toggle, ToggleItem } from "@tremor/react"

type optionsType = {
    answerText: string,
    isCorrect: boolean
}

type Props = {
    number: number,
    question: string,
    options: optionsType[]
}

const Question = ({number, question, options}: Props) => {
    return (
        <div className="mx-20">
            <div className="flex text-2xl m-5">
                <h1 className="font-bold text-slate-800">{number}.&nbsp;</h1>
                <p className="text-slate-600">{question}</p>
            </div>
            {options.map((item, index) => {
                return (
                    <Toggle key={index} className="m-2 cursor-pointer">
                        <ToggleItem value={index.toString()} text={options[index].answerText} />
                    </Toggle>
                )
            })}
        </div>
    )
}

export default Question