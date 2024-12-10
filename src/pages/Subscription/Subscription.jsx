import SubscriptionCard from "./SubscriptionCard";

const monthlyPlan = [
    "Add unlimited projects",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Customization Options",
    "Integration Support",
    "Advanced Security",
    "training and Resources",
    "Access Control",
    "Custom Workflows",
];

const annualPlan = [
    "Add unlimited projects",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Everything which monthly plan has",
];

const freePlan = [
    "Add only 3 projects",
    "Basic Task Management",
    "Project Collaboration",
    "Basic Reporting",
    "Email Notifications",
    "Basic Access Control",
];



export default function Subscription() {
    return (
        <div className="p-10">
            <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
                <SubscriptionCard data={{
                    planName: "Free",
                    features: freePlan,
                    planType: "FREE",
                    price: 0,
                    buttonName: true ? "Current Plan" : "Get Started"
                }} />

                <SubscriptionCard data={{
                    planName: "Monthly Paid Plan",
                    features: monthlyPlan,
                    planType: "MONTHLY",
                    price: 799,
                    buttonName: true ? "Current Plan" : "Get Started"
                }} />

                <SubscriptionCard data={{
                    planName: "Annual Paid Plan",
                    features: annualPlan,
                    planType: "ANNUALLY",
                    price: 6911,
                    buttonName: true ? "Current Plan" : "Get Started"
                }} />

            </div>


        </div>
    )
}
