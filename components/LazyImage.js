const LazyImages = (props) => {
  const { image } = props;
  return (
    <>
      {image ? (
        <img className="img-fluid" src={image.sourceUrl} alt={image.slug} />
      ) : (
        <img
          className="img-fluid"
          src="https://wordpress.deniscarpe.pl/wp/wp-content/uploads/woocommerce-placeholder.png"
          alt="woocommerce-placeholder"
        />
      )}
    </>
  );
};

export default LazyImages;
