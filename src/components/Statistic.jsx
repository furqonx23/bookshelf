const Statistics = ({ books }) => (
  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
    <h4 className="font-semibold text-blue-900 mb-2">Statistik Koleksi</h4>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      <div>
        <div className="text-2xl font-bold text-blue-600">{books.length}</div>
        <div className="text-sm text-blue-800">Total Buku</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-green-600">
          {books.filter(b => b.status === 'read').length}
        </div>
        <div className="text-sm text-green-800">Sudah Dibaca</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-blue-600">
          {books.filter(b => b.status === 'reading').length}
        </div>
        <div className="text-sm text-blue-800">Sedang Dibaca</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-600">
          {books.filter(b => b.status === 'unread').length}
        </div>
        <div className="text-sm text-gray-800">Belum Dibaca</div>
      </div>
    </div>
  </div>
);

export default Statistics;