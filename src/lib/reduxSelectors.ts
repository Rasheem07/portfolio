import { useSelector } from "react-redux";
import { RootState } from "./redux";

export const useTheme = () => {
  return useSelector((state: RootState) => state.theme);
}
    