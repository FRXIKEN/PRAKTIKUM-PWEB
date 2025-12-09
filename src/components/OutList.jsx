export default function OutList({ outs, onDelete }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-3">Riwayat Barang Keluar</h2>

      {outs.length === 0 && (
        <p className="text-gray-500 text-sm">Belum ada riwayat.</p>
      )}

      <ul className="space-y-3">
        {outs.map((o) => (
          <li
            key={o.id}
            className="p-3 bg-sky-50 rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{o.name}</p>
              <p className="text-sm text-gray-600">
                Qty: {o.qty}
              </p>
              <p className="text-sm text-gray-600">
                Modal: Rp {o.price}
              </p>
              <p className="text-sm text-gray-600">
                Harga Jual: Rp {o.sellPrice}
              </p>
              <p className="text-sm font-semibold text-green-600">
                Untung: Rp {(o.sellPrice - o.price) * o.qty}
              </p>
            </div>

            <button
              onClick={() => onDelete(o.id)}
              className="px-3 py-1 bg-red-500 text-white text-xs rounded-lg hover:bg-red-600"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
