import { Metric, Card, Text, Button } from "@tremor/react";
import { Link } from "react-router-dom";

const QuizzCard = ({ title, description }: any) => {
  return (
    <Card
      className="flex flex-col space-y-2"
      decoration="top"
      decorationColor="indigo"
    >
      <Metric>{title}</Metric>
      <Text>{description}</Text>
      <div className="flex-1 flex justify-end items-end w-full">
        <Button>
          <Link to="/quiz">Start</Link>
        </Button>
      </div>
    </Card>
  );
};

export default QuizzCard;
