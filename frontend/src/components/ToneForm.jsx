import { useState } from 'react';

const tones = ['professional', 'friendly', 'apologetic', 'assertive'];

export default function ToneForm() {
  const [text, setText] = useState('');
  const [tone, setTone] = useState(tones[0]);
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/rewrite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, tone }),
    });
    const data = await res.json();
    setResult(data.rewritten);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl">
      <h1 className="text-xl font-semibold mb-4">ToneFixer – Rewrite Your Message</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your message here..."
          className="w-full p-2 border rounded"
          rows={4}
        />
        <select value={tone} onChange={(e) => setTone(e.target.value)} className="p-2 border rounded">
          {tones.map((t) => <option key={t}>{t}</option>)}
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Fix Tone
        </button>
      </form>
      {result && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h2 className="font-bold mb-2">Rewritten:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
