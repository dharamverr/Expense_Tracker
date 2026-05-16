export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  rowId,
  setExpenses,
  expense,
  setExpense,
  expenses,
  setEditRowId
}) {
  if (!menuPosition.left) return; //hide the context menu by default
  return (
    <div className="Context-menu" style={menuPosition}>
      <div
        onClick={() => {
          const data=expenses.find(expense => expense.id === rowId)
          setExpense({
            title: data.title,
            category: data.category,
            amount: data.amount
          })
          setEditRowId(rowId)
          setMenuPosition({});
        }}
      >
        &nbsp;Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}
      >
        &nbsp;Delete
      </div>
    </div>
  );
}
