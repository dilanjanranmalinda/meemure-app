import { packages } from "../../pages/Packages/packages.constant";

export const displayPrice = ({ packageId, pax, from }: any) => {
  const calculatePrice = () => {
    let calculatedPrice = "0";
    const currentPackage = packages[packageId];

    if (from === "Sri Lanka") {
      calculatedPrice = calculateLocalPrice(currentPackage.local, pax);
    } else {
      calculatedPrice = calculateForeignPrice(currentPackage.foriegn, pax);
    }

    return calculatedPrice;
  };

  const calculateLocalPrice = (localPackage: any, pax: number) => {
    let price = 0;
    const {
      price: { unit, price: basePrice },
      items,
    } = localPackage;

    if (basePrice) {
      price = parseFloat(basePrice);
    }

    // if (items && items.length > 0) {
    //   items.forEach((item: any) => {
    //     if (item.price) {
    //       price += parseFloat(item.price);
    //     }
    //   });
    // }

    return `${unit}${(price * pax).toFixed(2)}`;
  };

  const calculateForeignPrice = (foreignPackage: any, pax: number) => {
    let price = 0;
    const {
      price: { unit, price: basePrice },
      items,
    } = foreignPackage;

    if (basePrice) {
      price = parseFloat(basePrice);
    }

    if (items && items.length > 0) {
      items.forEach((item: any) => {
        if (item.price) {
          price += parseFloat(item.price);
        }
      });
    }

    return `${unit}${(price * pax).toFixed(2)}`;
  };

  return calculatePrice();
};
