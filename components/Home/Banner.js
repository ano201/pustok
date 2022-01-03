import Image from "next/image";
import bannerImg from "../../Images/library.jpg";
const Banner = () => {
  return (
    <div className="">
      <Image src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
