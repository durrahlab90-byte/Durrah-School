import React, { useState } from 'react';

interface Exam {
  date: string;
  day: string;
  subject: string;
}

const scheduleData: Record<string, Exam[]> = {
  "تاسع": [
    { date: '6-10', day: 'الاثنين', subject: 'دراسات' },
    { date: '8-10', day: 'الأربعاء', subject: 'لغة عربية' },
    { date: '9-10', day: 'الخميس', subject: 'احياء' },
    { date: '13-10', day: 'الاثنين', subject: 'تربية اسلاميه' },
    { date: '15-10', day: 'الأربعاء', subject: 'رياضيات' },
    { date: '16-10', day: 'الخميس', subject: 'انجليزي' },
    { date: '20-10', day: 'الاثنين', subject: 'فيزياء' },
    { date: '22-10', day: 'الأربعاء', subject: 'كيمياء' },
  ],
  "ثامن": [
    { date: '6-10', day: 'الاثنين', subject: 'دراسات' },
    { date: '8-10', day: 'الأربعاء', subject: 'لغة عربية' },
    { date: '13-10', day: 'الاثنين', subject: 'رياضيات' },
    { date: '15-10', day: 'الأربعاء', subject: 'تربية اسلاميه' },
    { date: '16-10', day: 'الخميس', subject: 'انجليزي' },
    { date: '20-10', day: 'الاثنين', subject: 'علوم' },
  ],
  "سابع": [
    { date: '6-10', day: 'الاثنين', subject: 'تربية اسلاميه' },
    { date: '8-10', day: 'الأربعاء', subject: 'لغة عربية' },
    { date: '13-10', day: 'الاثنين', subject: 'رياضيات' },
    { date: '16-10', day: 'الخميس', subject: 'انجليزي' },
    { date: '20-10', day: 'الاثنين', subject: 'علوم' },
    { date: '23-10', day: 'الخميس', subject: 'دراسات' },
  ],
  "سادس": [
    { date: '6-10', day: 'الاثنين', subject: 'تربية اسلاميه' },
    { date: '8-10', day: 'الأربعاء', subject: 'لغة عربية' },
    { date: '9-10', day: 'الخميس', subject: 'دراسات' },
    { date: '15-10', day: 'الأربعاء', subject: 'رياضيات' },
    { date: '16-10', day: 'الخميس', subject: 'انجليزي' },
    { date: '22-10', day: 'الأربعاء', subject: 'علوم' },
  ],
  "خامس": [
    { date: '8-10', day: 'الأربعاء', subject: 'لغة عربية' },
    { date: '9-10', day: 'الخميس', subject: 'دراسات' },
    { date: '13-10', day: 'الاثنين', subject: 'رياضيات' },
    { date: '15-10', day: 'الأربعاء', subject: 'تربية اسلاميه' },
    { date: '16-10', day: 'الخميس', subject: 'انجليزي' },
    { date: '20-10', day: 'الاثنين', subject: 'علوم' },
  ]
};

const gradeColors: Record<string, string> = {
  "تاسع": 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200',
  "ثامن": 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200',
  "سابع": 'bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200',
  "سادس": 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200',
  "خامس": 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200',
};

const gradeBorderColors: Record<string, string> = {
  "تاسع": 'border-green-500',
  "ثامن": 'border-yellow-500',
  "سابع": 'border-pink-500',
  "سادس": 'border-blue-500',
  "خامس": 'border-green-500',
};


const grades = ["تاسع", "ثامن", "سابع", "سادس", "خامس"];

export const ExamSchedule: React.FC = () => {
    const [selectedGrade, setSelectedGrade] = useState(grades[0]);

    return (
        <div className="bg-surface dark:bg-darkSurface p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold text-center mb-4 text-textPrimary dark:text-darkTextPrimary">
                جدول الاختبارات الفترية الأول (2025/2026)
            </h2>

            <div className="flex justify-center flex-wrap gap-2 mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                {grades.map(grade => (
                    <button
                        key={grade}
                        onClick={() => setSelectedGrade(grade)}
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                            selectedGrade === grade
                                ? `${gradeColors[grade]} border-2 ${gradeBorderColors[grade]}`
                                : 'bg-gray-100 dark:bg-gray-700 text-textSecondary dark:text-darkTextSecondary hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                    >
                        الصف {grade}
                    </button>
                ))}
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-right text-textSecondary dark:text-darkTextSecondary">
                    <thead className="text-xs text-textPrimary dark:text-darkTextPrimary uppercase bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                المادة
                            </th>
                            <th scope="col" className="px-6 py-3">
                                اليوم
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-l-lg">
                                التاريخ
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {scheduleData[selectedGrade].map((exam, index) => (
                            <tr key={index} className="bg-surface dark:bg-darkSurface border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-textPrimary dark:text-darkTextPrimary whitespace-nowrap">
                                    {exam.subject}
                                </th>
                                <td className="px-6 py-4">
                                    {exam.day}
                                </td>
                                <td className="px-6 py-4">
                                    {exam.date}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
