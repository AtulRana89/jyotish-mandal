"use client";
import { useState, useEffect } from 'react';
import { Sparkles, Star, Clock, ArrowLeft, Zap, Shield, Check } from 'lucide-react';

// Mock QRCode component - replace with actual QRCode import
const QRCode = ({ value, size }:any) => (
  <div 
    className="bg-white p-4 rounded-2xl shadow-2xl border-4 border-yellow-400"
    style={{ width: size, height: size }}
  >
    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="text-xs text-gray-600 mb-2">QR Code</div>
        <div className="text-xs text-gray-500 break-all px-2">{value.slice(0, 30)}...</div>
      </div>
    </div>
  </div>
);

export default function PaymentQR() {
  const [timeLeft, setTimeLeft] = useState(240); // 4 minutes in seconds
  const [isExpired, setIsExpired] = useState(false);
  
  const upiLink = "upi://pay?pa=yourupiid@oksbi&pn=Your%20Name&am=100&cu=INR&tn=Payment%20for%20Order";
  
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsExpired(true);
      // Redirect to previous page after expiration
      setTimeout(() => {
        window.history.back();
      }, 3000);
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft]);
  
  const formatTime = (seconds:any) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const handleGoBack = () => {
    window.history.back();
  };
  
  if (isExpired) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="mb-8">
            <Clock className="w-20 h-20 text-red-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-red-400 mb-2">Payment Window Expired</h1>
            <p className="text-gray-300">Redirecting you back...</p>
          </div>
          
          <div className="animate-spin w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={handleGoBack}
            className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Secure Payment
            </h1>
            <Star className="w-6 h-6 text-yellow-400" />
          </div>
          
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>
        
        {/* Timer Section */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 mb-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="w-6 h-6 text-red-400" />
              <h2 className="text-xl font-semibold text-white">Time Remaining</h2>
            </div>
            
            <div className="text-4xl font-bold text-red-400 mb-2 font-mono">
              {formatTime(timeLeft)}
            </div>
            
            <p className="text-gray-300 text-sm">
              Please complete payment before the window expires
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
              <div 
                className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${(timeLeft / 240) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Payment Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - QR Code */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-semibold text-white">Scan & Pay</h2>
              </div>
              
              <div className="flex justify-center mb-6">
                <QRCode value={upiLink} size={280} />
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-300 text-lg">
                  Scan this QR code with any UPI app
                </p>
                <div className="flex justify-center gap-4 text-sm text-gray-400">
                  <span className="bg-gray-700 px-3 py-1 rounded-full">Google Pay</span>
                  <span className="bg-gray-700 px-3 py-1 rounded-full">PhonePe</span>
                  <span className="bg-gray-700 px-3 py-1 rounded-full">Paytm</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Payment Details & Instructions */}
          <div className="space-y-6">
            {/* Payment Amount */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Amount to Pay</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">₹100.00</div>
                <p className="text-gray-300 text-sm">Including all taxes</p>
              </div>
            </div>
            
            {/* Payment Instructions */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">How to Pay</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 text-black flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                  <p>Open any UPI app (Google Pay, PhonePe, Paytm, etc.)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 text-black flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                  <p>Tap on "Scan QR Code" or camera icon</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 text-black flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                  <p>Point your camera at the QR code above</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 text-black flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                  <p>Verify the amount and complete the payment</p>
                </div>
              </div>
            </div>
            
            {/* Security Features */}
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-semibold text-white">Secure Payment</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Bank Grade Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Instant Confirmation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>100% Safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* UPI Link for mobile */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">Or tap the button below if you're on mobile</p>
          <a 
            href={upiLink}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-8 py-3 rounded-xl font-semibold hover:from-yellow-400 hover:to-amber-400 transition-all"
          >
            <Zap className="w-5 h-5" />
            Pay with UPI App
          </a>
        </div>
      </div>
    </div>
  );
}