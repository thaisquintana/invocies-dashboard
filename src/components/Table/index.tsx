import { ArrowLeftIcon, ArrowRightIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { getCaps } from "../../utils/getUpperCaps";
import { Columns, Rows, TableProps } from "./types";

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  currentPage,
  perPage,
  pageCount,
  totalData,
  prevPageList,
  nextPageList,
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
      <div className="flex justify-end items-center mb-24 mx-0 mt-8">
        <label className="p-4 text-slate-500 font-light">{`${(currentPage - 1) * perPage + 1} - ${
          pageCount === currentPage ? totalData : currentPage * perPage
        } de ${isNaN(totalData) ? 0 : totalData}`}</label>
        <button
          className="bg-white disabled:opacity-30 disabled:bg-slate-300 border rounded-lg border-slate-400 p-1"

          onClick={() => prevPageList}
          disabled={currentPage > pageCount || currentPage === 1}
        >
          <ChevronLeft color="#406a76" strokeWidth={"0.75px"} />
        </button>
        <button
        className="bg-white disabled:opacity-30 disabled:bg-slate-300 border rounded-lg border-slate-400 p-1 ml-2"
          onClick={() => nextPageList}
          disabled={Boolean(pageCount <= currentPage)}
        >
          <ChevronRight color="#406a76" strokeWidth={"0.75px"} />
        </button>
      </div>
      </>
  );
};
