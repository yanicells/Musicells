import { useState } from 'react';

export default function Search(props) {
  const [input, setInput] = useState("")

  const updateInput = (event) =>{
    const newInput = event.target.value
    setInput(newInput)
  }


  return (
    <div className="max-w-sm space-y-3">
      <div>
        <label
          htmlFor="hs-trailing-button-add-on-with-icon-and-button"
          className="sr-only">
          Label
        </label>
        <div className="relative flex rounded-lg shadow-sm">
          <input onChange={updateInput} value={input}
            type="text"
            id="hs-trailing-button-add-on-with-icon-and-button"
            name="hs-trailing-button-add-on-with-icon-and-button"
            className="py-3 px-4 ps-11 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <svg
              className="shrink-0 size-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round">
              <circle cx={11} cy={11} r={8} />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <button onClick={() => {
            props.submitSearch(input)
            setInput("")
          }}
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}