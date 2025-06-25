export function CartSummary() {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-medium mb-2">Order Summary</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>$0.00</span>
        </div>
      </div>
    </div>
  )
} 