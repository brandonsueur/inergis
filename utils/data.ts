/**
 * Formats the address by joining its components with a comma.
 * @param {UserAddress} address - The address object to format.
 */
export const formattedAddress = (address: {
  address?: string;
  postalCode?: string;
  city?: string;
  country?: string;
}) => {
  const fields = [
    address?.address,
    address?.postalCode,
    address?.city,
    address?.country,
  ].filter(Boolean);

  return fields.join(", ");
};
