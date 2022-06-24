/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type PersonType = {
  id: string;
  about: string[];
  bio: string[];
  city: string;
  industries: string[];
  name: string;
  squareImage: string;
};

const Detail = () => {
  const router = useRouter();
  const [person, setPerson] = useState<PersonType | undefined>(undefined);

  useEffect(() => {
    if (router.query.id) {
      (async () => {
        const results = await (
          await fetch(
            `https://billions-api.nomadcoders.workers.dev/person/${router.query.id}`
          )
        ).json();
        setPerson(results);
      })();
    }
  }, [router]);

  console.log(person);

  return (
    <div className="p-4 bg-base-200">
      {person && (
        <div>
          <div className="w-full bg-base-100 p-4 rounded-md shadow-sm mb-4">
            <img
              className="rounded-md shadow-md"
              src={person.squareImage}
              alt={person.name}
            />
          </div>
          <div className="w-full bg-base-100 p-4 rounded-md shadow-sm mb-4 flex flex-col gap-2">
            <div className="text-lg font-bold">이름</div>
            <div>{person.name}</div>
          </div>
          <div className="w-full bg-base-100 p-4 rounded-md shadow-sm mb-4 flex flex-col gap-2">
            <div className="text-lg font-bold">도시</div>
            <div>{person.city}</div>
          </div>
          <div className="w-full bg-base-100 p-4 rounded-md shadow-sm mb-4 flex flex-col gap-2">
            <div className="text-lg font-bold">산업</div>
            <div>{person.industries.map((el) => `${el}`)}</div>
          </div>
          <div className="w-full bg-base-100 p-4 rounded-md shadow-sm flex flex-col gap-2">
            <div className="text-lg font-bold">생애</div>
            <div>{person.bio.map((el) => `${el}`)}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Detail;
