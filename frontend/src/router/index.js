import { createRouter, createWebHistory } from "@ionic/vue-router"

import TabbedView from "@/views/TabbedView.vue"
import leaveRoutes from "./leaves"
import claimRoutes from "./claims"
import employeeAdvanceRoutes from "./advances"
import salarySlipRoutes from "./salary_slips"

const routes = [
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/",
		component: TabbedView,
		children: [
			{
				path: "",
				redirect: "/home",
			},
			{
				path: "/home",
				name: "Home",
				component: () => import("@/views/Home.vue"),
			},
			{
				path: "/leave/dashboard",
				name: "Leaves",
				component: () => import("@/views/leave/Dashboard.vue"),
			},
			{
				path: "/expense-claim/dashboard",
				name: "ExpenseClaims",
				component: () => import("@/views/expense_claim/Dashboard.vue"),
			},
			{
				path: "/salary-slip/dashboard",
				name: "SalarySlips",
				component: () => import("@/views/salary_slip/Dashboard.vue"),
			},
		],
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/Login.vue"),
	},
	{
		path: "/profile",
		name: "Profile",
		component: () => import("@/views/Profile.vue"),
	},
	{
		path: "/notifications",
		name: "Notifications",
		component: () => import("@/views/Notifications.vue"),
	},
	{
		path: "/invalid-employee",
		name: "InvalidEmployee",
		component: () => import("@/views/InvalidEmployee.vue"),
	},
	...leaveRoutes,
	...claimRoutes,
	...employeeAdvanceRoutes,
	...salarySlipRoutes,
]

const router = createRouter({
	history: createWebHistory("/hrms"),
	routes,
})

export default router
