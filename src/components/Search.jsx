import { useState } from 'react';

export default function Search(props) {
  const [input, setInput] = useState("");

  const updateInput = (event) => setInput(event.target.value);

  return (
    <form
      className="flex items-center justify-center w-full max-w-2xl mx-auto mb-8"
      onSubmit={e => { e.preventDefault(); props.submitSearch(input); setInput(""); }}
    >
      <div className="flex w-full bg-gray-100 border border-black rounded-lg overflow-hidden">
        <span className="flex items-center px-3 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </span>
        <input
          onChange={updateInput}
          value={input}
          type="text"
          placeholder="Search albums or artists..."
          className="flex-1 bg-transparent outline-none px-2 py-2 text-sm sm:text-base"
        />
        <button
          type="submit"
          className="bg-gray-950 text-white px-3 sm:px-5 py-2 text-sm sm:text-base font-medium hover:bg-gray-700 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}