import { X } from 'lucide-react';

const EditModal = ({ book, onClose, onSave, onChange }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg max-w-md w-full p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900">Edit Buku</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Judul Buku</label>
          <input
            type="text"
            value={book.title}
            onChange={(e) => onChange({...book, title: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Masukkan judul buku"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Penulis</label>
          <input
            type="text"
            value={book.author}
            onChange={(e) => onChange({...book, author: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Masukkan nama penulis"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Genre</label>
          <input
            type="text"
            value={book.genre}
            onChange={(e) => onChange({...book, genre: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Masukkan genre buku"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Status Baca</label>
          <select
            value={book.status}
            onChange={(e) => onChange({...book, status: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="unread">Belum Dibaca</option>
            <option value="reading">Sedang Dibaca</option>
            <option value="read">Sudah Dibaca</option>
          </select>
        </div>
      </div>
      
      <div className="flex gap-2 mt-6">
        <button
          onClick={onSave}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          Simpan Perubahan
        </button>
        <button
          onClick={onClose}
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition-colors"
        >
          Batal
        </button>
      </div>
    </div>
  </div>
);

export default EditModal;