import { X, Edit, Trash2 } from 'lucide-react';

const DetailModal = ({ book, onClose, onEdit, onDelete, getStatusColor }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg max-w-md w-full p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900">Detail Buku</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Judul</label>
          <p className="text-gray-900 font-semibold">{book.title}</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Penulis</label>
          <p className="text-gray-900">{book.author}</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Genre</label>
          <p className="text-gray-900">{book.genre || 'Tidak disebutkan'}</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(book.status)}`}>
            {book.status === 'read' ? 'Sudah Dibaca' : 
             book.status === 'reading' ? 'Sedang Dibaca' : 'Belum Dibaca'}
          </span>
        </div>
      </div>
      
      <div className="flex gap-2 mt-6">
        <button
          onClick={() => onEdit(book)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
        >
          <Edit className="w-4 h-4" />
          Edit Buku
        </button>
        <button
          onClick={() => onDelete(book.id)}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
        >
          <Trash2 className="w-4 h-4" />
          Hapus
        </button>
      </div>
    </div>
  </div>
);

export default DetailModal;