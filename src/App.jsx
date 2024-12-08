import { Sidebar } from "./components/Sidebar";
import { TwitterForm } from "./components/TwitterForm";

import { Tweet } from "./components/Tweet";
import { v4 } from "uuid";
import { getAvatar, getRadomImage } from "./utils/generateimages";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TrendItem } from "./components/TrendItem";
import { FollowItem } from "./components/FollowItem";

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      addNewRandomTweets();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const addNewRandomTweets = () => {
    const randomTweets = [
      "Às vezes, as melhores ideias surgem quando menos esperamos. 💡",
      "Quem nunca perdeu a chave de casa e descobriu o valor de um bom chaveiro? 🔑😂",
      "A vida é uma sequência de altos e baixos... mas o importante é saber dançar no meio deles! 🎶",
      "Sinto que o café tem mais poder de transformar o dia do que a gente imagina! ☕",
      "O melhor jeito de começar o dia é com um sorriso e uma boa música! 🎧😁",
    ];
    const randomTweet =
      randomTweets[Math.floor(Math.random() * randomTweets.length)];

    addNewTweet(randomTweet, Math.random() > 0.7);
  };

  const addNewTweet = (content, includeImage = false) => {
    const newTweet = {
      id: v4(),
      name: "User",
      username: `user${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(`user${Math.floor(Math.random() * 1000)}@email.com`),
      content,
      time: new Date().toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      image: includeImage ? getRadomImage() : null,
      likes: 0,
      retweets: 0,
      comments: 0,
    };
    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };
  return (
    <div className="flex mx-auto max-w-7xl">
      <Sidebar />
      <main className="flex-grow border-l  border-r border-gray-700 mx-w-xl">
        <header className="stick top-0 z-10 bg-twitter-background bg-opacity-80 backdrop-blur-sm">
          <h2 className="px-4  py-3 text-xl font-bold">For you</h2>
        </header>
        <TwitterForm
          onTweet={(content) => addNewTweet(content, Math.random() > 0.6)}
        />
        <div>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </main>
      <aside className="hidden xl:block w-80 px-4">
        <div className="stick top-0 pt-2">
          <div className="relative">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute top-3 left-3 text-gray-500"
            />
            <input
              placeholder="Search Twitter"
              className="w-full bg-gray-800 text-white rounded-full outline-none py-2 pl-10 pr-4"
            />
          </div>
          <div className="bg-gray-800 rounded-xl mt-4 p-4">
            <h2 className="font-bold text-xl mb-4">Subscribe to Premiu</h2>
            <p className="text-gray-500 mb-4">
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </p>
            <button className="bg-twitter-blue text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">
              Subscribe
            </button>
          </div>
          <div className="bg-gray-800 rounded-xl mt-4 p-4">
            <h2 className="font-bold text-xl mb-4">Whats happening</h2>
            <TrendItem category="NFL . LIVE" name="Cardinals at bills" />
            <TrendItem category="Sports . Trending" name="kyle Dugger" />
            <TrendItem
              category="Sports . Trending"
              name="Antony Richardson"
              TweetCount="14,201"
            />
            <TrendItem
              category="Sports . Trending"
              name="Bryce young"
              TweetCount="1,466"
            />
            <TrendItem
              category="Sports . Trending"
              name="Daboll"
              TweetCount="1,342"
            />
          </div>
          <div className="bg-gray-800 rounded-xl mt-4 p-4">
            <h2 className="font-bold text-xl mb-4">Who to follow</h2>
            <FollowItem name="Bill Gates" username="BillGates" />
            <FollowItem name="Will Smthi" username="Wills" />
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
