let totalCount = 0;
let totalPrice = 0;

export const handleAddToCard = (
  slug,
  product,
  price,
  count,
  cart,
  togglePrice,
  toggleCount,
  toggleCart
) => {
  let floatValue = parseInt(product.price.match(/[+-]?\d+(\.\d+)?/g)[0]);
  product["totalProductPrice"] = floatValue;
  let zmienna = [{ product: product }];
  let existProduct = localStorage.getItem("item"); //sprawdza czy jest jakis produkt
  let totalLocalPrice = parseInt(price);
  let totalLocalCount = parseInt(count);
  console.log(product);
  product = JSON.stringify(product);
  // jesli produkt juz jakis jest
  if (existProduct) {
    let allStorageProduct = cart;
    console.log(allStorageProduct);

    //sprawdza czy produkt juz jest
    const first = allStorageProduct.findIndex(
      (product) => product["product"].slug === slug
    );

    //jezeli produkt juz istnieje, zaaktualizuj cene oraz ilosc
    if (first > -1) {
      let totalProductCount =
        allStorageProduct[first]["product"].totalProductCount + 1;
      let totalProductPrice =
        allStorageProduct[first]["product"].totalProductPrice + floatValue;

      product = JSON.parse(product);

      product["totalProductCount"] = totalProductCount;
      product["totalProductPrice"] = totalProductPrice;

      allStorageProduct[first] = { product: product };
      console.log(typeof product);

      totalLocalPrice = totalLocalPrice + floatValue;
      togglePrice(totalLocalPrice);

      totalLocalCount = totalLocalCount + 1;
      toggleCount(totalLocalCount);
      console.log(allStorageProduct);
      toggleCart(allStorageProduct);
      console.log("haga");
    } else {
      product = JSON.parse(product);
      product["totalProductCount"] = 1;
      product["totalProductPrice"] = floatValue;
      allStorageProduct.push({ product: product });

      totalLocalPrice = totalLocalPrice + floatValue;
      console.log(totalLocalPrice);
      togglePrice(totalLocalPrice);

      totalLocalCount = totalLocalCount + 1;
      toggleCount(totalLocalCount);

      toggleCart(allStorageProduct);
    }

    //jesli nie ma, dodaje pierwszą sztuke
  } else {
    totalPrice = totalPrice + floatValue;
    togglePrice(totalPrice);

    totalCount = totalCount + 1;
    toggleCount(totalCount);

    toggleCart(zmienna);
  }

  //localStorage.clear();
};
