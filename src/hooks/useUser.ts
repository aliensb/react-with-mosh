import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "axios";

const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    userService
      .getAll<User>()
      .request.then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
        setLoading(false);
      });
  }, []);
  return { users, loading, error, setUsers, setError };
};

export default useUser;
