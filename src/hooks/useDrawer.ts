import {useAppDispatch, useAppSelector} from "./storeHooks";
import {openDrawer} from "../store";

export const useDrawer = () => {
const {isOpen} = useAppSelector(state => state.drawer);
const dispatch = useAppDispatch();

return {isOpen, openDrawer: (value: boolean) => dispatch(openDrawer(value))}
}