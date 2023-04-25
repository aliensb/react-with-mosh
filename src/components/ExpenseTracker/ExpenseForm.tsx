import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(1, { message: "description must be at least 1 character!" }),
  amount: z.number().min(0, { message: "amount must be greater than 0" }),
  category: z
    .string()
    .min(1, { message: "category must be at least 1 charater" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onFormSubmit?: (data: FormData) => void;
  categories?: string[];
}

export default function ExpenseForm({
  onFormSubmit = () => {},
  categories = ["Groceries", "Utilities", "Entertainment"],
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const formSubmit = (data: FormData) => onFormSubmit(data);

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger  ">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger  ">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>

        <select
          {...register("category")}
          id="category"
          className="form-select"
          aria-label="Default select example"
        >
          {categories.map((c) => (
            <option value={c} key={c}>
              {c}
            </option>
          ))}
        </select>

        {errors.category && (
          <p className="text-danger  ">{errors.category.message}</p>
        )}
      </div>
      <div className="mb-3">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
}
