function Card({children, noPadding}) {
  let classes = "bg-white shadow-md shadow-gray-300 rounded-md mb-5";

  !noPadding ? classes += ' p-4' : classes

  return (  
      <div className={classes}>
          {children}
    </div>
  )
}

export default Card