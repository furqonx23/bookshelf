const AddBookForm = ({ newBook, setNewBook, onSave, onCancel }) => (
  <div className="mb-6 p-6 bg-gray-50 rounded-lg border">
    <h3 className="text-lg font-semibold mb-4">Tambah Buku Baru</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <input
        type="text"
        placeholder="Judul buku"
        value={newBook.title}
        onChange={(e) => setNewBook({...newBook, title: e.target.value})}
        className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <input
        type="text"
        placeholder="Nama penulis"
        value={newBook.author}
        onChange={(e) => setNewBook({...newBook, author: e.target.value})}
        className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <input
        type="text"
        placeholder="Genre"
        value={newBook.genre}
        onChange={(e) => setNewBook({...newBook, genre: e.target.value})}
        className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <div className="md:col-span-3 flex gap-2">
        <button
          onClick={onSave}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Simpan
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
        >
          Batal
        </button>
      </div>
    </div>
  </div>
);

export default AddBookForm;