import { Search } from 'lucide-react';

const NoSearchResults = ({ searchTerm }) => (
  <div className="text-center py-8">
    <Search className="w-12 h-12 mx-auto mb-4 text-gray-400" />
    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tidak Ada Hasil</h3>
    <p className="text-gray-600">Tidak ditemukan buku yang sesuai dengan pencarian "{searchTerm}"</p>
  </div>
);
export default NoSearchResults;