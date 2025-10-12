import { appConstants } from "../constants/appConstants";
import method from "./method";
const apiFunctions = {
  login: (payload) => method.post("/login", payload),
  adduser: (payload) => method.post("/add_users", payload),
  deleteUser: (payload) => method.delete(`/delete_users/${payload}`),
  updateUser: (payload) => method.put("/update_users", payload),

  sendFollowup: (payload) => method.post("/send_followup", payload),
  getAllowedusers: (payload) => method.get("/get_users", payload),

 getWaitlistUsers: (page, limit, search) =>
    method.get(`/waitlist_users?page=${page}&limit=${limit}&search=${search}`),
  getWaitlistUsersWithoutPagination: (search) =>
    method.get(`/waitlist_users_all?search=${search || ''}`),
  sendFollowupToWaitlist: (payload) =>
    method.post("/send_waitlist_followup", payload),
  getEmailHistory: (page, limit, search) =>
    method.get(`/email_history?page=${page}&limit=${limit}&search=${search}`),
  getSpecificEmailHistory: (payload) => method.get(`email_history/${payload}`),

  transformWaitListToAllowed: (payload) =>
    method.post(`/waitlistToallowed`, payload),
  getAllUsers: (page = 1, limit = 10, search = '', dateFilter = '', verificationFilter = '', authTypeFilter = '') => {
    const params = new URLSearchParams();
    params.append('page', page);
    params.append('limit', limit);
    if (search) params.append('search', search);
    if (dateFilter) params.append('dateFilter', dateFilter);
    if (verificationFilter) params.append('verificationFilter', verificationFilter);
    if (authTypeFilter) params.append('authTypeFilter', authTypeFilter);
    
    return method.get(`/users?${params.toString()}`);
  },
  getUserDetails: (userId) => method.get(`/users/${userId}`),
  getUsageSummary: (userId) => method.get(`https://backend-alfred.simbli.ai/usage/summary/${userId}`),
  sendCoupon: (payload) => method.post("/send_coupon", payload),

  //newAdmin

  getUsersGrowth: (timeRange) => method.get(`${appConstants?.newAdminBaseUrl}/new-users-growth?timeRange=${timeRange}`),
  getUsersGrowthMonthly: () => method.get(`${appConstants?.newAdminBaseUrl}/monthly-user-growth`),
  getMonthlyRevenue: () => method.get(`${appConstants?.newAdminBaseUrl}/monthly-revenue`),
  getRecentActivity: (limit) => method.get(`${appConstants?.newAdminBaseUrl}/recent-activity?limit=${limit || 10}`),
  getMockUser: (page, limit) => method.get(`${appConstants?.newAdminBaseUrl}/users-with-usage?page=${page || 1}&limit=${limit || 10}`),
  getUserPlansData: () => method.get(`${appConstants?.newAdminBaseUrl}/subscription-plans-with-revenue`)
};

export default apiFunctions;
