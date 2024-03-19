import cover from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-around items-center py-5 px-3 lg:px-0 border-b-2">
      <h1 className="text-2xl lg:text-4xl font-bold">React Knowledge Cafe</h1>
      <img src={cover} alt="" />
    </div>
  );
};

export default Header;
