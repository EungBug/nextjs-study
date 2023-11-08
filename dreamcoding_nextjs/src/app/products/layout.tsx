const ProductLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <nav className="flex gap-2 px-2 py-1 border border-red-400">
        <a href="">여성옷</a>
        <a href="">남성옷</a>
      </nav>
      <section>
        {children}
      </section>
    </>
  );
};

export default ProductLayout;