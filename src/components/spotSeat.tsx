export default function SpotSeatIcon({
  spotId,
  spotLabel,
  reserved,
  disabled,
}: Props) {
  return (
    <div className="flex">
      <input
        type="checkbox"
        name={`spots`}
        id={`spot-${spotId}`}
        className="peer hidden"
        value={spotId}
        disabled={reserved}
        defaultChecked={reserved}
      />
      <label
        htmlFor={`spot-${spotId}`}
        className="m-1 h-6 w-6
        cursor-pointer select-none rounded-full 
        bg-[#00A96E] py-1 text-center text-[10px]  text-black 
        peer-checked:bg-[#7480ff]
        peer-disabled:cursor-default
        peer-disabled:bg-[#A6ADBB]"
      >
        {spotLabel}
      </label>
    </div>
  );
}

interface Props {
  spotId: string;
  spotLabel: string;
  reserved: boolean;
  disabled: boolean;
}
