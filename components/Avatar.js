import Image from "next/image";
const Avatar = ({ url }) => {
  return <Image loading="lazy" src={url} alt="profile pic" />;
};

export default Avatar;
