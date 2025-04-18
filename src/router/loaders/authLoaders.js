import secureLocalStorage from "react-secure-storage"
import { STORAGE_KEY } from "../../utils/const"
import { redirect } from "react-router-dom";

export const rootLoader = () => {
    const session = secureLocalStorage.getItem(STORAGE_KEY);
    if (session) throw redirect(`/${session.role}`)
    return true
}

export const managerAuthLoader = () => {
    const session = secureLocalStorage.getItem(STORAGE_KEY);
    if (session?.role === "manager") throw redirect("/manager")
    return true
}

export const studentAuthLoader = () => {
    const session = secureLocalStorage.getItem(STORAGE_KEY);
    if (session?.role === "student") throw redirect("/student")
    return true
}