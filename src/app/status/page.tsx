import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Status",
  description: "Check Skyhook platform status and uptime. Real-time system health, incident history, and scheduled maintenance updates.",
};

export default function StatusPage() {
  return (
    <div className="min-h-screen pt-16 overflow-hidden">
      <div className="relative overflow-hidden" style={{ height: '550px' }}>
        <iframe
          src="https://status.skyhook.io"
          className="w-full border-0 absolute top-0 left-0"
          style={{ height: '900px' }}
          title="Skyhook Status"
        />
      </div>
    </div>
  );
}
