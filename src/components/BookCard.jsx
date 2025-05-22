import { Book, Eye, Edit } from 'lucide-react';

const BookCard = ({ book, onViewDetail, onEdit, getStatusColor }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border">
    <div className="flex items-start justify-between mb-3">
      <Book className="w-8 h-8 text-blue-600 flex-shrink-0" />
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(book.status)}`}>
        {book.status === 'read' ? 'Sudah Dibaca' : 
         book.status === 'reading' ? 'Sedang Dibaca' : 'Belum Dibaca'}
      </span>
    </div>
    
    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
      {book.title}
    </h3>
    
    <p className="text-gray-600 mb-1">
      <span className="font-medium">Penulis:</span> {book.author}
    </p>
    
    {book.genre && (
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Genre:</span> {book.genre}
      </p>
    )}
    
    <div className="flex gap-2 mt-auto">
      <button 
        onClick={() => onViewDetail(book)}
        className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 px-3 rounded-md text-sm transition-colors flex items-center justify-center gap-1"
      >
        <Eye className="w-4 h-4" />
        Detail
      </button>
      <button 
        onClick={() => onEdit(book)}
        className="bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 px-3 rounded-md text-sm transition-colors flex items-center justify-center gap-1"
      >
        <Edit className="w-4 h-4" />
        Edit
      </button>
    </div>
  </div>
);

export default BookCard;