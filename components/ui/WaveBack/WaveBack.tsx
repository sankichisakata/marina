const WaveBack = () => {
  return (
    <div className="sample">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 300"
        width="1200"
        height="300"
      >
        <defs>
          <path
            d="M 0,0 v 100,0 q 150,50 300,0 t 300,0 q 150,50 300,0 t 300,0 v 0,-100 Z"
            id="wave"
          />
        </defs>
        <use xlinkHref="#wave" />
        <use xlinkHref="#wave" x="-30" y="10" />
        <use xlinkHref="#wave" x="-60" />
      </svg>
    </div>
  );
};

export default WaveBack;
