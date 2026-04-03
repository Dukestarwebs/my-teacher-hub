import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PendingApproval from "./pages/PendingApproval";

import StudentLayout from "./components/layouts/StudentLayout";
import Dashboard from "./pages/student/Dashboard";
import SearchPage from "./pages/student/SearchPage";
import TeacherProfile from "./pages/student/TeacherProfile";
import Seminars from "./pages/student/Seminars";
import SeminarDetail from "./pages/student/SeminarDetail";
import Resources from "./pages/student/Resources";
import Exams from "./pages/student/Exams";
import ExamTaking from "./pages/student/ExamTaking";
import ExamResults from "./pages/student/ExamResults";
import Messages from "./pages/student/Messages";
import Notifications from "./pages/student/Notifications";
import Progress from "./pages/student/Progress";
import Profile from "./pages/student/Profile";
import Settings from "./pages/student/Settings";

import TeacherLayout from "./components/layouts/TeacherLayout";
import TeacherSignup from "./pages/teacher/TeacherSignup";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import TeacherSeminars from "./pages/teacher/TeacherSeminars";
import CreateSeminar from "./pages/teacher/CreateSeminar";
import TeacherResources from "./pages/teacher/TeacherResources";
import TeacherExams from "./pages/teacher/TeacherExams";
import TeacherEarnings from "./pages/teacher/TeacherEarnings";
import TeacherProfilePage from "./pages/teacher/TeacherProfile";

import AdminLayout from "./components/layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminApprovals from "./pages/admin/AdminApprovals";
import AdminSeminars from "./pages/admin/AdminSeminars";
import AdminResources from "./pages/admin/AdminResources";
import AdminExams from "./pages/admin/AdminExams";
import AdminPayments from "./pages/admin/AdminPayments";
import AdminNotifications from "./pages/admin/AdminNotifications";
import AdminReports from "./pages/admin/AdminReports";
import AdminSettings from "./pages/admin/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/teacher/signup" element={<TeacherSignup />} />
            <Route path="/pending-approval" element={<PendingApproval />} />

            {/* Student */}
            <Route element={<ProtectedRoute allowedRoles={["student"]}><StudentLayout /></ProtectedRoute>}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/teachers/:teacherId" element={<TeacherProfile />} />
              <Route path="/seminars" element={<Seminars />} />
              <Route path="/seminars/:seminarId" element={<SeminarDetail />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/exams" element={<Exams />} />
              <Route path="/exams/:examId" element={<ExamTaking />} />
              <Route path="/exams/:examId/results" element={<ExamResults />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Route>

            {/* Teacher */}
            <Route element={<ProtectedRoute allowedRoles={["teacher"]}><TeacherLayout /></ProtectedRoute>}>
              <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
              <Route path="/teacher/seminars" element={<TeacherSeminars />} />
              <Route path="/teacher/seminars/create" element={<CreateSeminar />} />
              <Route path="/teacher/resources" element={<TeacherResources />} />
              <Route path="/teacher/exams" element={<TeacherExams />} />
              <Route path="/teacher/earnings" element={<TeacherEarnings />} />
              <Route path="/teacher/profile" element={<TeacherProfilePage />} />
            </Route>

            {/* Admin */}
            <Route element={<ProtectedRoute allowedRoles={["admin"]}><AdminLayout /></ProtectedRoute>}>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/approvals" element={<AdminApprovals />} />
              <Route path="/admin/seminars" element={<AdminSeminars />} />
              <Route path="/admin/resources" element={<AdminResources />} />
              <Route path="/admin/exams" element={<AdminExams />} />
              <Route path="/admin/payments" element={<AdminPayments />} />
              <Route path="/admin/notifications" element={<AdminNotifications />} />
              <Route path="/admin/reports" element={<AdminReports />} />
              <Route path="/admin/settings" element={<AdminSettings />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
