import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({label, title, value, icon})=> {
  return (
    <div className="w-full p-4 bg-slate-50 border h-auto rounded-lg border-gray-300">
      <div className="flex gap-2 flex-row text-xs items-center">
        
        <label className="text-pink-600">{label}</label>
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-bold text-pink-600">{value}</h1>
        <div className="flex items-center mt-2">
          <div>
        {icon} 
        </div>
        <div>
          <span className="ml-1 text-sm text-purple-900">{title}</span>
        </div>
          </div>
      </div>
      
    </div>
  );
};
