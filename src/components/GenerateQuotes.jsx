import React from "react";
import { Button } from "@nextui-org/react";
import QuoteCard from "./QuoteCard";
import { useFetchRandomQuotes } from "../api/getRandomQuotes";
import { useState, useEffect } from "react";
import { debounce } from "lodash";

const GenerateQuotes = () => {
  const { status, error, data, refetch } = useFetchRandomQuotes();
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    if (data) {
      setQuote(data);
    }
  }, [data]);

  const handleButtonPress = debounce(() => {
    refetch();
  }, 10);

  return (
    <>
      <QuoteCard quote={quote} />
      <Button
        radius="full"
        onPress={handleButtonPress}
        className="bg-gradient-to-tr mt-5 from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        Generate Quotes
      </Button>
    </>
  );
};

export default GenerateQuotes;
