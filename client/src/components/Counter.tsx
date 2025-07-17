import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { increment, decrement, reset } from '@/store/counterSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Minus, RotateCcw, Calculator } from 'lucide-react';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <Card className="bg-white rounded-2xl shadow-lg border border-gray-200">
      <CardContent className="p-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
            <Calculator className="text-blue-500 mr-2" size={24} />
            Counter Application
          </h2>
          
          {/* Counter Display */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <div className="text-6xl font-bold text-gray-900 mb-2">
              {count}
            </div>
            <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">
              Current Count
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center mb-6">
            <Button 
              onClick={handleDecrement}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md"
            >
              <Minus size={16} />
              Decrement
            </Button>
            
            <Button 
              onClick={handleIncrement}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md"
            >
              <Plus size={16} />
              Increment
            </Button>
          </div>

          {/* Reset Button */}
          <Button 
            onClick={handleReset}
            variant="secondary"
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto shadow-sm"
          >
            <RotateCcw size={16} />
            Reset to 0
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
