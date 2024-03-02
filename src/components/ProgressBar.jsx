const ProgressBar = ({ currentProgress }) => {
  return (
    <div className="flex justify-between w-full py-1 my-8  px-8">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className={`h-1 flex-grow mx-1 rounded-full ${index < currentProgress ? 'bg-mypurple' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;