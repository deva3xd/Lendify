const formatNumber = (value) => {
  return new Intl.NumberFormat("id-ID").format(value);
};

const formatRupiah = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};


export { formatNumber, formatRupiah };