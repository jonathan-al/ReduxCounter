import { Card, CardContent } from '@/components/ui/card';
import { Book, Eye, Settings, Database } from 'lucide-react';

export default function ConceptsPanel() {
  return (
    <Card className="bg-white rounded-2xl shadow-lg border border-gray-200">
      <CardContent className="p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
          <Book className="text-emerald-500 mr-2" size={24} />
          Redux Concepts
        </h2>

        {/* useSelector Example */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
            <Eye className="text-blue-500 mr-1" size={16} />
            useSelector Hook
          </h3>
          <code className="text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded block">
            {`const count = useSelector(state => state.counter.value)`}
          </code>
          <p className="text-sm text-gray-600 mt-2">
            Reads state from the Redux store and subscribes to updates.
          </p>
        </div>

        {/* Action Creators */}
        <div className="mb-6 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
            <Settings className="text-emerald-500 mr-1" size={16} />
            Action Creators
          </h3>
          <div className="space-y-1">
            <code className="text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded block">
              dispatch(increment())
            </code>
            <code className="text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded block">
              dispatch(decrement())
            </code>
            <code className="text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded block">
              dispatch(reset())
            </code>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Functions that return action objects to update state.
          </p>
        </div>

        {/* Store Structure */}
        <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
            <Database className="text-purple-500 mr-1" size={16} />
            Store Structure
          </h3>
          <code className="text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded block">
            {`{ counter: { value: number } }`}
          </code>
          <p className="text-sm text-gray-600 mt-2">
            Simple store structure with counter reducer.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
