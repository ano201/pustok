import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Satisfaction = () => {
  return (
    <div style={{ width: "18rem" }}>
      <figure className="rounded-xl p-8 text-gray-100 bg-slate-400 my-6">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="/Images/library.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
             book name
            </p>
            <p className="text-lg font-medium">
             writers name
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-slate-700 dark">Ratings</div>
            <div className="ml-2">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Satisfaction;
