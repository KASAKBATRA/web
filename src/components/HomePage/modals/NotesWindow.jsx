import React from "react";
import { motion } from "motion/react";
import { X, Download, Eye } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

// Subjects for each semester
const semesterSubjects = {
  3: [
    "Data Science",
    "Data Structures",
    "Principles of Artificial Intelligence",
    "Probability, Statistics and Linear Algebra",
    "Digital Logic Design",
    "Universal Human Values",
    "Critical Reasoning, System Thinking"
  ],
  4: [
    "Machine Learning",
    "Object-Oriented Programming",
    "Computational Mathematics",
    "Computer Networks and Internet Protocols",
    "Software Engineering",
    "Database Management System"
  ],
  5: [
    "Computer Architecture and Organization",
    "Design and Analysis of Algorithms",
    "Data Mining",
    "Internet of Things",
    "Operating System",
    "Principles of Entrepreneurship Mindset"
  ],
  6: [
    "Digital Image Processing",
    "Fundamentals of Deep Learning",
    "Big Data Analytics",
    "Cognitive Computing",
    "Blockchain Technology",
    "Cloud Computing"
  ]
};

export default function NotesWindow({ onClose }) {
  const { theme, isDark } = useTheme();
  const [selectedSemester, setSelectedSemester] = React.useState('3');
  const subjects = semesterSubjects[selectedSemester];


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 flex items-center justify-center p-8"
      style={{
        background: isDark ? "rgba(13, 27, 42, 0.7)" : "rgba(78, 52, 46, 0.4)",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="p-8 max-w-6xl w-full max-h-[80vh] overflow-y-auto rounded-2xl transition-all duration-300"
        style={{
          background: `${theme.card}F5`, // 96% opacity
          backdropFilter: "blur(25px)",
          border: `1px solid ${theme.secondary}40`,
          boxShadow: isDark
            ? `0 20px 60px ${theme.primary}20`
            : `0 20px 60px ${theme.secondary}20`,
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold transition-colors duration-300"
            style={{ color: theme.text }}
          >
            Study Materials
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-2 rounded-lg transition-all duration-300"
            style={{
              backgroundColor: `${theme.secondary}20`,
            }}
          >
            <X size={24} style={{ color: theme.secondary }} />
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex space-x-4 mb-8"
        >
          <select
            value={selectedSemester}
            onChange={e => setSelectedSemester(e.target.value)}
            className="rounded-xl px-4 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"
            style={{
              background: isDark
                ? `${theme.background}80`
                : `${theme.card}80`,
              border: `1px solid ${theme.secondary}40`,
              color: theme.text,
              focusRingColor: theme.primary,
            }}
          >
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
          </select>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: `0 8px 25px ${theme.primary}20`,
              }}
              className="p-6 rounded-2xl cursor-pointer transition-all duration-300"
              style={{
                background: `${theme.card}CC`,
                backdropFilter: "blur(20px)",
                border: `1px solid ${theme.secondary}30`,
                boxShadow: isDark
                  ? `0 4px 20px ${theme.primary}10`
                  : `0 4px 20px ${theme.secondary}10`,
              }}
            >
              <h3
                className="text-lg font-semibold mb-3 transition-colors duration-300"
                style={{ color: theme.text }}
              >
                {subject}
              </h3>
              <div
                className="space-y-2 text-sm mb-4 transition-colors duration-300"
                style={{ color: theme.secondary }}
              >
                <div>Semester: {selectedSemester}</div>
                <div>Subject: {subject}</div>
                <div>Size: 2 MB</div>
              </div>
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-3 py-2 rounded-lg text-sm transition-all duration-300 flex items-center justify-center"
                  style={{
                    background: `${theme.primary}20`,
                    color: theme.primary,
                    border: `1px solid ${theme.primary}30`,
                  }}
                >
                  <Eye size={16} className="mr-1" />
                  Preview
                </motion.button>
                {/* Download button removed as requested */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
