import BookCard from './BookCard';

const BookGrid = ({ books, onViewDetail, onEdit, getStatusColor }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {books.map((book) => (
      <BookCard
        key={book.id}
        book={book}
        onViewDetail={onViewDetail}
        onEdit={onEdit}
        getStatusColor={getStatusColor}
      />
    ))}
  </div>
);

export default BookGrid;