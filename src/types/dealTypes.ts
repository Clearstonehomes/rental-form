export interface DealFormValues {
  propertyAddress: string;
  monthlyRental: number;
  managementStartDate: string;
  rentStartDate: string;
  reserveDate: string;
  referralAmount: number;
  model: DealModelType[];
  localHousingAllowance?: number;
  incentiveAmount?: number;
  nightlyLetRate?: number;
  marketMonthlyRental?: number;
  managementFee?: number;
}

export type DealModelType = "PRS" | "Nightly Let" | "Standard Management";

export interface DealResult {
  PRS: {
    profitBeforeRiskManagement?: number;
    profitAfterRiskManagement?: number;
    suggestedPaymentToLandlord?: number;
    amountToBorrow?: number;
  };
  "Nightly Let": {
    profitBeforeRiskManagement?: number;
    profitAfterRiskManagement?: number;
    suggestedPaymentToLandlord?: number;
    amountToBorrow?: number;
  };
  "Standard Management": {
    profit?: number;
  };
}

export interface Settings {
  numberOfMonthsCovered: number;
  percentLastMonthPayment: number;
  monthsBuffer: number;
}
