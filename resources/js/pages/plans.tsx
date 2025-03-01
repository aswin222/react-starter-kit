import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import PriceCard from '@/components/price-cards';

interface Plan {
    id: number;
    name: string;
    description: string;
    current_amount: number;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Plans',
        href: '/plans',
    },
];

export default function Plans({ plans }: { plans: Plan[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Plans" />
            <div className="container mx-auto py-12">
                <div className="grid gap-4 lg:grid-cols-2">
                    {plans.length > 0 ? (
                        plans.map((plan) => <PriceCard key={plan.id} plan={plan} />)
                    ) : (
                        <p className="text-gray-500 text-center">No plans available.</p>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
