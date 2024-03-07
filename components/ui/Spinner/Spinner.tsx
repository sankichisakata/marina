const Spinner = () => {
  return (
    <div
      className="
      z-50 top-0 left-0 
      w-full h-screen bg-defwhite
      flex justify-center items-center
      "
    >
      <div className="h-14 md:h-20 w-14 md:w-20 animate-spin rounded-full border-4 border-t-transparent border-bordercolor"></div>
    </div>
  );
};

export default Spinner;
