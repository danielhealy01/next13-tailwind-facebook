function Avatar({ size }) {
  let width = 'w-12'
  size === 'lg' ? width = 'w-24' : 'w-12'
  return (
    <div className={`${width} rounded-full overflow-hidden`}>
      <img src="../1516856346853.jpeg" alt="avatar" />
    </div>
  );
}

export default Avatar;
