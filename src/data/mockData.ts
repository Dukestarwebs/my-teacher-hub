export const SUBJECTS = [
  { id: "math", name: "Mathematics", icon: "📐", color: "bg-blue-100 text-blue-700" },
  { id: "eng", name: "English", icon: "📝", color: "bg-purple-100 text-purple-700" },
  { id: "bio", name: "Biology", icon: "🧬", color: "bg-green-100 text-green-700" },
  { id: "chem", name: "Chemistry", icon: "⚗️", color: "bg-orange-100 text-orange-700" },
  { id: "phys", name: "Physics", icon: "⚡", color: "bg-yellow-100 text-yellow-700" },
  { id: "geo", name: "Geography", icon: "🌍", color: "bg-teal-100 text-teal-700" },
  { id: "hist", name: "History", icon: "📜", color: "bg-red-100 text-red-700" },
];

export const MOCK_TEACHERS = [
  { uid: "teacher-001", name: "Ssempala David", email: "teacher@myteacher.ug", subject: "Mathematics", bio: "10+ years teaching experience", photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=David", isOnline: true, isApproved: true, rating: 4.8, totalReviews: 45 },
  { uid: "teacher-002", name: "Namutebi Sarah", email: "sarah@myteacher.ug", subject: "English", bio: "Passionate about literature", photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", isOnline: false, isApproved: true, rating: 4.6, totalReviews: 32 },
  { uid: "teacher-003", name: "Okello James", email: "james@myteacher.ug", subject: "Physics", bio: "Making physics fun and practical", photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=James", isOnline: true, isApproved: true, rating: 4.9, totalReviews: 58 },
  { uid: "teacher-004", name: "Apio Rebecca", email: "rebecca@myteacher.ug", subject: "Biology", bio: "Biology specialist with field experience", photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rebecca", isOnline: false, isApproved: true, rating: 4.5, totalReviews: 22 },
  { uid: "teacher-005", name: "Mugisha Peter", email: "peter@myteacher.ug", subject: "Chemistry", bio: "Chemistry made simple", photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=Peter", isOnline: true, isApproved: false, rating: 0, totalReviews: 0 },
];

export const MOCK_SEMINARS = [
  { id: "sem-001", title: "Mastering Algebra Basics", description: "Learn foundational algebra concepts", teacherId: "teacher-001", teacherName: "Ssempala David", subject: "Mathematics", fee: 15000, deadline: "2026-04-10T10:00:00", scheduledAt: "2026-04-12T14:00:00", duration: 90, streamType: "video" as const, maxParticipants: 50, registeredStudents: ["student-001"], status: "upcoming" as const },
  { id: "sem-002", title: "English Essay Writing", description: "Master the art of essay composition", teacherId: "teacher-002", teacherName: "Namutebi Sarah", subject: "English", fee: 10000, deadline: "2026-04-08T10:00:00", scheduledAt: "2026-04-10T10:00:00", duration: 60, streamType: "video" as const, maxParticipants: 30, registeredStudents: [], status: "upcoming" as const },
  { id: "sem-003", title: "Newton's Laws of Motion", description: "Deep dive into mechanics", teacherId: "teacher-003", teacherName: "Okello James", subject: "Physics", fee: 20000, deadline: "2026-03-27T08:00:00", scheduledAt: "2026-03-27T14:00:00", duration: 120, streamType: "audio" as const, maxParticipants: 40, registeredStudents: ["student-001"], status: "live" as const },
];

export const MOCK_RESOURCES = [
  { id: "res-001", title: "Algebra Formulas Cheat Sheet", description: "Essential algebra formulas for UACE", subject: "Mathematics", fileType: "pdf" as const, fileURL: "#", uploadedBy: "Ssempala David", uploaderRole: "teacher" as const },
  { id: "res-002", title: "English Grammar Guide", description: "Complete grammar reference", subject: "English", fileType: "pdf" as const, fileURL: "#", uploadedBy: "Namutebi Sarah", uploaderRole: "teacher" as const },
  { id: "res-003", title: "Physics Lab Manual", description: "Practical experiments guide", subject: "Physics", fileType: "doc" as const, fileURL: "#", uploadedBy: "Admin", uploaderRole: "admin" as const },
  { id: "res-004", title: "Biology Diagrams Pack", description: "Cell diagrams and anatomy charts", subject: "Biology", fileType: "ppt" as const, fileURL: "#", uploadedBy: "Apio Rebecca", uploaderRole: "teacher" as const },
];

export const MOCK_EXAMS = [
  { id: "exam-001", title: "Algebra Fundamentals Test", subject: "Mathematics", teacherId: "teacher-001", duration: 30, passMark: 60, questions: [
    { question: "Solve: 2x + 5 = 15", options: ["x = 5", "x = 10", "x = 3", "x = 7"], correctAnswer: 0, explanation: "2x = 15 - 5 = 10, so x = 5" },
    { question: "Simplify: 3(x + 2)", options: ["3x + 2", "3x + 6", "6x", "x + 6"], correctAnswer: 1, explanation: "Distribute 3: 3·x + 3·2 = 3x + 6" },
    { question: "What is the slope of y = 4x + 1?", options: ["1", "4", "5", "0"], correctAnswer: 1, explanation: "In y = mx + b, m is the slope. Here m = 4" },
    { question: "Factor: x² - 9", options: ["(x-3)(x+3)", "(x-9)(x+1)", "(x-3)²", "(x+9)(x-1)"], correctAnswer: 0, explanation: "Difference of squares: a²-b² = (a-b)(a+b)" },
    { question: "Solve: x/3 = 7", options: ["x = 21", "x = 10", "x = 3", "x = 7/3"], correctAnswer: 0, explanation: "Multiply both sides by 3: x = 21" },
  ]},
  { id: "exam-002", title: "English Grammar Quiz", subject: "English", teacherId: "teacher-002", duration: 20, passMark: 70, questions: [
    { question: "Choose the correct sentence:", options: ["He don't like it", "He doesn't like it", "He not like it", "He no like it"], correctAnswer: 1, explanation: "Third person singular uses 'doesn't'" },
    { question: "Identify the noun:", options: ["Run", "Beautiful", "Happiness", "Quickly"], correctAnswer: 2, explanation: "Happiness is an abstract noun" },
    { question: "Past tense of 'go':", options: ["Goed", "Gone", "Went", "Going"], correctAnswer: 2, explanation: "'Go' is irregular: go → went → gone" },
  ]},
];

export const MOCK_EXAM_RESULTS = [
  { id: "result-001", examId: "exam-001", studentId: "student-001", studentName: "Nakamya Grace", score: 80, passed: true, completedAt: "2026-03-20T10:30:00" },
  { id: "result-002", examId: "exam-002", studentId: "student-001", studentName: "Nakamya Grace", score: 67, passed: false, completedAt: "2026-03-22T14:00:00" },
];

export const MOCK_NOTIFICATIONS = [
  { id: "n-001", type: "seminar" as const, title: "Seminar Reminder", body: "Mastering Algebra Basics starts in 2 days", read: false, link: "/seminars/sem-001", createdAt: "2026-03-25T08:00:00" },
  { id: "n-002", type: "result" as const, title: "Exam Result", body: "You scored 80% on Algebra Fundamentals Test", read: true, link: "/exams/exam-001/results", createdAt: "2026-03-20T10:35:00" },
  { id: "n-003", type: "message" as const, title: "New Message", body: "Ssempala David sent you a message", read: false, link: "/messages", createdAt: "2026-03-24T16:00:00" },
];

export const MOCK_MESSAGES = [
  { conversationId: "conv-001", participants: ["student-001", "teacher-001"], studentId: "student-001", teacherId: "teacher-001", teacherName: "Ssempala David", teacherPhoto: "https://api.dicebear.com/7.x/avataaars/svg?seed=David", lastMessage: "Sure, I can help with that equation!", lastMessageAt: "2026-03-24T16:00:00", messages: [
    { id: "msg-001", senderId: "student-001", receiverId: "teacher-001", content: "Hello teacher, can you help me with quadratic equations?", read: true, createdAt: "2026-03-24T15:50:00" },
    { id: "msg-002", senderId: "teacher-001", receiverId: "student-001", content: "Sure, I can help with that equation! What specifically are you struggling with?", read: true, createdAt: "2026-03-24T16:00:00" },
  ]},
];

export const MOCK_REVIEWS = [
  { id: "rev-001", teacherId: "teacher-001", studentId: "student-001", studentName: "Nakamya Grace", seminarId: "sem-001", rating: 5, comment: "Excellent teacher! Made algebra so easy to understand.", createdAt: "2026-03-15T10:00:00" },
  { id: "rev-002", teacherId: "teacher-001", studentId: "student-002", studentName: "Lubega Brian", seminarId: "sem-001", rating: 4, comment: "Very clear explanations. Would recommend.", createdAt: "2026-03-18T12:00:00" },
];

export const MOCK_PAYMENTS = [
  { id: "pay-001", studentName: "Nakamya Grace", seminarTitle: "Mastering Algebra Basics", amount: 15000, method: "MTN Mobile Money", status: "completed", date: "2026-03-20T10:00:00" },
  { id: "pay-002", studentName: "Nakamya Grace", seminarTitle: "Newton's Laws of Motion", amount: 20000, method: "Airtel Money", status: "completed", date: "2026-03-22T14:00:00" },
  { id: "pay-003", studentName: "Lubega Brian", seminarTitle: "Mastering Algebra Basics", amount: 15000, method: "MTN Mobile Money", status: "pending", date: "2026-03-25T09:00:00" },
];
