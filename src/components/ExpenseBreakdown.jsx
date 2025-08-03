import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const ExpenseBreakdown = ({ data, categories }) => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-2">Expense Breakdown</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={100} label>
            {data.map((entry, index) => (
              <Cell key={index} fill={categories[entry.name]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseBreakdown;
