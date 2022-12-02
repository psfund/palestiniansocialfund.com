import { useState } from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Lightbox from "react-image-lightbox";
import Head from "next/head";

import { MainLayout } from "src/layouts";
import { trimText } from "src/utils/helpers";
import posts from "src/utils/posts";

const Home = () => {
  const [readMore, setReadMore] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [postIndex, setPostIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const onReadMoreClick = (id) => {
    console.log(id);
    if (readMore[id]) {
      const newReadMore = { ...readMore };
      delete newReadMore[id];
      setReadMore({ ...newReadMore });
    } else {
      setReadMore({ ...readMore, [id]: true });
    }
  };

  const onImageClick = (postIdx, photoIdx) => {
    setPostIndex(postIdx);
    setPhotoIndex(photoIdx);
    setIsOpen(true);
  };

  return (
    <MainLayout>
      <Head>
        <title>Home | Palestinian Social Fund</title>
      </Head>

      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <h1 className="mt-4 text-6xl tracking-tight font-extrabold text-black sm:mt-5 sm:leading-none lg:mt-6 xl:text-8xl">
                Palestinian <br />
                Social <br />
                Fund
              </h1>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div className="bg-white sm:w-full sm:mx-auto sm:rounded-md sm:overflow-hidden">
              <div className="flex-1 p-4 border rounded-md border-gray-300">
                <p className="text-2xl tracking-tight font-medium border-r-2 border-gray-50 mb-3">
                  The Palestinian Social Fund continuously raises money to support
                  Palestinian cooperative farms.
                </p>
                <p className="mt-6 text-base">
                  We believe the Palestinian diaspora has an integral role to play in achieving
                  food sovereignty and breaking the dependency on foreign aid and the occupation.
                </p>
                <p className="mt-3 text-base">
                  The PSF is way for us to materially support farming cooperatives
                  as <em>"there can be no liberation without sovereignty over our daily bread."</em>
                </p>
                <p className="mt-3 text-base">
                  We're a volunteer-run non-profit with clear values:
                </p>
                <ul className="mt-3 ps-3 list-disc list-inside">
                  <li className="text-base mb-2 tracking-tight">
                    We don’t take salaries.{" "}
                  </li>
                  <li className="text-base mb-2 tracking-tight">
                    We don’t accept conditions.{" "}
                  </li>
                  <li className="text-base mb-2 tracking-tight">
                    We don’t make conditions.{" "}
                  </li>
                  <li className="text-base mb-2 tracking-tight">
                    We don’t take money from organizations or big donors.{" "}
                  </li>
                  <li className="text-base mb-2 tracking-tight">
                    We believe the fund’s success will be determined by the people’s
                    solidarity.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div>
            <div className="pb-5 border-b border-gray-200">
              <h3 className="text-2xl leading-6 font-medium text-gray-900">
                Recent news
              </h3>
            </div>
          </div>
          <ul role="list" className="divide-y divide-gray-200">
            {posts.map((post, postIdx) => (
              <li key={postIdx} className="px-4 py-10 sm:px-0">
                <div>
                  <div className="mb-2 text-lg text-gray-900">
                    <div dangerouslySetInnerHTML={{ __html: trimText(post.caption, readMore[postIdx] ? 1000 : 50) }} />
                    {" "}
                    {post.caption.split(" ").length > 50 &&
                    !readMore[postIdx] ? (
                      <button
                        className="text-sm underline cursor-pointer"
                        onClick={() => onReadMoreClick(postIdx)}
                      >
                        read more
                      </button>
                    ) : null}
                  </div>
                  <p className="flex items-center mb-1 text-base text-gray-500">
                    <LocationMarkerIcon className="h-4 w-4 mr-1" />
                    {post.location} {post.place && `/ ${post.place}`} ·{" "}
                    {post.date}
                  </p>
                </div>

                <ul
                  role="list"
                  className="mt-4 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                >
                  {post.images.map((image, imageIdx) => (
                    <li key={imageIdx} className="relative">
                      <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden">
                        <img
                          src={image}
                          alt=""
                          className="group-hover:opacity-75 object-cover pointer-events-none"
                        />
                        <button
                          type="button"
                          className="absolute inset-0 focus:outline-none"
                          onClick={() => onImageClick(postIdx, imageIdx)}
                        >
                          <span className="sr-only">
                            View details for {imageIdx}
                          </span>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={posts[postIndex].images[photoIndex]}
            nextSrc={
              posts[postIndex].images[
                (photoIndex + 1) % posts[postIndex].images.length
              ]
            }
            prevSrc={
              posts[postIndex].images[
                (photoIndex + posts[postIndex].images.length - 1) %
                  posts[postIndex].images.length
              ]
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + posts[postIndex].images.length - 1) %
                  posts[postIndex].images.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex(
                (photoIndex + posts[postIndex].images.length + 1) %
                  posts[postIndex].images.length
              )
            }
          />
        )}
      </div>
    </MainLayout>
  );
};

export default Home;
