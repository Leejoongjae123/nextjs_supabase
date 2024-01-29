// components/Checkbox.js
'use client'
import { useState } from 'react';

export default function Checkbox() {
  const [checked, setChecked] = useState(false);
  console.log("checked:",checked)
  return (
    <div className="flex items-center">
      <input
        id="checkbox"
        type="checkbox"
        className={`form-checkbox h-4 w-4 bg-gray-100 rounded border-gray-300 focus:ring-2 ${
          checked ? 'text-custom-pink border-custom-pink' : 'text-pink-600 border-gray-300'
        }`}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <label
        htmlFor="checkbox"
        className="ml-2 text-sm font-medium text-white dark:text-gray-300"
      >
        체크 박스
      </label>
    </div>
  );
}