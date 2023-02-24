type PropsT = {
  label: string;
  placeholder?: string;
  name?: string;
  type?: string;
  errText?: string | null;
  defaultValue?: string;
  required?: boolean;
};

export default function InputText({
  label,
  placeholder,
  name,
  type = "text",
  errText,
  defaultValue,
  required,
}: PropsT) {
  return (
    <label className="mb-2 block">
      <span className="mb-1.5 flex justify-between text-black">
        {label}
        {errText && <em className="text-red-600">{errText}</em>}
      </span>
      <input
        defaultValue={defaultValue}
        className="w-full appearance-none border-2 border-black bg-white py-2 px-4 leading-tight focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-50"
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
      />
    </label>
  );
}
