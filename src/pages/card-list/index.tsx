import React, { FC, useEffect, useState } from "react";
import _ from "lodash";

import { Card } from "components/Card";
import { getCardList } from "utils/api.service";
import { Pagination } from "components/Pagination";

const CardList: FC = () => {
  const [cards, setCards] = useState<GatheringCard[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(24);
  const [searchString, setSearchString] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const debouncedSearch = _.debounce((e) => {
    setSearchString(e.target.value);
  }, 500)

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setIsLoading(true);
        const result = await getCardList({ page, pageSize, name: searchString });

        setCards([...result]);
      } catch (err) {
        console.error(err);
      }

      setIsLoading(false);
    }

    fetchCards();
  }, [page, pageSize, searchString]);

  return (
    <div className="py-20 px-5 mx-auto">
      <div className="w-full py-10 flex justify-center">
        <input type="search" name="search" placeholder="Search" defaultValue={searchString} className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border border-solid border-gray-300" onChange={debouncedSearch} />
      </div>
      <div className="grid 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
        {
          cards.map((card) => (
            <Card
              key={card.id}
              data={card}
              isShowAdd={true}
            />
          ))
        }
      </div>
      {
        cards.length === 0 && <div className="w-full text-center">No Cards</div>
      }
      <Pagination
        page={page}
        pageSize={pageSize}
        goToPage={(index: number) => setPage(index)}
      />
    </div>
  )
};

export default CardList;