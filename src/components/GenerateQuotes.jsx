import React from "react";
import { Button, Select, SelectItem } from "@nextui-org/react";
import QuoteCard from "./QuoteCard";
import { useFetchRandomQuotes } from "../api/getRandomQuotes";
import { useState, useEffect } from "react";
import { debounce } from "lodash";
import { useFetchTags } from "../api/getTags";

const GenerateQuotes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [fetchTags, setFetchTags] = useState([]);
  const { status, error, data, refetch } = useFetchRandomQuotes(fetchTags);
  const { status: tagStatus, error: tagError, data: items } = useFetchTags();
  const [quote, setQuote] = useState(null);
  console.log(items);

  useEffect(() => {
    if (data) {
      setQuote(data);
    }
  }, [data]);

  const handleButtonPress = debounce(() => {
    setFetchTags(selectedTags);
    refetch();
  }, 10);

  return (
    <>
      <QuoteCard quote={quote} />
      <Select
        className="max-w-sm mt-5"
        items={items}
        onChange={(e) => setSelectedTags(e.target.value)}
        label="Pick a Genre"
        placeholder={["Famous Quotes"]}
        defaultSelectedKeys={["Famous Quotes"]}
        selectionMode="single"
        onOpenChange={setIsOpen}
      >
        {items?.map((item) => (
          <SelectItem key={item.name} className="capitalize">
            {item.name}
          </SelectItem>
        ))}
      </Select>

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
