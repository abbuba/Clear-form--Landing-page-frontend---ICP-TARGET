'use client';

import { useState } from 'react';
import SmartVideo from '@/components/smart-video';

const videoData = {
  monitor: {
    label: 'Monitor',
    videoSrc: '/videos/Trends.mp4?v=2',
    title: 'Monitor Real Signals',
    description: '',
  },
  measure: {
    label: 'Measure',
    videoSrc: '/videos/PerformanceSnapshot.mp4?v=2',
    title: 'Measure What Matters',
    description: '',
  },
  act: {
    label: 'Act',
    videoSrc: '/videos/inbox.mp4?v=2',
    title: 'Act with Confidence',
    description: '',
  },
};

const actContent = (
  <>
    <p className="text-sm md:text-base text-gray-600 mb-3 text-start">
      Turn feedback into action — without the manual effort. Export structured insights and align your team around what users actually said.
    </p>
    <ul className="space-y-2 text-sm md:text-base text-gray-600 text-start">
      <li className="flex items-start gap-2">
        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
        Escalate individual responses via email with your own notes — so the right person gets full context, not just a data dump.
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
        Trigger workflows based on structured signals, not gut feel — and make faster decisions with less back-and-forth.
      </li>
    </ul>
  </>
);

const monitorContent = (
  <>
    <p className="text-sm md:text-base text-gray-600 mb-3 text-start">
      See everything happening across your forms — in one simple view. No dashboards to dig through, no noise to filter.
    </p>
    <ul className="space-y-2 text-sm md:text-base text-gray-600 text-start">
      <li className="flex items-start gap-2">
        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
        Track score trends and average time to answer — see how response quality changes over time at a glance.
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
        Compare completion rate vs. total responses — instantly know if people are finishing your form or dropping off.
      </li>
    </ul>
  </>
);

const measureContent = (
  <>
    <p className="text-sm md:text-base text-gray-600 mb-3 text-start">
      Go beyond surface-level data. Evaluate how clear, complete, and actionable each response really is — using logic-based scoring that tells you something useful.
    </p>
    <ul className="space-y-2 text-sm md:text-base text-gray-600 text-start">
      <li className="flex items-start gap-2">
        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
        See views, clicks, and engagement rate per question — so you know exactly where people drop off or lose interest.
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
        Track net conversion rate to understand how effective each question is at getting a quality response — not just any response.
      </li>
    </ul>
  </>
);

export default function DemoNav() {
  const [activeTab, setActiveTab] = useState('monitor');
  const currentVideo = videoData[activeTab as keyof typeof videoData];

  return (
    <div id='how-it-works' className="-mt-24 pt-35 text-center">
      <style>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float-in {
          animation: floatIn 0.6s ease-out;
        }
      `}</style>

      {/* Navigation Tabs */}
      <div className="mb-15 inline-flex gap-3 rounded-3xl bg-white/80 p-2 shadow-xl backdrop-blur-xl border border-grey-50" data-aos="fade-in" data-aos-duration="800">
        {Object.entries(videoData).map(([key, data]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex items-center gap-2 rounded-xl px-4 text-[14px] py-1.5 font-semibold transition-all duration-300 ${activeTab === key
              ? 'bg-gray-800 text-white shadow-lg'
              : 'bg-transparent text-gray-700 hover:text-gray-900'
              }`}
          >
            <div className={`h-2 w-2 rounded-full transition-all duration-300 ${activeTab === key ? 'bg-current opacity-100' : 'bg-transparent opacity-0'}`} />
            <span>{data.label}</span>
          </button>
        ))}
      </div>

      {/* Wide Layout */}
      <div className="mx-auto w-[92%] max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-stretch">
          {/* Video Container - 60% */}
          <div
            key={`video-${activeTab}`}
            className="w-full md:w-3/5 flex items-center justify-center animate-float-in"
          >
            <SmartVideo
              src={currentVideo.videoSrc}
              aspectRatio={activeTab === 'measure' ? '9/16' : '16/9'}
              maxWidth={activeTab === 'measure' ? '380px' : '100%'}
              rounded="rounded-2xl"
            />
          </div>

          {/* Text Content - 40% */}
          <div key={`text-${activeTab}`} className="w-full md:w-2/5 my-auto animate-float-in">
            <div className="flex-col items-start inline-flex">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">{currentVideo.title}</h2>
              {activeTab === 'act' ? actContent : activeTab === 'measure' ? measureContent : activeTab === 'monitor' ? monitorContent : (
                <p className="text-sm md:text-base text-gray-600 mb-6 text-start">{currentVideo.description}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}