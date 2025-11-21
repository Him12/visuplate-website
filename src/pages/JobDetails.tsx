import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ApplicationForm from "../components/ApplicationForm";

type Job = {
    id: string;
    title: string;
    location: string;
    type: string;
    short: string;
    description: string[];
    responsibilities: string[];
    requirements: string[];
    extra?: {
        salary_note?: string;
        perks?: string[];
        openings?: number;
        stipend_structure?: {
            fixed?: string;
            incentive?: string;
        };
    };
};

export default function JobDetails(): JSX.Element {
    const { id } = useParams<{ id: string }>();
    const [job, setJob] = useState<Job | null>(null);

    useEffect(() => {
        fetch("/jobs.json")
            .then((r) => r.json())
            .then((data: Job[]) => {
                const found = data.find((j) => j.id === id) ?? null;
                setJob(found);
            })
            .catch(() => setJob(null));
    }, [id]);

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center p-8">
                Loading job...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pt-32 pb-16 px-6 max-w-7xl mx-auto">
            <Link to="/careers" className="text-emerald-600 underline text-sm">
                ← Back to Careers
            </Link>

            {/* New balanced layout */}
            <div className="mt-8 grid lg:grid-cols-[1fr_500px] gap-12">

                {/* LEFT: JOB DETAILS */}
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-bold">{job.title}</h1>
                    <p className="text-gray-600 mt-2">
                        {job.location} • {job.type}
                    </p>

                    <section className="mt-8">
                        <h3 className="text-xl font-semibold mb-2">About the role</h3>
                        {job.description.map((p, idx) => (
                            <p key={idx} className="text-gray-700 mb-3 leading-relaxed">
                                {p}
                            </p>
                        ))}
                    </section>

                    <section className="mt-8">
                        <h3 className="text-xl font-semibold mb-3">Responsibilities</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            {job.responsibilities.map((r, idx) => (
                                <li key={idx}>{r}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="mt-8 mb-8">
                        <h3 className="text-xl font-semibold mb-3">Requirements</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            {job.requirements.map((r, idx) => (
                                <li key={idx}>{r}</li>
                            ))}
                        </ul>
                    </section>

                    {job.extra && (
                        <section className="mt-8 mb-8">
                            <h3 className="text-xl font-semibold mb-3">Extras</h3>

                            {job.extra.salary_note && (
                                <p className="text-gray-700 mb-2">{job.extra.salary_note}</p>
                            )}

                            {job.extra.perks && job.extra.perks.length > 0 && (
                                <>
                                    <h4 className="font-medium mt-3 mb-1">Perks</h4>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                                        {job.extra.perks.map((p, idx) => (
                                            <li key={idx}>{p}</li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {job.extra.stipend_structure && (
                                <div className="mt-3">
                                    <h4 className="font-medium mb-1">Stipend Structure</h4>
                                    <p className="text-gray-700">
                                        Fixed: {job.extra.stipend_structure.fixed}
                                    </p>
                                    <p className="text-gray-700">
                                        Incentive: {job.extra.stipend_structure.incentive}
                                    </p>
                                </div>
                            )}

                            {job.extra.openings !== undefined && (
                                <p className="text-gray-700 mt-3">
                                    <strong>Openings:</strong> {job.extra.openings}
                                </p>
                            )}
                        </section>
                    )}




                </div>

                {/* RIGHT: APPLY FORM */}
                <aside
                    className="
    lg:sticky lg:top-28 
    p-6 border rounded-2xl shadow-lg bg-white h-fit

    w-full
    max-w-md 
    mx-auto 
    mt-10
  "
                >
                    <ApplicationForm jobTitle={job.title} />
                </aside>

            </div>
        </div>
    );
}
