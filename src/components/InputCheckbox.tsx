type PropsT = {
  label: string;
  name?: string;
  required?: boolean;
};

export default function InputCheckbox({ label, name, required }: PropsT) {
  return (
    <label className="mb-2 block">
      <input
        className="mr-2 mb-1.5 text-black"
        type="checkbox"
        name={name}
        required={required}
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
}
