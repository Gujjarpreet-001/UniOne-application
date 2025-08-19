import { useEffect } from "react";
import { router } from "expo-router";

export default function ManagementIndex() {
  useEffect(() => {
    router.replace("/screens/(drawer)/management/student_list");
  }, []);

  return null;
}
