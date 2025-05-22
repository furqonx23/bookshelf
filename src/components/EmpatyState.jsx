import { Book, Plus } from 'lucide-react';

const EmptyState = ({ onAddFirst }) => (
  <div className="text-center py-12">
    <Book className="w-16 h-16 mx-auto mb-4 text-gray-400" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">Rak Buku Masih Kosong</h3>
    <p className="text-gray-600 mb-6">Mulai bangun koleksi buku digital Anda sekarang!</p>
    <button
      onClick={onAddFirst}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-colors"
    >
      <Plus className="w-5 h-5" />
      Tambah Buku Pertama
    </button>
  </div>
);

export default EmptyState;