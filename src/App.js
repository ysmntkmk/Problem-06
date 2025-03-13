

// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin.
// Örneğin "Create" butonuna yeşil bir arka plan, "Update" butonuna turuncu bir arka plan, ve "Delete" butonuna kırmızı bir arka plan ekleyin.
// public klasöründe bulunan preview.png görselini inceleyin. Tasarımın beklenen halini göreceksiniz.
// Tailwind CSS kullanarak butonların hover durumunda farklı efektler eklemek için hangi class'ları kullanabilirsiniz?

export default function ButtonVariants() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center space-y-4 w-[300px]">
        {/* Create, Update, Delete Butonları Yan Yana */}
        <div className="flex justify-between w-full space-x-4">
          <button className="bg-green-500 rounded-[10px] text-white p-4 hover:bg-white hover:text-green-500 hover:border-2 hover:border-green-600 transition duration-300 w-full">
            Create
          </button>
          <button className="bg-orange-500 rounded-[10px] text-white p-4 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-400 transition duration-300 w-full">
            Update
          </button>
          <button className="bg-red-500 rounded-[10px] text-white p-4 hover:bg-white hover:text-red-500 hover:border-2 hover:border-red-600 transition duration-300 w-full">
            Delete
          </button>
        </div>

        {/* Testing Butonu */}
        <button className="bg-sky-500 rounded-[10px] text-white px-4 py-2 w-full hover:bg-white hover:text-sky-500 hover:border-2 hover:border-blue-300 transition duration-300">
          Testing Tailwind
        </button>
      </div>
    </div>
  );
}