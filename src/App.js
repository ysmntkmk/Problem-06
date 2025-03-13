// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin.
// Örneğin "Create" butonuna yeşil bir arka plan, "Update" butonuna turuncu bir arka plan, ve "Delete" butonuna kırmızı bir arka plan ekleyin.
// public klasöründe bulunan preview.png görselini inceleyin. Tasarımın beklenen halini göreceksiniz.
// Tailwind CSS kullanarak butonların hover durumunda farklı efektler eklemek için hangi class'ları kullanabilirsiniz?

export default function ButtonVariants() {
  return (
    <span className="wrapper">
      {/* Create butonu */}
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none transition duration-300">
        Create
      </button>

      {/* Update butonu */}
      <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700 focus:outline-none transition duration-300">
        Update
      </button>

      {/* Delete butonu */}
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none transition duration-300">
        Delete
      </button>
    </span>
  );
}