interface InputProps {
  value: string;
  name: string;
  label: string;
  type: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ value, name, label, type, onChangeHandler }: InputProps) {
  return (
    <div className="grid gap-y-1.5 w-full">
      <label htmlFor={name} className="text-sm font-medium text-gray-800">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChangeHandler}
        className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
      />
    </div>
  );
}

export default Input;
