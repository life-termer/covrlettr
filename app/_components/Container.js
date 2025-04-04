function Container({ children }) {
  return (
    <div className="sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto px-3 container">
      {children}
    </div>
  );
}
export default Container;
