import React from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [items, setItems] = useLocalStorage("restok_items", []);

  const addItem = (item) => {
    console.log("ADD:", item); // debug
    setItems((prev) => [...prev, item]);
  };

  const updateItem = (updated) =>
    setItems((prev) => prev.map((i) => (i.id === updated.id ? updated : i)));

  const deleteItem = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const totalStock = items.reduce((s, it) => s + Number(it.qty), 0);
  const totalValue = items.reduce((s, it) => s + Number(it.qty) * Number(it.price), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-sky-100 to-white p-6">
      <div className="max-w-5xl mx-auto">
        <Header totalStock={totalStock} totalValue={totalValue} />

        <main className="mt-6 grid gap-6 md:grid-cols-3">
          <section className="md:col-span-1">
            <ItemForm onAdd={addItem} />
          </section>

          <section className="md:col-span-2">
            <ItemList items={items} onDelete={deleteItem} onUpdate={updateItem} />
          </section>
        </main>
      </div>
    </div>
  );
}
