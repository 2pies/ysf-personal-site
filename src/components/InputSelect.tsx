type PropsT = {
  label: string;
  placeholder?: string;
  name?: string;
  errText?: string | null;
  options: {
    label: string;
    value: string;
  }[];
  defaultValue?: string;
};

export default function InputSelect({
  label,
  placeholder,
  name,
  errText,
  options,
  defaultValue,
}: PropsT) {
  return (
    <label className="mb-2 block">
      <span className="mb-1.5 flex justify-between text-black">
        {label}
        {errText && <em className="text-red-600">{errText}</em>}
      </span>

      <select
        className=" w-full border-2 border-black p-2"
        name={name}
        defaultValue={defaultValue}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
