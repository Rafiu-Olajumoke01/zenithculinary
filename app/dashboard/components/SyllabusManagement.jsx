'use client';
import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'syllabusData';

const SyllabusManagement = () => {
  const [syllabusItems, setSyllabusItems] = useState([]);
  const [newTopic, setNewTopic] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTopic, setEditTopic] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const savedSyllabus = localStorage.getItem(STORAGE_KEY);
      if (savedSyllabus) {
        const parsed = JSON.parse(savedSyllabus);
        if (Array.isArray(parsed)) {
          setSyllabusItems(parsed);
        }
      } else {
        setSyllabusItems([
          { id: 1, topic: 'Introduction to React', description: 'Basics and setup' },
          { id: 2, topic: 'Routing in React', description: 'Using React Router' },
        ]);
      }
    } catch (err) {
      console.error('Error loading syllabus from storage:', err);
      setSyllabusItems([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(syllabusItems));
    }
  }, [syllabusItems, isLoading]);

  const addItem = () => {
    if (!newTopic.trim()) return;
    const newItem = {
      id: Date.now(),
      topic: newTopic.trim(),
      description: newDescription.trim() || 'No description',
    };
    setSyllabusItems(prev => [...prev, newItem]);
    setNewTopic('');
    setNewDescription('');
  };

  const deleteItem = (id) => {
    setSyllabusItems(prev => prev.filter(item => item.id !== id));
  };

  const startEdit = (item) => {
    setEditId(item.id);
    setEditTopic(item.topic);
    setEditDescription(item.description);
  };

  const saveEdit = () => {
    if (!editTopic.trim()) return;
    setSyllabusItems(prev =>
      prev.map(item =>
        item.id === editId
          ? { ...item, topic: editTopic.trim(), description: editDescription.trim() }
          : item
      )
    );
    cancelEdit();
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditTopic('');
    setEditDescription('');
  };

  if (isLoading) return <p>Loading syllabus...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Syllabus</h2>

      <div className="mb-4 flex flex-col gap-2 max-w-lg">
        <input
          type="text"
          placeholder="Topic"
          className="p-2 border rounded"
          value={newTopic}
          onChange={e => setNewTopic(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="p-2 border rounded"
          value={newDescription}
          onChange={e => setNewDescription(e.target.value)}
          rows={3}
        />
        <button
          onClick={addItem}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 self-start"
        >
          Add Topic
        </button>
      </div>

      <ul className="space-y-4 max-w-lg">
        {syllabusItems.map(item => (
          <li key={item.id} className="bg-white rounded shadow p-4">
            {editId === item.id ? (
              <>
                <input
                  type="text"
                  className="w-full p-1 border rounded mb-2"
                  value={editTopic}
                  onChange={e => setEditTopic(e.target.value)}
                />
                <textarea
                  className="w-full p-1 border rounded mb-2"
                  rows={3}
                  value={editDescription}
                  onChange={e => setEditDescription(e.target.value)}
                />
                <div>
                  <button onClick={saveEdit} className="mr-3 text-green-600">Save</button>
                  <button onClick={cancelEdit} className="text-gray-600">Cancel</button>
                </div>
              </>
            ) : (
              <>
                <h3 className="font-semibold text-lg">{item.topic}</h3>
                <p>{item.description}</p>
                <div className="mt-2">
                  <button onClick={() => startEdit(item)} className="mr-4 text-blue-600">Edit</button>
                  <button onClick={() => deleteItem(item.id)} className="text-red-600">Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
        {syllabusItems.length === 0 && <li>No syllabus items found.</li>}
      </ul>
    </div>
  );
};

export default SyllabusManagement;
