import type { DealFormValues } from "../types/dealTypes";
import {
  calculateMonthlyFromNightlyRate,
  calculateNightlyLetShortfall,
  calculateNightlyLetSurplus,
  calculateProRatedMonthlyRentToLandlord,
  calculateProratedRentWithTopUp,
  calculateReserveToEndOfMonthIncome,
} from "../utils/utils";

interface BorrowingTableModalProps {
  isOpen: boolean;
  onClose: (e: boolean) => void;
  values: DealFormValues;
}

const BorrowingTableModal = ({
  isOpen,
  onClose,
  values,
}: BorrowingTableModalProps) => {
  const {
    monthlyRental = 0,
    rentStartDate,
    reserveDate,
    nightlyLetRate = 0,
  } = values;
  return (
    <>
      {isOpen && (
        <div
          onClick={() => onClose(false)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg lg:max-w-6xl w-[95%] max-h-[80vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="sm:text-xl text-base font-bold">
                Amount to Borrow Calculation
              </h3>
              <button
                onClick={() => onClose(false)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="overflow-x-auto sm:text-base text-sm">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-2 text-left bg-gray-50">Dates</th>
                    <th className="px-4 py-2 text-left bg-gray-50">
                      Landlord payment
                    </th>
                    <th className="px-4 py-2 text-left bg-gray-50">Income</th>
                    <th className="px-4 py-2 text-left bg-gray-50">
                      Borrowing
                    </th>
                    <th className="px-4 py-2 text-left bg-gray-50">Net</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2">Management date</td>
                    <td className="px-4 py-2">
                      £
                      {calculateProRatedMonthlyRentToLandlord(
                        rentStartDate,
                        monthlyRental
                      ).toFixed(2)}
                    </td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2">£300</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2">24th Month</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2">
                      £
                      {calculateProratedRentWithTopUp(
                        rentStartDate,
                        monthlyRental,
                        300
                      ).toFixed(2)}
                    </td>
                    <td className="px-4 py-2"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2">1st of next month</td>
                    <td className="px-4 py-2">£{monthlyRental}</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2">3rd of next month</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2">
                      £
                      {calculateReserveToEndOfMonthIncome(
                        reserveDate,
                        nightlyLetRate
                      ).toFixed(2)}
                    </td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2">24th Month</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2">
                      £
                      {calculateNightlyLetShortfall(
                        reserveDate,
                        nightlyLetRate,
                        monthlyRental,
                        300
                      ).toFixed(2)}
                    </td>
                    <td className="px-4 py-2">£300</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2">1st of second month</td>
                    <td className="px-4 py-2">£{monthlyRental}</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2">3rd of month</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2">
                      £
                      {calculateMonthlyFromNightlyRate(
                        nightlyLetRate,
                        rentStartDate
                      ).toFixed(2)}
                    </td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">24th of the month</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2">
                      {" "}
                      £
                      {calculateNightlyLetSurplus(
                        nightlyLetRate,
                        rentStartDate,
                        monthlyRental
                      ).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BorrowingTableModal;
