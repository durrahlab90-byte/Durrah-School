import React from 'react';

const subjectData = [
  { subject: 'التربية الإسلامية', fifth: '٥', sixth: '٥', seventh: '٥', eighth: '٥', ninth: '٥' },
  { subject: 'اللغة العربية', fifth: '٧', sixth: '٧', seventh: '٧', eighth: '٧', ninth: '٧' },
  { subject: 'اللغة الإنجليزية', fifth: '٥', sixth: '٥', seventh: '٥', eighth: '٥', ninth: '٥' },
  { subject: 'الدراسات الاجتماعية', fifth: '٤', sixth: '٤', seventh: '٤', eighth: '٤', ninth: '٢' },
  { subject: 'المهارات الحياتية', fifth: '١', sixth: '١', seventh: '١', eighth: '١', ninth: '١' },
  { subject: 'الرياضيات', fifth: '٧', sixth: '٧', seventh: '٧', eighth: '٧', ninth: '٦' },
  { subject: 'العلوم العامة', fifth: '٥', sixth: '٥', seventh: '٦', eighth: '٦', ninth: '-' },
  { subject: 'فيزياء', fifth: '-', sixth: '-', seventh: '-', eighth: '-', ninth: '٣' },
  { subject: 'كيمياء', fifth: '-', sixth: '-', seventh: '-', eighth: '-', ninth: '٣' },
  { subject: 'أحياء', fifth: '-', sixth: '-', seventh: '-', eighth: '-', ninth: '٣' },
  { subject: 'تقنية المعلومات', fifth: '٢', sixth: '٢', seventh: '٢', eighth: '٢', ninth: '٢' },
  { subject: 'الرياضة المدرسية', fifth: '٢', sixth: '٢', seventh: '١', eighth: '١', ninth: '١' },
  { subject: 'الفنون التشكيلية', fifth: '١', sixth: '١', seventh: '١', eighth: '١', ninth: '١' },
  { subject: 'المهارات الموسيقية', fifth: '١', sixth: '١', seventh: '١', eighth: '١', ninth: '١' },
  { subject: 'خدمة التوجيه المهني', fifth: '-', sixth: '-', seventh: '-', eighth: '-', ninth: '-' },
];

const totals = { subject: 'إجمالي عدد الحصص', fifth: '٤٠', sixth: '٤٠', seventh: '٤٠', eighth: '٤٠', ninth: '٤٠' };

export const SubjectAllocation: React.FC = () => {
  return (
    <div className="bg-surface dark:bg-darkSurface p-4 rounded-lg shadow overflow-x-auto">
      <table className="w-full min-w-max text-center border-collapse">
        <thead>
          <tr>
            <th className="p-3 border-b-2 border-gray-300 dark:border-gray-600 bg-[#a18f7f] dark:bg-[#5c5045] text-white" rowSpan={2}>المادة</th>
            <th className="p-3 border-b-2 border-gray-300 dark:border-gray-600 bg-[#6c4b5e] dark:bg-[#4a3441] text-white" colSpan={5}>مدارس الفترة الواحدة</th>
          </tr>
          <tr>
            <th className="p-2 border-b-2 border-gray-300 dark:border-gray-600 bg-[#6c4b5e] dark:bg-[#4a3441] text-white font-medium">الخامس</th>
            <th className="p-2 border-b-2 border-gray-300 dark:border-gray-600 bg-[#6c4b5e] dark:bg-[#4a3441] text-white font-medium">السادس</th>
            <th className="p-2 border-b-2 border-gray-300 dark:border-gray-600 bg-[#6c4b5e] dark:bg-[#4a3441] text-white font-medium">السابع</th>
            <th className="p-2 border-b-2 border-gray-300 dark:border-gray-600 bg-[#6c4b5e] dark:bg-[#4a3441] text-white font-medium">الثامن</th>
            <th className="p-2 border-b-2 border-gray-300 dark:border-gray-600 bg-[#6c4b5e] dark:bg-[#4a3441] text-white font-medium">التاسع</th>
          </tr>
        </thead>
        <tbody>
          {subjectData.map((row, index) => (
            <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-3 bg-[#fdf2e2] dark:bg-[#4a4137] text-textPrimary dark:text-darkTextPrimary font-semibold text-right">{row.subject}</td>
              <td className="p-3 bg-[#fdf2e2] dark:bg-[#4a4137] text-textPrimary dark:text-darkTextPrimary">{row.fifth}</td>
              <td className="p-3 bg-[#fdf2e2] dark:bg-[#4a4137] text-textPrimary dark:text-darkTextPrimary">{row.sixth}</td>
              <td className="p-3 bg-[#fdf2e2] dark:bg-[#4a4137] text-textPrimary dark:text-darkTextPrimary">{row.seventh}</td>
              <td className="p-3 bg-[#fdf2e2] dark:bg-[#4a4137] text-textPrimary dark:text-darkTextPrimary">{row.eighth}</td>
              <td className="p-3 bg-[#fdf2e2] dark:bg-[#4a4137] text-textPrimary dark:text-darkTextPrimary">{row.ninth}</td>
            </tr>
          ))}
          <tr className="bg-[#e6a454] dark:bg-[#a17035] text-black dark:text-white font-bold">
            <td className="p-3 text-right">{totals.subject}</td>
            <td className="p-3">{totals.fifth}</td>
            <td className="p-3">{totals.sixth}</td>
            <td className="p-3">{totals.seventh}</td>
            <td className="p-3">{totals.eighth}</td>
            <td className="p-3">{totals.ninth}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};