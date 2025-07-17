import { Provider } from 'react-redux';
import { store } from '@/store';
import Counter from '@/components/Counter';
import ConceptsPanel from '@/components/ConceptsPanel';
import ImplementationGuide from '@/components/ImplementationGuide';
import { Code2 } from 'lucide-react';

export default function Home() {
  return (
    <Provider store={store}>
      <div className="min-h-screen py-8 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Code2 className="text-blue-500 mr-3" size={36} />
              Redux Counter Practice
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn and practice Redux concepts with useSelector, dispatch, and action creators in this interactive counter application.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Main Counter Component */}
            <Counter />

            {/* Redux Concepts Panel */}
            <ConceptsPanel />
          </div>

          {/* Implementation Guide */}
          <ImplementationGuide />
        </div>
      </div>
    </Provider>
  );
}
