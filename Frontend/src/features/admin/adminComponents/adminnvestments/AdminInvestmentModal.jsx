// InvestmentModal.jsx
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import useAuth from "../../../../context/useAuth";

const InvestmentSchema = Yup.object().shape({
  productName: Yup.string()
    .trim()
    .min(3, "Product name must be at least 3 characters")
    .required("Product name is required"),
  amount: Yup.number()
    .positive("Amount must be greater than 0")
    .required("Investment amount is required"),
  roiPercent: Yup.number()
    .min(1, "ROI must be at least 1%")
    .max(100, "ROI cannot exceed 100%")
    .required("ROI percentage is required"),
  duration: Yup.string()
    .oneOf(
      ["1-6 months", "6-12 months", "1-3 years"],
      "Select a valid duration"
    )
    .required("Investment duration is required"),
});

const AdminInvestmentModal = ({ isOpen, onClose, addNewInvestment }) => {
  const { invest } = useAuth();
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/25 z-50 backdrop animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-xl shadow-2xl w-[90%] max-w-md transform transition-all animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-5 text-center border-b pb-3">
          <h3 className="text-2xl font-semibold text-teal-700">
            💼 Invest Funds
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Start your next fractional investment with Trapeza
          </p>
        </div>

        <Formik
          initialValues={{
            productName: "",
            amount: "",
            roiPercent: 10,
            duration: "",
          }}
          validationSchema={InvestmentSchema}
          onSubmit={async (values, { resetForm }) => {
            setLoading(true);

            // Compute dates
            const now = new Date();
            let endDate = new Date(now);
            switch (values.duration) {
              case "1-6 months":
                endDate.setMonth(endDate.getMonth() + 6);
                break;
              case "6-12 months":
                endDate.setMonth(endDate.getMonth() + 12);
                break;
              case "1-3 years":
                endDate.setFullYear(endDate.getFullYear() + 3);
                break;
              default:
                break;
            }

            const result = await invest(
              values.productName.trim(),
              parseFloat(values.amount),
              values.roiPercent,
              values.duration
            );
            setLoading(false);

            if (result.success) {
              toast.success(
                result.message || "Investment created successfully!"
              );

              if (
                result.data?.investment &&
                result.data?.walletBalance !== undefined
              ) {
                const newInvestment = {
                  ...result.data.investment,
                  startedAt: now.toISOString(),
                  endDate: endDate.toISOString(),
                };
                addNewInvestment(newInvestment, result.data.walletBalance);
              }

              resetForm();
              onClose();
            } else {
              toast.error(result.message || "Investment failed");
            }
          }}
        >
          {({ values }) => {
            const projectedProfit =
              values.amount && values.roiPercent
                ? ((values.amount * values.roiPercent) / 100).toFixed(2)
                : 0;

            return (
              <Form>
                {/* Product Name */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Product Name
                  </label>
                  <Field
                    name="productName"
                    type="text"
                    placeholder="e.g. Real Estate Fund"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  />
                  <ErrorMessage
                    name="productName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Amount */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Investment Amount ($)
                  </label>
                  <Field
                    name="amount"
                    type="number"
                    placeholder="Enter amount"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  />
                  <ErrorMessage
                    name="amount"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* ROI */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Expected ROI (%)
                  </label>
                  <Field
                    name="roiPercent"
                    type="number"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  />
                  <ErrorMessage
                    name="roiPercent"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Duration */}
                <div className="mb-5">
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Duration
                  </label>
                  <Field
                    as="select"
                    name="duration"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  >
                    <option value="">Select duration</option>
                    <option value="1-6 months">1-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="1-3 years">1-3 years</option>
                  </Field>
                  <ErrorMessage
                    name="duration"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Preview */}
                <div className="mb-4 bg-gray-100 p-3 rounded-lg text-sm text-gray-700">
                  <p>
                    <strong>Projected Net Profit:</strong> ${projectedProfit}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
                  >
                    {loading ? "Investing..." : "Invest"}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default AdminInvestmentModal;
