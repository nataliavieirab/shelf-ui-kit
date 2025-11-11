import { useState } from "react";

export function useInputTextfield() {
  const [hoveredInfo, setHoveredInfo] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);
}
