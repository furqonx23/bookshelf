import { Loader2 } from 'lucide-react';

const LoadingState = () => (
  <div className="max-w-6xl mx-auto p-6">
    <div className="flex items-center justify-center min-h-96">
      <div className="text-center">
        <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-blue-600" />
        <p className="text-lg text-gray-600">Memuat koleksi buku...</p>
      </div>
    </div>
  </div>
);

export default LoadingState;