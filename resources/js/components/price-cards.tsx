interface Plan {
    id: number;
    name: string;
    description: string;
    current_amount: number;
}

export default function PriceCard({ plan }: { plan: Plan }) {
    return (
        <div className="relative p-8 border border-gray-200 shadow-sm flex flex-col">
            <div className="flex-1">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                {plan.name === 'Pro' && (
                    <p className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
                        Most popular
                    </p>
                )}
                <p className="mt-4 flex items-baseline">
                    <span className="text-5xl font-extrabold tracking-tight">₹{plan.current_amount}</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p className="mt-6">{plan.description}</p>
                <ul role="list" className="mt-6 space-y-6">
                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="ml-3">Feature 1</span>
                    </li>
                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="ml-3">Feature 2</span>
                    </li>
                </ul>
            </div>
            <a
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                    plan.name === 'Pro' ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                }`}
                href="/auth/login"
            >
                Signup for free
            </a>
        </div>
    );
}
