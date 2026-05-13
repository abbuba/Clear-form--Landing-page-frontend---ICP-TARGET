'use client';
import SmartVideo from '@/components/smart-video';

export default function Dashboard() {
  return (
    <div id='dashboard' className=" py-40 pb-16 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">


          {/* Video Container */}
          <div
            className="flex items-center justify-center lg:col-span-2"
            data-aos="fade-right"
            data-aos-duration="1100"
          >
            <SmartVideo
              src="/videos/Dashboard.mp4?v=2"
              aspectRatio="16/9"
              rounded="rounded-2xl"
            />
          </div>
          {/* Text Content */}
          <div className="flex flex-col justify-center text-left lg:col-span-1" data-aos="fade-left" data-aos-duration="1100">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Your Feedback, Structured for Decisions</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Everything in one place. No tab-switching, no hunting for data — just a clear view of all your forms and what's happening inside them.
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
                Organise your forms into folders and see each one's response count, quality score, and a quick insight — all at a glance.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
                View the latest and previous responses side by side — no extra clicks, no separate pages.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
                Nobody else puts this all in one view. It's the kind of clarity that actually saves you time.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
