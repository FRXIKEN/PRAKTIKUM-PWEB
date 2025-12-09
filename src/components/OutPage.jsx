// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function OutPage({ items, onOut, onUpdate }) {
//   const { id } = useParams();
//   const nav = useNavigate();

//   const item = items.find((i) => i.id == id);

//   const [qtyOut, setQtyOut] = useState("");
//   const [sellPrice, setSellPrice] = useState("");

//   if (!item) return <div className="p-4">Item tidak ditemukan.</div>;

//   const handleSubmit = () => {
//     const qty = Number(qtyOut);

//     if (qty <= 0 || qty > item.qty) {
//       alert("Jumlah tidak valid / stok tidak cukup");
//       return;
//     }

//     onUpdate({ ...item, qty: item.qty - qty });

//     onOut({
//       id: item.id,
//       name: item.name,
//       qty: qty,
//       buyPrice: item.price,
//       sellPrice: Number(sellPrice),
//       income: qty * Number(sellPrice),
//       profit: qty * (Number(sellPrice) - item.price)
//     });

//     nav("/");
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-2xl shadow">
//       <h1 className="text-xl font-bold mb-4 text-sky-700">
//         Barang Keluar: {item.name}
//       </h1>

//       <label className="block mb-2">Jumlah Keluar</label>
//       <input
//         className="w-full p-2 mb-4 border rounded-xl"
//         value={qtyOut}
//         onChange={(e) => setQtyOut(e.target.value)}
//         type="number"
//       />

//       <label className="block mb-2">Harga Jual (per item)</label>
//       <input
//         className="w-full p-2 mb-4 border rounded-xl"
//         value={sellPrice}
//         onChange={(e) => setSellPrice(e.target.value)}
//         type="number"
//       />

//       <button
//         onClick={handleSubmit}
//         className="w-full p-3 bg-orange-500 text-white rounded-xl"
//       >
//         Simpan
//       </button>

//       <button
//         onClick={() => nav("/")}
//         className="w-full mt-3 p-3 bg-gray-200 rounded-xl"
//       >
//         Batal
//       </button>
//     </div>
//   );
// }
