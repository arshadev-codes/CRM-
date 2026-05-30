import { useState } from "react";
import { Pencil } from "lucide-react";

export default function EditableText({
  value,
  onChange,
  suggestions = [],
  className = "",
  dropdown = false,
}) {

  const [editing, setEditing] =
    useState(false);

  return (
    <span className="inline-flex items-center gap-2">

      {editing ? (

        dropdown ? (

          <select
            autoFocus
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            onBlur={() =>
              setEditing(false)
            }
            className="
              border-b
              border-indigo-400
              bg-transparent
              outline-none
              px-1
            "
          >

            {suggestions.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

        ) : (

          <input
            autoFocus
            list={`list-${value}`}
            value={value}
            onChange={(e) =>
              onChange(e.target.value)
            }
            onBlur={() =>
              setEditing(false)
            }
            className="
              border-b
              border-indigo-400
              bg-transparent
              outline-none
              px-1
            "
          />
        )

      ) : (

        <span className={className}>
          {value}
        </span>
      )}

      {/* ALWAYS VISIBLE PEN */}
      <button
        onClick={() =>
          setEditing(true)
        }
        className="
          text-slate-400
          hover:text-indigo-600
          transition-all
        "
      >
        <Pencil size={14} />
      </button>

      <datalist id={`list-${value}`}>
        {suggestions.map((item) => (
          <option
            key={item}
            value={item}
          />
        ))}
      </datalist>
    </span>
  );
}