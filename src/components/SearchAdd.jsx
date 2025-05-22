import { Search, Plus } from 'lucide-react';

const SearchAndAddSection = ({ searchTerm, setSearchTerm, onToggleAddForm }) => (
  <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
    <div className="relative flex-1 max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Cari buku, penulis, atau genre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <button
      onClick={onToggleAddForm}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
    >
      <Plus className="w-5 h-5" />
      Tambah Buku
    </button>
  </div>
);

export default SearchAndAddSection;