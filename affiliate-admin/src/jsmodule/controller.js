import { adminService } from "./service";
import { toast } from "react-toastify";

export const Controller = {
  AdminLogin: async (formData) => {
    try {
      const data = await adminService.login(formData);
      toast.success("Login Success!");
      return { success: true, token: data.token, user: data.user };
    } catch (err) {
      toast.error(err.message || "Login Failed!");
      return { success: false, message: err.message };
    }
  },
};
