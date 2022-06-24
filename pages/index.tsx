/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type PostType = {
  id: string;
  name: string;
  squareImage: string;
};

const Home: NextPage = () => {
  const router = useRouter();
  const [posts, setPosts] = useState<PostType[] | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const results = await (
        await fetch("https://billions-api.nomadcoders.workers.dev/")
      ).json();
      setPosts(results);
    })();
  }, []);

  const onClick = (id: string) => {
    router.push({
      pathname: `/person/${id}`,
    });
  };

  return (
    <main className="w-ful h-fit p-4 bg-base-200 gap-4 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {posts?.map((element) => {
        return (
          <div
            key={element.id}
            className="card bg-base-100 shadow-sm rounded-md group hover:cursor-pointer hover:shadow-lg transition-all"
            onClick={() => onClick(element.id)}
          >
            <figure>
              <img
                className="h-60 w-60 object-cover rounded-md mt-8 shadow-lg saturate-50 group-hover:saturate-100"
                src={element.squareImage}
                alt={element.name}
              />
            </figure>
            <div className="card-body">
              <div className="card-title">{element.name}</div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Home;
