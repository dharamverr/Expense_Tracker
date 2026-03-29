import React, { useState } from "react";
import ContextMenu from "./ContextMenu";
import { useLocalStorage } from "../../../Hooks/useLocalStorage";

export default function ExpenseTable({
  expenses,
  setExpenses,
  expense,
  setExpense,
  setEditRowId,
}) {
  const [query, setQuery] = useLocalStorage("query", "");
  const [menuPosition, setMenuPosition] = useState({});
  const [rowId, setRowId] = useState("");
  const [sortCallback, setSortCallback] = useState(() => () => {}); // here we want set initial state as empty callback like () => {}. if we do like this arr.sort(() => {}) then sort function nothing will do with original array.
  const filteredTable = expenses.filter((expense) => {
    if (query === "all") {
      return expense;
    }
    return expense.category.includes(query);
  });

  const totalSum = filteredTable.reduce(
    (accu, curr) => accu + parseFloat(curr.amount),
    0,
  );

  return (
    <>
      <ContextMenu
        setEditRowId={setEditRowId}
        expenses={expenses}
        setExpenses={setExpenses}
        menuPosition={menuPosition}
        setMenuPosition={setMenuPosition}
        rowId={rowId}
        expense={expense}
        setExpense={setExpense}
      />
      <table border={1} onClick={() => setMenuPosition({})}>
        <thead>
          <tr style={{ backgroundColor: "rgba(238, 239, 240, 0.62)" }}>
            <th id="Amount">
              Title
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={512}
                  height={512}
                  x={0}
                  y={0}
                  viewBox="0 0 511.627 511.627"
                  style={{
                    enableBackground: "new 0 0 512 512",
                  }}
                  xmlSpace="preserve"
                  className=""
                  onClick={() =>
                    setSortCallback(
                      () => (a, b) => a.title.localeCompare(b.title),
                    )
                  }
                >
                  <g transform="matrix(0.9300000000000012,0,0,0.9300000000000012,17.906904106139933,17.90687606811514)">
                    <path
                      d="M260.494 219.271H388.4c2.666 0 4.855-.855 6.563-2.57 1.715-1.713 2.573-3.9 2.573-6.567v-54.816c0-2.667-.858-4.854-2.573-6.567-1.708-1.711-3.897-2.57-6.563-2.57H260.494c-2.666 0-4.853.855-6.567 2.57-1.71 1.713-2.568 3.9-2.568 6.567v54.816c0 2.667.855 4.854 2.568 6.567 1.714 1.712 3.901 2.57 6.567 2.57zM260.497 73.089h73.087c2.666 0 4.856-.855 6.563-2.568 1.718-1.714 2.563-3.901 2.563-6.567V9.136c0-2.663-.846-4.853-2.563-6.567C338.44.859 336.25 0 333.584 0h-73.087c-2.666 0-4.853.855-6.567 2.568-1.709 1.715-2.568 3.905-2.568 6.567v54.818c0 2.666.855 4.853 2.568 6.567 1.715 1.71 3.901 2.569 6.567 2.569zM196.54 401.991h-54.817V9.136c0-2.663-.854-4.856-2.568-6.567C137.441.859 135.254 0 132.587 0H77.769c-2.663 0-4.856.855-6.567 2.568-1.709 1.715-2.568 3.905-2.568 6.567V401.99H13.816c-4.184 0-7.04 1.902-8.564 5.708-1.525 3.621-.855 6.95 1.997 9.996l91.361 91.365c2.094 1.707 4.281 2.562 6.567 2.562 2.474 0 4.665-.855 6.567-2.562l91.076-91.078c1.906-2.279 2.856-4.571 2.856-6.844 0-2.676-.859-4.859-2.568-6.584-1.713-1.706-3.9-2.562-6.568-2.562zM504.604 441.109c-1.715-1.718-3.901-2.573-6.567-2.573h-237.54c-2.666 0-4.853.855-6.567 2.573-1.709 1.711-2.568 3.901-2.568 6.564v54.815c0 2.673.855 4.853 2.568 6.571 1.715 1.711 3.901 2.566 6.567 2.566h237.539c2.666 0 4.853-.855 6.567-2.566 1.711-1.719 2.566-3.898 2.566-6.571v-54.815c.004-2.662-.855-4.853-2.565-6.564zM260.494 365.445H443.22c2.663 0 4.853-.855 6.57-2.566 1.708-1.711 2.563-3.901 2.563-6.563v-54.823c0-2.662-.855-4.853-2.563-6.563-1.718-1.711-3.907-2.566-6.57-2.566H260.494c-2.666 0-4.853.855-6.567 2.566-1.71 1.711-2.568 3.901-2.568 6.563v54.823c0 2.662.855 4.853 2.568 6.563 1.714 1.711 3.901 2.566 6.567 2.566z"
                      fill="#44b2c9"
                      opacity={1}
                      data-original="#000000"
                      className=""
                    />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 511.627 511.627"
                  onClick={() =>
                    setSortCallback(
                      () => (a, b) => b.title.localeCompare(a.title),
                    )
                  }
                >
                  <g>
                    <path
                      d="M333.584 438.536h-73.087c-2.666 0-4.853.855-6.567 2.573-1.709 1.711-2.568 3.901-2.568 6.564v54.815c0 2.673.855 4.853 2.568 6.571 1.715 1.711 3.901 2.566 6.567 2.566h73.087c2.666 0 4.856-.855 6.563-2.566 1.718-1.719 2.563-3.898 2.563-6.571v-54.815c0-2.663-.846-4.854-2.563-6.564-1.707-1.717-3.897-2.573-6.563-2.573zM196.54 109.636h-54.817v392.355c0 2.663-.854 4.856-2.568 6.567-1.714 1.71-3.901 2.569-6.568 2.569H77.769c-2.663 0-4.856-.855-6.567-2.568-1.709-1.715-2.568-3.905-2.568-6.567V109.636H13.816c-4.184 0-7.04-1.902-8.564-5.708-1.525-3.621-.855-6.95 1.997-9.996l91.361-91.365c2.094-1.707 4.281-2.562 6.567-2.562 2.474 0 4.665.855 6.567 2.562l91.076 91.078c1.906 2.279 2.856 4.571 2.856 6.844 0 2.676-.859 4.859-2.568 6.584-1.713 1.706-3.9 2.562-6.568 2.562zM388.4 292.362H260.494c-2.666 0-4.853.855-6.567 2.566-1.71 1.711-2.568 3.901-2.568 6.563v54.823c0 2.662.855 4.853 2.568 6.563 1.714 1.711 3.901 2.566 6.567 2.566H388.4c2.666 0 4.855-.855 6.563-2.566 1.715-1.711 2.573-3.901 2.573-6.563v-54.823c0-2.662-.858-4.853-2.573-6.563-1.707-1.71-3.897-2.566-6.563-2.566zM504.604 2.568C502.889.859 500.702 0 498.036 0H260.497c-2.666 0-4.853.855-6.567 2.568-1.709 1.715-2.568 3.905-2.568 6.567v54.818c0 2.666.855 4.853 2.568 6.567 1.715 1.709 3.901 2.568 6.567 2.568h237.539c2.666 0 4.853-.855 6.567-2.568 1.711-1.714 2.566-3.901 2.566-6.567V9.136c.004-2.663-.855-4.857-2.565-6.568zM443.22 146.181H260.494c-2.666 0-4.853.855-6.567 2.57-1.71 1.713-2.568 3.9-2.568 6.567v54.816c0 2.667.855 4.854 2.568 6.567 1.714 1.711 3.901 2.57 6.567 2.57H443.22c2.663 0 4.853-.855 6.57-2.57 1.708-1.713 2.563-3.9 2.563-6.567v-54.816c0-2.667-.855-4.858-2.563-6.567-1.721-1.711-3.911-2.57-6.57-2.57z"
                      fill="#44b2c9"
                    />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={512}
                  height={512}
                  x={0}
                  y={0}
                  viewBox="0 0 507.2 507.2"
                  style={{
                    enableBackground: "new 0 0 512 512",
                  }}
                  xmlSpace="preserve"
                  className=""
                  onClick={() => setSortCallback(() => () => {})}
                >
                  <g>
                    <circle
                      cx={253.6}
                      cy={253.6}
                      r={253.6}
                      style={{}}
                      fill="#ffff"
                      data-original="#f15249"
                      className=""
                      opacity={1}
                    />
                    <path
                      d="M147.2 368 284 504.8c115.2-13.6 206.4-104 220.8-219.2L367.2 148l-220 220z"
                      style={{}}
                      fill="#efefef"
                      data-original="#ad0e0e"
                      className=""
                      opacity={1}
                    />
                    <path
                      d="M373.6 309.6c11.2 11.2 11.2 30.4 0 41.6l-22.4 22.4c-11.2 11.2-30.4 11.2-41.6 0l-176-176c-11.2-11.2-11.2-30.4 0-41.6l23.2-23.2c11.2-11.2 30.4-11.2 41.6 0l175.2 176.8z"
                      style={{}}
                      fill="#c71717"
                      data-original="#ffffff"
                      className=""
                      opacity={1}
                    />
                    <path
                      d="M280.8 216 216 280.8l93.6 92.8c11.2 11.2 30.4 11.2 41.6 0l23.2-23.2c11.2-11.2 11.2-30.4 0-41.6L280.8 216z"
                      style={{}}
                      fill="#b61515"
                      data-original="#d6d6d6"
                      className=""
                      opacity={1}
                    />
                    <path
                      d="M309.6 133.6c11.2-11.2 30.4-11.2 41.6 0l23.2 23.2c11.2 11.2 11.2 30.4 0 41.6L197.6 373.6c-11.2 11.2-30.4 11.2-41.6 0l-22.4-22.4c-11.2-11.2-11.2-30.4 0-41.6l176-176z"
                      style={{}}
                      fill="#c71717"
                      data-original="#ffffff"
                      className=""
                      opacity={1}
                    />
                  </g>
                </svg>
              </span>
            </th>
            <th>
              <select
                name="ExpenseCategory"
                id="tab-fill-category"
                defaultValue="all"
                onChange={(e) => setQuery(e.target.value)}
              >
                <option value="all">All</option>
                <option value="Clothes">Clothes</option>
                <option value="Bill">Bill</option>
                <option value="Grocery">Grocery</option>
                <option value="Medicine">Medicine</option>
                <option value="Education">Education</option>
              </select>
            </th>
            <th id="Amount">
              Amount
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={512}
                  height={512}
                  x={0}
                  y={0}
                  viewBox="0 0 511.627 511.627"
                  style={{
                    enableBackground: "new 0 0 512 512",
                  }}
                  xmlSpace="preserve"
                  className=""
                  onClick={() =>
                    setSortCallback(() => (a, b) => a.amount - b.amount)
                  }
                >
                  <g transform="matrix(0.9300000000000012,0,0,0.9300000000000012,17.906904106139933,17.90687606811514)">
                    <path
                      d="M260.494 219.271H388.4c2.666 0 4.855-.855 6.563-2.57 1.715-1.713 2.573-3.9 2.573-6.567v-54.816c0-2.667-.858-4.854-2.573-6.567-1.708-1.711-3.897-2.57-6.563-2.57H260.494c-2.666 0-4.853.855-6.567 2.57-1.71 1.713-2.568 3.9-2.568 6.567v54.816c0 2.667.855 4.854 2.568 6.567 1.714 1.712 3.901 2.57 6.567 2.57zM260.497 73.089h73.087c2.666 0 4.856-.855 6.563-2.568 1.718-1.714 2.563-3.901 2.563-6.567V9.136c0-2.663-.846-4.853-2.563-6.567C338.44.859 336.25 0 333.584 0h-73.087c-2.666 0-4.853.855-6.567 2.568-1.709 1.715-2.568 3.905-2.568 6.567v54.818c0 2.666.855 4.853 2.568 6.567 1.715 1.71 3.901 2.569 6.567 2.569zM196.54 401.991h-54.817V9.136c0-2.663-.854-4.856-2.568-6.567C137.441.859 135.254 0 132.587 0H77.769c-2.663 0-4.856.855-6.567 2.568-1.709 1.715-2.568 3.905-2.568 6.567V401.99H13.816c-4.184 0-7.04 1.902-8.564 5.708-1.525 3.621-.855 6.95 1.997 9.996l91.361 91.365c2.094 1.707 4.281 2.562 6.567 2.562 2.474 0 4.665-.855 6.567-2.562l91.076-91.078c1.906-2.279 2.856-4.571 2.856-6.844 0-2.676-.859-4.859-2.568-6.584-1.713-1.706-3.9-2.562-6.568-2.562zM504.604 441.109c-1.715-1.718-3.901-2.573-6.567-2.573h-237.54c-2.666 0-4.853.855-6.567 2.573-1.709 1.711-2.568 3.901-2.568 6.564v54.815c0 2.673.855 4.853 2.568 6.571 1.715 1.711 3.901 2.566 6.567 2.566h237.539c2.666 0 4.853-.855 6.567-2.566 1.711-1.719 2.566-3.898 2.566-6.571v-54.815c.004-2.662-.855-4.853-2.565-6.564zM260.494 365.445H443.22c2.663 0 4.853-.855 6.57-2.566 1.708-1.711 2.563-3.901 2.563-6.563v-54.823c0-2.662-.855-4.853-2.563-6.563-1.718-1.711-3.907-2.566-6.57-2.566H260.494c-2.666 0-4.853.855-6.567 2.566-1.71 1.711-2.568 3.901-2.568 6.563v54.823c0 2.662.855 4.853 2.568 6.563 1.714 1.711 3.901 2.566 6.567 2.566z"
                      fill="#44b2c9"
                      opacity={1}
                      data-original="#000000"
                      className=""
                    />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 511.627 511.627"
                  onClick={() =>
                    setSortCallback(() => (a, b) => b.amount - a.amount)
                  }
                >
                  <g>
                    <path
                      d="M333.584 438.536h-73.087c-2.666 0-4.853.855-6.567 2.573-1.709 1.711-2.568 3.901-2.568 6.564v54.815c0 2.673.855 4.853 2.568 6.571 1.715 1.711 3.901 2.566 6.567 2.566h73.087c2.666 0 4.856-.855 6.563-2.566 1.718-1.719 2.563-3.898 2.563-6.571v-54.815c0-2.663-.846-4.854-2.563-6.564-1.707-1.717-3.897-2.573-6.563-2.573zM196.54 109.636h-54.817v392.355c0 2.663-.854 4.856-2.568 6.567-1.714 1.71-3.901 2.569-6.568 2.569H77.769c-2.663 0-4.856-.855-6.567-2.568-1.709-1.715-2.568-3.905-2.568-6.567V109.636H13.816c-4.184 0-7.04-1.902-8.564-5.708-1.525-3.621-.855-6.95 1.997-9.996l91.361-91.365c2.094-1.707 4.281-2.562 6.567-2.562 2.474 0 4.665.855 6.567 2.562l91.076 91.078c1.906 2.279 2.856 4.571 2.856 6.844 0 2.676-.859 4.859-2.568 6.584-1.713 1.706-3.9 2.562-6.568 2.562zM388.4 292.362H260.494c-2.666 0-4.853.855-6.567 2.566-1.71 1.711-2.568 3.901-2.568 6.563v54.823c0 2.662.855 4.853 2.568 6.563 1.714 1.711 3.901 2.566 6.567 2.566H388.4c2.666 0 4.855-.855 6.563-2.566 1.715-1.711 2.573-3.901 2.573-6.563v-54.823c0-2.662-.858-4.853-2.573-6.563-1.707-1.71-3.897-2.566-6.563-2.566zM504.604 2.568C502.889.859 500.702 0 498.036 0H260.497c-2.666 0-4.853.855-6.567 2.568-1.709 1.715-2.568 3.905-2.568 6.567v54.818c0 2.666.855 4.853 2.568 6.567 1.715 1.709 3.901 2.568 6.567 2.568h237.539c2.666 0 4.853-.855 6.567-2.568 1.711-1.714 2.566-3.901 2.566-6.567V9.136c.004-2.663-.855-4.857-2.565-6.568zM443.22 146.181H260.494c-2.666 0-4.853.855-6.567 2.57-1.71 1.713-2.568 3.9-2.568 6.567v54.816c0 2.667.855 4.854 2.568 6.567 1.714 1.711 3.901 2.57 6.567 2.57H443.22c2.663 0 4.853-.855 6.57-2.57 1.708-1.713 2.563-3.9 2.563-6.567v-54.816c0-2.667-.855-4.858-2.563-6.567-1.721-1.711-3.911-2.57-6.57-2.57z"
                      fill="#44b2c9"
                    />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={512}
                  height={512}
                  x={0}
                  y={0}
                  viewBox="0 0 507.2 507.2"
                  style={{
                    enableBackground: "new 0 0 512 512",
                  }}
                  xmlSpace="preserve"
                  className=""
                  onClick={() => setSortCallback(() => () => {})}
                >
                  <g>
                    <circle
                      cx={253.6}
                      cy={253.6}
                      r={253.6}
                      style={{}}
                      fill="#ffff"
                      data-original="#f15249"
                      className=""
                      opacity={1}
                    />
                    <path
                      d="M147.2 368 284 504.8c115.2-13.6 206.4-104 220.8-219.2L367.2 148l-220 220z"
                      style={{}}
                      fill="#efefef"
                      data-original="#ad0e0e"
                      className=""
                      opacity={1}
                    />
                    <path
                      d="M373.6 309.6c11.2 11.2 11.2 30.4 0 41.6l-22.4 22.4c-11.2 11.2-30.4 11.2-41.6 0l-176-176c-11.2-11.2-11.2-30.4 0-41.6l23.2-23.2c11.2-11.2 30.4-11.2 41.6 0l175.2 176.8z"
                      style={{}}
                      fill="#c71717"
                      data-original="#ffffff"
                      className=""
                      opacity={1}
                    />
                    <path
                      d="M280.8 216 216 280.8l93.6 92.8c11.2 11.2 30.4 11.2 41.6 0l23.2-23.2c11.2-11.2 11.2-30.4 0-41.6L280.8 216z"
                      style={{}}
                      fill="#b61515"
                      data-original="#d6d6d6"
                      className=""
                      opacity={1}
                    />
                    <path
                      d="M309.6 133.6c11.2-11.2 30.4-11.2 41.6 0l23.2 23.2c11.2 11.2 11.2 30.4 0 41.6L197.6 373.6c-11.2 11.2-30.4 11.2-41.6 0l-22.4-22.4c-11.2-11.2-11.2-30.4 0-41.6l176-176z"
                      style={{}}
                      fill="#c71717"
                      data-original="#ffffff"
                      className=""
                      opacity={1}
                    />
                  </g>
                </svg>
              </span>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTable.sort(sortCallback).map((expense) => {
            const { id, title, category, amount } = expense;
            return (
              <tr
                key={id}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setMenuPosition({ top: e.clientY + 4, left: e.clientX + 4 });
                  setRowId(id);
                }}
              >
                <td>{title}</td>
                <td>{category}</td>
                <td>₹ {amount}</td>
                <td>
                  <div className="Action">
                    <div
                      onClick={() => {
                        setExpense({
                          title: title,
                          category: category,
                          amount: amount,
                        });
                        setEditRowId(id);
                      }}
                    >
                      <svg
                        viewBox="0 -0.5 21 21"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          {
                            '\n                      {" "}\n                      '
                          }
                          <title>{"Edit"}</title>
                          {'{" "}\n                      '}
                          <desc>{"Created with Sketch."}</desc>
                          <defs />
                          {'{" "}\n                      '}
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            {
                              '\n                        {" "}\n                        '
                            }
                            <g
                              id="Dribbble-Light-Preview"
                              transform="translate(-59.000000, -400.000000)"
                              fill="#fc8701"
                            >
                              {
                                '\n                          {" "}\n                          '
                              }
                              <g
                                id="icons"
                                transform="translate(56.000000, 160.000000)"
                              >
                                {
                                  '\n                            {" "}\n                            '
                                }
                                <path
                                  d="M3,260 L24,260 L24,258.010742 L3,258.010742 L3,260 Z M13.3341,254.032226 L9.3,254.032226 L9.3,249.950269 L19.63095,240 L24,244.115775 L13.3341,254.032226 Z"
                                  id="edit_fill-[#1480]"
                                >
                                  {
                                    '\n                              {" "}\n                            '
                                  }
                                </path>
                                {'{" "}\n                          '}
                              </g>
                              {'{" "}\n                        '}
                            </g>
                            {'{" "}\n                      '}
                          </g>
                          {'{" "}\n                    '}
                        </g>
                      </svg>
                    </div>
                    <div
                      title="Delete"
                      onClick={() => {
                        setExpenses((prevState) =>
                          prevState.filter((expense) => expense.id !== id),
                        );
                      }}
                    >
                      <svg
                        width="187px"
                        height="187px"
                        viewBox="0 0 24.00 24.00"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#fc8701"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M10 11V17"
                            stroke="#fc8701"
                            strokeWidth="1.7280000000000002"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                          <path
                            d="M14 11V17"
                            stroke="#fc8701"
                            strokeWidth="1.7280000000000002"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                          <path
                            d="M4 7H20"
                            stroke="#fc8701"
                            strokeWidth="1.7280000000000002"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                          <path
                            d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                            stroke="#fc8701"
                            strokeWidth="1.7280000000000002"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                          <path
                            d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                            stroke="#fc8701"
                            strokeWidth="1.7280000000000002"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot style={{ fontWeight: "bold" }}>
          <tr>
            <td>Total</td>
            <td />
            <td>₹ {totalSum}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
