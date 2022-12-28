// import Image from "next/image";

function Avatar({ size, url }) {
  let width = 'w-12'
  size === 'lg' ? width = 'w-24' : 'w-12'
  return (
    <div className={`${width} rounded-full overflow-hidden`}>
      {/* <Image src={url} alt="avatar" width="48" height="48" /> */}
      <img src={url} alt="avatar" />
    </div>
  );
}

export default Avatar;
