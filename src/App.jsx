import React from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";
import OutList from "./components/OutList";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [items, setItems] = useLocalStorage("restok_items", []);
  const [outs, setOuts] = useLocalStorage("restok_outs", []);

  const addItem = (item) => setItems((prev) => [...prev, item]);

  const updateItem = (updated) =>
    setItems((prev) => prev.map((i) => (i.id === updated.id ? updated : i)));

  const deleteItem = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  // simpan barang keluar
  const addOut = (data) => {
    setOuts((prev) => [...prev, data]);
  };

  // hapus riwayat
  const deleteOut = (id) =>
    setOuts((prev) => prev.filter((o) => o.id !== id));

  // total stok
  const totalStock = items.reduce((s, it) => s + Number(it.qty), 0);
  const totalValue = items.reduce(
    (s, it) => s + Number(it.qty) * Number(it.price),
    0
  );

  // total keluar
  const totalOut = outs.reduce((s, it) => s + Number(it.qty), 0);

  // total pendapatan → qty × harga jual
  const totalRevenue = outs.reduce(
    (s, it) => s + Number(it.qty) * Number(it.sellPrice),
    0
  );

  // total untung → qty × (harga jual – modal)
  const totalProfit = outs.reduce(
    (s, it) => s + (Number(it.sellPrice) - Number(it.price)) * Number(it.qty),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-sky-100 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <Header
          totalStock={totalStock}
          totalValue={totalValue}
          totalOut={totalOut}
          totalRevenue={totalRevenue}
          totalProfit={totalProfit}
        />

        <main className="mt-6 grid gap-6 md:grid-cols-3">
          <section className="md:col-span-1">
            <ItemForm onAdd={addItem} />
          </section>

          <section className="md:col-span-2 space-y-6">
            <ItemList
              items={items}
              onDelete={deleteItem}
              onUpdate={updateItem}
              onOut={addOut}
            />

            <OutList outs={outs} onDelete={deleteOut} />
          </section>
        </main>
      </div>
    </div>
  );
}
