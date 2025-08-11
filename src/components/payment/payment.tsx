"use client"
import React, { useState } from 'react';
import { 
  CreditCard, 
  Smartphone, 
  Building2, 
  Wallet, 
  Shield, 
  Check, 
  X, 
  Loader2, 
  Star, 
  Sparkles,
  Tag,
  Calculator,
  Lock
} from 'lucide-react';

interface PromoCode {
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  description: string;
}

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
  providers: string[];
}

const PaymentSection: React.FC = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const basePrice = 999;
  const gstRate = 0.18;

  const promoCodes: PromoCode[] = [
    { code: 'FIRST20', type: 'percentage', value: 20, description: '20% off for first consultation' },
    { code: 'SAVE100', type: 'fixed', value: 100, description: '₹100 off on any consultation' },
    { code: 'ASTRO15', type: 'percentage', value: 15, description: '15% off special offer' }
  ];

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'upi',
      name: 'UPI',
      icon: <Smartphone className="w-6 h-6" />,
      providers: ['Google Pay', 'PhonePe', 'Paytm', 'BHIM']
    },
    {
      id: 'cards',
      name: 'Credit/Debit Cards',
      icon: <CreditCard className="w-6 h-6" />,
      providers: ['Visa', 'Mastercard', 'RuPay', 'American Express']
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: <Building2 className="w-6 h-6" />,
      providers: ['SBI', 'HDFC', 'ICICI', 'Axis', 'All Banks']
    },
    {
      id: 'wallets',
      name: 'Digital Wallets',
      icon: <Wallet className="w-6 h-6" />,
      providers: ['Paytm', 'Amazon Pay', 'JioMoney', 'Mobikwik']
    }
  ];

  const calculateDiscount = (): number => {
    if (!appliedPromo) return 0;
    if (appliedPromo.type === 'percentage') {
      return (basePrice * appliedPromo.value) / 100;
    }
    return appliedPromo.value;
  };

  const discountAmount = calculateDiscount();
  const discountedPrice = basePrice - discountAmount;
  const gstAmount = discountedPrice * gstRate;
  const totalAmount = discountedPrice + gstAmount;

  const applyPromoCode = (promo: PromoCode) => {
    setAppliedPromo(promo);
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
  };

  const handlePayment = async () => {
    if (!selectedPaymentMethod) return;
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setBookingId(`AST${Date.now()}`);
    }, 3000);
  };

  if (paymentSuccess) {
    return (
      <div className="max-w-4xl mx-auto  p-6">
        <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-green-400 mb-2">Payment Successful!</h2>
            <p className="text-gray-300">Your astrology consultation has been booked successfully</p>
          </div>
          
          <div className="bg-black/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-400 mb-1">Booking ID</p>
            <p className="text-xl font-mono text-yellow-400">{bookingId}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-black/20 rounded-lg p-3">
              <p className="text-gray-400">Amount Paid</p>
              <p className="text-lg font-semibold text-white">₹{totalAmount.toFixed(2)}</p>
            </div>
            <div className="bg-black/20 rounded-lg p-3">
              <p className="text-gray-400">Payment Method</p>
              <p className="text-lg font-semibold text-white">{paymentMethods.find(m => m.id === selectedPaymentMethod)?.name}</p>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            A confirmation email has been sent to your registered email address.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6x mx-auto  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-8 h-8 text-yellow-400" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
            Complete Your Astrology Consultation
          </h1>
          <Star className="w-8 h-8 text-yellow-400" />
        </div>
        <p className="text-gray-300 text-lg">Unlock the mysteries of your destiny with our expert astrologers</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Price Breakdown & Promo Codes */}
        <div className="space-y-6">
          {/* Price Breakdown */}
          <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="w-5 h-5 text-yellow-400" />
              <h2 className="text-xl font-semibold text-white">Price Breakdown</h2>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Base Consultation Fee</span>
                <span className="text-white font-semibold">₹{basePrice}</span>
              </div>
              
              {appliedPromo && (
                <div className="flex justify-between items-center text-green-400">
                  <span>Discount ({appliedPromo.code})</span>
                  <span>-₹{discountAmount.toFixed(2)}</span>
                </div>
              )}
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Subtotal</span>
                <span className="text-white font-semibold">₹{discountedPrice.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">GST (18%)</span>
                <span className="text-white font-semibold">₹{gstAmount.toFixed(2)}</span>
              </div>
              
              <div className="border-t border-gray-600 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Total Amount</span>
                  <span className="text-2xl font-bold text-yellow-400">₹{totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Promo Codes */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-5 h-5 text-green-400" />
              <h2 className="text-xl font-semibold text-white">Promo Codes</h2>
            </div>
            
            {appliedPromo ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="text-green-400 font-semibold">{appliedPromo.code} Applied!</p>
                  <p className="text-green-300 text-sm">{appliedPromo.description}</p>
                </div>
                <button 
                  onClick={removePromoCode}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {promoCodes.map((promo) => (
                  <div key={promo.code} className="bg-black/20 rounded-lg p-3 flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">{promo.code}</p>
                      <p className="text-gray-400 text-sm">{promo.description}</p>
                    </div>
                    <button 
                      onClick={() => applyPromoCode(promo)}
                      className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-yellow-400 hover:to-amber-400 transition-all"
                    >
                      Apply
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Security Features */}
          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">Security Assurance</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">256-bit SSL</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">PCI DSS Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">100% Refund</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Data Protection</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Payment Methods */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Choose Payment Method</h2>
            
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div 
                  key={method.id}
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    selectedPaymentMethod === method.id
                      ? 'border-yellow-400 bg-yellow-400/10'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                  onClick={() => setSelectedPaymentMethod(method.id)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        selectedPaymentMethod === method.id 
                          ? 'bg-yellow-400 text-black' 
                          : 'bg-gray-700 text-gray-300'
                      }`}>
                        {method.icon}
                      </div>
                      <span className="text-white font-semibold">{method.name}</span>
                    </div>
                    {selectedPaymentMethod === method.id && (
                      <Check className="w-5 h-5 text-yellow-400" />
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {method.providers.map((provider) => (
                      <span 
                        key={provider}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {provider}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Button */}
          <button 
            onClick={handlePayment}
            disabled={!selectedPaymentMethod || isProcessing}
            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
              selectedPaymentMethod && !isProcessing
                ? 'bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing Payment...
              </div>
            ) : (
              `Pay ₹${totalAmount.toFixed(2)}`
            )}
          </button>
          
          <p className="text-gray-400 text-sm text-center">
            By proceeding, you agree to our terms and conditions. Your payment is secure and protected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;