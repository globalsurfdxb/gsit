// components/TechMediumTable.tsx
export interface TechMediumRow {
  media: string;
  maxSpeed: string;
  bandwidth: string;
  maxDistance: string;
  typicalUse: string;
}

interface TechMediumTableProps {
  columns: {
    media: string;
    maxSpeed: string;
    bandwidth: string;
    maxDistance: string;
    typicalUse: string;
  };
  rows: TechMediumRow[];
}

export default function TechMediumTable({ columns, rows }: TechMediumTableProps) {
  return (
    <div className="rounded-3xl bg-[#F5F9FC] p-2 md:p-6 mt-6 md:mt-12 overflow-x-auto">
      <div className="min-w-[720px] md:min-w-0 grid grid-cols-[180px_repeat(4,minmax(140px,1fr))] md:grid-cols-[220px_repeat(4,1fr)] xl:grid-cols-[296px_repeat(4,1fr)]">
        {/* Media column header — sits on the outer light-gray bg, not the white card */}
        <div className="flex items-end px-4 py-6 border-b border-[#D3D3D3]  mr-4 3xl:mr-[54px] ms-4 3xl:ms-4">
          <h3 className="text-27-medium text-paragraph">
            {columns.media}
          </h3>
        </div>

        {/* Remaining 4 headers sit on the white rounded card */}
        <div className="col-span-4 grid grid-cols-4 bg-white rounded-t-2xl">
          {[columns.maxSpeed, columns.bandwidth, columns.maxDistance, columns.typicalUse].map(
            (label, i) => (
              <div key={i} className="px-4 py-6 border-b border-[#D3D3D3]">
                <h3 className="text-27-medium text-paragraph">{label}</h3>
              </div>
            )
          )}
        </div>

        {/* Rows */}
        {rows.map((row, i) => {
          const isLast = i === rows.length - 1;
          return (
            <div key={i} className="contents">
              <div
                className={`px-4 py-6 3xl:py-[37px] flex items-center mr-4 3xl:mr-[54px] ms-4 3xl:ms-4 ${
                  !isLast ? "border-b border-[#D3D3D3]" : ""
                }`}
              >
                <p className="text-16 md:text-17 font-medium text-paragraph">{row.media}</p>
              </div>

              <div
                className={`col-span-4 grid grid-cols-4 bg-white ${
                  isLast ? "rounded-b-2xl" : ""
                }`}
              >
                {[row.maxSpeed, row.bandwidth, row.maxDistance, row.typicalUse].map(
                  (value, j) => (
                    <div
                      key={j}
                      className={`px-4 py-6 3xl:py-[36.5px] flex items-center ${
                        !isLast ? "border-b border-[#D3D3D3]" : ""
                      }`}
                    >
                      <p className="text-18 text-paragraph">{value}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}