const Card = (props) => {
  return (
    <div className="border border-black px-4 py-2 m-2">
      <h1 className="text-white bg-black text-xl ">{props.name}</h1>
      <button>{props.btnText}</button>
    </div>
  );
};

export default Card;
