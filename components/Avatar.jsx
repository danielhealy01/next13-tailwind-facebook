function Avatar({ size, url }) {
  let width = 'w-12'
  size === 'lg' ? width = 'w-24' : 'w-12'
  return (
    <div className={`${width} rounded-full overflow-hidden`}>
      <img src={url} alt="avatar" />
    </div>
  );
}

export default Avatar;
