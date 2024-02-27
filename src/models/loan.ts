import mongoose from "mongoose";

export interface ILoan extends mongoose.Document {
  status: string;
  principalAmount: number;
  month: string;
  emi: number;
  interest: number;
  total: number;
}

const loanSchema = new mongoose.Schema<ILoan>({
  status: {
    type: String,
    required: true,
  },
  principalAmount: {
    type: Number,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  emi: {
    type: Number,
    required: true,
  },
  interest: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

export const LoanModel =
  mongoose.models.loan || mongoose.model<ILoan>("loan", loanSchema);
