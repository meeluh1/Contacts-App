import React, { useState, useRef } from "react";

export default function App() {

  
  
  const [contacts, setContacts] = useState([
    { id: "1", name: "Josh Miller", phone: "555-0101", email: "josh@example.com", favorite: true },
    { id: "2", name: "Alan Nguynen",  phone: "555-0102", email: "alan@example.com", favorite: false },
    { id: "3", name: "Grace Watson", phone: "555-0103", email: "grace@example.com", favorite: false },
  ]);

  
  const [query, setQuery] = useState("");
  const emptyDraft = { id: null, name: "", phone: "", email: "", favorite: false };
  const [draft, setDraft] = useState(emptyDraft);

  
  const formRef = useRef(null);

  
  const filtered = contacts.filter((c) =>
    [c.name, c.phone, c.email].some((field) =>
      String(field).toLowerCase().includes(query.toLowerCase())
    )
  );
  

  
  function handleEdit(contact) {
    setDraft({ ...contact }); 
    queueMicrotask?.(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function handleSave() {
    if (!draft.name.trim()) return; 

    if (draft.id) {
      
      setContacts((cs) => cs.map((c) => (c.id === draft.id ? { ...c, ...draft } : c)));
    } else {
      
      setContacts((cs) => [
        ...cs,
        { ...draft, id: crypto.randomUUID(), createdAt: new Date().toISOString() },
      ]);
    }
    setDraft(emptyDraft); 
  }

  function handleCancel() {
    setDraft(emptyDraft);
  }

  
  function toggleFavorite(id) {
    setContacts((cs) => cs.map((c) => (c.id === id ? { ...c, favorite: !c.favorite } : c)));
  }

  function handleDelete(id) {
    setContacts((cs) => cs.filter((c) => c.id !== id));
    if (draft.id === id) setDraft(emptyDraft);
  }

  
  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Contacts</h1>

      
      <input
        type="text"
        placeholder="Search contacts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: 8, width: "100%", marginBottom: 16, borderRadius: 6, border: "1px solid #ccc" }}
      />

      
      {contacts.length === 0 ? (
        <p style={{ color: "#666" }}>No Contacts</p>
      ) : filtered.length === 0 ? (
        <p style={{ color: "#666" }}>No results for “{query}”</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {filtered.map((c) => (
            <li
              key={c.id}
              style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12, marginBottom: 8, background: "#fff" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                <strong>{c.name}</strong>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <button
                    type="button"
                    title={c.favorite ? "Unfavorite" : "Favorite"}
                    onClick={() => toggleFavorite(c.id)}
                    style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: 18 }}
                  >
                    {c.favorite ? "⭐" : "☆"}
                  </button>
                  <button onClick={() => handleEdit(c)} style={{ padding: "4px 8px" }}>
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (confirm(`Delete ${c.name}?`)) handleDelete(c.id);
                    }}
                    style={{ padding: "4px 8px", color: "#b00020" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div>{c.phone}</div>
              <div>{c.email}</div>
            </li>
          ))}
        </ul>
      )}

      
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        style={{ marginTop: 24, padding: 16, border: "1px solid #ddd", borderRadius: 8 }}
      >
        <h2>{draft.id ? "Edit Contact" : "Add Contact"}</h2>

        <input
          placeholder="Name"
          value={draft.name}
          onChange={(e) => setDraft({ ...draft, name: e.target.value })}
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
        />
        <input
          placeholder="Phone"
          value={draft.phone}
          onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
        />
        <input
          placeholder="Email"
          value={draft.email}
          onChange={(e) => setDraft({ ...draft, email: e.target.value })}
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
        />

        <label style={{ display: "block", marginBottom: 8 }}>
          <input
            type="checkbox"
            checked={draft.favorite}
            onChange={(e) => setDraft({ ...draft, favorite: e.target.checked })}
          />{" "}
          Favorite
        </label>

        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit">{draft.id ? "Update" : "Add"}</button>
          {draft.id && (
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            
          )}
        </div>
      </form>
    </div>
  );
}
