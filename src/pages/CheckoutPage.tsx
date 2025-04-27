import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { CreditCard, Smartphone, Truck } from 'lucide-react';
import Button from '../components/ui/Button';

type PaymentMethod = 'card' | 'upi' | 'cod';

interface ShippingDetails {
  fullName: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    fullName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  });

  const handleShippingDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically:
    // 1. Validate the form
    // 2. Process the payment
    // 3. Create the order
    // 4. Clear the cart
    // 5. Redirect to success page
    
    // For demo purposes, we'll just clear the cart and show an alert
    alert('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-serif font-medium mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Shipping and Payment Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Shipping Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-medium mb-4">Shipping Details</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="label">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="input"
                    value={shippingDetails.fullName}
                    onChange={handleShippingDetailsChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address" className="label">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="input"
                    value={shippingDetails.address}
                    onChange={handleShippingDetailsChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="label">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="input"
                      value={shippingDetails.city}
                      onChange={handleShippingDetailsChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="label">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      className="input"
                      value={shippingDetails.state}
                      onChange={handleShippingDetailsChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="pincode" className="label">PIN Code</label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      className="input"
                      value={shippingDetails.pincode}
                      onChange={handleShippingDetailsChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="input"
                      value={shippingDetails.phone}
                      onChange={handleShippingDetailsChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-medium mb-4">Payment Method</h2>
              <div className="space-y-4">
                <label className="block">
                  <div className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-primary-400 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-400"
                    />
                    <div className="ml-4 flex items-center">
                      <CreditCard className="h-5 w-5 text-neutral-600 mr-2" />
                      <div>
                        <p className="font-medium">Credit/Debit Card</p>
                        <p className="text-sm text-neutral-600">Pay securely with your card</p>
                      </div>
                    </div>
                  </div>
                </label>

                <label className="block">
                  <div className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-primary-400 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-400"
                    />
                    <div className="ml-4 flex items-center">
                      <Smartphone className="h-5 w-5 text-neutral-600 mr-2" />
                      <div>
                        <p className="font-medium">UPI</p>
                        <p className="text-sm text-neutral-600">Pay using UPI apps</p>
                      </div>
                    </div>
                  </div>
                </label>

                <label className="block">
                  <div className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-primary-400 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-400"
                    />
                    <div className="ml-4 flex items-center">
                      <Truck className="h-5 w-5 text-neutral-600 mr-2" />
                      <div>
                        <p className="font-medium">Cash on Delivery</p>
                        <p className="text-sm text-neutral-600">Pay when you receive</p>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <Button type="submit" variant="primary" fullWidth size="lg">
              Place Order
            </Button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {items.map(item => (
                <div key={item.id} className="flex items-center">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-neutral-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              {paymentMethod === 'cod' && (
                <div className="flex justify-between text-neutral-600">
                  <span>COD Charges</span>
                  <span>$2.00</span>
                </div>
              )}
              <div className="border-t pt-3 flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>
                  ${(totalPrice + (paymentMethod === 'cod' ? 2 : 0)).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;