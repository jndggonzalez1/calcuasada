'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4 px-4">
      <p className="text-4xl">🥩</p>
      <h2 className="text-lg font-semibold text-gray-900">Algo salió mal</h2>
      <p className="text-sm text-gray-500 max-w-xs">
        La página no cargó correctamente. Recárgala para seguir.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="border border-brasa text-brasa font-medium text-sm px-6 py-2.5 rounded-lg hover:bg-brasa/5 transition-colors"
      >
        Recargar página
      </button>
    </div>
  );
}
