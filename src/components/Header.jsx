import React from "react";

export default function Header({
  totalStock,
  totalValue,
  totalOut,
  totalRevenue,
  totalProfit,
}) {
  return (
    <header className="flex items-center justify-between p-4 rounded-2xl bg-white/60 backdrop-blur shadow-md">
      <div>
        <h1 className="text-2xl font-extrabold text-sky-700">RESTOK BARANG</h1>
        <p className="text-sm text-sky-600">blue store ✨</p>
      </div>

      <div className="flex gap-6 items-center">

        {/* Total Stok */}
        <div className="text-center">
          <div className="text-[17px] text-sky-500">Total Stok</div>
          <div className="text-lg font-semibold text-sky-700">
            {totalStock}
          </div>
        </div>

        {/* Nilai Modal */}
        <div className="text-center">
          <div className="text-[17px] text-sky-500">Modal</div>
          <div className="text-lg font-semibold text-sky-700">
            Rp {Number(totalValue).toLocaleString()}
          </div>
        </div>

        {/* Stok Keluar */}
        <div className="text-center">
          <div className="text-[17px] text-sky-500">Stok Keluar</div>
          <div className="text-lg font-semibold text-sky-700">
            {totalOut}
          </div>
        </div>

        {/* Pendapatan */}
        <div className="text-center">
          <div className="text-[17px] text-sky-500">Pendapatan</div>
          <div className="text-lg font-semibold text-sky-700">
            Rp {Number(totalRevenue).toLocaleString()}
          </div>
        </div>

        {/* Keuntungan */}
        <div className="text-center">
          <div className="text-[17px] text-green-600">Keuntungan</div>
          <div className="text-lg font-semibold text-green-700">
            Rp {Number(totalProfit).toLocaleString()}
          </div>
        </div>

      </div>
    </header>
  );
}
