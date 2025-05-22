import { useState, useEffect } from 'react';
import LoadingState from './components/LoadingState';
import BookshelfHeader from './components/BookshelfHeader';
import SearchAndAddSection from './components/SearchAdd';
import AddBookForm from './components/AddBookForm';
import EmptyState from './components/EmpatyState';
import NoSearchResults from './components/SearchResult';
import BookGrid from './components/BookGrid';
import Statistics from './components/Statistic';
import DetailModal from './components/DetailModal';
import EditModal from './components/EditModal';

export default function Bookshelf() {
  // States
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newBook, setNewBook] = useState({ title: '', author: '', genre: '' });
  const [selectedBook, setSelectedBook] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editBook, setEditBook] = useState({ title: '', author: '', genre: '', status: '' });

  // Sample data
  const sampleBooks = [
    { id: 1, title: 'Laskar Pelangi', author: 'Andrea Hirata', genre: 'Fiction', status: 'read' },
    { id: 2, title: 'Bumi Manusia', author: 'Pramoedya Ananta Toer', genre: 'Historical Fiction', status: 'reading' },
    { id: 3, title: 'Ayat-Ayat Cinta', author: 'Habiburrahman El Shirazy', genre: 'Romance', status: 'unread' },
    { id: 4, title: 'Negeri 5 Menara', author: 'Ahmad Fuadi', genre: 'Biography', status: 'read' },
    { id: 5, title: 'Sang Pemimpi', author: 'Andrea Hirata', genre: 'Fiction', status: 'reading' }
  ];

  // Effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setBooks(sampleBooks);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Computed values
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helper functions
  const getStatusColor = (status) => {
    switch (status) {
      case 'read': return 'bg-green-100 text-green-800';
      case 'reading': return 'bg-blue-100 text-blue-800';
      case 'unread': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Event handlers
  const handleAddBook = () => {
    if (newBook.title && newBook.author) {
      const book = {
        id: books.length + 1,
        ...newBook,
        status: 'unread'
      };
      setBooks([...books, book]);
      setNewBook({ title: '', author: '', genre: '' });
      setShowAddForm(false);
    }
  };

  const handleViewDetail = (book) => {
    setSelectedBook(book);
    setShowDetailModal(true);
  };

  const handleEditBook = (book) => {
    setEditBook(book);
    setShowEditModal(true);
    setShowDetailModal(false);
  };

  const handleUpdateBook = () => {
    if (editBook.title && editBook.author) {
      setBooks(books.map(book => 
        book.id === editBook.id ? editBook : book
      ));
      setShowEditModal(false);
      setEditBook({ title: '', author: '', genre: '', status: '' });
    }
  };

  const handleDeleteBook = (bookId) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus buku ini?')) {
      setBooks(books.filter(book => book.id !== bookId));
      setShowDetailModal(false);
    }
  };

  // Render loading state
  if (loading) {
    return <LoadingState />;
  }

  // Main render
  return (
    <div className="max-w-6xl mx-auto p-6">
      <BookshelfHeader />
      
      <SearchAndAddSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onToggleAddForm={() => setShowAddForm(!showAddForm)}
      />

      {showAddForm && (
        <AddBookForm
          newBook={newBook}
          setNewBook={setNewBook}
          onSave={handleAddBook}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      {books.length === 0 ? (
        <EmptyState onAddFirst={() => setShowAddForm(true)} />
      ) : (
        <>
          {searchTerm && (
            <div className="mb-4">
              <p className="text-gray-600">
                Menampilkan {filteredBooks.length} dari {books.length} buku
                {searchTerm && ` untuk pencarian "${searchTerm}"`}
              </p>
            </div>
          )}

          {filteredBooks.length === 0 && searchTerm ? (
            <NoSearchResults searchTerm={searchTerm} />
          ) : (
            <BookGrid
              books={filteredBooks}
              onViewDetail={handleViewDetail}
              onEdit={handleEditBook}
              getStatusColor={getStatusColor}
            />
          )}
        </>
      )}

      {books.length > 0 && <Statistics books={books} />}

      {showDetailModal && selectedBook && (
        <DetailModal
          book={selectedBook}
          onClose={() => setShowDetailModal(false)}
          onEdit={handleEditBook}
          onDelete={handleDeleteBook}
          getStatusColor={getStatusColor}
        />
      )}

      {showEditModal && (
        <EditModal
          book={editBook}
          onClose={() => setShowEditModal(false)}
          onSave={handleUpdateBook}
          onChange={setEditBook}
        />
      )}
    </div>
  );
}

