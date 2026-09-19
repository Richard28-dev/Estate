export const formatPrice = (property, currency = 'INR') => {
  if (!property) return '';
  switch (currency) {
    case 'USD':
      return `$${property.priceUsd.toFixed(1)}M`;
    case 'AED':
      return `AED ${property.priceAed.toFixed(1)}M`;
    case 'INR':
    default:
      return `₹${property.priceInr.toFixed(1)} Cr`;
  }
};
