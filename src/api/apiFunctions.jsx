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

  // analytics
  getFeatureUsageHeatmap: (days = 7) =>
    method.get(`https://backend-alfred.simbli.ai/admin/feature-usage-heatmap?days=${days}`),
  getCreditsByUser: (limit = 5) =>
    method.get(`https://backend-alfred.simbli.ai/admin/credits-by-user?limit=${limit}`),
  getAverageCreditsPerActiveUser: () =>
    method.get(`https://backend-alfred.simbli.ai/admin/average-credits-per-active-user`),
  getAiModelUsageBreakdown: () =>
    method.get(`https://backend-alfred.simbli.ai/admin/ai-model-usage-breakdown`),
  getFeatureUsageDistribution: () =>
    method.get(`https://backend-alfred.simbli.ai/admin/feature-usage-distribution`),
  getTotalCreditsConsumed: () =>
    method.get(`https://backend-alfred.simbli.ai/admin/total-credits-consumed`),
  getTopActiveUsers: (limit=5,timeRange) =>
    method.get(`https://backend-alfred.simbli.ai/admin/top-active-users?limit=${limit}&timeRange=${timeRange}`),

  //newAdmin

  getDashboard: () => method.get(`${appConstants?.newAdminBaseUrl}/dashboard`),
  getUsersGrowth: (timeRange) => method.get(`${appConstants?.newAdminBaseUrl}/new-users-growth?timeRange=${timeRange}`),
  getUsersGrowthMonthly: () => method.get(`${appConstants?.newAdminBaseUrl}/monthly-user-growth`),
  getMonthlyRevenue: () => method.get(`${appConstants?.newAdminBaseUrl}/monthly-revenue`),
  getRecentActivity: (limit) => method.get(`${appConstants?.newAdminBaseUrl}/recent-activity?limit=${limit || 10}`),
  getMockUser: (page, limit, search, planId, sortBy, activityStatus, startDate, endDate, planStatusFilter) => {
    const params = new URLSearchParams();
    params.append('page', page || 1);
    params.append('limit', limit || 10);
    if (search) params.append('search', search);
    if (planId) params.append('planId', planId);
    if (sortBy) params.append('sortBy', sortBy);
    if (activityStatus) params.append('activityStatus', activityStatus);
    if (startDate) params.append('startDate', startDate);
    if (endDate) params.append('endDate', endDate);
    if (planStatusFilter) params.append('planStatusFilter', planStatusFilter);
    return method.get(`${appConstants?.newAdminBaseUrl}/users-with-usage?${params.toString()}`);
  },
  getUserPlansData: () => method.get(`${appConstants?.newAdminBaseUrl}/subscription-plans-with-revenue`),
  getPaymentHistory: (page, limit) => method.get(`${appConstants?.newAdminBaseUrl}/payment-history?page=${page || 1}&limit=${limit || 10}`),
  getCoupons: (page, limit) => method.get(`${appConstants?.newAdminBaseUrl}/coupons?page=${page || 1}&limit=${limit || 10}`),
  getUserUsageData: (userId) => method.get(`${appConstants?.newAdminBaseUrl}/user-usage/${userId}`),
  getUsageTrends: (userId) => method.get(`https://backend-alfred.simbli.ai/admin/usage-trends?userId=${userId}`),
  getAllPlans: () => method.get(`${appConstants?.newAdminBaseUrl}/all-plans`),
  getUserByCountry: (timeRange) => method.get(`${appConstants?.newAdminBaseUrl}/getAllUserByCountry?timeRange=${timeRange}`),
  getContactUsRequests: (page, limit, search) => {
    const params = new URLSearchParams();
    params.append('page', page || 1);
    params.append('limit', limit || 10);
    if (search) params.append('search', search);
    return method.get(`${appConstants?.newAdminBaseUrl}/contact-us-requests?${params.toString()}`);
  },
  getNewsletterSubscriptions: (page, limit, search) => {
    const params = new URLSearchParams();
    params.append('page', page || 1);
    params.append('limit', limit || 10);
    if (search) params.append('search', search);
    return method.get(`${appConstants?.newAdminBaseUrl}/newsletter/subscriptions?${params.toString()}`);
  }
};

export default apiFunctions;
