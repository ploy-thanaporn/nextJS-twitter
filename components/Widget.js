import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import New from "./New";
import { AnimatePresence, motion } from "framer-motion";

const Widget = ({ newsResults, randomUserResults }) => {
  const [articleNum, setArticleNum] = useState(3);
  const [userNum, setUserNum] = useState(3);

  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
        <div className="flex items-center p-3 rounded-full bg-red-300 relative">
          <SearchIcon className="h-5 z-50 text-gray-500" />
          <input
            type="text"
            placeholder="Search Twitter"
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
          />
        </div>
      </div>
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">What's happenning</h4>
        <AnimatePresence>
          {newsResults.slice(0, articleNum).map((article) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <New key={article.title} article={article} />
            </motion.div>
          ))}
        </AnimatePresence>

        <button
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
          onClick={() => setArticleNum(articleNum + 3)}
        >
          Show more
        </button>
      </div>
      <div className="sticky top-16 text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        <AnimatePresence>
          {randomUserResults.slice(0, userNum).map((user) => (
            <motion.div
              key={user.login.username}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200 transition duration-500 ease-out"
                key={user.login.username}
              >
                <img
                  src={user.picture.thumbnail}
                  alt=""
                  className="rounded-full"
                  width="40"
                />
                {/* truncate = ถ้าชื่อยาวมันจะ ... */}
                <div className="truncate ml-5 leading-5">
                  <h4 className="font-bold hover:underline text-[14px]">
                    {user.login.username}
                  </h4>
                  <h5 className="text-[13px] text-gray-500 truncate">{`${user.name.first} ${user.name.last}`}</h5>
                </div>
                <button className="bg-black text-white text-sm px-3.5 py-1.5 rounded-full font-bold ml-auto">
                  Follow
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <button
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
          onClick={() => setUserNum(userNum + 3)}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default Widget;
