import { ArrowLeftIcon, ArrowRightIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { getCaps } from "../../utils/getUpperCaps";
import { Columns, Rows, TableProps } from "./types";

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  buttonActions
}) => {
  const column = Object.values(columns);
  const rows = Object.values(data);

  return (
  <>
    <div className="w-full bg-white rounded-lg border mt-8">
      <table className="w-full">
        <thead>
          <tr className="text-left">
            {column.map((col: Columns, index: number) => (
              <th
                key={index}
                className="p-4 border-gray-200 border-b text-warm-black"
              >
                {getCaps(col.header ?? "", col.label ?? "")}
              </th>
            ))}
            <th className="p-4 border-gray-200 border-b text-warm-black">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {rows.map((row: Rows, rowIndex: number) => (
            <tr className="text-left" key={rowIndex}>
              {column.map((col: Columns, colIndex: number) => (
                <td
                  key={colIndex}
                  className="p-4 border-gray-200 border-b text-deep-space-sparkle"
                >
                  <label>{row[col.label as keyof typeof row.name]}</label>
                </td>
              ))}
              <td className="p-4 border-gray-200 border-b text-warm-black">
               {buttonActions?.(row.id)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     
      </>
  );
};
