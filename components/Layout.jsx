import Navigation from "./Navigation";


function Layout({children, hideNavigation}) {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
    { !hideNavigation && (
      <div className="w-3/12">
        <Navigation />
      </div>
    )}
      <div className={hideNavigation ? 'w-full' : 'w-9/12'}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
