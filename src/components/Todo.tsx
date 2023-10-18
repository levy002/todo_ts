import React, { ReactElement, useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import { ITodo } from "./shared/Interfaces";

const Todo = (props: ITodo): ReactElement => {
  const { description, category, id } = props;
  const [value, copy] = useCopyToClipboard();
  const [copyStatus, setCopyStatus] = useState<string>("");

  const handleCopyToClipboard = (data: string) => {
    copy(data);
    setCopyStatus("copied");
    setTimeout(() => { setCopyStatus("")}, 1000);
  };

  return (
    <div className="flex bg-slate-50 items-center justify-between px-4 py-3 rounded-lg shadow-2xl">
      <p className='font-medium text-orange-600 flex-1'>{description}</p>
      <div className="w-1/12 flex items-center flex-1">
      <p className='bg-slate-200 px-3 font-medium text-sm py-1 rounded-full text-blue-700 w-20 text-center'>{category}</p>
      </div>
      
      
      <div className='flex justify-end gap-2 w-2/12 relative'>
      <p className='text-orange-600 absolute bottom-2 bg-slate-100 px-2 text-sm rounded-full'>{copyStatus}</p>
        <div
          onClick={() =>
            handleCopyToClipboard(
              `{taskDescription: ${description}, taskCategory: ${category}}`
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 focus:text-red-400 text-slate-400 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Todo;
