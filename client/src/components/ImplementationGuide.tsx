import { Card, CardContent } from '@/components/ui/card';
import { ListOrdered, Lightbulb } from 'lucide-react';

export default function ImplementationGuide() {
  const steps = [
    {
      number: 1,
      title: "Setup Store",
      description: "Create Redux store with counter reducer and configure provider."
    },
    {
      number: 2,
      title: "Create Actions",
      description: "Define increment, decrement, and reset action creators."
    },
    {
      number: 3,
      title: "Build Reducer",
      description: "Implement counter reducer to handle state updates."
    },
    {
      number: 4,
      title: "Use useSelector",
      description: "Connect component to store state using useSelector hook."
    },
    {
      number: 5,
      title: "Dispatch Actions",
      description: "Wire up buttons to dispatch actions using useDispatch."
    },
    {
      number: 6,
      title: "Test & Debug",
      description: "Use Redux DevTools to monitor state changes and debug."
    }
  ];

  return (
    <div className="mt-8">
      <Card className="bg-white rounded-2xl shadow-lg border border-gray-200">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <ListOrdered className="text-indigo-500 mr-2" size={24} />
            Implementation Steps
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="text-center mt-12 text-gray-500">
        <p className="text-sm flex items-center justify-center">
          <Lightbulb className="text-yellow-500 mr-1" size={16} />
          Perfect for practicing Redux fundamentals and understanding state management patterns.
        </p>
      </footer>
    </div>
  );
}
