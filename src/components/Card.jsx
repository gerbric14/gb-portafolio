import fcm from '../assets/fcmovil.webp'
import styles from '../data/styles';

export const Card = () => (
  <div
    className={`max-w-sm rounded-xl overflow-hidden bg-dimWhite ${styles.marginY} `}
  >
    <div className="">
      <img className="w-full" src={fcm} alt="Sunset in the mountains" />
    </div>

    {/* Linea */}
    <hr className="sm:mx-auto border-gray-700 " />

    <div className="px-6 py-2">
      <div className="font-bold text-xl mb-2 text-[#145b88]">
        The Coldest Sunset
      </div>
      <p className="text-base text-primarygb">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </div>

    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-normal text-primary gb mr-2 mb-2">
        #React
      </span>
      <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-normal text-primary gb mr-2 mb-2">
        #JavaScritp
      </span>
      <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-normal text-primary gb mr-2 mb-2">
        #TailwindCss
      </span>
    </div>

    <div className="px-6 py-2">
      <a
        href="#"
        className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 mb-2"
      >
        Ver más
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </a>
    </div>
  </div>
);

