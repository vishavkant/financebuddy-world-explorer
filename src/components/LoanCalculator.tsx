
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, DollarSign } from "lucide-react";

const LoanCalculator = () => {
  const [propertyValue, setPropertyValue] = useState<string>('');
  const [downPayment, setDownPayment] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [tenure, setTenure] = useState<string>('');
  const [emi, setEmi] = useState<number | null>(null);
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const formatNumberWithCommas = (value: string) => {
    // Remove all non-numeric characters except decimal point
    const numericValue = value.replace(/[^\d.]/g, '');
    
    // Split by decimal point
    const parts = numericValue.split('.');
    
    // Format the integer part with commas
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Join back with decimal if it exists
    return parts.join('.');
  };

  const parseFormattedNumber = (value: string) => {
    return parseFloat(value.replace(/,/g, ''));
  };

  const handlePropertyValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNumberWithCommas(e.target.value);
    setPropertyValue(formatted);
  };

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNumberWithCommas(e.target.value);
    setDownPayment(formatted);
  };

  const calculateEMI = () => {
    const property = parseFormattedNumber(propertyValue);
    const down = parseFormattedNumber(downPayment);
    const rate = parseFloat(interestRate);
    const tenureYears = parseInt(tenure);

    // Validation
    if (!property || !down || !rate || !tenureYears) {
      alert('Please fill in all fields with valid numbers');
      return;
    }

    if (down >= property) {
      alert('Down payment cannot be equal to or greater than property value');
      return;
    }

    if (tenureYears > 25) {
      alert('Maximum tenure allowed is 25 years');
      return;
    }

    if (rate <= 0 || rate > 50) {
      alert('Please enter a valid interest rate between 0.1% and 50%');
      return;
    }

    // Calculate loan amount
    const loanAmt = property - down;
    setLoanAmount(loanAmt);

    // Calculate EMI using the standard formula
    const monthlyRate = rate / (12 * 100);
    const totalMonths = tenureYears * 12;
    
    const emiAmount = (loanAmt * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                     (Math.pow(1 + monthlyRate, totalMonths) - 1);
    
    const totalPayment = emiAmount * totalMonths;
    const totalInterestPayment = totalPayment - loanAmt;

    setEmi(emiAmount);
    setTotalInterest(totalInterestPayment);
    setTotalAmount(totalPayment);
  };

  const resetCalculator = () => {
    setPropertyValue('');
    setDownPayment('');
    setInterestRate('');
    setTenure('');
    setEmi(null);
    setLoanAmount(0);
    setTotalInterest(0);
    setTotalAmount(0);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'AED',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Calculator className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Mortgage Calculator</h3>
        <p className="text-gray-600">Calculate your monthly EMI and total loan cost</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <Label htmlFor="propertyValue" className="text-base font-semibold text-gray-700 mb-2 block">
              Property/Asset Value (AED)
            </Label>
            <Input
              id="propertyValue"
              type="text"
              placeholder="e.g., 1,000,000"
              value={propertyValue}
              onChange={handlePropertyValueChange}
              className="text-lg text-right"
            />
          </div>

          <div>
            <Label htmlFor="downPayment" className="text-base font-semibold text-gray-700 mb-2 block">
              Down Payment (AED)
            </Label>
            <Input
              id="downPayment"
              type="text"
              placeholder="e.g., 250,000"
              value={downPayment}
              onChange={handleDownPaymentChange}
              className="text-lg text-right"
            />
          </div>

          <div>
            <Label htmlFor="interestRate" className="text-base font-semibold text-gray-700 mb-2 block">
              Interest Rate (% per year)
            </Label>
            <Input
              id="interestRate"
              type="number"
              step="0.1"
              placeholder="e.g., 3.5"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="text-lg text-right"
            />
          </div>

          <div>
            <Label htmlFor="tenure" className="text-base font-semibold text-gray-700 mb-2 block">
              Loan Tenure (Years, Max: 25)
            </Label>
            <Input
              id="tenure"
              type="number"
              min="1"
              max="25"
              placeholder="e.g., 20"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="text-lg text-right"
            />
          </div>

          <div className="flex gap-4">
            <Button 
              onClick={calculateEMI}
              className="flex-1 bg-green-600 hover:bg-green-700 text-lg py-6"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Calculate EMI
            </Button>
            <Button 
              onClick={resetCalculator}
              variant="outline"
              className="px-6 py-6"
            >
              Reset
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {emi !== null && (
            <>
              <Card className="bg-green-50 border-green-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Calculation Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Loan Amount</p>
                    <p className="text-2xl font-bold text-gray-900">{formatCurrency(loanAmount)}</p>
                  </div>
                  
                  <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                    <p className="text-sm text-green-700 mb-1">Monthly EMI</p>
                    <p className="text-3xl font-bold text-green-800">{formatCurrency(emi)}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Total Interest</p>
                      <p className="text-lg font-semibold text-gray-900">{formatCurrency(totalInterest)}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Total Amount</p>
                      <p className="text-lg font-semibold text-gray-900">{formatCurrency(totalAmount)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Loan Summary</h4>
                <div className="space-y-1 text-sm text-blue-700">
                  <p>• Property Value: {formatCurrency(parseFormattedNumber(propertyValue))}</p>
                  <p>• Down Payment: {formatCurrency(parseFormattedNumber(downPayment))}</p>
                  <p>• Loan Amount: {formatCurrency(loanAmount)}</p>
                  <p>• Interest Rate: {interestRate}% per year</p>
                  <p>• Loan Tenure: {tenure} years</p>
                </div>
              </div>
            </>
          )}

          {emi === null && (
            <Card className="bg-gray-50">
              <CardContent className="p-8 text-center">
                <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Enter your loan details and click "Calculate EMI" to see your monthly payment breakdown</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
