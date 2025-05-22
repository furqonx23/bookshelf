import { BookOpen } from 'lucide-react';

const BookshelfHeader = () => (
  <div className="mb-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
      <BookOpen className="w-8 h-8 text-blue-600" />
      Book Shelf
    </h1>
    <p className="text-gray-600">Kelola koleksi buku pribadi Anda</p>
  </div>
);

export default BookshelfHeader;