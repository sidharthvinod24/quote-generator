import React from "react";
import { Card, CardBody, CardHeader, Image, Button } from "@nextui-org/react";

const QuoteCard = ({ quote }) => {
  console.log(quote);
  return (
    <>
      <Card className="py-4 mt-10 max-w-md">
        <CardHeader className="pb-0 pt-2 px-4 flex-col  justify-center items-center">
          <h4 className="font-bold text-2xl">Quote of the Day</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 text-pretty">
          <h1 className="font-bold text-2xl">"{quote?.content}"</h1>
          <h1 className="flex justify-end mt-5 italic">-{quote?.author}</h1>
        </CardBody>
      </Card>
    </>
  );
};

export default QuoteCard;
