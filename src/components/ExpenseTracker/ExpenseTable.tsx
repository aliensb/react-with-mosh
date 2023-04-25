import ExpenseItem from "./ExpenseItem";

interface Props {
  items?: ExpenseItem[];
  onDelete: (id: number) => void;
}

export default function ExpenseTable({ items = [], onDelete }: Props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it) => (
            <tr key={it.id}>
              <td>{it.description}</td>
              <td>{it.amount}</td>
              <td>{it.category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    onDelete(it.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{items.reduce<number>((acc, i) => acc + i.amount, 0)}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
