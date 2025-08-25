import { useEffect } from "react";
import { router } from "expo-router";

export default function ManagementIndex() {
  useEffect(() => {
    router.replace("/screens/(drawer)/student_module/student_list");
  }, []);

  return null;
}
