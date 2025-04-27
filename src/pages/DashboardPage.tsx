import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Package, ShoppingBag, Settings, PlusCircle, Edit, Trash } from 'lucide-react';
import Button from '../components/ui/Button';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  const mockProducts = [
    {
      id: '1',
      name: 'Handcrafted Ceramic Vase',
      price: 89.99,
      status: 'active',
      stock: 5
    },
    {
      id: '2',
      name: 'Woven Wall Hanging',
      price: 149.99,
      status: 'active',
      stock: 3
    }
  ];

  const mockOrders = [
    {
      id: 'ORD-001',
      date: '2024-03-15',
      customer: 'John Smith',
      total: 89.99,
      status: 'Processing'
    },
    {
      id: 'ORD-002',
      date: '2024-03-14',
      customer: 'Sarah Johnson',
      total: 149.99,
      status: 'Shipped'
    }
  ];

  return (
    <div className="container-custom py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-medium mb-2">
          Welcome back, {user?.name}
        </h1>
        <p className="text-neutral-600">
          Manage your products, orders, and account settings
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-neutral-600">Total Products</p>
              <p className="text-2xl font-medium mt-1">12</p>
            </div>
            <Package className="h-8 w-8 text-primary-400" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-neutral-600">Pending Orders</p>
              <p className="text-2xl font-medium mt-1">5</p>
            </div>
            <ShoppingBag className="h-8 w-8 text-accent-400" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-neutral-600">Total Sales</p>
              <p className="text-2xl font-medium mt-1">$1,234.56</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-success-100 text-success-600 flex items-center justify-center">
              $
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-serif font-medium">Products</h2>
          <Button>
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-3 px-4 font-medium">Product</th>
                <th className="text-left py-3 px-4 font-medium">Price</th>
                <th className="text-left py-3 px-4 font-medium">Stock</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-right py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.map((product) => (
                <tr key={product.id} className="border-b border-neutral-100">
                  <td className="py-3 px-4">{product.name}</td>
                  <td className="py-3 px-4">${product.price}</td>
                  <td className="py-3 px-4">{product.stock}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                      {product.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="text-neutral-600 hover:text-primary-500 mr-3">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-neutral-600 hover:text-error-500">
                      <Trash className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-serif font-medium mb-6">Recent Orders</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-3 px-4 font-medium">Order ID</th>
                <th className="text-left py-3 px-4 font-medium">Date</th>
                <th className="text-left py-3 px-4 font-medium">Customer</th>
                <th className="text-left py-3 px-4 font-medium">Total</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order) => (
                <tr key={order.id} className="border-b border-neutral-100">
                  <td className="py-3 px-4">{order.id}</td>
                  <td className="py-3 px-4">{order.date}</td>
                  <td className="py-3 px-4">{order.customer}</td>
                  <td className="py-3 px-4">${order.total}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === 'Shipped' 
                        ? 'bg-success-100 text-success-800'
                        : 'bg-warning-100 text-warning-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-serif font-medium">Account Settings</h2>
          <Settings className="h-5 w-5 text-neutral-400" />
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Store Name
            </label>
            <input
              type="text"
              className="input"
              placeholder="Your store name"
              defaultValue={user?.name + "'s Store"}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="input"
              defaultValue={user?.email}
              disabled
            />
          </div>
          
          <div className="pt-4">
            <Button variant="primary">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;