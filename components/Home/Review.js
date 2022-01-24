import Link from 'next/link';
import Satisfaction from "./Satisfaction";

const Review = () => {
  return (
    <div className="bg-gray-100">
      <h1 className="ml-2 text-2xl font-semibold text-gray-700">
        Reader&apos;s Satisfaction
      </h1>
      <div className="max-w-6xl mx-auto flex justify-evenly flex-wrap">
        <Satisfaction></Satisfaction>
        <Satisfaction></Satisfaction>
        <Satisfaction></Satisfaction>
      </div>
      <div className="text-right px-8 py-4 text-stone-600 text-lg font-extrabold">
        <Link href="/allReviews">See All Reviews</Link>
      </div>
    </div>
  );
};

export default Review;
